<template>
    <div class="pt-4 pl-4 pr-4">
        <b-container>
            <b-row>
                <b-col cols="7">
                    <div>
                
                        <h3 class="pb-3">Contact Info</h3>
                        <b-form @submit="onSubmit">

                            <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="form.firstname"
                                placeholder="Enter first name"
                                required
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="form.lastname"
                                placeholder="Enter last name"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-1"
                                label="Email address:"
                                label-for="input-1"
                 
                            >
                                <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                placeholder="Enter email"
                                required
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group id="input-group-2" label="Phone:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="form.phone"
                                placeholder="Enter phone number"
                                required
                                ></b-form-input>
                            </b-form-group>


     
                            <div class="pt-3">
                                <b-button type="submit" size="lg" block variant="primary" class="book">RESERVATION</b-button>
                            </div>

                          
                            </b-form>
                    </div>
                    
                </b-col>

         

                <b-col cols="5" class="pt-4 mt-2">
                    <reservationDetails :reservation="reservation"/>
                </b-col>
            </b-row>
                
        </b-container>
  

    </div>
</template>

<script>

import reservationDetails from '@/components/reservationDetails';
import Guest from '../model/guest'
import ReservationService from '../service/ReservationService'

export default{

  components: {
    reservationDetails
  },

  data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          email: '',
          phone:''
        },
      }
    },

    created() {
        this.reservation = this.$route.params.data;
        if (this.reservation.guest != undefined || this.reservation.guest != null ) {
            this.form.firstname = this.reservation.guest.first_name;
            this.form.lastname = this.reservation.guest.last_name;
            this.form.email = this.reservation.guest.email_addr;
            this.form.phone = this.reservation.guest.phone_number;
        }
    },

    methods: {
        onSubmit(event){
            event.preventDefault()
            // alert(JSON.stringify(this.form))

            const guest = new Guest(this.form.firstname, this.form.lastname, this.form.email, this.form.phone)

          if (this.reservation.guest != undefined) {
            if (this.reservation.guest.guest_id != undefined) {
                guest.guest_id = this.reservation.guest.guest_id
             }
          }

            //    console.log("text")
            //    console.log(this.reservation)
            //     console.log("text")

            this.reservation.guest = guest;

            
          if (this.reservation.reservation_id == undefined) {
              console.log("checkout")
              console.log(this.reservation)
            new ReservationService().saveReservation(this.reservation).then(
                data => {
                    const rev = data.data
                    this.$router.push({
                        name: 'confirmation',
                        params: { data: rev}
                    });     
                }
            )
          } else {
              new ReservationService().updateReservation(this.reservation, this.reservation.reservation_id).then(
                data => {
                    const rev = data.data
                    this.$router.push({
                        name: 'confirmation',
                        params: { data: rev}
                    });     
                }
            )
          }
        }
    }
}

</script>



<style scoped>

h3{
    color: #b38600;
}
.book{
    background-color: #b38600;
    border: #b38600;
}

</style>
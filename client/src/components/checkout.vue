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
        if (this.reservation.guest != null) {
            this.form.firstname = this.reservation.guest.firstName;
            this.form.lastname = this.reservation.guest.lastname;
            this.form.email = this.reservation.guest.email;
            this.form.phone = this.reservation.guest.phone;
        }
    },

    methods: {
        onSubmit(event){
            event.preventDefault()
            // alert(JSON.stringify(this.form))

            const guest = new Guest(this.form.firstname, this.form.lastname, this.form.email, this.form.phone)

            this.reservation.guest = guest;
            console.log(this.reservation)
            console.log(JSON.stringify(this.reservation))

            new ReservationService().saveReservation(this.reservation).then(
                data => console.log(data.data)
            )




            // this.$router.push({
            //     name: 'confirmation',
            //     params: { data: this.reservation}
            // });     
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
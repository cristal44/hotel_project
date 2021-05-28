<template>
<div >
    <b-container class="box pt-4">
        <h4 class="mt-3 pb-4 text-center">Find Your Reservation with Reservation Number</h4>


         <b-form @submit="onSubmit">
            <b-form-group>
                <b-form-input
                id="input-1"
                v-model="form.number"
                placeholder="Reservation Number"
                required
                ></b-form-input>
            </b-form-group>


            <b-form-group>
                <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                placeholder="Email Address"
                required
                ></b-form-input>
            </b-form-group>

            <div class="pt-3">
                 <b-row>
                    <b-col align-self="start"></b-col>
                    <b-col align-self="center">
                        <b-button class="button" block type="submit" size="lg" variant="primary">FIND RESERVATION</b-button>
                    </b-col>
                    <b-col align-self="end">  </b-col>
                </b-row>             
            </div>

         </b-form>

           <b-alert :show="showError" variant="danger" class="mt-3 text-center">
             Sorry, the reservation number or email address is wrong, please try again!
           </b-alert>
    </b-container>

</div>


</template>



<script>
import ReservationService from '../service/ReservationService'
  export default {
    data() {
      return {
        showError: false,
        form: {
          number: '',
          email: '',
          reservation: null,

        },
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        // alert(JSON.stringify(this.form))

        new ReservationService().getAllReservations().then(data => {
          const reservations = data.data

          for (let i = 0; i < reservations.length; i++) {
            if (reservations[i].reservation_id == parseInt(this.form.number)  && reservations[i].guest.email_addr == this.form.email) {   
              this.reservation = reservations[i]
              this.$router.push({
                name: 'modifyreservation',
                params: { data: this.reservation}
               });    
            }
          }
      })


      this.showError = true
    }
  }
  }
</script>

<style scoped>
.box {
    width: 50%;
}

h4{
    color: #b38600;
}

.button{
    background-color: #b38600;
    border: #b38600;
}

</style>
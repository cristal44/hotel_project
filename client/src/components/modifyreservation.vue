<template>
    <div>
        <b-container>
             <order :reservation="reservation"/>
        </b-container>

        <b-container class="buttons pt-4">
            <b-row>
                <b-col><b-button block variant="primary" @click="updateOrder">UPDATE</b-button></b-col>
               
                <b-col><b-button block variant="primary" v-b-modal.modal-1>CANCEL</b-button></b-col>
                  <b-modal id="modal-1" title="Cancel Reservation" @ok="cancelOrder">
                    <p class="my-4">Are your sure you want to cancel this reservation?</p>
                </b-modal>
     
            </b-row>
        </b-container>
    </div>

</template>

<script>
import order from '@/components/order';
import ReservationService from '../service/ReservationService'

export default{
  components: {
      order
  },
   created() {
        this.reservation = this.$route.params.data;
  },
  methods:{
      updateOrder(){
            this.$router.push({
              name: 'reservation',
              params: { data: this.reservation}
             });
      },
      
      cancelOrder(){
 
          new ReservationService().deleteReservation(this.reservation.reservation_id).then(
              this.$router.push("/")
          )

          
      }
  }
}
</script>

<style scoped>
.buttons{
    width: 30%;
}
</style>

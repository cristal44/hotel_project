<template>
    <div>
        <b-container>
             <order :reservation="reservation"/>
            <!-- <div>
                <b-container class="pt-4">
                    <h4 class="text-center pb-4">Reservation Information</h4>

                    <b-container class="bv-example-row text-center">

                        <b-row align-h="center">
                            <b-col cols="4" class="text-right title">Reservation number:</b-col>
                            <b-col cols="4" class="text-left">2012040812</b-col>
                        </b-row>

                        <b-row align-h="center">
                            <b-col cols="4" class="text-right title">Name:</b-col>
                            <b-col cols="4" class="text-left">Ryan L</b-col>
                        </b-row>



                        <b-row align-h="center">
                            <b-col cols="4" class="text-right title">Eamil:</b-col>
                            <b-col cols="4" class="text-left">ryan@gmail.com</b-col>
                        </b-row>

                        <b-row align-h="center">
                            <b-col cols="4" class="text-right title">Phone:</b-col>
                            <b-col cols="4" class="text-left">123-4567890</b-col>
                        </b-row>


                        <b-row align-h="center">
                            <b-col cols="4" class="text-right title">Stay dates:</b-col>
                            <b-col cols="4" class="text-left">Tue, 13 Apr 2021 - Thu, 14 Apr 2021</b-col>
                        </b-row>

                        <b-row align-h="center">
                            <b-col cols="4" class="text-right title">Room:</b-col>
                            <b-col cols="4" class="text-left">1</b-col>
                        </b-row>

                        <b-row align-h="center">
                            <b-col cols="4" class="text-right title">Total amount:</b-col>
                            <b-col cols="4" class="text-left">$330.00</b-col>
                        </b-row>



                    </b-container>

                    

                </b-container>
            </div> -->

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
          console.log("yes");
          this.$router.push("/");
      }
  }
}
</script>

<style scoped>
.buttons{
    width: 30%;
}
</style>

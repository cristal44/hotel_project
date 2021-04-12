<template>
    <div>
        <b-container class="pt-4">
            <h4 class="text-center pb-4">Reservation Information</h4>

            <b-container class="bv-example-row text-center">

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Reservation number:</b-col>
                    <b-col cols="4" class="text-left">2012040812</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Name:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.guest.firstName}} {{reservation.guest.lastName}}</b-col>
                </b-row>



                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Eamil:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.guest.email}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Phone:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.guest.phone}}</b-col>
                </b-row>


                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Stay dates:</b-col>
                    <b-col cols="4" class="text-left">{{ reservation.checkin | formatDate}} - {{ reservation.checkout | formatDate}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Room:</b-col>
                    <b-col cols="4" class="text-left">1</b-col>
                </b-row>


                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Days:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.days}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Total amount:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.bill.getTotal().toFixed(2)}}</b-col>
                </b-row>
            </b-container>
        </b-container>
    </div>
</template>



<script>
  export default {
    props: ['reservation']
  }
</script>




<style scoped>
.title{
    color: #b38600;
}
    
</style>
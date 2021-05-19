<template>
    <div>
        <b-container class="pt-4">
            <h4 class="text-center pb-4">Reservation Information</h4>

            <b-container class="bv-example-row text-center">

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Reservation number:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.reservation_id}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Name:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.guest.first_name}} {{reservation.guest.last_name}}</b-col>
                </b-row>



                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Eamil:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.guest.email_addr}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Phone:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.guest.phone_number}}</b-col>
                </b-row>


                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Stay dates:</b-col>
                    <b-col cols="4" class="text-left">{{ reservation.checkin | formatDate}} - {{ reservation.checkout | formatDate}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title" v-if="hotel">Hotel Name:</b-col>
                    <b-col cols="4" class="text-left" v-if="hotel">{{hotel.name}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title" v-if="room">Room:</b-col>
                    <b-col cols="4" class="text-left" v-if="room">{{room.room_number}}</b-col>
                </b-row>


                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Days:</b-col>
                    <b-col cols="4" class="text-left">{{reservation.days}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Total amount:</b-col>
                    <b-col cols="4" class="text-left">USD {{reservation.bill.amount}}</b-col>
                </b-row>
            </b-container>
        </b-container>
    </div>
</template>



<script>
import RoomService from '../service/RoomService'
import HotelService from '../service/HotelService'

  export default {
    props: ['reservation'],
    data() {
      return {
          room: null,
          hotel: null
    }
  },
  

  mounted() {
       new RoomService().getRoomById(this.reservation.room_id).then(data => {
        this.room = data.data
        })

        new HotelService().getHotelById(this.reservation.hotel_id).then(data => {
            this.hotel = data.data
        })
    },
}

</script>




<style scoped>
.title{
    color: #b38600;
}
    
</style>
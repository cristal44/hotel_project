<template>
    <div>
        <h3 class="mt-4">Select Room</h3>

            <h6 v-if="show">No Rooms AVAILABLE</h6>

            <div v-for="room in rooms" :key="room.type">
                    <b-card no-body class="overflow-hidden mt-4" >
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-card-img :src="require('../assets/room.jpeg')"  alt="Image" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="8">
                            <b-card-body :title=room.room_type>
                                <b-card-text>
                                    Refreshed rooms offer large picture window views with one-bed options.
                                </b-card-text>

                            <div class="bv-example-row">
                                    <b-row>
                                        <b-col cols="7">
                                            <h5> Price: ${{room.room_price}}</h5>                             
                                        </b-col>

                                        <b-col cols="5">
                                            <b-button block  class="room_button" @click="book(room)">BOOK NOW</b-button>
                                    </b-col>
                                    </b-row>
                                </div>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </div>
    </div>
</template>


<script>
//   import Payment from "../model/payment"
  import RoomService from '../service/RoomService'
  import Bill from '../model/bill'
  import EventBus from '../event-bus'


  export default {
    props: ['oldReservation'],

    data() {
      return {
          show: true,
          rooms: null,
          reservation: this.oldReservation
      }
    },

    

     created() {
        EventBus.$on("data", (data)=>{
            this.reservation = data
            // console.log(this.reservation.hotel_id)
            new RoomService().getAvailableRoomsByHotel(this.reservation.hotel_id).then(data => {
                this.rooms = data.data
                if (this.rooms.length != 0) {
                    this.show = false;
                }            
             })
        }) 

// console.log(1000)
//         console.log(this.reservation)

        new RoomService().getAvailableRoomsByHotel(this.reservation.hotel_id).then(data => {
            this.rooms = data.data
             if (this.rooms.length != 0) {
                 this.show = false;
             }            
        })

        // this.room = this.$route.params.data;
        // if (this.room != undefined) {
        //     this.form.room_number = this.room.room_number
        //     this.form.room_type = this.room.room_type
        //     this.form.room_price = this.room.room_price
        //     this.form.room_status = this.room.room_status
        //     this.isUpdate = true
        //     this.submit = 'UPDATE'
        //     this.isDisabled = true
        // }
    },

    methods: {

        book(room){

            const diffInMs   = new Date(this.reservation.checkout) - new Date(this.reservation.checkin)
            const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

            this.reservation.days = diffInDays;
            this.reservation.room_id = room.id
        
            const roomPrices = this.reservation.days * room.room_price
            const tax = roomPrices * 0.1
 
            this.reservation.bill = new Bill(this.reservation.checkin, tax.toFixed(2), roomPrices.toFixed(2), (tax + roomPrices).toFixed(2));


            // console.log(this.reservation)

             this.$router.push({
                name: 'checkout',
                params: { data: this.reservation}
            });     
        }
    }
  }
</script>


<style scoped>

h5 {
    color: #b38600;
}


.button {
    color: #b38600;
}

.submit{
    width: 500px;
    background-color: #b38600;
    border: #b38600;
}

.room_button {
    background-color: #b38600;
    border: #b38600;
}

</style>
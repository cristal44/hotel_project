<template>
    <div>
        <h3 class="mt-4">Select Room</h3>

        <div v-for="room in rooms" :key="room.type">
            <b-card no-body class="overflow-hidden mt-4" >
            <b-row no-gutters>
                <b-col md="4">
                    <b-card-img :src="require('../assets/room.jpeg')"  alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="8">
                    <b-card-body :title=room.type>
                        <b-card-text>
                            {{room.description}}
                        </b-card-text>

                    <div class="bv-example-row">
                            <b-row>
                                <b-col cols="7">
                                    <h5> Price: ${{room.price}}</h5>                             
                                </b-col>

                                <b-col cols="5">
                                    <b-button block  class="room_button" @click="book(room)" :disabled= room.occupied >{{room.occupied ? "NOT AVAILABLE" : "BOOK NOW"}}</b-button>
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
  import Room from "../room"
  import Bill from "../bill"

  export default {
    props: ['reservation'],

    data() {
      return {
          rooms: [
          { type: 'Deluxe Room', occupied: false,  price: 300, description: "Deluxe Room, Refreshed rooms offer large picture window views with one-bed options."},
          { type: 'Standard Room', occupied: true,  price: 200, description: "Standard Room, Refreshed rooms offer large picture window views with one-bed options."},
          { type: 'Two Bed Room', occupied: false,  price: 150, description: "Two Bed Room, Refreshed rooms offer large picture window views with one-bed options."}
        ]
      }
    },

    methods: {
        book(room){

            const diffInMs   = new Date(this.reservation.checkout) - new Date(this.reservation.checkin)
            const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

            this.reservation.days = diffInDays;

            const reservation_room = new Room(room.type, room.price);
            this.reservation.room = reservation_room;

            const bill = new Bill(room.price, this.reservation.days);
            this.reservation.bill = bill;

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
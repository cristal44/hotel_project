<template>
    <div>
        <h3 class="mt-4">Select Room</h3>

        <b-card no-body class="overflow-hidden mt-4" >
            <b-row no-gutters>
            <b-col md="4">
                <b-card-img :src="require('../assets/room.jpeg')"  alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
                <b-card-body title="Deluxe Room">
                    <b-card-text>
                        Refreshed rooms offer large picture window views with one-bed options.
                    </b-card-text>

                   <div class="bv-example-row">
                        <b-row>
                            <b-col cols="7">
                                <h5> Price: $300</h5>
                               
                            </b-col>

                            <b-col cols="5">
                                 <b-button block variant="primary" @click="book">BOOK NOW</b-button>
                           </b-col>
                        </b-row>
                    </div>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>



        <b-card no-body class="overflow-hidden mt-4" >
            <b-row no-gutters>
            <b-col md="4">
                <b-card-img :src="require('../assets/room.jpeg')"  alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
                <b-card-body title="Standard Room">
                    <b-card-text>
                        Refreshed rooms offer large picture window views with one-bed options.
                    </b-card-text>

                   <div class="bv-example-row">
                        <b-row>
                            <b-col cols="7">
                                <h5> Price: $200</h5>
                               
                            </b-col>

                            <b-col cols="5">
                                  <b-button disabled block >NOT AVAILABLE</b-button>
                           </b-col>
                        </b-row>
                    </div>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>


        <b-card no-body class="overflow-hidden mt-4" >
            <b-row no-gutters>
            <b-col md="4">
                <b-card-img :src="require('../assets/room.jpeg')"  alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
                <b-card-body title="Two Bed Room">
                    <b-card-text>
                        Refreshed rooms offer large picture window views with one-bed options.
                    </b-card-text>

                   <div class="bv-example-row">
                        <b-row>
                            <b-col cols="7">
                                <h5> Price: $150</h5>
                               
                            </b-col>

                            <b-col cols="5">
                                <b-button disabled block >NOT AVAILABLE</b-button>
                           </b-col>
                        </b-row>
                    </div>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>

        
    </div>
</template>


<script>
  export default {
    props: ['reservation'],

    data() {
      return {
          total: 0,
          deluxeIsAvailable: true,
          deluxeValue: 0,

          standardIsAvailable: false,
          standardValue: 0,

          twoBedIsAvailable: true,
          twoBedValue: 0,

          room: 0,
        //   reservation2: null
                // items: [
        //   { room_no: 101, room_type: 'Deluxe', room_status: 'Occupied', guest: '1'},
        //   { room_no: 201, room_type: 'Deluxe', room_status: 'Vacant', guest: 'None'},
        //   { room_no: 301, room_type: 'Deluxe', room_status: 'Occupied', guest: '2'},
      }
    },
    created: function () {
        if (this.reservation != undefined) {
        this.room = this.reservation.room
        // this.reservation2 = this.reservation;
        console.log(this.room)
    }
  },
    methods: {
        book(){
             this.$router.push({
                    name: 'checkout',
                    params: { data: this.reservation}
            });

            // this.total = this.deluxeValue + this.standardValue + this.twoBedValue;

            // if (this.total === this.room) {
            //     this.$router.push({
            //         name: 'checkout',
            //         params: { data: this.reservation}
            //     });
            // } else if (this.total > this.room) {
            //     alert.apply("You selected ")
            // } else {
            //     console.log(this.total)
            // }
     
        
        },


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
</style>
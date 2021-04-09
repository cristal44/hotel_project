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
                                <h5> Price: $250</h5>
                               
                            </b-col>

                            <b-col cols="5">
                                <b-form-spinbutton  class="button" id="sb-inline" v-model="room_value" min="0"></b-form-spinbutton>
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
                <b-card-body title="Executive Suite">
                    <b-card-text>
                        Refreshed rooms offer large picture window views with one-bed options.
                    </b-card-text>

                   <div class="bv-example-row">
                        <b-row>
                            <b-col cols="7">
                                <h5> Price: $250</h5>
                               
                            </b-col>

                            <b-col cols="5">
                                <!-- <b-button block class="button" disabled>NOT AVAILABILITY</b-button> -->
                                 <b-form-spinbutton id="sb-inline" disabled></b-form-spinbutton>
                            </b-col>
                        </b-row>
                    </div>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>

        <div class="mt-4 mb-4 text-center">
            <b-button  size="lg" class="submit" :to="{path:'/checkout'}">BOOK NOW</b-button>
        </div>
        
    </div>
</template>


<script>
  export default {
    data() {
      return {
        room_value: 0,    
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
</style>
<template>
    <div v-if="renderComponent">
        <b-container class="pt-4">
          <b-row>
              <b-col></b-col>

              <b-col cols="12" md="auto" class="mb-4">
                 <b-button class="cbutton" :to="{ name: 'addHotel' }">Add a Hotel</b-button>
              </b-col>
           </b-row>
          

           <b-table id = "my-table" Borderless :items="displayHotels" :fields="fields" :tbody-tr-class="rowClass">
              <template v-slot:cell(action)="{ item }"> 
                    <b-button variant="link" class="mr-2" size="sm" v-on:click="updateHotel(item)">Update</b-button>
                    <b-button variant="link" size="sm" v-on:click="deleteHotel(item)">Delete</b-button>
              </template>
           </b-table>
        </b-container>
    </div>
</template>

<script>
  import HotelService from '../service/HotelService'
  import displayedHotel from '../model/displayedHotel'

  export default {
    data() {
      return {
        renderComponent: true,
        input_text: '',
        fields: ['id', 'name', 'street', 'city', 'state', 'zipCode', 'Action'],
        hotels: [],
        hoteldata:[],
        displayHotels: null,
        selectedRoom: null
      }
    },

    mounted() {
        new HotelService().getAllHotels().then(data => {
             this.hoteldata = data.data
             console.log(this.hoteldata)
             for (let i = 0; i < this.hoteldata.length; i++) {
                const hotel = new displayedHotel(this.hoteldata[i].name,this.hoteldata[i].hotelAddress.state, this.hoteldata[i].hotelAddress.city,this.hoteldata[i].hotelAddress.street, this.hoteldata[i].hotelAddress.zipCode)
                hotel.id = this.hoteldata[i].id
                this.hotels[i] = hotel
             }
             this.displayHotels = this.hotels
        })
    },

    methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
      },



      updateHotel(item) {
          for (let i = 0; i < this.hoteldata.length; i++) {
              if (this.hoteldata[i].id == item.id) {
                   this.$router.push({
                    name: 'addHotel',
                    params: { data: this.hoteldata[i]}
                });   

              }
          }
          
        
      },

      deleteHotel(item) {
        let id = item.id
        new HotelService().deleteHotel(id).then(data => {
            console.log(data)
            let updateData = this.displayHotels.filter(hotel => hotel.id != id)
            this.displayHotels = updateData
         }

        )

      },
   }
  }
</script>


<style scoped>
  .cbutton {
    background-color: #b38600;
  }
</style>
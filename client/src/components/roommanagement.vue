<template>
    <div>
        <b-container class="pt-4">
            <b-row>
              <b-col>
                <b-nav-form class="mb-4">
                    <b-form-input v-model="input_text" class="mr-sm-2" placeholder="Search Room"></b-form-input>
                    <b-button  class="my-2 my-sm-0 cbutton" @click="filterRooms">Search</b-button>

                     <b-button class="my-2 my-sm-0 ml-2 cbutton" @click="displayAllRooms">Show All Rooms</b-button>
                 </b-nav-form>
              </b-col>

              <b-col cols="12" md="auto">
                 <b-button class="cbutton">Add a Room</b-button>
              </b-col>
           </b-row>

           <b-table Borderless hover   :select-mode="selectMode" :items="displayRooms" :fields="fields" :tbody-tr-class="rowClass" @row-clicked="myRowClickHandler"></b-table>
        </b-container>
    </div>
</template>

<script>
  import RoomService from '../service/RoomService'

  export default {
    data() {
      return {
        input_text: '',
        fields: ['room_number', 'room_type', 'room_status', 'room_price'],
        rooms: null,
        displayRooms: null
      }
    },

    mounted() {
      new RoomService().getAllRooms().then(data => {
        this.rooms = data.data
        this.displayRooms = this.rooms
        console.log(data)
        })
    },

    methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.room_status === 'Occupied') return 'table-success'
        
      },

      filterRooms(){
        if (this.input_text != "") {
          let data = this.rooms.filter(room => room.room_number == parseInt(this.input_text)
              || room.room_status.toUpperCase() == this.input_text.toUpperCase()
              || room.room_type.toUpperCase() == this.input_text.toUpperCase()
              || room.room_price == parseFloat(this.input_text.toUpperCase()))
 
          this.displayRooms = data
        } 
      },

      displayAllRooms() {
        this.displayRooms = this.rooms
      },
        
      myRowClickHandler(item) {
          console.log(item)
          console.log(item.room_status)

if (item) return 'table-success'
    
       
        // this.$router.push("/modifyreservation");


          // this.$router.push({
          //         name: 'room',
          //         params: { data: item}
          //     });     
      }
    },


  }
</script>


<style scoped>
  .cbutton {
    background-color: #b38600;
  }
</style>
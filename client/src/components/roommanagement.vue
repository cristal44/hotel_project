<template>
    <div v-if="renderComponent">
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
                 <b-button class="cbutton" :to="{ name: 'addroom' }">Add a Room</b-button>
              </b-col>
           </b-row>
          

           <b-table id = "my-table" Borderless :items="displayRooms" :fields="fields" :tbody-tr-class="rowClass">
              <template v-slot:cell(action)="{ item }"> 
                    <b-button variant="link" class="mr-2" size="sm" v-on:click="updateRoom(item)">Update</b-button>
                    <b-button variant="link" size="sm" v-on:click="deleteRoom(item)">Delete</b-button>
              </template>
           </b-table>
        </b-container>
    </div>
</template>

<script>
  import RoomService from '../service/RoomService'

  export default {
    data() {
      return {
        renderComponent: true,
        input_text: '',
        fields: ['room_number', 'room_type', 'room_status', 'room_price', 'Action'],
        rooms: null,
        displayRooms: null,
        selectedRoom: null
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
        console.log(this.selectedRoom)
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

      updateRoom(item) {
        this.$router.push({
            name: 'addroom',
            params: { data: item}
        });    
      },
      deleteRoom(item) {
        let id = item.room_number
        new RoomService().deleteRoom(item.room_number)
        let updateData = this.displayRooms.filter(room => room.room_number != id)
        this.displayRooms = updateData
      },
   }
  }
</script>


<style scoped>
  .cbutton {
    background-color: #b38600;
  }
</style>
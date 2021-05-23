<template>
    <div>
        <b-container class="pt-4">
            <b-row>
                <b-col md="6" offset-md="3">
                     <h4 class="text-center pb-4">ROOM</h4>


                      <b-form @submit="onSubmit">
                            <b-form-group label="Room ID">
                                <b-form-input
                                v-model="form.id"
                                disabled
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Hotel Location">
                                <b-form-select
                                v-model="selectedHotel"
                                :options="locations"
                                class="mb-3"
    
                                required
                                ></b-form-select>
                            </b-form-group>
                 
                            <b-form-group label="Room Number">
                                <b-form-input
                                v-model="form.room_number"
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group label="Room Type">
                                <b-form-select
                                v-model="form.room_type"
                                :options="types"
                                class="mb-3"
                                value-field="item"
                                text-field="name"
                                disabled-field="notEnabled"
                                required
                                ></b-form-select>
                            </b-form-group>


                            <b-form-group label="Room Status" class="mt-2">
                                <b-form-select
                                v-model="form.room_status"
                                :options="status"
                                class="mb-3"
                                value-field="item"
                                text-field="name"
                                disabled-field="notEnabled"
                                required
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group label="Room Price">
                                <b-form-input
                                v-model="form.room_price"
                                required
                                ></b-form-input>
                            </b-form-group>
    
                            <div class="pt-3">
                                <b-button type="submit" size="lg" block variant="primary" class="addRoom">{{submit}}</b-button>
                            </div>   
                        </b-form>
                    
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>



<script>
import HotelService from "../service/HotelService"
import RoomService from '../service/RoomService'
import Room from '../model/room'
import EventBus from '../event-bus'

export default {

    data() {
      return {
        isUpdate: false,
        submit: 'SUBMIT',
        // isDisabled: false,
        locations:[],
        selectedHotel: null,
        form: {
          id:'',
          room_number: '',
          room_type: '',
          room_price: '',
          room_status: '',
        },

        types: ['VIP Room', 'Standard Room', 'Suite', 'One Bed Room'],
        status: ['Vacant', 'Occupied']
      }
    },


    created() {
        EventBus.$emit("admin_status",'LOGOUT')
        EventBus.$emit("admin_show",true)

        this.room = this.$route.params.data;
        if (this.room != undefined) {
            this.selectedHotel = this.room.hotel
            this.form.id = this.room.id
            this.form.room_number = this.room.room_number
            this.form.room_type = this.room.room_type
            this.form.room_price = this.room.room_price
            this.form.room_status = this.room.room_status
            this.isUpdate = true
            this.submit = 'UPDATE'
            // this.isDisabled = true
        }
    },

    mounted() {
      new HotelService().getAllHotels().then(data => {
          const hotels = data.data

          const locations = []
          for(let i = 0; i < hotels.length; i++) {
            locations[i] = {value: hotels[i], text: hotels[i].hotelAddress.city}
          }

          this.locations = locations
          // console.log(this.locations)
      })
    },


    methods: {
        onSubmit(event){
            event.preventDefault()
            // alert(JSON.stringify(this.form))

            const room = new Room(this.form.room_number, parseFloat(this.form.room_price), this.form.room_type, "this is a "  + this.form.room_type, this.form.room_status)
            room.hotel = this.selectedHotel

            const _this = this

            if (this.isUpdate) {
                new RoomService().updateRoom(room, this.form.id).then(data => {
                    EventBus.$emit("updated_room",data.data)
                    _this.$router.push("roommanagement")
                })
            } else {
                new RoomService().saveRoom(room).then(data => {
                    EventBus.$emit("added_room",data.data)
                    _this.$router.push("roommanagement")
                })
            }
            
        }
    }
  }
</script>




<style scoped>
.title{
    color: #b38600;
}
    
</style>



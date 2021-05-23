<template>
    <div>
        <b-container class="pt-4">
            <b-row>
                <b-col md="6" offset-md="3">
                     <h4 class="text-center pb-4">Hotel</h4>

                      <b-form @submit="onSubmit">

                            <b-form-group label="Hotel ID">
                                <b-form-input
                                v-model="form.id"
                                disabled
                                ></b-form-input>
                            </b-form-group>
                 
                            <b-form-group label="Hotel Name">
                                <b-form-input
                                v-model="form.hotel_name"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="Address">
                                <b-form-input
                                v-model="form.street"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="City">
                                <b-form-input
                                v-model="form.city"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group label="State">
                                <b-form-select  v-model="form.state" :options="states" required></b-form-select>
                            </b-form-group>

            
                            <b-form-group label="Zipcode">
                                <b-form-input
                                v-model="form.zipcode"
                                required
                                ></b-form-input>
                            </b-form-group>
    
                            <div class="pt-3">
                                <b-button type="submit" size="lg" block variant="primary">{{submit}}</b-button>
                            </div>   
                        </b-form>
                    
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>



<script>
import json from '../assets/state.json'
import HotelService from '../service/HotelService'
import Address from '../model/address'
import Hotel from '../model/hotel'
 import EventBus from '../event-bus'
  export default {

    data() {
      return {
        isUpdate: false,
        submit: 'SUBMIT',
        states: json.states,
        form: {
          id: '',
          hotel_name: '',
          street: '',
          city: '',
          state: '',
          zipcode: ''
        },
      }
    },


    created() {
        EventBus.$emit("admin_status",'LOGOUT')
        EventBus.$emit("admin_show",true)

        this.hotel = this.$route.params.data;
        console.log(this.hotel)
        if (this.hotel != undefined) {
            this.form.id = this.hotel.id
            this.form.hotel_name = this.hotel.name
            this.form.street = this.hotel.hotelAddress.street
            this.form.city = this.hotel.hotelAddress.city
            this.form.state = this.hotel.hotelAddress.state
            this.form.zipcode = this.hotel.hotelAddress.zipCode


            this.isUpdate = true
            this.submit = 'UPDATE'
        }
    },

    methods: {
        onSubmit(event){
            event.preventDefault()
            // alert(JSON.stringify(this.form))

            const address = new Address(this.form.state, this.form.city, this.form.street, this.form.zipcode)
            const hotel = new Hotel(this.form.hotel_name, address)

            const _this = this

            if (this.isUpdate) {
                new HotelService().updateHotel(hotel, this.hotel.id).then(data => {
                    EventBus.$emit("updated_reservation",data.data),
                    _this.$router.push("hotelmanagement")
                })
            } else {
                new HotelService().saveHotel(hotel).then(data => {
                     EventBus.$emit("added_reservation",data.data),
                    _this.$router.push("hotelmanagement")
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



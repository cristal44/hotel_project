<template>
    <div>
        <b-container class="pt-4">
            <h4 class="text-center pb-4">EMPLOYEE INFORMATION</h4>
            <b-form @submit="onSubmit">
                <b-row>
                    <b-col md="6">
                         <div class="pt-3 pl-3 pr-3 pb-3 bg rounded">
                            <b-form-group label="Employee ID">
                                <b-form-input v-model="form.id" disabled></b-form-input>
                            </b-form-group>

                            <b-form-group label="First Name">
                                <b-form-input v-model="form.firstname" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Last Name">
                                <b-form-input v-model="form.lastname" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Birth">
                                <b-form-input v-model="form.birth" required placeholder="MM/DD/YY"></b-form-input>
                            </b-form-group>

                            <b-form-group label="Gender">
                                <b-form-select
                                v-model="form.gender"
                                :options="genderOptions"
                                required
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group label="Email">
                                <b-form-input v-model="form.email" type="email" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Phone">
                                <b-form-input v-model="form.phone" required></b-form-input>
                            </b-form-group>
                        </div>

                    </b-col>

                    <b-col md="6">
                         <div class="pt-3 pl-3 pr-3 pb-3 bg rounded">
                            <b-form-group label="Department">
                                <b-form-select
                                v-model="form.department"
                                :options="departmentOptions"
                                required
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group label="Position">
                                <b-form-input v-model="form.position" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Salary">
                                <b-form-input v-model="form.salary" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Bank Account">
                                <b-form-input v-model="form.account" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Address">
                                <b-form-input v-model="form.address" required></b-form-input>
                            </b-form-group>

                            <b-row>
                                <b-col md="6">
                                    <b-form-group label="City">
                                        <b-form-input v-model="form.city" required placeholder=""></b-form-input>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6">
                                    <b-form-group label="State">
                                        <b-form-select v-model="form.state" :options="states" required
                                        ></b-form-select>
                                   </b-form-group>
                                </b-col>
                            </b-row>

                            <b-form-group label="Zipcode">
                                <b-form-input v-model="form.zipcode" required></b-form-input>
                            </b-form-group>
                            

                        </div>
                        
                    </b-col>
                </b-row>

                <div class="mt-4 text-center">
                     <b-button variant="primary" class="sub-button">Submit</b-button>
                </div>

            </b-form>
        </b-container>

    </div>
</template>



<script>
import HotelService from "../service/HotelService"
import RoomService from '../service/RoomService'
import Room from '../model/room'
import json from '../assets/state.json'

  export default {

    data() {
      return {
        genderOptions: ['Male', 'Female'],
        departmentOptions: ['Maintenance', 'HouseKeeping', 'Food and Beverage', 'Front Desk', 'Guest Service'],
        states: json.states,
        isUpdate: false,

        form: {
          id:'',
          firstname:'',
          lastname:'',
          birth:'',
          gender:'',
          email:'',
          phone:'',
          department:'',
          position:'',
          salary:'',
          account:'',
          address:'',
          city:'',
          state:'',
          zipcode:''
        },

        types: ['VIP Room', 'Standard Room', 'Suite', 'One Bed Room'],
        status: ['Vacant', 'Occupied']
      }
    },


    created() {

        this.employee = this.$route.params.data;
        if (this.employee != undefined) {
            const name = this.employee.name.split(" ");
            this.form.id = this.employee.employee_id,
           
            this.form.firstname = name[0],
            this.form.lastname = name[1],
            this.form.birth = this.employee.contact.birth,
            this.form.gender = this.employee.contact.gender,
            this.form.email = this.employee.contact.email,
            this.form.phone = this.employee.contact.phone,
            this.form.department = this.employee.department.departmentName,
            this.form.position = this.employee.position,
            this.form.salary = this.employee.salary,
            this.form.account = this.employee.account.accountNumber,
            this.form.address = this.employee.contact.address.street,
            this.form.city = this.employee.contact.address.city,
            this.form.state = this.employee.contact.address.state,
            this.form.zipcode = this.employee.contact.address.zipCode
    


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
    console.log(111)
            console.log(this.selectedHotel)

            const room = new Room(this.form.room_number, parseFloat(this.form.room_price), this.form.room_type, "this is a "  + this.form.room_type, this.form.room_status)
            room.hotel = this.selectedHotel
    
    console.log(4444)
 console.log(room)
            if (this.isUpdate) {
                new RoomService().updateRoom(room, this.form.id);
            } else {
                new RoomService().saveRoom(room);
            }

         

               

            this.$router.push("roommanagement");
        }
    }
  }
</script>




<style scoped>
.title{
    color: #b38600;
}

.bg {
    background-color: #ebf0fa!important;
}

.sub-button {
    width: 25%;
}
    
</style>



<template>
  <div>
     <b-container class="pb-4 mt-4">
        <h2 class="text-center mb-3">Hotel Service Management</h2>

        <div class="pt-4 pb-4 pl-4 pr-4 bg">
            <b-form @submit="onSubmit">
                    <b-col>
                        <b-row>
                            <b-col md="6" class="mt-4">
                                <b-form-input v-model="id" :disabled="disabled" placeholder="ID" required></b-form-input>
                            </b-col>

                            <b-col md="6" class="mt-4">
                                <b-form-input v-model="name" placeholder="hotel service name" required></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    
                    <b-col class="mt-4">
                         <b-form-input v-model="hour" placeholder="Open hours" required></b-form-input>
                    </b-col>
        
                    <b-col class="mt-4">
                        <b-form-textarea  v-model="description" placeholder="Enter description..." rows="3" max-rows="10" required></b-form-textarea>
                    </b-col>

                    <div class="mt-4 text-center">
                        <b-button variant="primary" type="submit" class="sub-button">{{submit}}</b-button>
                    </div>            
            </b-form>
        </div>

        <b-row class="mt-4">
            <b-col md="6" v-for="service in hotelServices" :key="service.id">
                <b-jumbotron class="bg">
                    <template #header >
                        <p class="title">
                        <strong class="mr-3">{{service.name}} </strong>   (ID: {{service.id}})
                        </p>
                        
                    </template>

                    <template #lead>
                        <p class="description"> {{service.description}} </p>
                    </template>

                    <hr class="my-4">

                    <p>
                    <strong>Hours: </strong> {{service.hour}}
                    </p>
                    <hr>
                    <b-button variant="outline-primary" class="sub-button" @click="updateService(service)">Update</b-button>
                    <b-button variant="outline-primary" class="sub-button ml-4" @click="deleteService(service)">Delete</b-button>
                </b-jumbotron>
            </b-col>
        </b-row>
     </b-container>
  
 </div>
</template>


<script>
import HotelServiceService from '../service/HotelServiceService'
import EventBus from '../event-bus'
import HotelService from '../model/hotelService'

 export default {

   data() {
      return {
          hotelServices: [],
          isUpdate: false,
          disabled: false,
          submit: 'Add',
          id: '',
          name: '',
          hour: '',
          description: '',
      }
    },

     created() {
        EventBus.$emit("admin_status",'LOGOUT')
        EventBus.$emit("admin_show",true)

         new HotelServiceService().getAllHotelServices().then(data => {
             this.hotelServices = data.data
         })
     },
     methods: {
        reset() {
            this.id = ''
            this.name = ''
            this.hour = ''
            this.description = ''
            this.isUpdate = false
            this.submit = "Add"
            this.disabled = false
         },

        onSubmit(event){
            event.preventDefault()
            const hotelService = new HotelService(this.id, this.name, this.hour, this.description)
            if (this.isUpdate) {
                new HotelServiceService().updateHotelService(hotelService, this.id).then(data => {
                    this.hotelServices = this.hotelServices.map(function(item) { return item.id == data.data.id ? data.data : item; });
                })

            } else {
                new HotelServiceService().saveHotelService(hotelService).then(data => {
                    this.hotelServices =  this.hotelServices.concat(data.data);
                })
            }
            this.reset()
        },

        updateService(service) {
            this.id = service.id
            this.name = service.name
            this.hour = service.hour
            this.description = service.description
            this.disabled = true
            this.isUpdate = true
            this.submit = 'Update'
        },

        deleteService(service) {
            new HotelServiceService().deleteHotelService(service.id).then(
                this.hotelServices.splice(this.hotelServices.findIndex(a => a.id === service.id) , 1)
            )
        }
    }

 }
 
</script>

<style scoped>

.bg {
    background-color: #ebf0fa;
}

h2 {
   color: #b38600;
}

.id, .title{
    color: #b38600;
    font-size: 30px;
}

.description {
    font-size: 18px;
}

.sub-button {
    width: 40%;
}

</style>
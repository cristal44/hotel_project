<template>
<div>
     <b-container class="pb-4 mt-4">
        <div v-for="service in hotelService" :key="service.id">
            <b-jumbotron class="bg">
                <template #header >
                    <p class="title">
                        {{service.name}}
                    </p>
                    
                </template>

                <template #lead>
                {{service.description}}
                </template>

                <hr class="my-4">

                <p>
                <strong>Hours: </strong> {{service.hour}}
                </p>
            </b-jumbotron>
        </div>    
     </b-container>
  
</div>
</template>


<script>
import HotelServiceService from '../service/HotelServiceService'

 export default {

   data() {
      return {
          hotelService: []
      }
    },

     created() {
         new HotelServiceService().getAllHotelServices().then(data => {
             this.hotelService = data.data
         })
     }
 }
 
</script>

<style scoped>

.bg {
        background-color: #ebf0fa;
}

.title{
    color: #b38600;
    font-size: 32px;
    font-weight: bold;
}

</style>
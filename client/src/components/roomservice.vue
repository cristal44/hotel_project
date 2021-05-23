<template>
<div>
     <b-container class="pb-4 mt-4">
         <b-row>
            <b-col md="8" offset-md="2">
                <div class="mt-4 pt-4 pb-4 pl-4 pr-4 rounded bg">
                     <h2 class="text-center">Room Service Menu</h2>
                        <div  class="mt-4">
                            <h5 >FOOD:</h5>
                            <hr>
                            <b-container fluid class="list pb-3" v-for="food in foods" :key="food.id">
                                <b-row>
                                    <b-col md="6">{{food.name}}</b-col>
                                    <b-col md="6" class="text-right">$ {{food.price}}</b-col>
                                </b-row>
                            </b-container>

                        </div>


                        <div class="mt-4 pt-4">
                            <h5>BEVERAGES:</h5>
                            <hr>
                            <b-container fluid class="list pb-3" v-for="drink in drinks" :key="drink.id">
                                <b-row>
                                    <b-col md="6">{{drink.name}}</b-col>
                                    <b-col md="6" class="text-right">$ {{drink.price}}</b-col>
                                </b-row>
                            </b-container>
                        </div>

                </div>
               
            </b-col>
        </b-row>
         

         
        
     </b-container>
  
</div>
</template>


<script>
import FoodService from '../service/FoodService'
import DrinkService from '../service/DrinkService'

 export default {

    data() {
      return {
          foods: [],
          drinks: [],
      }
    },

     created() {
         new FoodService().getAllFoods().then(data => {
             this.foods = data.data
         })

         new DrinkService().getAllDrinks().then(data => {
             this.drinks = data.data
         })
        
     }
 }

 
</script>

<style scoped>

.bg {
        background-color: #ebf0fa;
}

h2 , .list{
    color: #b38600;
}

</style>
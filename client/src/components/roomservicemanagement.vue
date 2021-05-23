<template>
    <div v-if="renderComponent">
        <b-container class="pt-4">
            <h2 class="text-center mt-4 mb-4 pb-4">Room Service Management</h2>

            <div class="bg pt-4 pl-4 pr-4 pb-2 rounded">
              <b-form @submit="onSubmit">
                 <b-row>

                    <b-col>
                        <b-form-group label="Type">
                            <b-form-select v-model="selectedType" :options="types" class="mb-3" :disabled="disabled" required></b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col>
                        <b-form-group label="ID">
                                <b-form-input v-model="id" :disabled="disabled"></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col>
                        <b-form-group label="Name">
                                <b-form-input v-model="name" required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col>
                        <b-form-group label="Price">
                                <b-form-input v-model="price" required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col>
                        <div class="mt-4 pt-1">
                             <b-button type="submit" block variant="primary">{{submit}}</b-button>
                        </div>
                    </b-col>
                 </b-row>
                      
             </b-form>

            </div>


            <div class="mt-4">
                <b-row>
                    <b-col>
                        <h3>Food</h3>
                        <div class="bg pt-4 pl-4 pr-4 pb-2 rounded">
                            <b-table id = "my-table" Borderless :items="foods" :fields="fields" :tbody-tr-class="rowClass">
                                <template v-slot:cell(action)="{ item }"> 
                                        <b-button variant="link" class="mr-2" size="sm" v-on:click="updateItem(item)">Update</b-button>
                                        <b-button variant="link" size="sm" v-on:click="deleteItem(item)">Delete</b-button>
                                </template>
                            </b-table>  
                        </div>
     
                    </b-col>



                    <b-col>
                        <h3>Drink</h3>
                        <div class="bg pt-4 pl-4 pr-4 pb-2 rounded">
                            <b-table id = "my-table" Borderless :items="drinks" :fields="fields" :tbody-tr-class="rowClass">
                                <template v-slot:cell(action)="{ item }"> 
                                        <b-button variant="link" class="mr-2" size="sm" v-on:click="updateItem(item)">Update</b-button>
                                        <b-button variant="link" size="sm" v-on:click="deleteItem(item)">Delete</b-button>
                                </template>
                            </b-table>  
                        </div>
     
                    </b-col>
                </b-row>
            </div>

        </b-container>
    </div>
</template>

<script>
import FoodService from '../service/FoodService'
import DrinkService from '../service/DrinkService'
import Food from '../model/Food'
import Drink from '../model/Drink'
import EventBus from '../event-bus'

  export default {
    data() {
      return {
        renderComponent: true,
        input_text: '',
        fields: ['id', 'name', 'price', 'action'],
        types: ['Food', 'Drink'],

        disabled: false,
        id:'',
        selectedType: '',
        name: '',
        price: '',


        foods: [],
        drinks: [],
        isUpdate: false,
        submit: "Add",
        selectedItem: null
      }
    },

    created() {
        EventBus.$emit("admin_status",'LOGOUT')
        EventBus.$emit("admin_show",true)

        this.getAllFoods()
        this.getAllDrinks() 
     },

    methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
      },

      getAllFoods() {
        new FoodService().getAllFoods().then(data => {
             this.foods = data.data
         })
      },

      getAllDrinks() {
         new DrinkService().getAllDrinks().then(data => {
             this.drinks = data.data
         })
      },

       onSubmit(){
           if (this.isUpdate) {
               if (this.selectedType == 'Food') {
                    const food = new Food(this.id, this.name, this.selectedType, this.price)
                    new FoodService().updateFood(food, this.selectedItem.id)
                } else {
                    const drink = new Drink(this.id, this.name, this.selectedType, this.price)
                    new DrinkService().updateDrink(drink,this.selectedItem.id)
                }
           } else {
                if (this.selectedType == 'Food') {
                    const food = new Food(this.id, this.name, this.selectedType, this.price)
                    new FoodService().saveFood(food)
                } else {
                    const drink = new Drink(this.id,this.name, this.selectedType, this.price)
                    new DrinkService().saveDrink(drink)
                }
           }
            this.isUpdate = false
       },

       updateItem(item) {
           this.isUpdate = true
           this.disabled = true
           this.selectedItem = item
           this.submit = "Update"
           this.id = item.id
           this.selectedType = item.type
           this.name = item.name
           this.price = item.price
       },

       deleteItem(item) {
           let id = item.id
           if (item.type == 'Food') {
               new FoodService().deleteFood(id).then(this.foods = this.foods.filter(f => f.id != id))
           } else {
               new DrinkService().deleteDrink(id).then( this.drinks = this.drinks.filter(f => f.id != id) )
           }
       }
   }
  }
</script>


<style scoped>
  .bg{
    background-color: #ebf0fa;
  }

  h2, h3 {
      color: #b38600;
  }
</style>





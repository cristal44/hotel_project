<template>
    <div class="pt-4 pl-4 pr-4">
        <b-container>
            <b-row>
                <b-col cols="7">
                    <div>
                        <h3 class="pb-3">Contact Info</h3>
                        <b-form @submit="onSubmit" v-if="show">
                            <b-form-group
                                id="input-group-1"
                                label="Email address:"
                                label-for="input-1"
                                description="We'll never share your email with anyone else."
                            >
                                <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                placeholder="Enter email"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="form.name"
                                placeholder="Enter name"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Phone:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="form.name"
                                placeholder="Enter name"
                                required
                                ></b-form-input>
                            </b-form-group>


     

                            <b-button type="submit" block variant="primary" class="book" :to="{path:'/confirmation'}">RESERVATION</b-button>
                
                            </b-form>
                    </div>
                    
                </b-col>

         

                <b-col cols="5">
                    <reservationDetails/>

                </b-col>
            </b-row>
                
        </b-container>
  

    </div>
</template>

<script>

import reservationDetails from '@/components/reservationDetails';

export default{
  components: {
    reservationDetails
  },

  data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true
      }
    },
    methods: {
        onSubmit(){}

    }
}

</script>



<style scoped>

h3{
    color: #b38600;
}
.book{
    background-color: #b38600;
    border: #b38600;
}

</style>
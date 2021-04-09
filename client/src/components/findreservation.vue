<template>
<div >
    <b-container class="box pt-4">
        <h4 class="mt-3 pb-4 text-center">Find your reservations with Confirmation Number</h4>


         <b-form @submit="onSubmit">
            <b-form-group>
                <b-form-input
                id="input-1"
                v-model="form.number"
                placeholder="Confirmation Number"
                required
                ></b-form-input>
            </b-form-group>


            <b-form-group>
                <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                placeholder="Email Address"
                required
                ></b-form-input>
            </b-form-group>




            <div class="pt-3">
                 <b-row>
                    <b-col align-self="start"></b-col>
                    <b-col align-self="center">
                        <b-button class="button" block type="submit" size="lg" variant="primary" :to="{path:'/modifyreservation',query:{number:{number}, email:{email}}}">Find RESERVATION</b-button>
                    </b-col>
                    <b-col align-self="end">  </b-col>
                </b-row>
              
            </div>


            <div class="pt-4 mt-3">
                <h5> Don't know your confirmation number? </h5>
                Your confirmation number was included in an email sent at the time of booking. Please check your email to recover the number.
            </div>



         </b-form>
    </b-container>
</div>


</template>



<script>
  export default {
    data() {
      return {
        form: {
          number: '',
          email: '',
        }
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<style scoped>
.box {
    width: 50%;
}

h4{
    color: #b38600;
}

.button{
    background-color: #b38600;
    border: #b38600;
}
</style>
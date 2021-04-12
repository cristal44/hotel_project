<template>
    <div>
        <b-list-group class="list" horizontal>
            <b-list-group-item class="item">
                <label>Adult</label>
                <b-form-spinbutton id="sb-inline" v-model="adult"></b-form-spinbutton>
            </b-list-group-item>

            <b-list-group-item class="item">
                <label>Children</label>
                <b-form-spinbutton id="sb-inline" v-model="children"  min="0"></b-form-spinbutton>
            </b-list-group-item>

            <b-list-group-item class="item">
                <label for="example-datepicker">Check In</label>
                <b-form-datepicker 
                  id="checkin-datepicker" 
                  placeholder="Choose a date"
                  :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                 :min="minCheckin"
                  locale="en"
                  v-model="checkin" 
                  @context="onContext"
                  class="mb-2"
                  required>
                </b-form-datepicker>
            </b-list-group-item>

             <b-list-group-item class="item">
                <label for="example-datepicker">Check Out</label>
                <b-form-datepicker 
                  id="checkout-datepicker" 
                  placeholder="Choose a date"
                  :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                  locale="en"
                  :min="minCheckout"
                  v-model="checkout" 
                  class="mb-2"
                  required>
                </b-form-datepicker>
             </b-list-group-item>

            <b-list-group-item class="item">
              <label for="example-datepicker"></label>
              <b-button class="mt-2 submit button pt-2 pb-2" type="submit" size="bg" block variant="primary" @click="onSearch">CHECK AVAILABILITY</b-button>
            </b-list-group-item>

        </b-list-group>
</div>
</template>


<script>
 import Reservation from "../reservation";

  export default {
    props: ['reservation'],

    data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const minDate_checkin = new Date(today)

      const minDate_checkout = new Date(today)
      minDate_checkout.setDate(minDate_checkout.getDate()+1)
  
      return {
        search_title: "",
        adult: 1,
        children: 0,
        checkin: null,
        checkout: null,
        minCheckin: minDate_checkin,
        minCheckout: minDate_checkout,
      }
    },

  created: function () {
    if (this.reservation != undefined) {
       this.adult = this.reservation.adult,
       this.children = this.reservation.children,
       this.checkin = this.reservation.checkin,
       this.checkout = this.reservation.checkout
    }
  },
    methods:{
        onSearch(){
          const reservation = new Reservation(this.adult, this.children, this.checkin, this.checkout)

          this.$router.push({
            name: 'reservation',
            params: { data: reservation}
          });
    },

      onContext() {
        const checkinDate = new Date(this.checkin)
        const date = new Date(checkinDate.getFullYear(), checkinDate.getMonth(), checkinDate.getDate())
        this.minCheckout = new Date(date)
        this.minCheckout.setDate(this.minCheckout.getDate()+2)
      }
    }
  }
</script>

<style scoped>
label {
    color: #b38600;
}

.submit {
    background-color: #b38600;
    border: #b38600;
}

.list {
    text-align:center;
    font-weight: bold;
}


.item {
  width: 20% !important;
}

.button{
  font-size:15px;
}

</style>
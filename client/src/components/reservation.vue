<template>
    <div class="pt-4 pl-4 pr-4">
        <b-container class="pb-4">
            <b-row>
                <b-col cols="12">
                    <search :reservation="reservation"></search>
                    <div class="pb-4">
                      <selectroom :reservation="reservation"/>
                    </div>
                 
                </b-col>
            </b-row>          
        </b-container>
    </div>
</template>

<script>
import search from '@/components/search';
import selectroom from '@/components/selectroom';

export default{
  components: {
    search,
    selectroom,

  },

    data() {

      return {
          reservation: null
      }
    },  

  created() {
        this.reservation = this.$route.params.data;
        // console.log('Params: ', this.$route.params);

        // console.log(this.reservation.room);
        // console.log(this.reservation.adult);
        // console.log(this.reservation.children);
        // console.log(this.reservation.checkin);
        // console.log(this.reservation.checkout);
  }
}
</script>

  export default {

    data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const minDate_checkin = new Date(today)

      const minDate_checkout = new Date(today)
      minDate_checkout.setDate(minDate_checkout.getDate()+1)
  
      return {
        search_title: "CHECK AVAILABILITY",
        room: 1,
        adult: 1,
        children: 0,
        checkin: null,
        checkout: null,
        minCheckin: minDate_checkin,
        minCheckout: minDate_checkout,
      }
    },

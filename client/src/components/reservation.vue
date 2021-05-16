<template>
    <div class="pt-4 pl-4 pr-4">
        <b-container class="pb-4">
            <b-row>
                <b-col cols="12">
                    <search :oldReservation="reservation" ></search>
                    <div class="pb-4">
                      <selectroom :oldReservation="reservation"/>
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
        console.log(this.reservation)
  }
}
</script>
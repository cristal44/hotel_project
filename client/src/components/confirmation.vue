<template>
    <div>
        <h2 class="text-center mt-4 pt-3 pb-3">Thank You for Choosing Our Hotel</h2>
        <order :reservation="reservation"/>

        <b-container class="buttons pt-4">
            <b-row>
                <b-col><b-button block variant="primary" class="back" :to="{path:'/'}">BACK</b-button></b-col>
            </b-row>
        </b-container>

    </div>
</template>


<script>
import order from '@/components/order';

export default{
  components: {
      order
  },


  created() {
    this.reservation = this.$route.params.data;
  }
}
</script>

<style scoped>
h2{
    color: #b38600;
}

.buttons {
    width: 15%;
}

.back {
    background-color: #b38600;
    border: #b38600;
}

</style>
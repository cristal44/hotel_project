<template>
  <div class="body" :style="{'background-image':'url(' + require('../assets/background.jpeg') + ')'}">

    <div class="search-box text-center">
      <search/>
    </div>
   

  </div>
</template>


<script>
import search from '@/components/search';

export default {
  components: {
    search       
  },
}
</script>


<style scoped>
  .body {
      height: calc(100vh - 60px);
      width:  100vw; 
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
  }

 .search-box {
   /* background-color: aqua; */
    padding-top: calc(100vh - 180px);
    /* padding-left: 15%; */
    display: flex;
    justify-content: center;
  }

</style>
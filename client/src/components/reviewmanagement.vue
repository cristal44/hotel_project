<template>
    <div>
        <review :review_show="show"></review>
    </div>
</template>

<script>
import review from '@/components/review'
  import EventBus from '../event-bus'


export default{
  components: {
    review,
  },

    data() {
      return {
          show : true
      }
    },  


     created() {
        EventBus.$emit("admin_status",'LOGOUT')
        EventBus.$emit("admin_show",true)
     }
}
</script>
<template>
    <div>
        <b-container class="pt-4">
            <b-nav-form class="mb-4">
                <b-form-input class="mr-sm-2" placeholder="Search Name"></b-form-input>
                <b-button  class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>


            <b-table Borderless hover :items="items" :fields="fields" @row-clicked="myRowClickHandler">

            </b-table>
        </b-container>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['guest_id', 'name', 'email', 'phone', 'order_no'],
        items: [
          { guest_id: 1, name: 'Ryan L', email: 'ryan@gmail.com', phone:'123-4567890', order_no: '2012040812'},
          { guest_id: 2, name: 'Alex L', email: 'ryan@gmail.com', phone:'123-4567890', order_no: '2012040813'},
          { guest_id: 3, name: 'Alice L', email: 'ryan@gmail.com', phone:'123-4567890', order_no: '2012040814'},
          { guest_id: 4, name: 'John L', email: 'ryan@gmail.com', phone:'123-4567890', order_no: '2012040815'},
          { guest_id: 5, name: 'Mia L', email: 'ryan@gmail.com', phone:'123-4567890', order_no: '2012040816'},
          { guest_id: 6, name: 'Ryan L', email: 'ryan@gmail.com', phone:'123-4567890', order_no: '2012040817'},
      
        ]
      }
    },
    methods: {
        myRowClickHandler(item) {
            console.log(item.order_no)
            this.$router.push("/modifyreservation");
        }
}
  }
</script>
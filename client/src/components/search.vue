<template>
    <div>
        <b-list-group horizontal>

            <b-list-group-item>
                <label>Room</label>
                  <b-form-spinbutton id="sb-inline" v-model="room_value"></b-form-spinbutton>
            </b-list-group-item>

            <b-list-group-item>
                <label>Adult</label>
                <b-form-spinbutton id="sb-inline" v-model="adult_value"></b-form-spinbutton>
            </b-list-group-item>

            <b-list-group-item>
                <label>Children</label>
                <b-form-spinbutton id="sb-inline" v-model="children_value"  min="0"></b-form-spinbutton>
            </b-list-group-item>

            <b-list-group-item>
                <label for="example-datepicker">Arrival Date</label>
                <b-form-datepicker id="example-datepicker" v-model="arrivaldate" class="mb-2"></b-form-datepicker>
                <!-- <p>Value: '{{ value }}'</p> -->
            </b-list-group-item>

             <b-list-group-item>
                <label for="example-datepicker">Departure Date</label>
                <b-form-datepicker id="example-datepicker" v-model="departuredate" class="mb-2"></b-form-datepicker>
                <!-- <p>Value: '{{ value }}'</p> -->
             </b-list-group-item>

            <b-list-group-item>
              <label for="example-datepicker"></label>
              <b-button class="mt-2 submit" type="submit" block variant="primary" :to="{path:'/reservation'}">CHECK AVAILABILITY</b-button>
       
             </b-list-group-item>

        </b-list-group>
</div>
</template>


<script>
  export default {
    data() {
      return {
        // selected_room: null,
        // room_options: [1, 2, 3, 4],
        room_value: 1,
        adult_value: 1,
        children_value: 0,

        selectedAdult: null,
        adult_options: ["Adult", 1, 2, 3, 4],

        selected_children: null,
        children_options: [0, 1, 2, 3, 4],

        arrivaldate: '',
        departuredate: ''

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

</style>
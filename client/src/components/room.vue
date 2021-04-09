<template>
    <div>
        <b-container class="pt-4">
            <b-nav-form class="mb-4">
                <b-form-input class="mr-sm-2" placeholder="Search Room No"></b-form-input>
                <b-button  class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>


            <b-table Borderless hover :items="items" :fields="fields" :tbody-tr-class="rowClass"></b-table>
        </b-container>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['room_no', 'room_type', 'room_status', 'guest'],
        items: [
          { room_no: 101, room_type: 'Deluxe', room_status: 'Occupied', guest: '1'},
          { room_no: 201, room_type: 'Deluxe', room_status: 'Vacant', guest: 'None'},
          { room_no: 301, room_type: 'Deluxe', room_status: 'Occupied', guest: '2'},
          { room_no: 401, room_type: 'Deluxe', room_status: 'Vacant', guest: 'None'},
          { room_no: 501, room_type: 'Deluxe', room_status: 'Occupied', guest: '3'},
          { room_no: 101, room_type: 'Deluxe', room_status: 'Occupied', guest: '1'},
          { room_no: 201, room_type: 'Deluxe', room_status: 'Vacant', guest: 'None'},
          { room_no: 301, room_type: 'Deluxe', room_status: 'Occupied', guest: '2'},
          { room_no: 401, room_type: 'Deluxe', room_status: 'Vacant', guest: 'None'},
          { room_no: 501, room_type: 'Deluxe', room_status: 'Occupied', guest: '3'}
        ]
      }
    },
    methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.room_status === 'Occupied') return 'table-success'
      }
    }
  }
</script>
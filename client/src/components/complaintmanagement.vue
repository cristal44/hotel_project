<template>
    <div>

        <b-container class="pt-4">

          <h2 class="text-center mt-4 pb-4">Customer Complaint Management</h2>

          <div>
            <b-list-group v-for="complaint in complaints" :key="complaint.id">
                <b-list-group-item href="#" class="flex-column align-items-start mt-4">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{complaint.id}}: {{complaint.reason}}</h5>
                    <small>
                        <b-button variant="link" size="sm" @click="updateComplaint(complaint)">Update</b-button>
                        <b-button variant="link" size="sm" class="ml-2" @click="deleteComplaint(complaint)">Delete</b-button>
                    </small>
                    </div>

                    <p class="mb-1">
                    {{complaint.details}}
                    </p>

                    <small>{{complaint.firstname}} {{complaint.lastname}} | {{complaint.email}} |  {{complaint.phone}}</small>
                </b-list-group-item>

            </b-list-group>
          </div>
        </b-container>
    </div>
</template>

<script>
  import ComplaintService from '../service/ComplaintService'
  import EventBus from '../event-bus'

  export default {
    data() {
      return {
        complaints: []
      }
    },


    created() {
        EventBus.$emit("admin_status",'LOGOUT')
        EventBus.$emit("admin_show",true)

        EventBus.$on("updated_complaint", (data)=>{   
          if (this.complaints != null) {
            const index = this.complaints.findIndex(x => x.id == data.id);
            this.complaints[index] = data.data;    
          } 
        }) 


        this.getDataFromAPI()
    },

    methods: {
      getDataFromAPI() {
         new ComplaintService().getAllComplaints().then(data => {
             this.complaints = data.data
         })
      },

      updateComplaint(complaint) {
           this.$router.push({
                name: 'complaint',
                params: { data: complaint}
            });     

      },


      deleteComplaint(complaint) {
           new ComplaintService().deleteComplaint(complaint.id).then(
                this.complaints.splice(this.complaints.findIndex(a => a.id === complaint.id) , 1)
            )
      }
   }
  }
</script>


<style scoped>
  h2{
    color: #b38600;
  }

</style>
<template>
    <div>
        <b-container class="pt-4">
            <b-row>
                <b-col md="6" offset-md="3">
                     <h2 class="text-center pb-4 mb-4 mt-4">Customer Complaint Form</h2>

                      <b-form @submit="onSubmit">

                            <b-form-group label="Complaint ID" v-if="show">
                                <b-form-input v-model="form.id" disabled></b-form-input>
                            </b-form-group>

                          <b-row>
                              <b-col>
                                <b-form-group label="First Name">
                                    <b-form-input v-model="form.firstname" required></b-form-input>
                                </b-form-group>
                              </b-col>

                              <b-col>
                                <b-form-group label="Last Name">
                                    <b-form-input v-model="form.lastname" required></b-form-input>
                                </b-form-group>
                              </b-col>

                          </b-row>

                            <b-form-group label="Email Address">
                                <b-form-input type="email" v-model="form.email" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Phone Number">
                                <b-form-input v-model="form.phone" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Reason For Complaint">
                                <b-form-input v-model="form.reason" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Please provide any details">
                                <b-form-textarea  v-model="form.details" required rows="4" max-rows="10" ></b-form-textarea>
                            </b-form-group>

    
                            <div class="pt-3">
                                <b-button type="submit" size="lg" block variant="primary">{{submit}}</b-button>
                                 <b-alert class="mt-3" :show="alertMessage" dismissible variant="info">Thank you for your message. We will email or call you soon. </b-alert>
                            </div>   
                        </b-form>
                    
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>



<script>
import EventBus from '../event-bus'
import Complaint from '../model/complaint'
import ComplaintService from '../service/ComplaintService'

export default {

    data() {
      return {
        show: false,
        alertMessage: false,
        isUpdate: false,
        submit: 'SUBMIT',
        form: {
          id: '',
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          reason: '',
          details: ''
        },
      }
    },


    created() {
         this.complaint = this.$route.params.data;
         if (this.complaint != undefined) {
            this.show = true
            this.form.id = this.complaint.id
            this.form.firstname = this.complaint.firstname
            this.form.lastname = this.complaint.lastname
            this.form.email = this.complaint.email
            this.form.phone = this.complaint.phone
            this.form.reason = this.complaint.reason
            this.form.details = this.complaint.details

            this.isUpdate = true
            this.submit = 'Update'

         }
    },

    methods: {
        reset() {
          this.form.id =  '',
          this.form.firstname = '',
          this.form.lastname = '',
          this.form.email = '',
          this.form.phone = '',
          this.form.reason = '',
          this.form.details = ''
        },

        onSubmit(event){
            event.preventDefault()

            const complaint = new Complaint(this.form.firstname, this.form.lastname, this.form.email, this.form.phone, this.form.reason, this.form.details)

            const _this = this

            if (this.isUpdate) {
                new ComplaintService().updateComplaint(complaint, this.form.id).then(data => {
                    EventBus.$emit("updated_complaint",data.data),
                    _this.$router.push("complaintmanagement")
                })

            } else {
                new ComplaintService().saveComplaint(complaint).then(data => {
                  console.log(data.data)
                    this.alertMessage = true
                 })

            }

        
            this.reset()




            // if (this.isUpdate) {
            //     new HotelService().updateHotel(hotel, this.hotel.id).then(data => {
            //         EventBus.$emit("updated_reservation",data.data),
            //         _this.$router.push("hotelmanagement")
            //     })
            // } else {
            //     new HotelService().saveHotel(hotel).then(data => {
            //          EventBus.$emit("added_reservation",data.data),
            //         _this.$router.push("hotelmanagement")
            //     })                 
            // }
        }
    }
  }
</script>




<style scoped>
h2{
    color: #b38600;
}
    
</style>



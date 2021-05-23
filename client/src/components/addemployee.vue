<template>
    <div>
        <b-container class="pt-4">
            <h4 class="text-center pb-4">EMPLOYEE INFORMATION</h4>
            <b-form @submit="onSubmit">
                <b-row>
                    <b-col md="6">
                         <div class="pt-3 pl-3 pr-3 pb-3 bg rounded">
                            <b-form-group label="Employee ID">
                                <b-form-input v-model="form.id" disabled></b-form-input>
                            </b-form-group>

                            <b-form-group label="Name">
                                <b-form-input v-model="form.name" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Birth">
                                <b-form-input v-model="form.birth" required placeholder="MM/DD/YY"></b-form-input>
                            </b-form-group>

                            <b-form-group label="Gender">
                                <b-form-select
                                v-model="form.gender"
                                :options="genderOptions"
                                required
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group label="Email">
                                <b-form-input v-model="form.email" type="email" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Phone">
                                <b-form-input v-model="form.phone" required></b-form-input>
                            </b-form-group>
                        </div>

                    </b-col>

                    <b-col md="6">
                         <div class="pt-3 pl-3 pr-3 pb-3 bg rounded">
                            <b-form-group label="Department">
                                <b-form-select
                                v-model="form.department"
                                :options="departmentOptions"
                                required
                                ></b-form-select>
                            </b-form-group>

                            <b-form-group label="Position">
                                <b-form-input v-model="form.position" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Salary">
                                <b-form-input v-model="form.salary" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Bank Account">
                                <b-form-input v-model="form.account" required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Address">
                                <b-form-input v-model="form.address" required></b-form-input>
                            </b-form-group>

                            <b-row>
                                <b-col md="4">
                                    <b-form-group label="City">
                                        <b-form-input v-model="form.city" required placeholder=""></b-form-input>
                                    </b-form-group>
                                </b-col>

                                <b-col md="4">
                                    <b-form-group label="State">
                                        <b-form-select v-model="form.state" :options="states" required
                                        ></b-form-select>
                                   </b-form-group>
                                </b-col>

                                <b-col md="4">
                                  <b-form-group label="Zipcode">
                                     <b-form-input v-model="form.zipcode" required></b-form-input>
                                  </b-form-group>
                                </b-col>
                            </b-row>
     
                        </div>
                        
                    </b-col>
                </b-row>

                <div class="mt-4 text-center">
                     <b-button variant="primary" type="submit"  class="sub-button">{{submit}}</b-button>
                </div>

            </b-form>
        </b-container>

    </div>
</template>



<script>
import json from '../assets/state.json'
import EmployeeService from '../service/EmployeeService'
import Account from '../model/account'
import Contact from '../model/contact'
import Address from '../model/address'
import Department from '../model/department'
import Employee from '../model/employee'
import EventBus from '../event-bus'

  export default {

    data() {
      return {
        genderOptions: ['Male', 'Female'],
        departmentOptions: ['Maintenance', 'HouseKeeping', 'Food and Beverage', 'Front Desk', 'Guest Service'],
        states: json.states,
        isUpdate: false,
        submit: 'Submit',

        form: {
          id:'',
          name:'',
          birth:'',
          gender:'',
          email:'',
          phone:'',
          department:'',
          position:'',
          salary:'',
          account:'',
          address:'',
          city:'',
          state:'',
          zipcode:''
        },

        types: ['VIP Room', 'Standard Room', 'Suite', 'One Bed Room'],
        status: ['Vacant', 'Occupied']
      }
    },


    created() {
        EventBus.$emit("admin_status",'LOGOUT')
        EventBus.$emit("admin_show",true)


        this.employee = this.$route.params.data;
        if (this.employee != undefined) {
            this.form.id = this.employee.employee_id,
            this.form.name = this.employee.name
            this.form.birth = this.employee.contact.birth,
            this.form.gender = this.employee.contact.gender,
            this.form.email = this.employee.contact.email,
            this.form.phone = this.employee.contact.phone,
            this.form.department = this.employee.department.departmentName,
            this.form.position = this.employee.position,
            this.form.salary = this.employee.salary,
            this.form.account = this.employee.account.accountNumber,
            this.form.address = this.employee.contact.address.street,
            this.form.city = this.employee.contact.address.city,
            this.form.state = this.employee.contact.address.state,
            this.form.zipcode = this.employee.contact.address.zipCode
    
            this.submit = 'UPDATE'
            this.isUpdate = true

        }
    },


    methods: {
        onSubmit(event){
            event.preventDefault()
            const address = new Address(this.form.state, this.form.city, this.form.address, this.form.zipcode)
            const contact = new Contact(this.form.name, address, this.form.birth, this.form.gender, this.form.email, this.form.phone)

            const department = new Department(this.form.department)
            const account = new Account(this.form.account, this.form.name)

            const employee = new Employee(this.form.name, this.form.salary, this.form.position, contact, department, account)

            const _this = this

            if (this.isUpdate) {
                new EmployeeService().updateEmployee(employee, this.employee.employee_id).then(data => {
                    EventBus.$emit("updated_employee",data.data),
                    _this.$router.push("employeemanagement")

                })

            } else {
                new EmployeeService().saveEmployee(employee).then(data => {
                     EventBus.$emit("added_employee",data.data),
                    _this.$router.push("employeemanagement")
                })
            }
        }
    }
  }
</script>




<style scoped>
.title{
    color: #b38600;
}

.bg {
    background-color: #ebf0fa!important;
}

.sub-button {
    width: 25%;
}
    
</style>



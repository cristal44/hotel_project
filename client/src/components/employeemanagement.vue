<template>
    <div v-if="renderComponent">
        <b-container class="pt-4">
          <h2 class="text-center mt-4 mb-4 pb-4">Employee Management</h2>

          <b-row>
              <b-col>
                <b-nav-form class="mb-4">
                    <b-form-input v-model="input_text" class="mr-sm-2" placeholder="Search Employee"></b-form-input>
                    <b-button  class="my-2 my-sm-0 cbutton" @click="filterEmployees">Search</b-button>

                     <b-button class="my-2 my-sm-0 ml-2 cbutton" @click="displayAllEmployees">Show All Employee</b-button>
                 </b-nav-form>
              </b-col>

              <b-col cols="12" md="auto">
                 <b-button class="cbutton" :to="{ name: 'addemployee' }">Add a Employee</b-button>
              </b-col>
           </b-row>
          

           <b-table id = "my-table" Borderless :items="displayEmployeeInfo" :fields="fields" :tbody-tr-class="rowClass">
              <template v-slot:cell(action)="{ item }"> 
                    <b-button variant="link" class="mr-2" size="sm" v-on:click="checkEmployeeDetails(item)">Details</b-button>
                    <b-button variant="link" size="sm" v-on:click="deleteEmployee(item)">Delete</b-button>
              </template>
           </b-table>
        </b-container>
    </div>
</template>

<script>
import EmployeeService from '../service/EmployeeService'
import DisplayEmployeeInfo from '../model/displayEmployeeInfo'
import EventBus from '../event-bus'

  export default {
    data() {
      return {
        renderComponent: true,
        input_text: '',
        fields: ['id', 'name','department', 'position', 'email', 'phone', 'Action'],
        selectedEmployee: null,
        employees: [],
        employeeInfo: [],
        displayEmployeeInfo: []
      }
    },

    created() {
      EventBus.$on("added_employee", (data)=>{
          if (this.displayEmployeeInfo != null) {
            this.displayEmployeeInfo[this.displayEmployeeInfo.length] = this.convertToEmployeeInfo(data)
          } 
      }) 

      EventBus.$on("updated_employee", (data)=>{   
          if (this.displayEmployeeInfo != null) {
            const index = this.displayEmployeeInfo.findIndex(x => x.id == data.employee_id);
            this.displayEmployeeInfo[index] = this.convertToEmployeeInfo(data);    
          } 
      }) 


      this.getAllEmployeesFromAPI()
        
    },


    methods: {
      getAllEmployeesFromAPI() {
        new EmployeeService().getAllEmployees().then(data => {
            this.employees = data.data
            for (let i = 0; i < this.employees.length; i++) {
                const employee = this.convertToEmployeeInfo(this.employees[i])
                this.employeeInfo[i] = employee
             }
             this.displayEmployeeInfo = this.employeeInfo

        })
      },

      convertToEmployeeInfo(emplyee) {
        return new DisplayEmployeeInfo(emplyee.employee_id,
                                                    emplyee.name,
                                                    emplyee.department.departmentName, 
                                                    emplyee.position,
                                                    emplyee.contact.email, 
                                                    emplyee.contact.phone)
      },


      rowClass(item, type) {
        if (!item || type !== 'row') return
      },

      filterEmployees(){
        if (this.input_text != "") {
          let data = this.employeeInfo.filter(employee => employee.id == parseInt(this.input_text)
              || employee.name.toUpperCase().includes(this.input_text.toUpperCase())
              || employee.department.toUpperCase().includes(this.input_text.toUpperCase())
              || employee.position.toUpperCase().includes(this.input_text.toUpperCase())
              || employee.email.toUpperCase().includes(this.input_text.toUpperCase())
              || employee.phone.toUpperCase().includes(this.input_text.toUpperCase()))
 
          this.displayEmployeeInfo = data
        } 
      },

      displayAllEmployees() {
        this.displayEmployeeInfo = this.employeeInfo
      },

      checkEmployeeDetails(item) {
          this.employees.forEach(element => {
              if (element.employee_id == item.id) {
                  this.$router.push({
                    name: 'employee',
                    params: { data: element}
                  });  
              }
          })
          
      },

      deleteEmployee(item) {
        let id = item.id
        new EmployeeService().deleteEmployee(id).then(data => {
            console.log(data)
            let updateData = this.displayEmployeeInfo.filter(e => e.id != id)
            this.displayEmployeeInfo = updateData
         })
      },
   }
  }
</script>


<style scoped>
  h2 {
    color: #b38600;
  }
  .cbutton {
    background-color: #b38600;
  }
</style>
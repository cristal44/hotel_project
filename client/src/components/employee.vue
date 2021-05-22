<template>
    <div>
        
        <b-container class="pt-4">
        
            <h4 class="text-center">{{this.employee.name}}</h4>
            <hr>

            <b-container class="bv-example-row text-center">

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Employee ID:</b-col>
                    <b-col cols="4" class="text-left">{{this.employee.employee_id}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Department:</b-col>
                    <b-col cols="4" class="text-left">{{this.employee.department.departmentName}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Position:</b-col>
                    <b-col cols="4" class="text-left">{{this.employee.position}}</b-col>
                </b-row>


                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Salary:</b-col>
                    <b-col cols="4" class="text-left">USD {{this.employee.salary}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Bank Account:</b-col>
                    <b-col cols="4" class="text-left">{{this.employee.account.accountNumber}}</b-col>
                </b-row>

                <hr>


                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Gender: </b-col>
                    <b-col cols="4" class="text-left">{{this.employee.contact.gender}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Birth: </b-col>
                    <b-col cols="4" class="text-left">{{this.employee.contact.birth}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Email: </b-col>
                    <b-col cols="4" class="text-left">{{this.employee.contact.email}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Phone: </b-col>
                    <b-col cols="4" class="text-left">{{this.employee.contact.phone}}</b-col>
                </b-row>

                <b-row align-h="center">
                    <b-col cols="4" class="text-right title">Address: </b-col>
                    <b-col cols="4" class="text-left">
                        {{this.employee.contact.address.street}}, 
                        {{this.employee.contact.address.city}}, 
                        {{this.employee.contact.address.state}}, 
                        {{this.employee.contact.address.zipCode}}
                    </b-col>
                </b-row>

                <hr>

                <div class="text-center">
                    <b-button variant="outline-primary" :to="{ name: 'employeemanagement'}">Back</b-button>
                    <b-button variant="outline-primary" class="ml-4 mr-4" @click="upateEmployee">Update</b-button>
                </div>
                  

            </b-container>
        </b-container>
    </div>
</template>



<script>
export default {
    created() {
        this.employee = this.$route.params.data;
    },

    methods: {
        upateEmployee() {
            this.$router.push({
                name: 'addemployee',
                params: { data: this.employee}
            });  
        }
    }

}

</script>




<style scoped>
.title{
    color: #b38600;
}
    
</style>
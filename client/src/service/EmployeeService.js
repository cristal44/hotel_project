import axios from 'axios';

export default class EmployeeService {
    url = "http://localhost:8080/api/employees";

    getAllEmployees() {
        return axios.get(this.url);
    }

    getEmployeeById(id) {
        return axios.get(this.url+ '/' + id);
    }

    saveEmployee(employee) {
        return axios.post(this.url, employee);
    }

    updateEmployee(employee, id) {
        return axios.put(this.url+ '/' + id, employee)
    }

    deleteEmployee(id) {
        return axios.delete(this.url+ '/' + id);
    }

}
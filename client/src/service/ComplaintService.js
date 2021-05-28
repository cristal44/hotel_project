import axios from 'axios';

export default class DrinkService {
    url = "http://localhost:8080/api/v1/complaints";

    getAllComplaints() {
        return axios.get(this.url);
    }

    getComplaintById(id) {
        return axios.get(this.url+ '/' + id);
    }

    saveComplaint(complaint) {
        return axios.post(this.url + '/', complaint);
    }

    updateComplaint(complaint, id) {
        return axios.put(this.url+ '/' + id, complaint)
    }

    deleteComplaint(id) {
        return axios.delete(this.url+ '/' + id);
    }

}
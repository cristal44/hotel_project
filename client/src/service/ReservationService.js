import axios from 'axios';

export default class ReservationService {
    url = "http://localhost:8080/api/reservations";

    getAllReservations() {
        return axios.get(this.url);
    }

    getReservationByIdAndEmail(email, id) {
        return axios.get(this.url+ '/' + id, email);
    }

    getReservationById(id) {
        return axios.get(this.url+ '/' + id);
    }

    saveReservation(reservation) {
        return axios.post(this.url, reservation);
    }

    updateReservation(reservation, id) {
        return axios.put(this.url+ '/' + id, reservation)
    }

    deleteReservation(id) {
        return axios.delete(this.url+ '/' + id);
    }

}
import axios from 'axios';

export default class HotelService {
    url = "http://localhost:8080/api/hotels";

    getAllHotels() {
        return axios.get(this.url);
    }

    getHotelById(id) {
        return axios.get(this.url+ '/' + id);
    }

    saveHotel(hotel) {
        return axios.post(this.url, hotel);
    }

    updateHotel(hotel, id) {
        return axios.put(this.url+ '/' + id, hotel)
    }

    deleteHotel(id) {
        return axios.delete(this.url+ '/' + id);
    }

}
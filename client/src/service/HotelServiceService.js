import axios from 'axios';

export default class HotelServiceService {
    url = "http://localhost:8080/api/v1/hotelServices";

    getAllHotelServices() {
        return axios.get(this.url);
    }

    getHotelServiceById(id) {
        return axios.get(this.url+ '/' + id);
    }

    saveHotelService(hotelService) {
        return axios.post(this.url, hotelService);
    }

    updateHotelService(hotelService, id) {
        return axios.put(this.url+ '/' + id, hotelService)
    }

    deleteHotelService(id) {
        return axios.delete(this.url+ '/' + id);
    }

}
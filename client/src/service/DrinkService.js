import axios from 'axios';

export default class DrinkService {
    url = "http://localhost:8080/api/v1/drinks";

    getAllDrinks() {
        return axios.get(this.url);
    }

    getDrinkById(id) {
        return axios.get(this.url+ '/' + id);
    }

    saveDrink(drink) {
        return axios.post(this.url + '/', drink);
    }

    updateDrink(drink, id) {
        return axios.put(this.url+ '/' + id, drink)
    }

    deleteDrink(id) {
        return axios.delete(this.url+ '/' + id);
    }

}
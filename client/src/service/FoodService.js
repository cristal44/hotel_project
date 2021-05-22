import axios from 'axios';

export default class FoodService {
    url = "http://localhost:8080/api/v1";

    getAllFoods() {
        return axios.get(this.url + '/foods');
    }

    getFoodById(id) {
        return axios.get(this.url+ '/foods/' + id);
    }

    saveFood(food) {
        return axios.post(this.url + '/foods', food);
    }

    updateFood(food, id) {
        return axios.put(this.url+ '/foods/' + id, food)
    }

    deleteFood(id) {
        return axios.delete(this.url+ '/foods/' + id);
    }

}
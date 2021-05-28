import axios from 'axios';

export default class ReviewService {
    url = "http://localhost:8080/api/v1/reviews";


    getAllReviews() {
        return axios.get(this.url);
    }

    getReviewById(id) {
        return axios.get(this.url+ '/' + id);
    }

    saveReview(review) {
        return axios.post(this.url, review);
    }

    updateReview(review, id) {
        return axios.put(this.url+ '/' + id, review)
    }

    deleteReview(id) {
        return axios.delete(this.url+ '/' + id);
    }

}
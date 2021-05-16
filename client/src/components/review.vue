<template>
    <div>
        <b-container class="text-center">
            <h3 class="mt-4">Leave a Review</h3>
            <div>
                
                <b-form-input v-model="rating" placeholder="Enter your rating"></b-form-input>
                <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
                <b-form-input v-model="date" placeholder="Enter the date"></b-form-input>
                <b-form-input v-model="comment" placeholder="Enter your comment"></b-form-input>
                <b-button @click="add" variant="outline-primary">Button</b-button>
                
                </div>
                 <hr> 


            <h6>Previous Reviews</h6>
            <div v-for="review in reviews" :key="review.reviewID">
                <div>
                    <span>Rated: {{review.rating}}</span>
                    <p> Name: {{review.name}}</p>
                    <p> Date: {{review.date}}</p>
                    <p> Comment: {{review.comment}}</p>
                </div>
                <hr> 
            </div>
        </b-container>
    </div>                  
</template>


<script>
import ReviewService from '../service/reviewService'
import Review from '../model/review'

  export default {
    data() {
      return {
          reviews: null,
          rating: '',
          name: '',
          date: '',
          comment: ''

        /*
        reviews: [
          {ID: 1, Rating: 5/5, Name: 'Adam', Date: 'Today', Comments:'Great!!'},
          {ID: 2, Rating: 5/5, Name: 'Eve', Date: 'Yesterday', Comments:'Greater'},
        ]*/
      }
    },

    mounted() {
      new ReviewService().getAllReviews().then(data => {
        this.reviews = data.data
        //this.displayReviews = this.reviews
        console.log(data)
        })
    },

    methods: {
        add(){
            let review = new Review(this.name, this.rating, this.date, this.comment)
            console.log(review)
            new ReviewService.saveReview(review)
        }

      }
  }
</script>
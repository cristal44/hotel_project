<template>
    <div>
        <b-container class="mt-4 mb-4 pb-4">

            <h3 class="text-center mb-4">{{title}}</h3>

            <div>
            {{reviews.length}} Reviews
            <b-list-group v-for="review in reviews" :key="review.id">
                <b-list-group-item href="#" class="flex-column align-items-start mt-4">
                    <div class="d-flex w-100 justify-content-between">
                      <p><span class="pr-4" v-if="show">ID: {{review.id}}</span><strong class="pr-4 rate">Rating: {{review.rating}} / 5 </strong> </p>
                      <small>{{review.name}}   ( {{review.date}} )</small>
                    </div>
                    <p class="mb-1 text-left"> <strong>{{review.comment}}</strong> </p>

                    <div class="mt-3 mb-2" v-if="show">
                      <b-button variant="outline-primary" size="sm" @click="updateReview(review)">Update</b-button>
                      <b-button variant="outline-primary" size="sm" class="ml-2" @click="deleteReview(review)">Delete</b-button>
                    </div>
                </b-list-group-item>
            </b-list-group>
          </div>
          

          <div class="mt-4 pt-4 pb-4 pl-4 pr-4 bg">
              <h4 class="mt-2 pb-2 text-center">Leave a Review</h4>
                <b-form @submit="onSubmit">
                    <b-row>
                      <b-col v-if="show">
                        <b-form-group label="ID">
                          <b-form-input v-model="id" disabled></b-form-input>
                        </b-form-group>
                      </b-col>

                      <b-col>
                        <b-form-group label="Name">
                          <b-form-input v-model="name" placeholder="Enter your name, or leave anonymous reviews "></b-form-input>
                        </b-form-group>
                      </b-col>

                      <b-col>
                        <b-form-group label="Rating">
                          <b-form-select  v-model="rating" :options="rates" required></b-form-select>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-form-group label="Comment">
                      <b-form-textarea  v-model="comment" required rows="4" max-rows="10" placeholder="Enter your comment"></b-form-textarea>
                    </b-form-group>

                    <div class="text-center pb-2">
                      <b-button variant="primary" type="submit" class="sub-button">{{submit}}</b-button>
                    </div>
                </b-form>              
          </div>
        </b-container>
    </div>                  
</template>


<script>
import ReviewService from '../service/reviewService'
import Review from '../model/review'

  export default {
    props: ['review_show'],

    data() {
      return {
        show: false,
        submit: 'Submit',
        isUpdate: false,
        title: 'Customer Reviews',
        reviews: [],
        id:'',
        rating: '',
        name: '',
        date: '',
        comment: '',
        rates: [1,2,3,4,5],
      }
    },

    created() {
      if (this.review_show != undefined) {
        this.show = this.review_show
        this.title =  'Customer Review Management'
      }

      new ReviewService().getAllReviews().then(data => {
        this.reviews = data.data
      })
    },

    methods: {

        onSubmit(){
          const name = this.name == '' ? 'Anonymous' : this.name
          const review = new Review(name, this.rating, this.comment)

          if (this.isUpdate) {
            new ReviewService().updateReview(review, this.id)
          } else {
            new ReviewService().saveReview(review)
          }
        }, 

        updateReview(review) {
            this.id = review.id
            this.rating = review.rating
            this.name = review.name
            this.date = review.date
            this.comment = review.comment

            this.isUpdate = true
            this.submit = 'Update'
        },

        deleteReview(review) {
          new ReviewService().deleteReview(review.id).then(this.reviews.splice(this.reviews.findIndex(a => a.id === review.id) , 1))
        }
      }
  }
</script>

<style scoped>
.rate {
   color: #b38600;
}

.sub-button {
  width: 50%;
}

.bg {
    background-color: #ebf0fa;
    border-radius: 10px;
}

</style>
<template>
<div>
  <b-navbar class="nav" toggleable="lg" variant="info">
    <b-navbar-brand class="hotel" :to="{ name: 'home' }" >Windy Ham Hotel</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="menu">
        <b-nav-item href="#" class="mr-4" :to="{ name: 'findreservation' }">MODIFY A RESERVATION</b-nav-item>
        <b-nav-item href="#" class="mr-4" :to="{ name: 'review' }">REVIEW</b-nav-item>
        <b-nav-item href="#" class="mr-4" :to="{ name: 'review' }">HOTEL SERVICES</b-nav-item>
        <b-nav-item-dropdown text="ROOM SERVICES" class="pl-3">
            <b-dropdown-item href="#" :to="{ name: 'hotelmanagement' }">FOOD</b-dropdown-item>
            <b-dropdown-item href="#" :to="{ name: 'roommanagement' }">DRINKS</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto menu">
          <b-nav-item-dropdown text="MANAGEMENT" class="pl-3" v-if="isShown" >
                  <b-dropdown-item href="#" :to="{ name: 'hotelmanagement' }">Hotels</b-dropdown-item>
                  <b-dropdown-item href="#" :to="{ name: 'roommanagement' }">Rooms</b-dropdown-item>
                  <b-dropdown-item href="#">Hotel Services</b-dropdown-item>
                  <b-dropdown-item href="#">Room Services</b-dropdown-item>
                  <b-dropdown-item href="#">Emplyees</b-dropdown-item>
          </b-nav-item-dropdown>

           <b-nav-item class="signin" href="#" @click="login">
          {{status}}
        </b-nav-item>

        <b-modal
          id="modal-login"
          ref="modal"
          title="Admin Login"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              label="User Name"
              label-for="id-input"
              invalid-feedback="ID is required"
              :state="idState"
            >
            <b-form-input
                id="name-input"
                v-model="id"
                :state="idState"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Password"
              label-for="password-input"
              invalid-feedback="Password is required"
              :state="passwordState"
            >
              <b-form-input
                password="password-input"
                v-model="password"
                :state="passwordState"
                required
              ></b-form-input>
             
            </b-form-group>

            <h6 v-if="isMatched">Your ID or Password is incorrect, please try again </h6>

          </form>
        </b-modal>


      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
  export default {
    data() {
    
      return {
        isShown: false,
        status: "ADMIN LOGIN",
        isMatched: false,

        id: '',
        idState: null,
        submittedids: [],

        password: '',
        passwordState: null,
        submittedpasswords: []

      }
    },
    methods: {

      login() {
        this.isMatched = false
        if (this.status === "ADMIN LOGIN") {
          this.$bvModal.show("modal-login")
      
        } else {
          this.status = "ADMIN LOGIN"
          this.$nextTick(() => {
            this.isShown = false;
          });
          this.$router.push("/");
        }
      },

      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.idState = valid
        this.passwordState = valid
        return valid
      },
      resetModal() {
        this.id = ''
        this.idState = null
        this.password = ''
        this.passwordState = null
      },
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.handleSubmit()
      },
      handleSubmit() {

        if (!this.checkFormValidity()) {
          return
        }

        if (this.id != 'admin' && this.password != '123') {
          this.isMatched = true
          this.idState = false
          this.passwordState = false
          this.resetModal()
         
          return
        }

        this.isShown = true
        this.status = 'LOGOUT'
        // this.$router.push("dashboard");

        this.$nextTick(() => {
          this.$bvModal.hide('modal-login')
        })
      },
    }
  }
</script>


<style scoped>

  .nav {
    height: 60px;
    background-color: #ebf0fa!important;
  }

  .hotel {
    color: #000!important;
    font: bold 26px  Marker American Typewriter, serif;
  }

  .signin {
    color: #b38600!important;
  }

  h6 {
    color: red
  }

</style>

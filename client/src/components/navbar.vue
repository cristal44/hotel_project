<template>
<div>
  <b-navbar class="nav" toggleable="lg" variant="info">
    <b-navbar-brand class="hotel" :to="{ name: 'home' }" >Windy Ham Hotel</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="menu">
        <b-nav-item href="#" class="mr-4" :to="{ name: 'findreservation' }">MODIFY A RESERVATION</b-nav-item>
      </b-navbar-nav>


      <b-navbar-nav class="ml-auto menu">
        <b-nav-item href="#" class="mr-4" v-if="isShown" :to="{ name: 'room' }">CHECK ROOMS</b-nav-item>
        <b-nav-item href="#" class="mr-4" v-if="isShown" :to="{ name: 'customer' }">GEST INFO</b-nav-item>
        <b-nav-item class="signin" href="#" @click="login">
          {{status}}
        </b-nav-item>

        <b-modal
          id="modal-login"
          ref="modal"
          title="Employee Login"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              label="Employee ID"
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
        status: "SIGN IN",

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
        if (this.status === "SIGN IN") {
          this.$bvModal.show("modal-login")
      
        } else {
          this.status = "SIGN IN"
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
        this.$nextTick(() => {
          this.$bvModal.hide('modal-login')
        })

        this.isShown = true
        this.status = "SIGN OUT"
      }
    

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

</style>

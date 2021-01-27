<template>
        <b-container fluid class="bg-primary py-5 vh-100">
          <b-row class="justify-content-md-center">
              <b-col sm="12" md="12" lg="6" xl="6">
                  <b-img class="mb-4" alt="NYSL logo" width="100" height="100" src="../assets/images/nysl_logo.png"></b-img>

                  <h2 class="mb-3 text-white">Sing Up</h2>
 
                        <b-form @submit.prevent="singUp">
                            <label for="inputEmail" class="sr-only">Email </label>
                            <b-form-input
                                id="inputEmail"
                                v-model="email"
                                type="email"
                                placeholder="Enter email"
                                required
                            ></b-form-input>
                            <br />
                            <label for="inputPassword" class="sr-only">Password</label>
                            <b-form-input
                                id="inputPassword"
                                v-model="password"
                                type="password"
                                placeholder="Password"
                                required
                            ></b-form-input>
                            <br />
                            <b-button type="submit" variant="secondary">Sign Up</b-button>
                            
                        </b-form>
                         <p class="text-white">
                          <small>ALREADY HAVE AN ACCOUNT?
                          <router-link to="/"><b class="text-secondary">LOG IN</b></router-link></small>
                          </p>
              </b-col>
          </b-row>          
        </b-container>

</template>
<script>
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    singUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
          .then( () =>  {
            this.$router.replace('/')
          })
          .catch(function(error) {
            console.log(error.message)
          });
    }
  }
}
</script>
<style>
</style>
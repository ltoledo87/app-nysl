<template>
        <b-container fluid class="bg-primary py-2 vh-100">
          <b-row class="justify-content-md-center">
              <b-col sm="12" md="12" lg="6" xl="6">
                  <b-img class="mb-4" alt="NYSL logo" width="100" height="100" src="../assets/images/nysl_logo.png"></b-img>

                  <h2 class="mb-3 text-white">Log In</h2>
 
                        <b-form id="loginForm" @submit.prevent="logIn">
                            <label for="Email" class="sr-only">Email </label>
                            <b-form-input
                                id="inputEmail"
                                v-model="email"
                                type="email"
                                placeholder="Enter email"
                                required
                                @blur="validateEmail()"
                            ></b-form-input>
                            <br />
                            <label for="Password" class="sr-only">Password</label>
                            <b-form-input
                                id="inputPassword"
                                v-model="password"
                                type="password"
                                placeholder="Password"
                                required
                            ></b-form-input>
                            <br />
                            <b-button id="btLogin" type="submit" variant="secondary">Login</b-button>
                            
                        </b-form>
                         <p class="text-white">
                          <small>NEED A ACCOUNT?
                          <router-link to="/register"><b class="text-secondary">SIGN UP</b></router-link></small>
                          </p>
                          
              </b-col>
          </b-row>
                                
        </b-container>
</template>
<script>
import firebase from "firebase/app";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      emailValid:null,
      userLogged: null,
      errorMsg: null
    }
  },
  methods: {
    logIn() {

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
          .then( () =>  {
            this.userLogged = true;
            console.log(this.userLogged);
            this.$router.replace('home');
            this.setUser();


          })
          .catch(error =>{
            this.userLogged = false;
            console.log(this.userLogged);
            this.errorMsg = error.message;
            this.makeToastError()

          });
    },
    setUser() {
      this.$store.dispatch("setUser");
    },
     makeToastError() {
        this.$bvToast.toast(this.errorMsg, {
          title: `NYSL ERROR`,
          toaster: 'b-toaster-top-center',
          variant: 'danger',
          solid: true
        })
    },
    validateEmail() {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(this.email)) {
                this.emailValid = true;
                console.log(this.emailValid)
            } else {
                
                this.emailValid= false;
                console.log(this.emailValid)
                this.$bvToast.toast('Please enter a valid email address', {
                title: `NYSL`,
                toaster: 'b-toaster-top-center',
                variant: 'danger',
                solid: true
                })
            }
    }
    
  }
}
</script>
<style>
</style>

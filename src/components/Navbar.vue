<template>
  <b-navbar toggleable type="dark" variant="primary" v-show="$route.path!=='/' && $route.path!=='/register'">

    <b-navbar-toggle target="navbar-toggle-collapse">
    </b-navbar-toggle>

    <b-navbar-brand class="mx-auto"><router-link to="/"><img src="../assets/images/nysl_logo.png" alt="logo">  NYSL  </router-link></b-navbar-brand>

    <!-- <b-navbar-nav right>
      <b-button size="sm" class="my-2 my-sm-0" @click="logOut">Sign Out {{userName}}</b-button>
    </b-navbar-nav> -->
    <b-nav-item-dropdown  right>
          <template #button-content>
            <em v-if="user"><b-avatar size="2em" variant="light"></b-avatar><br>
         <small>{{user}}</small></em>
          </template>
          <b-dropdown-item @click="logOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
    
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <hr>
      <b-navbar-nav class="ml-auto">
        <b-nav-item ><router-link to="/home">Home</router-link></b-nav-item>
        <b-nav-item ><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item ><router-link to="/contact">Contact</router-link></b-nav-item>
        <b-nav-item ><router-link to="/registration">Registration</router-link></b-nav-item>
        <b-nav-item ><router-link to="/game_info">Game Information</router-link></b-nav-item>
        <b-nav-item ><router-link to="/rules">Rules</router-link></b-nav-item>
        <b-nav-item ><router-link to="/chat">Chat</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    
  </b-navbar>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Navbar',
 computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
      logOut() {
        firebase
          .auth()
          .signOut()
            .then( () => {
              //this.$router.replace('/')
            })
      },
      
  },
}

</script>

<style scope>

</style>
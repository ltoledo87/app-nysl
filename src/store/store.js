import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import 'firebase/auth';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state :{
        direccion : 'Las Pelotas 008',
        comuna : 'Santiago',
        user: null,
    },
    mutations:{
        SET_USER: (state) => {
            var user = firebase.auth().currentUser.email;
            state.user = user.substr(0,(user.indexOf("@")));
          },

    },
    actions:{
        setUser: context => {
            context.commit("SET_USER");
          },

    },
    getters:{
        datoscontactabilidad(state){
            return ` ${state.direccion} ${state.comuna} `
        },
        getUser: (state) => state.user 

    },
    
})
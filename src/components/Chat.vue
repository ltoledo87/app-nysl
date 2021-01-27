<template>
<b-container fluid >
  <b-row class="bg-secondary py-3 text-white">
    <b-col cols="9">
      <h2>{{user}}</h2>
    </b-col>
    <b-col cols="3">
      <h3>{{title}}</h3>
    </b-col>
  </b-row>
  <div id="divChat" class="w-100 p-0 m-0">
      <b-row  align-h="center" class="justify-content-md-center py-2 " v-for="(message, index) in messages"
    :key="index">

      <b-col v-if="message.username !== userName" cols="2" class="text-center" sm="4" md="4" lg="1" xl="1">
         <b-avatar size="2em" variant="primary"></b-avatar><br>   
        
      </b-col>
      <b-col cols="8" class="bg-info border rounded mx-2" sm="6" md="6" lg="4" xl="4">
        <b-row>
          <b-col cols="12" class="text-primary text-left text-muted">
            <span><small>{{message.username}}</small></span>
          </b-col>
          <b-col cols="12" class="text-justify">
            <span>{{ message.text }}</span>
          </b-col>
          <b-col cols="12" class="text-muted text-right" >
            <span ><small>{{message.datetime}}</small></span>
          </b-col>
        </b-row>
      </b-col>
       <b-col v-if="message.username === userName" cols="2" class="text-center" sm="4" md="4" lg="1" xl="1">
         <b-avatar size="2em" variant="secondary" ></b-avatar><br>   
        
      </b-col>
    </b-row>

  </div>

    <b-row class="justify-content-md-center py-1">
     <b-col cols="12" class="p-3" sm="12" md="12" lg="6" xl="6"> 
        <b-input-group class="mb-3">
          <b-form-textarea v-model="showMessage" type="text" rows="1"></b-form-textarea>
          <b-input-group-append>
            <b-button size="sm" text="Button" variant="primary" @click="sendMessage">Send</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Chat",
   props: {
    title: String,
  },
  data() {
    return {
      user:'',
      userName: '',
      showMessage: "",
      messages: [],
      datetime: null
    };
  },
  methods: {
    sendMessage() {

      const today = new Date()
      const date = today.getFullYear()+'-'+('0' + (today.getMonth()+1)).slice(-2)+'-'+today.getDate();
      const time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
      const dateTime = date+' '+time;
      this.datetime = dateTime;

      const message = {
        text: this.showMessage,
        username: this.userName,
        datetime: this.datetime
      };
      firebase
        .database()
        .ref("messages")
        .push(message);
      this.showMessage = "";
    }
  },
  mounted() {
    var user= firebase.auth().currentUser.email;
    this.user = user.substr(0,(user.indexOf("@")));
    this.userName = firebase.auth().currentUser.email;
    let viewMessage = this;
    const itemsRef = firebase.database().ref("messages");
    itemsRef.on("value", snapshot => {
      let data = snapshot.val();
      let messages = [];
      if(data !== null){
      Object.keys(data).forEach(key => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text,
          datetime: data[key].datetime
        });
      });
      }
      viewMessage.messages = messages;
    });
  }
};
</script>
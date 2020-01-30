import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './components/firebaseConfig'
import axios from "axios"

const firebaseApp = firebase.initializeApp(firebaseConfig)

let app;

firebase.auth().onAuthStateChanged(user=>{
  console.log(user);
  if(!app){
    app=new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

export default firebaseApp.firestore()
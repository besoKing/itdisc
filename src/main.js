import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import firebase from "firebase/app";



Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8oKP823_hDpJKH-p_MaOcic8ybUGNiQA",
  authDomain: "itdisc-89d65.firebaseapp.com",
  databaseURL: "https://itdisc-89d65.firebaseio.com",
  projectId: "itdisc-89d65",
  storageBucket: "itdisc-89d65.appspot.com",
  messagingSenderId: "809220003241",
  appId: "1:809220003241:web:3855dad69d442d3e90a0b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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



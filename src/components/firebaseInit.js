import Vue from 'vue'
import VueRouter from 'vue-router'

import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

Vue.use(VueRouter)
Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(firebaseConfig)

let app;

firebase.auth().onAuthStateChanged(user=>{
  console.log(user);
  if(!app){
    app=new Vue({
      Router,
      render: h => h(App)
    }).$mount('#app')
  }
})

export default firebaseApp.firestore()
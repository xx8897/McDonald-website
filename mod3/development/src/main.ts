import { createApp } from 'vue'
import "@/assets/css/bootstrap-reboot.min.css"
import "@/assets/scss/base.scss"
import App from './App.vue'
import store from './store'
import firebase from 'firebase/compat/app'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDvI-N7ZAocYOPOv_DpVvikodoYjdGt-G8",
    authDomain: "vue-example-d1f27.firebaseapp.com",
    projectId: "vue-example-d1f27",
    storageBucket: "vue-example-d1f27.appspot.com",
    messagingSenderId: "1022307340295",
    appId: "1:1022307340295:web:9c3a140052888898c99aa2"
  };

firebase.initializeApp(firebaseConfig);
//firebase.analytics();
//export const db = firebase.firestore();
//export const firebaseAuth = firebase.auth();
//export const db = firebase.initializeApp(firebaseConfig).firestore()

createApp(App).use(store).mount('#app')

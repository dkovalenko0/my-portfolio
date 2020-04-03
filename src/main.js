import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import Loader from "./components/app/Loader";
import "./registerServiceWorker";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

Vue.config.productionTip = false;
Vue.component("Loader", Loader);
// Vue.forceUpdate();

firebase.initializeApp({
  apiKey: "AIzaSyDcg4GY2q0H-McAkFTSMyqNQk2XTQ_6Wr0",
  authDomain: "portfolio-54d34.firebaseapp.com",
  databaseURL: "https://portfolio-54d34.firebaseio.com",
  projectId: "portfolio-54d34",
  storageBucket: "portfolio-54d34.appspot.com",
  messagingSenderId: "677051811677",
  appId: "1:677051811677:web:440878a01bb42160cc0ab4"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

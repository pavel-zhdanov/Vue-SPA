import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import fb from 'firebase/app';
import 'firebase/auth';

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store,
  created() {
    let config = {
      apiKey: 'AIzaSyDxyRN3yWwztC8n6YsaPoq2spSZSWjDNsg',
      authDomain: 'notes-10114.firebaseapp.com',
      databaseURL: 'https://notes-10114.firebaseio.com',
      projectId: 'notes-10114',
      storageBucket: 'notes-10114.appspot.com',
      messagingSenderId: '198700104689',
    };
    fb.initializeApp(config);
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    });
    this.$store.dispatch('fetchAds');
  },
});

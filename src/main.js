import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import fb from 'firebase/app';
import 'firebase/auth';
import config from './config.js';

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
  store,
  created() {
    fb.initializeApp(config);
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    });
    this.$store.dispatch('fetchAds');
  },
});

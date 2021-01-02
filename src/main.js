import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/';

import spaceOnDash from './filters/space-on-dash.filter.js';

import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/styles.css';

Vue.config.productionTip = false;

Vue.filter('spaceOnDashFilter' ,spaceOnDash)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

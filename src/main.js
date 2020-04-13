import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faLinkedin, faGithub, faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

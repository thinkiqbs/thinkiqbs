import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import store from '@/store'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'

import VueAxios from 'vue-axios'


// App.component('vue-phone-number-input', VuePhoneNumberInput);



window.$ = window.jQuery = require('jquery');












// axios.defaults.baseURL = "https://writingpropel.com";
axios.defaults.baseURL = "http://127.0.0.1:8000/";
//axios.defaults.baseURL = "https://backend.iqsacco.com/";
// axios.defaults.baseURL = "http://167.99.43.66:8000/";
// axios.defaults.baseURL = "http://www.writingpropel.com:8000/";

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresLogin)) {
        if (!store.getters.loggedIn) {
            next({ name: "login" });
        } else {
            next();
        }
    } else {
        next();
    }
});



createApp(App).use(router).use(store).use(VueSweetalert2).use(VueAxios, axios).mount("#app");
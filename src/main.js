import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import store from '@/store'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'

import VueAxios from 'vue-axios'
import "../src/assets/css/style.css"





import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';



const globalOptions = {
    mode: 'auto',
};








// App.component('vue-phone-number-input', VuePhoneNumberInput);



window.$ = window.jQuery = require('jquery');

// const AUTH_TOKEN = store.state.accessToken;


store.getters.config
store.state.config







axios.defaults.baseURL = "http://127.0.0.1:8000/";
//axios.defaults.baseURL = "https://backend.iqsacco.com/";
// axios.defaults.headers.common['Authorization'] =
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';







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



createApp(App).use(router).use(store).use(VueSweetalert2).use(VueAxios, axios).use(VueTelInput, globalOptions).mount("#app");
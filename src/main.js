import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import store from '@/store'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'

import VueAxios from 'vue-axios'
import VueExcelXlsx from "vue-excel-xlsx";
// import "@/assets/css/style.css"
















// App.component('vue-phone-number-input', VuePhoneNumberInput);



window.$ = window.jQuery = require('jquery');

// const AUTH_TOKEN = store.state.accessToken;


store.getters.config
store.state.config







axios.defaults.baseURL = "http://127.0.0.1:8000/";
// axios.defaults.baseURL = "https://backend.iqsacco.com/";
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



createApp(App).use(router).use(store).use(VueExcelXlsx).use(VueSweetalert2).use(VueAxios, axios).mount("#app");
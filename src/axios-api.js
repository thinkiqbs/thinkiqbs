import axios from "axios";
import store from "./store";
// import { store } from "./store";

// import { mapActions } from "vuex";
// import { mapGetters } from "vuex";
// import { mapMutations } from "vuex";
// import { mapState } from "vuex";


export function accessToken() {
    return store.state.accessToken;
}


export function username() {
    return store.state.username;

}

console.log("username", accessToken);


export function password() {
    return String(store.state.password);
}

// var Buffer = require('buffer/').Buffer;





// const username = username;
// const password = "";

// const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

const getAPI = axios.create({

    baseURL: "http://127.0.0.1:8000/",
    // baseURL: "https://backend.iqsacco.com/",

    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer + ${accessToken()}`,


    },

    // auth: {
    //     username: username,
    //     password: password, //store.state.password,

    //     timeout: 10000,
    // },
});

export { getAPI };
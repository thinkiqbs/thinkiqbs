import axios from "axios";
// import store from "./store";

// import { mapActions } from "vuex";
// import { mapGetters } from "vuex";
// import { mapMutations } from "vuex";
// import { mapState } from "vuex";

var Buffer = require('buffer/').Buffer;





const username = "14632336";
const password = "Starten1@";

const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

const getAPI = axios.create({

    baseURL: "http://127.0.0.1:8000/",
    // baseURL: "https://backend.iqsacco.com/",

    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Basic ${token}`

    },

    timeout: 10000,
});

export { getAPI };
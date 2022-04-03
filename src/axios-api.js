import axios from "axios";
import store from "@/store";
// import { mapActions } from "vuex";
// import { mapGetters } from "vuex";
// import { mapMutations } from "vuex";
// import { mapState } from "vuex";

const username = this.store.state.username;
const password = this.store.state.password;



const getAPI = axios.create({

    baseURL: "http://127.0.0.1:8000/",
    // baseURL: "https://backend.iqsacco.com/",

    // headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //     "Authorization": "Bearer " + 'someToken',
    // },
    auth: {
        username: username,
        password: password
    },
    timeout: 10000,
});

export { getAPI };
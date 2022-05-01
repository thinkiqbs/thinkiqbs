import axios from "axios";
//import store
import store from "./store";










// get username from store
const getUsername = store.state.username;




// get password from store
const getPassword = store.state.password;



const getAPI = axios.create({

    // baseURL: "http://127.0.0.1:8000/",
    // 
    baseURL: "https://backend.iqsacco.com/",

    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer  ${accessToken}`,


    },

    auth: {
        username: getUsername,
        password: getPassword, //store.state.password,

        timeout: 10000,
    },

});

// console.log("me", getUsername, "and", getPassword);

export { getAPI };
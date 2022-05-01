import axios from "axios";
// import store from "@/store";









// get username from state
const getUsername = (state) => {
    return state.username;
};

// get password from state
const getPassword = (state) => {
    return state.password;
};


const getAPI = axios.create({

    baseURL: "http://127.0.0.1:8000/",
    // 
    // baseURL: "https://backend.iqsacco.com/",

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

export { getAPI };
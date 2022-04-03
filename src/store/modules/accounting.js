// import axios from "axios";
// import { getAPI } from "@/axios-api";


// const state = {
//     document: [],
// };
// const getters = {
//     allDocuments: (state) => state.document,
// };
// const actions = {
//     async fetchDocuments({ commit }) {
//         const response = await axios.get("/finance/api/v1/documents/");
//         commit("setDocuments", response.data.results);
//     },
// };
// const mutations = {
//     setDocuments: (state, document) => (state.document = document),
// };

// export default {
//     state,
//     getters,
//     actions,
//     mutations,
// };
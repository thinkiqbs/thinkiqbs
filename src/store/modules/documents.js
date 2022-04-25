// import axios from "axios";
import { getAPI } from "@/axios-api";

const state = {
    document: [],
    fosadocuments: [],
};
const getters = {
    allDocuments: (state) => state.document,
    allFosadocuments: (state) => state.fosadocuments,
};
const actions = {
    async fetchDocuments({ commit }) {
        const response = await getAPI.get("/finance/api/v1/documents/");
        commit("setDocuments", response.data.results);
    },

    async fetchfosaDocuments({ commit }) {
        const response = await getAPI.get("/finance/api/v1/fosadocuments/");
        commit("setfosaDocuments", response.data.results);
    },
};
const mutations = {
    setDocuments: (state, document) => (state.document = document),
    setfosaDocuments: (state, fosadocuments) => (state.fosadocuments = fosadocuments),

};

export default {
    state,
    getters,
    actions,
    mutations,
};
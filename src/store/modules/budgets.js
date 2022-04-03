// import axios from "axios";
import { getAPI } from "@/axios-api";

const state = {
    loans: [],
};
const getters = {
    // allLoans: (state) => state.loans,
};
const actions = {
    async fetchLoans({ commit }) {
        const response = await getAPI.get("/loans/api/v1/loans/");
        commit("setLoans", response.data.results);
    },
};
const mutations = {
    setLoans: (state, loans) => (state.loans = loans),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
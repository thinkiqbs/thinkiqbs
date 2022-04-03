import { getAPI } from "@/axios-api";

const state = {
    loans: [],
    guarantors: [],
};
const getters = {
    allLoans: (state) => state.loans,
    allGuarantors: (state) => state.guarantors,
};
const actions = {
    async fetchLoans({ commit }) {
        const response = await getAPI.get("/loans/api/v1/loans/");
        commit("setLoans", response.data.results);
    },
    async fetchGuarantors({ commit }) {
        const response = await getAPI.get("/loans/api/v1/guarantors/");
        commit("setGuarantors", response.data.results);
    },
};
const mutations = {
    setLoans: (state, loans) => (state.loans = loans),
    setGuarantors: (state, guarantors) => (state.guarantors = guarantors),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
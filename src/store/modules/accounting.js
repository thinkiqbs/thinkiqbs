import { getAPI } from "@/axios-api";


const state = {
    shares: [],
    openingbalances: [],
};
const getters = {
    allShares: (state) => state.shares,
    allOb: (state) => state.openingbalances,
};
const actions = {
    async fetchShares({ commit }) {
        const response = await getAPI.get("/finance/api/v1/Shares/");
        commit("setShares", response.data.results);
    },
    async fetchOb({ commit }) {
        const response = await getAPI.get("/finance/api/v1/openingbalance/");
        commit("setOb", response.data.results);
    },
};
const mutations = {
    setShares: (state, shares) => (state.shares = shares),
    setOb: (state, openingbalance) => (state.openingbalance = openingbalance),

};

export default {
    state,
    getters,
    actions,
    mutations,
};
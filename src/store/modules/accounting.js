import { getAPI } from "@/axios-api";


const state = {
    shares: [],
    openingbalances: [],
    openingbalancesdeposits: [],
    openingbalancesloans: [],


};
const getters = {
    allShares: (state) => state.shares,
    allOb: (state) => state.openingbalances,
    allObdeposits: (state) => state.openingbalancesdeposits,
    allObloans: (state) => state.openingbalancesloans,


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
    async fetchObdeposits({ commit }) {
        const response = await getAPI.get("/finance/api/v1/depositsopentingbalance/");
        commit("setObdeposits", response.data.results);
    },
    async fetchObloans({ commit }) {
        const response = await getAPI.get("/finance/api/v1/loansopeningbalance/");
        commit("setObloans", response.data.results);
    },
};
const mutations = {
    setShares: (state, shares) => (state.shares = shares),
    setOb: (state, openingbalances) => (state.openingbalances = openingbalances),
    setObdeposits: (state, openingbalancesdeposits) => (state.openingbalancesdeposits = openingbalancesdeposits),
    setObloans: (state, openingbalancesloans) => (state.openingbalancesloans = openingbalancesloans),

};

export default {
    state,
    getters,
    actions,
    mutations,
};
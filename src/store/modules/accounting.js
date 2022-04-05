import { getAPI } from "@/axios-api";


const state = {
    shares: [],
};
const getters = {
    allShares: (state) => state.shares,
};
const actions = {
    async fetchShares({ commit }) {
        const response = await getAPI.get("/finance/api/v1/Shares/");
        commit("setShares", response.data.results);
    },
};
const mutations = {
    setShares: (state, shares) => (state.shares = shares),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
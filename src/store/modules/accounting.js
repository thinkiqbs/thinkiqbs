import { getAPI } from "@/axios-api";


const state = {
    shares: [],
    openingbalances: [],
    openingbalancesdeposits: [],
    openingbalancesloans: [],
    openingbalancesshares: [],
    receipts: [],



};
const getters = {
    allShares: (state) => state.shares,
    allOb: (state) => state.openingbalances,
    allObdeposits: (state) => state.openingbalancesdeposits,
    allObloans: (state) => state.openingbalancesloans,
    allObshares: (state) => state.openingbalancesshares,
    allReceipts: (state) => state.receipts,




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
    async fetchObshares({ commit }) {
        const response = await getAPI.get("/finance/api/v1/sharesopeningbalance/");
        commit("setObshares", response.data.results);
    },
    async fetchReceipts({ commit }) {
        const response = await getAPI.get("/finance/api/v1/PaymentsReceived/");
        commit("setReceipts", response.data.results);
    }
};

const mutations = {
    setShares: (state, shares) => (state.shares = shares),
    setOb: (state, openingbalances) => (state.openingbalances = openingbalances),
    setObdeposits: (state, openingbalancesdeposits) => (state.openingbalancesdeposits = openingbalancesdeposits),
    setObloans: (state, openingbalancesloans) => (state.openingbalancesloans = openingbalancesloans),
    setObshares: (state, openingbalancesshares) => (state.openingbalancesshares = openingbalancesshares),
    setReceipts: (state, receipts) => (state.receipts = receipts),


};

export default {
    state,
    getters,
    actions,
    mutations,
};
import { getAPI } from "@/axios-api";

const state = {
    loans: [],
    guarantors: [],
    loansexports: [],
    loansimport: [],
};
const getters = {
    allLoans: (state) => state.loans,
    allGuarantors: (state) => state.guarantors,
    allLoansExports: (state) => state.loansexports,
    allLoansImports: (state) => state.loansimport,




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
    async fetchLoansExport({ commit }) {
        const response = await getAPI.get("/loans/api/v1/loansExport/");
        commit("setLoansExports", response.data.results);
    },
    async fetchLoansImport({ commit }) {
        const response = await getAPI.get("/loans/api/v1/loansImport/");
        commit("setLoansImports", response.data.results);
    },
};
const mutations = {
    setLoans: (state, loans) => (state.loans = loans),
    setGuarantors: (state, guarantors) => (state.guarantors = guarantors),
    setLoansExports: (state, loansexports) => (state.loansexports = loansexports),
    setLoansImports: (state, loansimport) => (state.loansimport = loansimport),

};

export default {
    state,
    getters,
    actions,
    mutations,
};
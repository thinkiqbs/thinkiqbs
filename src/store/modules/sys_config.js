// import getAPI from "getAPI";
import { getAPI } from "@/axios-api";

const state = {
    org1: [],
    user: [],
    userinfo: [],
    employerinfo: [],
    savingtype: [],
    loantype: [],
    county: [],
};
const getters = {
    currentUser: (state) => state.user,
    allOrg: (state) => state.org1,
    allUser: (state) => state.userinfo,
    allEmployer: (state) => state.employerinfo,
    allSavinttype: (state) => state.savingtype,
    allLoantype: (state) => state.loantype,
    allCounty: (state) => state.county,
};
const actions = {
    async fetchOrg({ commit }) {
        const response = await getAPI.get("sys_config/api/v1/OrganizationProfile/");
        commit("setOrg", response.data.results);
    },
    async fetchUser({ commit }) {
        const response = await getAPI.get("api/user");
        commit("setUser", response.data.results);
    },

    async fetchUserinfo({ commit }) {
        const response = await getAPI.get("/members/api/v1/MemberDetails/");
        commit("setUserinfo", response.data.results);
    },

    async fetchEmployerinfo({ commit }) {
        const response = await getAPI.get("/sys_config/api/v1/EmployerProfile/");
        commit("setEmployerinfo", response.data.results);
    },

    async fetchSavingtype({ commit }) {
        const response = await getAPI.get("/sys_config/api/v1/SavingsType/");
        commit("setSavingtype", response.data.results);
    },
    async fetchLoantype({ commit }) {
        const response = await getAPI.get("/sys_config/api/v1/LoanType/");
        commit("setLoantype", response.data.results);
    },
    async fetchCounty({ commit }) {
        const response = await getAPI.get("/sys_config/api/v1/county/");
        commit("setCounty", response.data.results);
    },
};
const mutations = {
    setOrg: (state, org1) => (state.org1 = org1),
    setUser: (state, user) => (state.user = user),

    setUserinfo: (state, userinfo) => (state.userinfo = userinfo),
    setSavingtype: (state, savingtype) => (state.savingtype = savingtype),
    setLoantype: (state, loantype) => (state.loantype = loantype),
    setCounty: (state, county) => (state.county = county),

    setEmployerinfo: (state, employerinfo) => (state.employerinfo = employerinfo),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
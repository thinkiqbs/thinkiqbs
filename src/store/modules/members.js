// import axios from "axios";
import { getAPI } from "@/axios-api";


const state = {
    members: [],
    deposits: [],
    memberimports: [],
    memberpledgesimport: [],

};
const getters = {
    allMembers: (state) => state.members,

    allDeposits: (state) => state.deposits,
    allMemberImports: (state) => state.memberimports,
    allMemberPledgesImports: (state) => state.memberpledgesimport,


};
const actions = {
    async fetchMembers({ commit }) {
        const response = await getAPI.get("/members/api/v1/MemberDetails/");

        commit("setMembers", response.data.results);
    },
    async fetchDeposits({ commit }) {
        const response = await getAPI.get("/members/api/v1/MonthDeposits/");
        commit("setDeposits", response.data.results);
    },
    async fetchMemberImports({ commit }) {
        const response = await getAPI.get("/members/api/v1/Import/");
        commit("setMemberImports", response.data.results);
    },

    async fetchMemberPledgesImports({ commit }) {
        const response = await getAPI.get("/members/api/v1/ImportMonthDeposits/");
        commit("setMemberPledgesImports", response.data.results);
    },
};
const mutations = {
    setMembers: (state, members) => (state.members = members),
    setDeposits: (state, deposits) => (state.deposits = deposits),
    setMemberImports: (state, memberimports) => (state.memberimports = memberimports),
    setMemberPledgesImports: (state, memberpledgesimport) => (state.memberpledgesimport = memberpledgesimport),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
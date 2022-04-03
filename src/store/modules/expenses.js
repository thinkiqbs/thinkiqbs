// import axios from "axios";
import { getAPI } from "@/axios-api";

const state = {
    expenses: [],
};
const getters = {
    allExpenses: (state) => state.expenses,
};
const actions = {
    async fetchExpenses({ commit }) {
        const response = await getAPI.get("/finance/api/v1/Expenses/");
        commit("setExpenses", response.data.results);
    },
};
const mutations = {
    setExpenses: (state, expenses) => (state.expenses = expenses),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
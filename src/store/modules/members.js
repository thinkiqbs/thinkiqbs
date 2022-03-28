import axios from "axios";

const state = {
  members: [],
  deposits: [],
};
const getters = {
  allMembers: (state) => state.members,

  allDeposits: (state) => state.deposits,
};
const actions = {
  async fetchMembers({ commit }) {
    const response = await axios.get("/members/api/v1/MemberDetails/");

    commit("setMembers", response.data.results);
  },
  async fetchDeposits({ commit }) {
    const response = await axios.get("/members/api/v1/MonthDeposits/");
    commit("setDeposits", response.data.results);
  },
};
const mutations = {
  setMembers: (state, members) => (state.members = members),
  setDeposits: (state, deposits) => (state.deposits = deposits),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

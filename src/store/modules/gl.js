import axios from "axios";

const state = {
  gl: [],
  accountmaster: [],
};
const getters = {
  allGl: (state) => state.gl,
  allAccountmaster: (state) => state.accountmaster,
};
const actions = {
  async fetchGl({ commit }) {
    const response = await axios.get("/finance/api/v1/Chartofaccounts/");
    commit("setGl", response.data.results);
  },

  async fetchAccountmaster({ commit }) {
    const response = await axios.get("/finance/api/v1/accountmaster/");
    commit("setAccountmaster", response.data.results);
  },
};
const mutations = {
  setGl: (state, gl) => (state.gl = gl),
  setAccountmaster: (state, accountmaster) =>
    (state.accountmaster = accountmaster),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

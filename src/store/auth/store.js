import Vue from "vue";
import Vuex from "vuex";
import { getAPI } from "@/axios-api.js";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    accessToken: null,
    refreshToken: null,
    id: null,
    email: null,
    first_name: null,
    company_id: null,
    last_name: null,
    APIData: "",
  },
  mutations: {
    updateStorage(
      state,
      { access, refresh, email, id, first_name, last_name, company_id }
    ) {
      state.accessToken = access;
      state.refreshToken = refresh;
      state.id = id;
      state.email = email;
      state.company_id = company_id;
      state.first_name = first_name;
      state.last_name = last_name;

      // localStorage.setItem("user-token", access); // store the token in localstorage
    },
    destroyToken(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  getters: {
    loggedIn(state) {
      return state.accessToken != null;
    },
  },
  actions: {
    userLogout(context) {
      if (context.getters.loggedIn) {
        context.commit("destroyToken");
        // localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
      }
    },
    userLogin(context, usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI
          .post("/api/accounts/", {
            username: usercredentials.username,
            password: usercredentials.password,
          })
          .then((response) => {
            context.commit("updateStorage", {
              access: response.data.access_token,
              refresh: response.data.refresh_token,
              id: response.data.user.pk,
              email: usercredentials.username,
              company_id: response.data.results.company_id,
              first_name: response.data.user.first_name,
              last_name: response.data.user.last_name,
            });
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    company() {},
  },
});

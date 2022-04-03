import { createStore } from "vuex";




//Create Store


import loans from "@/store/modules/loans.js";
import members from "@/store/modules/members.js";
import documents from "@/store/modules/documents.js";
import sys_config from "@/store/modules/sys_config.js";
import banking from "@/store/modules/banking.js";
import taxes from "@/store/modules/taxes.js";
import budgets from "@/store/modules/budgets.js";
import expenses from "@/store/modules/expenses.js";
import journals from "@/store/modules/journals.js";
import reports from "@/store/modules/reports.js";
import gl from "@/store/modules/gl.js";
import accounting from "@/store/modules/accounting.js";
import axios from "axios";

import createPersistedState from "vuex-persistedstate";




export default createStore({
    plugins: [createPersistedState()],
    state: {
        accessToken: null,
        refreshToken: null,
        // company_id: null,
        id: null,
        email: null,
        username: null,
        // password: null,
        first_name: null,
        last_name: null,
        APIData: "",
        is_member: "",
    },
    mutations: {
        updateStorage(
            state, { access, refresh, email, username, id, first_name, last_name }
        ) {
            state.accessToken = access;
            state.refreshToken = refresh;
            state.id = id;
            state.username = username;
            // state.password = password;
            state.email = email;
            state.first_name = first_name;
            state.last_name = last_name;

            // localStorage.setItem("user-token", access); // store the token in localstorage
        },
        destroyToken(state) {
            state.accessToken = null;
            state.refreshToken = null;
        },
        company(state, orgProfile) {
            state.company_id = orgProfile;
            console.log(orgProfile);
        },
        ismember(state, membercount) {
            state.is_member = membercount;
            console.log(membercount);
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
                localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
            }
        },
        userLogin(context, usercredentials, ) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/dj-rest-auth/login/", {
                        username: usercredentials.username,
                        password: usercredentials.password,
                    })
                    .then((response, ) => {
                        context.commit("updateStorage", {
                            access: response.data.token,
                            refresh: response.data.refresh_token,
                            id: response.data.user.pk,
                            username: usercredentials.username,
                            // password: usercredentials.password,
                            email: response.data.email,
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

        company({ commit }) {
            axios
                .get("/sys_config/api/v1/OrganizationProfile/", {
                    params: {},
                })
                .then((res) => {
                    commit("company", res.data.results);
                });
        },
        ismember({ commit }) {
            axios
                .get("/members/api/v1/MemberDetails/", {
                    params: {},
                })
                .then((res) => {
                    commit("ismember", res.data.results);
                });
        },
    },

    modules: {
        a: loans,
        b: members,
        c: documents,
        d: sys_config,
        e: banking,
        f: taxes,
        g: budgets,
        h: expenses,
        i: journals,
        j: reports,
        k: gl,
        l: accounting,
    },
});
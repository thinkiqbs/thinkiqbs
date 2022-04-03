// import axios from "axios";
import { getAPI } from "@/axios-api";


const state = {
    Banktransactions: [],
    paymentsmade: [],
    paymentsreceived: [],
    Banks: [],
};
const getters = {
    allBanktransactions: (state) => state.Banktransactions,
    allPaymentsmade: (state) => state.paymentsmade,
    allPaymentsreceived: (state) => state.paymentsreceived,
    allBanks: (state) => state.Banks,
};
const actions = {
    async fetchBanktransactions({ commit }) {
        const response = await getAPI.get("/finance/api/v1/Bank_transactions/");

        commit("setBanktransactions", response.data.results);
    },
    async fetchPaymentsmade({ commit }) {
        const response = await getAPI.get("/finance/api/v1/Payments/");
        commit("setpaymentsmade", response.data.results);
    },
    async fetchPaymentsreceived({ commit }) {
        const response = await getAPI.get("/finance/api/v1/PaymentsReceived/");
        commit("setpaymentsreceived", response.data.results);
    },
    async fetchBanks({ commit }) {
        const response = await getAPI.get("/finance/api/v1/Bank/");
        commit("setBanks", response.data.results);
    },
};
const mutations = {
    setBanktransactions: (state, Banktransactions) =>
        (state.Banktransactions = Banktransactions),
    setpaymentsmade: (state, paymentsmade) => (state.paymentsmade = paymentsmade),
    setpaymentsreceived: (state, paymentsreceived) =>
        (state.paymentsreceived = paymentsreceived),
    setBanks: (state, Banks) => (state.Banks = Banks),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
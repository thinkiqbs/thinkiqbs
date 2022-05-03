@
<template>
  <div>
    <button href="#" @click="refresh" class="btn btn-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-clockwise"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        />
        <path
          d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RefreshPage",
  methods: {
    ...mapActions([
      "fetchDeposits",
      "fetchDocuments",
      "fetchMembers",
      "fetchOrg",
      "fetchUserinfo",
      "fetchLoans",
      "fetchBanktransactions",
      "fetchPaymentsmade",
      "fetchPaymentsreceived",
      "fetchExpenses",
      "fetchEmployerinfo",
    ]),
    refresh() {
      Promise.all([
        this.$store.dispatch("fetchDeposits"),
        this.$store.dispatch("fetchBanktransactions"),
        this.$store.dispatch("fetchMembers"),
        this.$store.dispatch("fetchLoans"),
        this.$store.dispatch("fetchPaymentsmade"),
        this.$store.dispatch("fetchPaymentsreceived"),
        this.$store.dispatch("fetchBanks"),
        this.$store.dispatch("fetchDocuments"),
        this.$store.dispatch("fetchOrg"),
        this.$store.dispatch("fetchGl"),
        this.$store.dispatch("fetchExpenses"),
        this.$store.dispatch("fetchEmployerinfo"),
      ]).finally(() => {
        // using "finally" so even if there are errors, it stops "loading"
        this.loading = false;
      });
    },

   
  },
};
</script>

<style></style>

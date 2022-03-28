@
<template>
  <div>
    <button href="#" @click="refresh" class="btn btn-success">
      <i class="bi bi-arrow-clockwise"></i>
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
    ]),
    refresh() {
      Promise.all([
        this.$store.dispatch("fetchDeposits"),
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
      ]).finally(() => {
        // using "finally" so even if there are errors, it stops "loading"
        this.loading = false;
      });
    },

    mounted() {
      this.refresh();
    },
  },
};
</script>

<style></style>

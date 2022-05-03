@
<template>
  <div>
    <hr />

    <ul class="list-group">
      <div class="sidebar">
        <li class="nav-item" v-if="token != null">
          <router-link to="/DashBoards"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Dashboard <span class="sr-only">(current)</span></router-link
          >
        </li>

        <li class="nav-item" v-if="token != null">
          <router-link to="/members" exact>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Members<span class="sr-only">(current)</span>
          </router-link>
        </li>

        <li class="nav-item" v-if="token != null">
          <router-link to="/LoansArea" exact>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-file"
            >
              <path
                d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
              ></path>
              <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
            Loans
          </router-link>
        </li>

        <!-- <div class="accordion" id="accordionPanelsStayOpenExample"> -->
        <!-- <li class="nav-item" v-if="token != null">
						<router-link :to="{ name: 'depositschedule' }" exact
							>Deposits
						</router-link>
					</li> -->

        <li class="nav-item" v-if="token != null">
          <router-link to="/BankingActivities" exact>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-bank"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"
              />
            </svg>
            Banking
          </router-link>
        </li>

        <li class="nav-item" v-if="token != null">
          <router-link to="/AccountingPage" exact
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-journal"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
              />
              <path
                d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
              />
            </svg>
            Accounting
          </router-link>
        </li>
        <!-- </div> -->

        <li class="nav-item" v-if="token != null">
          <router-link to="/ReportArea" exact
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bar-chart-2"
            >
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
            Reports
          </router-link>
        </li>

        <!-- <li class="nav-item" v-if="token != null">
          <router-link to="/FosaPage" exact>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-bank2"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"
              />
            </svg>
            FOSA
          </router-link>
        </li> -->
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      applicount: [],
    };
  },

  created() {},

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
    ]),
  },
  computed: {
    ...mapGetters([
      "allDocuments",
      "allDeposits",
      "allMembers",
      "allLoans",
      "allOrg",
      "allUser",
      "allBanktransactions",
      "allPaymentsmade",
      "allPaymentsreceived",
    ]),

    token() {
      return this.$store.state.accessToken;
    },
    email() {
      return this.$store.state.email;
    },
    user_id() {
      return this.$store.state.id;
    },
    firstname() {
      return this.$store.state.firstname;
    },
  },
};
</script>

<style>
/*! CSS Used from: https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css */
*,
::after,
::before {
  box-sizing: border-box;
}
ul {
  padding-left: 2rem;
}
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
ul ul {
  margin-bottom: 0;
}
.small {
  font-size: 0.875em;
}
a {
  color: #0d6efd;
  text-decoration: underline;
}
a:hover {
  color: #0a58ca;
}
svg {
  vertical-align: middle;
}
button {
  border-radius: 0;
}
button:focus:not(:focus-visible) {
  outline: 0;
}
button {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button {
  text-transform: none;
}
button {
  -webkit-appearance: button;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
}
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.btn:disabled {
  pointer-events: none;
  opacity: 0.65;
}
.collapse:not(.show) {
  display: none;
}
.link-dark {
  color: #212529;
}
.link-dark:focus,
.link-dark:hover {
  color: #1a1e21;
}
.d-flex {
  display: flex !important;
}
.border-top {
  border-top: 1px solid #dee2e6 !important;
}
.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}
.flex-shrink-0 {
  flex-shrink: 0 !important;
}
.align-items-center {
  align-items: center !important;
}
.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.me-2 {
  margin-right: 0.5rem !important;
}
.mb-1 {
  margin-bottom: 0.25rem !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.p-3 {
  padding: 1rem !important;
}
.pb-1 {
  padding-bottom: 0.25rem !important;
}
.pb-3 {
  padding-bottom: 1rem !important;
}
.ps-0 {
  padding-left: 0 !important;
}
.fs-5 {
  font-size: 1.25rem !important;
}
.fw-normal {
  font-weight: 400 !important;
}
.text-decoration-none {
  text-decoration: none !important;
}
.bg-white {
  background-color: #fff !important;
}
.rounded {
  border-radius: 0.25rem !important;
}
/*! CSS Used from: https://getbootstrap.com/docs/5.0/examples/sidebars/sidebars.css */
.bi {
  vertical-align: -0.125em;
  pointer-events: none;
  fill: currentColor;
}
.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, 0.85);
  background-color: #d2f4ea;
}
.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}
.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, 0.85);
}
.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}
.btn-toggle-nav a {
  display: inline-flex;
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}
.fw-semibold {
  font-weight: 600;
}
</style>

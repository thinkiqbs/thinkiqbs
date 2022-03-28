@
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1">
        <financeNav></financeNav>
      </div>

      <div class="col-11">
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          ></div>
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>{{ this.email }}!</strong> Go back to Sacco
            <router-link :to="{ name: 'finance' }" exact
              >Finance Navigator
            </router-link>
            <!-- <button
												type="button"
												class="btn-close"
												data-bs-dismiss="alert"
												aria-label="Close"

											></button> -->
          </div>

          <div class="card">
            <div class="card-body">
              <h2 class="link-success">Reporting Links</h2>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col">
                <h2 class="link-primary">Business Overview</h2>

                <Ol class="list-group list-group-numbered">
                  <li>
                    <a
                      href="#"
                      class="link-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#incomestatement"
                      @click="Printlist"
                      >Profit and Loss</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-secondary btn disabled"
                      >Cash Flow Statements
                    </a>
                  </li>
                  <li>
                    <a href="/balancesheet" class="link-success"
                      >Balance Sheet</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-danger" disabled
                      >Business Perfomance Ratios</a
                    >>
                  </li>
                  <li>
                    <a href="#" class="link-warning" @click="updatetb"
                      >Trial Balance</a
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'trialbalance' }"
                      exact
                      @click="updatetb"
                      >Banking
                    </router-link>
                  </li>
                </Ol>
              </div>
              <div class="col">
                <h2 class="link-primary">Sales</h2>

                <ul>
                  <li>
                    <a href="#" class="link-primary btn disabled" disabled
                      >Sales by Customers</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-secondary btn disabled" disabled
                      >Sales by Item</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-success btn disabled" disabled
                      >Sales by Person</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col">
                <h2 class="link-primary btn disabled">Accounts Receivables</h2>

                <ul>
                  <li>
                    <a href="#" class="link-primary btn disabled" disabled
                      >Customer Balances</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-secondary btn disabled" disabled
                      >AR aging Summary</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-success btn disabled" disabled
                      >AR aging Summary</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-danger btn disabled" disabled
                      >Invoices</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-warning btn disabled" disabled
                      >Invoices Details
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-danger btn disabled" disabled
                      >Orders</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-warning btn disabled" disabled
                      >Orders Details
                    </a>
                  </li>
                  <li>
                    <a href="#" class="link-danger btn disabled" disabled
                      >Receivables</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-info btn disabled" disabled
                      >Receivables Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2 class="link-primary">Payments Received Overview</h2>

                <ul>
                  <li>
                    <a href="#" class="link-primary btn disabled"
                      >Payments Received</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-secondary btn disabled"
                      >Time to Get Paid</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-success btn disabled"
                      >Credit Note Details</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-danger btn disabled">Refunds </a>>
                  </li>
                </ul>
              </div>
              <div class="col">
                <h2 class="link-primary btn disabled">Payables</h2>

                <ul>
                  <li>
                    <a href="#" class="link-primary btn disabled"
                      >Vendor Balances</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-secondary btn disabled"
                      >AP Aging summary</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-success btn disabled"
                      >AP Aging Details</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-danger btn disabled">Bills</a>>
                  </li>
                  <li>
                    <a href="#" class="link-warning btn disabled"
                      >Payments Made</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-danger btn disabled">Refunds</a>
                  </li>
                  <li>
                    <a href="#" class="link-info btn disabled"
                      >Purchase Orders</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-info btn disabled"
                      >Purchase details</a
                    >
                  </li>
                  <li>
                    <a href="#" class="link-info"
                      >Purchase Orders by vendors
                    </a>
                  </li>
                  <li><a href="#" class="link-info">Payables Summary</a></li>
                </ul>
              </div>
              <div class="col">
                <h2 class="link-primary">Purchases and Expenses</h2>

                <ul>
                  <li>
                    <a href="#" class="link-primary">Purchase by Vendor</a>
                  </li>
                  <li>
                    <a href="#" class="link-secondary">Purchase by Item</a>
                  </li>
                  <li><a href="#" class="link-success">Expenses</a></li>
                  <li>
                    <a href="#" class="link-danger">Expenses by Customers</a>>
                  </li>
                  <li>
                    <a href="#" class="link-warning"
                      >Billable Expense Details</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2 class="link-primary">Sacco Operations</h2>

                <ul>
                  <li>
                    <a href="#" class="link-primary">Payments Received</a>
                  </li>
                  <li><a href="#" class="link-secondary">Loans Applied </a></li>
                  <li><a href="#" class="link-danger">Ioans Paid </a></li>
                  <li>
                    <a href="#" class="link-success">Deposits Schedule</a>
                  </li>
                  <li><a href="#" class="link-danger">Ioans Schedule </a></li>
                  <li>
                    <a href="#" class="link-danger">Interest Schedule </a>
                  </li>
                  <li><a href="#" class="link-danger">Members </a></li>
                </ul>
              </div>
              <div class="col">
                <h2 class="link-primary">Accountant</h2>

                <ul>
                  <li>
                    <a href="#" class="link-primary">Accounts Transactions</a>
                  </li>
                  <li>
                    <a href="#" class="link-secondary">Account Type summary</a>
                  </li>
                  <li><a href="#" class="link-success">General Ledger</a></li>
                  <li>
                    <a href="#" class="link-danger">Details General Ledger</a>>
                  </li>
                  <li><a href="#" class="link-warning">Journal Reports</a></li>
                  <li><a href="#" class="link-danger">Trial Balance </a></li>
                  <li><a href="#" class="link-info">Tax Summary </a></li>
                </ul>
              </div>
              <div class="col">
                <h2 class="link-primary">Bank</h2>

                <ul>
                  <li><a href="#" class="link-primary">Receipts </a></li>
                  <li><a href="#" class="link-secondary">Payments</a></li>
                  <li>
                    <a href="#" class="link-success">Reconciliation Status</a>
                  </li>
                  <li><a href="#" class="link-danger">Pending Cheques</a>></li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>

      <!-- For Topup only  -->
      <div
        class="modal fade"
        id="incomestatement"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <div class="row">
                <h3>Income Statement</h3>
              </div>

              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                <form @submit.prevent="submit">
                  <div class="form-group row">
                    <label class="col-form-label col-lg-2 required"
                      >Application Date</label
                    >
                    <div class="col-lg-5">
                      <input
                        placeholder="dd MMM yyyy"
                        id="ember1181"
                        class="ember-text-field zf-date-picker date-picker ember-view form-control"
                        type="date"
                      />
                      <!---->
                    </div>
                  </div>

                  <div class="block block-rounded">
                    <div class="block-header block-header-default">
                      <h3 class="block-title">#INCOME STATEMENT</h3>
                      <div class="block-options">
                        <button
                          type="button"
                          class="btn-block-option"
                          onclick="One.helpers('one-print');"
                        >
                          <i class="si si-printer me-1"></i> Print Invoice
                        </button>
                      </div>
                    </div>
                    <div class="block-content">
                      <div class="p-sm-4 p-xl-7">
                        <div class="row mb-4">
                          <div class="col-6 fs-sm">
                            <p class="h3">Company</p>
                            <address>
                              Street Address<br />
                              State, City<br />
                              Region, Postal Code<br />
                              ltd@example.com
                            </address>
                          </div>
                          <!-- <div class="col-6 text-end fs-sm">
														<p class="h3">Client</p>
														<address>
															Street Address<br />
															State, City<br />
															Region, Postal Code<br />
															ctr@example.com
														</address>
													</div> -->
                        </div>
                        <div class="table-responsive push">
                          <table class="table table-borderless">
                            <thead>
                              <th class="text-left">Revenue</th>
                            </thead>
                            <thead>
                              <tr class="line-item-header">
                                <!-- <th>#</th> -->

                                <th>Account</th>
                                <!---->
                                <th class="text-left">Revenue</th>
                                <th class="text-left">year 2022</th>

                                <!----><!---->
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in allGl1revenue" :key="item.id">
                                <!-- <th scope="row">{{ index + 1 }}</th> -->

                                <td>{{ item.maincode }}</td>
                                <td>{{ item.accountname }}</td>
                                <td>{{ item.balance }}</td>
                              </tr>
                              <tr>
                                <td colspan="2" style="padding-top: 0px">
                                  <small class="text-muted"
                                    >**List contains only Approved All Revenue
                                    Acounts</small
                                  >
                                </td>
                                <td></td>
                                <td></td>
                                <td colspan="1" class="text-right">
                                  <b>Gross Income</b>
                                </td>
                                <!---->
                                <td class="text-right">
                                  <b>{{}}</b>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table class="table table-borderless">
                            <thead>
                              <th class="text-left">Operating Expenses</th>
                            </thead>
                            <thead>
                              <tr class="line-item-header">
                                <!-- <th>#</th> -->

                                <th>Account</th>
                                <!---->
                                <th class="text-left">Expense</th>
                                <th class="text-left">year 2022</th>

                                <!----><!---->
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in allGl1Expense" :key="item.id">
                                <!-- <th scope="row">{{ index + 1 }}</th> -->

                                <td>{{ item.maincode }}</td>
                                <td>{{ item.accountname }}</td>
                                <td>{{ item.balance }}</td>
                              </tr>
                              <tr>
                                <td colspan="2" style="padding-top: 0px">
                                  <small class="text-muted"
                                    >**List contains only Approved All Expenses
                                    Acounts</small
                                  >
                                </td>
                                <td></td>
                                <td></td>
                                <td colspan="1" class="text-right">
                                  <b>Total Expenses</b>
                                </td>
                                <!---->
                                <td class="text-right">
                                  <b>{{}}</b>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p class="fs-sm text-muted text-center"></p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import financeNav from "@/components/FinanceNav";
// import financeNav from "@/components/FinanceNav";
// import axios from "axios";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

// import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ReportArea",
  components: {
    financeNav,
  },

  data() {
    return {
      allGls2: [],
    };
  },

  created() {
    this.fetchGl();
    this.fetchExpenses();
    this.updategllist();
    this.fetchExpenses();
  },

  computed: {
    ...mapGetters(
      "allDocuments",
      "allDeposits",
      "allMembers",
      "allLoans",
      "allOrg",
      "allUser",
      "allBanktransactions",
      "allPaymentsmade",
      "allPaymentsreceived",
      "allGl",
      "allExpenses"
    ),
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

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },

    allGls1: function () {
      return this.$store.getters.allGl;
    },

    documents: function () {
      return this.allGls1;
    },

    allGl1revenue: function () {
      return this.allGls1.filter((item) => item.account_type == "4000000");
    },

    allGl1cog: function () {
      return this.allGls1;
    },

    allGl1Expense: function () {
      return this.allGls1.filter((item) => item.account_type == "5000000");
    },

    allGl1taxes: function () {
      return this.allGls1;
    },

    allGl1otherincome: function () {
      return this.allGls1;
    },

    alldocs: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    Allglaccounts() {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },
  },
  methods: {
    ...mapActions([
      "fetchDocuments",
      "fetchDeposits",
      "fetchMembers",
      "fetchOrg",
      "fetchUserinfo",
      "fetchLoans",
      "fetchBanktransactions",
      "fetchPaymentsmade",
      "fetchPaymentsreceived",
      "fetchGl",
      "fetchExpenses",
    ]),

    Printlist() {
      for (let i = 0; i < this.allGls1.length; i++) {
        var array = this.alldocs,
          sumOfId = (Account_Code) =>
            array
              .filter((i) => i.Account_Code === Account_Code)
              .reduce((a, b) => a + b.Amount, 0);

        const sumOf1 = sumOfId(this.allGls1[i].maincode); //85

        this.allGls2 = this.allGls1.map((item) => {
          if (item.maincode === this.allGls1[i].maincode) {
            item.balance = sumOf1;
          }
          return item;
        });

        console.log(
          this.allGls1[i].accountname,
          this.allGls1[i].maincode,
          sumOf1
        );
      }
    },

    updatetb() {
      for (let i = 0; i < this.Allglaccounts.length; i++) {
        var array = this.alldocs,
          sumOfId = (Account_Code) =>
            array
              .filter((i) => i.Account_Code === Account_Code)
              .reduce((a, b) => a + b.Amount, 0);

        const sumOf1 = sumOfId(this.Allglaccounts[i].maincode); //85

        this.allGls2 = this.Allglaccounts.map((item) => {
          if (item.maincode === this.Allglaccounts[i].maincode) {
            item.balance = sumOf1;
          }
          return item;
        });

        console.log(
          this.Allglaccounts[i].accountname,
          this.Allglaccounts[i].maincode,
          sumOf1
        );
      }
      for (let i = 0; i < this.Allglaccounts.length; i++) {
        var arrayCr = this.alldocs,
          sumOfIdCr = (Account_Code) =>
            arrayCr
              .filter((i) => i.Account_Code === Account_Code)
              .reduce((a, b) => a + b.Credit, 0);

        const sumOf2 = sumOfIdCr(this.Allglaccounts[i].maincode); //85

        this.allGls2 = this.Allglaccounts.map((item) => {
          if (item.maincode === this.Allglaccounts[i].maincode) {
            item.credit = sumOf2;
          }
          return item;
        });

        console.log(
          this.Allglaccounts[i].accountname,
          this.Allglaccounts[i].maincode,
          sumOf2
        );
      }

      for (let i = 0; i < this.Allglaccounts.length; i++) {
        var arrayDr = this.alldocs,
          sumOfIdDr = (Account_Code) =>
            arrayDr
              .filter((i) => i.Account_Code === Account_Code)
              .reduce((a, b) => a + b.Debit, 0);

        const sumOf3 = sumOfIdDr(this.Allglaccounts[i].maincode); //85

        this.allGls2 = this.Allglaccounts.map((item) => {
          if (item.maincode === this.Allglaccounts[i].maincode) {
            item.debit = sumOf3;
          }
          return item;
        });

        console.log(
          this.Allglaccounts[i].accountname,
          this.Allglaccounts[i].maincode,
          sumOf3
        );
      }
    },
  },

 
};
</script>

<style>
.dropbtn {
  background-color: rgb(241, 239, 239);
  color: black;
  padding: 13px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>

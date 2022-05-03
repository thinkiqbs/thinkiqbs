@
<template>
  <div class="row">
    <div class="row removable">
      <div class="col-xl-3 col-sm-6">
        <div class="card mb-4">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">
                    Deposits
                  </p>
                  <h5 class="font-weight-bolder mb-0">
                    {{ this.totalSavings }}
                    <span class="text-success text-sm font-weight-bolder"
                      >+55%</span
                    >
                  </h5>
                </div>
              </div>
              <div class="col-4 text-end">
                <div
                  class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                >
                  <i
                    class="ni ni-money-coins text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="card mb-4">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">
                    Loans
                  </p>
                  <h5 class="font-weight-bolder mb-0">
                    {{ this.totalLoans }}
                    <span class="text-success text-sm font-weight-bolder"
                      >+3%</span
                    >
                  </h5>
                </div>
              </div>
              <div class="col-4 text-end">
                <div
                  class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                >
                  <i
                    class="ni ni-world text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="card mb-4">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">
                    Due this Month(Loan)
                  </p>
                  <h5 class="font-weight-bolder mb-0">
                    {{ MonthlyLoan }}
                    <span class="text-danger text-sm font-weight-bolder"
                      >-2%</span
                    >
                  </h5>
                </div>
              </div>
              <div class="col-4 text-end">
                <div
                  class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                >
                  <i
                    class="ni ni-paper-diploma text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="card mb-4">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">
                    Due this Month (Deposits)
                  </p>
                  <h5 class="font-weight-bolder mb-0">
                    {{ this.mymonthlydepositsmember }}
                    <span class="text-success text-sm font-weight-bolder"
                      >+5%</span
                    >
                  </h5>
                </div>
              </div>
              <div class="col-4 text-end">
                <div
                  class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                >
                  <i
                    class="ni ni-cart text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title"></h4>

        <div id="container-fluid" style="float: right">
          <div id="ember1564" class="ember-view">
            <div class="rounded-xlg mx-3 mb-3 entity-dashboard d-flex">
              <!-- <div class="topnav-right col-2">
								<select
									class="selectpicker form-control icon-align-center fas fa-bars"
									v-model="path"
									@change="onChange"
									style="float: right;"
								>
									<i class="fas fa-bars"></i>
									<option default value="" disabeled> Select Menu</option>
									<optgroup label="Members Area">
										<option value="members">members</option>
										<option value="members">New Members</option>
										<option value="deposits">Deposits</option>
										<option value="monthcontribution"
											>Add a contribution
										</option>
									</optgroup>
									<optgroup label="Loans Area">
										<option value="loans">Loans</option>
										<option value="loanschedule">Loans Repayment </option>
									</optgroup>

									<optgroup label="Bank">
										<option value="bank">Bank Transactions </option>
									</optgroup>
									<optgroup label="Accounting">
										<option value="accounting">Accounting </option>
										<option value="distribute">Allocate to Member </option>
									</optgroup>
									<optgroup label="Reports">
										<option value="reports"> Reports </option>
									</optgroup>
								</select>
							</div> -->
              <!-- <dropdown-menu
								v-model="show"
								:right="right"
								:hover="hover"
								:interactive="interactive"
							>
								<button class="btn btn-secondary dropdown-toggle">
									<i class="fas fa-bars"></i>
								</button>
								<div slot="dropdown">
									<ul class="list-group">
										<li class="list-group-item">
											<router-link
												to="/members"
												class="btn btn-btn-hover"
												tag="Button"
												><i class="fas fa-book"></i> &nbsp; Members</router-link
											>
										</li>
										<li class="list-group-item">
											<router-link
												to="/reports"
												class="btn btn-btn-hover"
												tag="Button"
												><i class="fas fa-chart-line"></i> &nbsp; Member
												Deposits</router-link
											>
										</li>
										<li><hr class="dropdown-divider" /></li>

										<li class="list-group-item">
											<router-link
												to="/accounting"
												class="btn btn-btn-hover"
												tag="Button"
												><i class="fas fa-file-invoice"></i> &nbsp;
												Accounting</router-link
											>
										</li>
										<li class="list-group-item">
											<router-link
												to="/loans"
												class="btn btn-btn-hover"
												tag="Button"
												><i class="fas fa-book"></i> &nbsp; Loans</router-link
											>
										</li>
										<li class="list-group-item">
											<router-link
												to="/reports"
												class="btn btn-btn-hover"
												tag="Button"
												><i class="fas fa-chart-line"></i> &nbsp;
												Reports</router-link
											>
										</li>
										<li class="list-group-item">
											<router-link
												to="/guarantorslist"
												class="btn btn-btn-hover"
												tag="Button"
												><i class="fas fa-file-invoice"></i> &nbsp; Guarator
												Tracking</router-link
											>
										</li>
										<li class="list-group-item">
											<router-link
												to="/loans"
												class="btn btn-btn-hover"
												tag="Button"
												><i class="fas fa-book"></i> &nbsp; Loans</router-link
											>
										</li>
										<li class="list-group-item">
											<router-link
												to="/reports"
												class="btn btn-btn-hover"
												tag="Button"
												><i class="fas fa-chart-line"></i> &nbsp;
												Reports</router-link
											>
										</li>
										<li class="list-group-item">
											<router-link
												to="/accounting"
												class="btn btn-btn-hover"
												tag="Button"
												><i class="fas fa-file-invoice"></i> &nbsp;
												Accounting</router-link
											>
										</li>
									</ul>
								</div>
							</dropdown-menu> -->

              <div>
                <Refresh><i class="bi bi-arrow-clockwise"></i></Refresh>
              </div>

              <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-menu-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                    <span class="d-none d-sm-inline-block ms-2"
                      >Actions</span
                    >
                    <i
                      class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
                    ></i>
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <div class="p-2">
                      <router-link
                        :to="{ path: 'memberapplications' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >New Members</router-link
                      >
                      <router-link
                        :to="{ path: 'loanapplications' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >New Loans</router-link
                      >
                      <router-link
                        :to="{ path: 'distribute' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Monthly Contributers</router-link
                      >

                      <div role="separator" class="dropdown-divider m-0"></div>

                      <router-link
                        :to="{ path: 'journals' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Defaulters</router-link
                      >

                      <div role="separator" class="dropdown-divider m-0"></div>

                      <router-link
                        :to="{ path: 'guarantorslist' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Guarantors</router-link
                      >
                      <router-link
                        :to="{ path: 'shares' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Member Shares
                      </router-link>

                      <router-link
                        :to="{ path: 'depositschedule' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Deposits Schedule
                      </router-link>

                      
                      <div role="separator" class="dropdown-divider m-0"></div>

                      <router-link
                        :to="{ path: 'loanschedule' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Loans Schedule</router-link
                      >
                    </div>
  </ul>
</div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ÷ -->
</template>

<script>

import { getAPI } from "@/axios-api.js";


// import financeNav from "@/components/FinanceNav";
// import financeNav from "@/components/FinanceNav";
// import getAPI from "getAPI";
//Bootstrap and jQuery libraries
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// import Popper from "vue-popperjs";
// import Tab from "@/components/Tab.vue";
// import Tabs from "@/components/Tabs.vue";
import Refresh from "@/components/refresh.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Refresh,
  },

  name: "headerDashboard",

  data() {
    return {
      show: false,
      right: false,
      hover: false,
      interactive: true,

      search: "",
      myapprovedloans: [],
      orgprofile: {},
      orgprofile1: {},
      companyid1: "",
      members: [],
      member: "",
      memberscount: [],
      path: "",
      selectedemployer: "",
      employer: [],
      selectedcounty: "",
      county: [],
      selected: "A",
      options: [],
      tableData: [],
      add_product: false,
      editing: false,
      loanschedule: [],
      loanscheduleMe: [],
      depositstotal: [],
      totaldeposits: [],
      totaldepositsMe: [],
      // totalSavings: [],

      loan: [],
      applicount: [],
      product: [],
      loan_type: "",
      monthlyloan: [],
      // monthdeposits: [],
      monthdepositsme: [],

      role: [],
      roles: [],
      mymonthlydeposits: "",
      addmembers: [
        {
          first_name: "",
          last_name: "",
          phone_no: "",
          email: "",
          date_of_birth: "",
          Employer: "",
          Department: "",
          County: "",
        },
      ],
    };
  },

  created() {
    // this.fetchDocuments();
    // this.fetchDeposits();
    // this.fetchMembers();
    // this.fetchLoans();
    // this.fetchBanktransactions();
    // this.fetchPaymentsmade();
    // this.fetchPaymentsreceived();
    // this.fetchExpenses();
    this.fetchCounty();
    console.log(this.monthdeposits);
  },

  mounted() {
    
  },

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
      "fetchCounty",
    ]),

    
   

      

    

    

    onChange() {
      this.$router.push(this.path);
    },

    showModal() {
      $(".ApplyLoan").modal("show");
    },
    

    

    deleteProduct(id) {
      getAPI
        .delete(`products/${id}`)
        .then((res) => {
          for (let i = 0; i < this.tableData.length; i++) {
            if (this.tableData[i].id == res.data.results) {
              this.tableData.splice(i, 1);
            }
          }
        })
        .catch((error) => console.log(error.response));
    },
    initDatatable() {
      setTimeout(() => {
        $(".walla").DataTable({
          pagingType: "full_numbers",
          lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "All"],
          ],
          order: [
            [0, "asc"],
            [3, "desc"],
          ],
          responsive: true,
          destroy: true,
          retrieve: true,
          autoFill: true,
          colReorder: true,
        });
      }, 300);
    },

    editMode(product) {
      this.$store.dispatch("updateProduct", product).then(() => {
        this.editing = true;
        this.add_product = true;
      });
    },
    loantypechange() {
      const opt = this.options.find((o) => o.loan_type === this.selected);

      this.Loans.interest = opt.interest_rate;
      this.Loans.Term = opt.maximum_loan_term;
      this.Loans.gl_account = opt.gl_account;
    },
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
      "allExpenses",
      "allCounty"
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
    tInterest() {
      // let tloans = this.Loans.Amount;
      // let tinterest = this.Loans.interest;
      // // let tTerm = this.Term;
      // return Math.round((tloans * tinterest) / 100);
      return Number(this.PaymentAmount - this.tLoans);
    },

    mymonthlydepositsmember: function () {
      var sum = 0;
      this.monthdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    monthdeposits: function () {
      return this.$store.getters.allDeposits.filter(
        (member) => member.company_id == this.companyid3
      );
    },

    monthloans: function () {
      return this.$store.getters.allLoans.filter(
        (member) => member.company_id == this.companyid3
      );
    },

    allmembers: function () {
      return this.$store.getters.allMembers.filter(
        (member) => member.company_id == this.companyid3
      );
    },

    MonthlyLoan: function () {
      var sum = 0;
      this.monthloans.forEach((e) => {
        sum += e.Monthrepayment;
      });
      return sum;
    },

    tLoans() {
      let tl = Math.round(this.emi * this.Loans.Term);

      if (isNaN(tl)) {
        tl = 0;
      }
      return tl;
    },

    currentDate() {
      const current = new Date();
      // const date = `${current.getDate()}/${current.getMonth() +
      // 	1}/${current.getFullYear()}`;
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      return date;
    },

    interestRate() {
      return this.Loans.interest / 100 / 12;
    },

    emi() {
      var x = Math.pow(1 + this.interestRate, this.Loans.Term);
      var emiMonthly = (this.Loans.Amount * x * this.interestRate) / (x - 1);
      return Number(emiMonthly);
    },

    interestmonthly() {
      // let tTerm = this.Loans.Term;
      // let tinterest = this.Loans.interest;
      // let tamount = this.Loans.Amount;
      // return Math.round(((tinterest / 12 / 100) * tamount) / tTerm);
      let int = Math.round((this.tLoans - this.Loans.Amount) / this.Loans.Term);

      if (isNaN(int)) {
        int = 0;
      }
      return int;
    },

    totalLoans: function () {
      var sum = 0;
      this.allloans.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    loanbalance: function () {
      return this.totalLoansMe;
    },

    totalSavings: function () {
      var sum = 0;
      this.alldeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    alldeposits: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 && item.Document == "deposits"
      );
    },

    allloans: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3 && item.Document == "loans"
      );
    },

    currentdeposits: function () {
      return this.totalSavingsMe;
    },

    exposure: function () {
      return this.totalSavings - this.totalLoans - this.loan.Amount;
    },

    monthlyRepayment() {
      // let tinterest = this.interest/100;
      let tTerm = this.Loans.Term;
      let tLoans = this.Loans.Amount;
      let mr = Math.round(tLoans / tTerm + this.interestmonthly);

      if (isNaN(mr)) {
        mr = 0;
      }
      return mr;
    },
    PrincipleMonthly() {
      // let tinterest = this.interest;

      return this.monthlyRepayment - this.interestmonthly;
    },

    // Compute for make paymennt
    PaymentAmount() {
      return Number(
        this.Payments.deposit * 1 +
          this.Payments.interest * 1 +
          this.Payments.loan * 1
      );
    },
    depositdate() {
      return this.withdrawal.Deposit_date;
    },

    withdrawalamount() {
      return Number(this.withdrawal.Deposit_Amount * -1);
    },
    loantypeinterest() {
      return this.loan.interest_rate;
    },
    maxtopup: function () {
      return this.currentdeposits * 3 - this.loanbalance;
    },

    allDocuments: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    companyid() {
      return this.companyid3;
    },

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },
  },
};
</script>

<style></style>

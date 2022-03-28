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

              <div class="d-flex align-items-center">
                <div class="dropdown d-inline-block ms-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-alt-secondary d-flex align-items-center"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
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
                      >Sub Ledgers</span
                    >
                    <i
                      class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
                    ></i>
                  </button>
                  <div
                    class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
                    aria-labelledby="page-header-user-dropdown"
                    style=""
                  >
                    <div class="p-2">
                      <router-link
                        :to="{ path: 'expenses' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Expenses</router-link
                      >
                      <router-link
                        :to="{ path: 'purchasing' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Purchasing</router-link
                      >
                      <router-link
                        :to="{ path: 'sales' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Sales</router-link
                      >

                      <div role="separator" class="dropdown-divider m-0"></div>

                      <router-link
                        :to="{ path: 'journals' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Journals</router-link
                      >

                      <div role="separator" class="dropdown-divider m-0"></div>

                      <router-link
                        :to="{ path: 'documents' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Documents</router-link
                      >
                      <router-link
                        :to="{ path: 'budgets' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Budgets
                      </router-link>
                      <router-link
                        :to="{ path: 'taxes' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Taxes</router-link
                      >

                      <div role="separator" class="dropdown-divider m-0"></div>

                      <router-link
                        :to="{ path: 'accounting' }"
                        class="dropdown-item d-flex align-items-center justify-content-between"
                        >Genral Ledger</router-link
                      >
                    </div>
                  </div>
                </div>
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
import axios from "axios";

// import financeNav from "@/components/FinanceNav";
// import financeNav from "@/components/FinanceNav";
// import axios from "axios";
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
    this.fetchDocuments();
    this.fetchDeposits();
    this.fetchMembers();
    this.fetchLoans();
    this.fetchBanktransactions();
    this.fetchPaymentsmade();
    this.fetchPaymentsreceived();
    this.fetchExpenses();
  },

  mounted() {
    axios
      .get("/members/api/v1/MemberDetails/", {
        params: {
          organizationprofile: this.orgprofileid,
          Application_Status: "0",
        },
      })
      .then((res) => {
        this.applicount = res.data.count;
      });

    //count records based on axios filter  for MemberDetails
    axios
      .get("/members/api/v1/MemberDetails/", {
        params: {
          company_id: this.companyid3,
        },
      })
      .then((res) => {
        this.memberscount = res.data.count;
      });
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
    ]),

    addnewmeber() {
      Promise.all([
        axios
          .post(`/members/api/v1/MemberDetails/`, {
            // names: '',
            // User_id: this.user_id,
            first_name: this.addmembers.first_name,
            last_name: this.addmembers.last_name,
            phone_no: this.addmembers.phone_no,
            bankname: this.addmembers.bankname,
            email: this.addmembers.email,
            username: this.addmembers.email,
            date_of_birth: this.addmembers.date_of_birth,
            Employer: this.selectedemployer,
            Department: this.addmembers.Department,
            County: this.selectedcounty,
            Address: this.addmembers.Address,
            organizationprofile: this.orgprofileid,
            company_id: this.companyid,
            password1: "qxcv2010A",
            password2: "qxcv2010A",
          })
          .then((response) => {
            response;
            // window.location.reload();
            confirm("We have received your application");
          })
          .catch((error) => {
            // this.error = (e);
            alert(JSON.stringify(error.response.data));
          }),
      ]);
    },
    invite(member) {
      // let random = Math.random();
      // item.label = random;

      this.member = member;

      Promise.all([
        axios
          .post(`dj-rest-auth/registration/`, {
            // names: '',
            username: this.member.email,
            email: this.member.email,
            is_staff: "False",
            // first
            // phone_no:this.member.phone_no,
            // County:this.member.County,
            // Employer:this.member.Employer,
            first_name: this.member.first_name,
            last_name: this.member.last_name,
            company_id: this.companyid,
            password1: "Qwerty2021",
            password2: "Qwerty2021",
          })
          .then((response) => {
            response;
            this.$router.push({ name: "members" });
          })
          .catch((e) => {
            alert(JSON.stringify(e.response.data));
          }),

        axios
          .put("/members/update/" + this.member.id + "/", {
            Application_Status: "True",
            invited: "True",
            first_name: this.member.first_name,
            last_name: this.member.last_name,
            phone_no: this.member.phone_no,
            bankname: this.member.bankname,
            email: this.member.email,
            username: this.member.email,
            date_of_birth: this.member.date_of_birth,
            Employer: this.member.Employer,
            Department: this.member.Department,
            County: this.member.County,
            Address: this.member.Address,
            organizationprofile: this.orgprofileid,
            company_id: this.companyid,
          })
          .then((response) => {
            response;
            // confirm("We have received your application");
            this.$router.push({ name: "operations" });
          })
          .catch((e) => {
            alert(e);
          }),
      ]);
    },

    approveloan() {
      // let random = Math.random();
      // item.label = random;

      axios
        .put("/loans/api/v1/loans/" + this.loan.id + "/", {
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.loan.Amount,
          loan_Type: "Development",
          interest: this.loan.interest,
          Interest_Monthly: this.loan.Interest_Monthly,
          Term: this.loan.Term,
          Status: this.loan.Status * 1 + 1,
          TotalLoans: this.loan.TotalLoans,
          Monthrepayment: this.loan.Monthrepayment,
          Principle_Monthly: this.loan.Principle_Monthly,
          Total_Loan: this.loan.Total_Loan,
          organizationprofile: this.loan.organizationprofile,
          EmployerProfile: this.loan.EmployerProfile,
        })
        .then((response) => {
          response;
          window.location.reload();
          // confirm("We have received your application");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    change(item) {
      this.loan = item;

      const memberfilter = this.loan.email;
      // alert(item.Total_Loan);

      Promise.all([
        axios
          .get("/loans/api/v1/loans/", {
            params: { email: memberfilter, Status: "4" },
          })
          .then((res) => {
            this.myapprovedloans = res.data.results;

            $("#walla").DataTable();
          }),

        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.monthdepositsme = res.data.results;
            $("#walla").DataTable();
          })
          .catch((error) => {
            console.error(error);
          }),

        axios
          .get("/finance/api/v1/documents/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.depositstotal = res.data.results.filter((depositstotal) =>
              depositstotal.Account.includes("deposits")
            );

            $("#walla").DataTable();
          }),

        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: memberfilter, Document: "deposits" },
          })
          .then((res) => {
            this.totaldepositsMe = res.data.results;
            $("#monthdeposits").DataTable();
          })
          .catch((error) => {
            console.error(error);
          }),

        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: memberfilter, Document: "loans" },
          })
          .then((res) => {
            this.loanscheduleMe = res.data.results;
            $("#walla").DataTable();
          }),
        axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
          this.employer = res.data.results;
          // $("#example").DataTable();
        }),
      ]);
    },

    onChange() {
      this.$router.push(this.path);
    },

    showModal() {
      $(".ApplyLoan").modal("show");
    },
    addrecords() {
      Promise.all([
        axios
          .post(`/members/api/v1/MemberDetails/`, {
            // names: '',
            // User_id: this.user_id,
            first_name: this.addmembers.first_name,
            last_name: this.addmembers.last_name,
            phone_no: this.addmembers.phone_no,
            bankname: this.addmembers.bankname,
            email: this.addmembers.email,
            username: this.addmembers.email,
            date_of_birth: this.addmembers.date_of_birth,
            Employer: this.selectedemployer,
            Department: this.addmembers.Department,
            County: this.selectedcounty,
            Address: this.addmembers.Address,
            organizationprofile: this.orgprofileid,
            password1: "qxcv2010A",
            password2: "qxcv2010A",
          })
          .then((response) => {
            response;
            window.location.reload();
            confirm("We have received your application");
          })
          .catch((error) => {
            // this.error = (e);
            alert(JSON.stringify(error.response.data));
          }),
      ]);
    },

    saveloan() {
      axios
        .post(`/loans/api/v1/loans/`, {
          // names: '',
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.Loans.Amount,
          loan_Type: "Development",
          interest: this.Loans.interest,
          Interest_Monthly: this.interestmonthly,
          Term: this.Loans.Term,
          Status: "1",
          TotalLoans: this.tLoans,
          Monthrepayment: this.monthlyRepayment,
          Principle_Monthly: this.PrincipleMonthly,
          Total_Loan: this.tLoans,
          organizationprofile: this.orgprofileid,
          gl_account: this.Loans.gl_account,
          EmployerProfile: this.loan.Employer,
          company_id: this.loan.company_id,
        })
        .then((response) => {
          response;
          window.location.reload();
          confirm("We have received your application");
          this.$router.push({ name: "operations" });
        })
        .catch((e) => {
          alert(e);
        });
    },

    deleteProduct(id) {
      axios
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

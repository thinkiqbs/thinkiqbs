@
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="row">
          <div class="card">
            <div class="card-header"><h3>Deposits Schedule</h3></div>
            <div class="row">
              <div class="col-sm-4">
                <div class="card-box tilebox-one">
                  <i class="icon-layers float-right text-muted"></i>
                  <h6 class="text-muted text-uppercase mt-0">Members</h6>
                  <h5 class="" data-plugin="counterup">
                    {{ this.memberscount }}
                  </h5>
                  <span class="badge badge-success">{{
                    this.mymonthlydeposits
                  }}</span
                  ><span class="text-muted">
                    <router-link :to="{ name: 'members' }" exact
                      ><H5 stlye="color:green"
                        >active members
                        <span class="badge badge-success">addnew</span></H5
                      >
                    </router-link></span
                  >
                </div>
              </div>
              <!-- end col -->
              <div class="col-sm-4">
                <div class="card-box tilebox-one">
                  <i class="icon-paypal float-right text-muted"></i>
                  <h6 class="text-muted text-uppercase mt-0">Total Loan</h6>
                  <h5 class="">
                    <span data-plugin="counterup">{{ totalLoans }}</span>
                  </h5>
                  <span class="badge badge-success"
                    >{{ this.monthlyloan }} </span
                  ><span class="text-muted"
                    ><router-link :to="{ name: 'loans' }" exact
                      ><H5 stlye="color:green">view loans</H5>
                    </router-link></span
                  >
                </div>
              </div>
              <!-- end col -->
              <div class="col-sm-4">
                <div class="card-box tilebox-one">
                  <i class="icon-rocket float-right text-muted"></i>
                  <h6 class="text-muted text-uppercase mt-0">Deposits</h6>
                  <h5 class="" data-plugin="counterup">
                    {{ totalSavings }}
                  </h5>
                  <span class="badge badge-custom">+89% </span
                  ><span class="text-muted"
                    ><router-link :to="{ name: 'loans' }" exact
                      ><H5 stlye="color:green">view deposits</H5>
                    </router-link></span
                  >
                </div>
              </div>
              <!-- end col -->

              <div class="card responsive">
                <div class="card-body">
                  <a
                    href="#"
                    style="float: right"
                    class="link-success"
                    data-toggle="modal"
                    data-target="#Allocatedeposits"
                    @click="change(item)"
                  >
                    &nbsp; Monthly Deposit
                  </a>

                  <a
                    href="#"
                    style="float: right"
                    class="link-success"
                    data-toggle="modal"
                    data-target="#Depositscontrol"
                    @click="change(item)"
                    >Control &nbsp;
                  </a>

                  <div class="table">
                    <table class="table table-hover walla">
                      <thead>
                        <tr>
                          <th cope="col">ID</th>
                          <th cope="col">Date</th>
                          <th cope="col">document</th>
                          <th cope="col">Email</th>
                          <th cope="col">Account</th>
                          <th cope="col">Credit</th>
                          <th cope="col">Debit</th>
                          <th cope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="saving in savings" :key="saving.id">
                          <td>{{ saving.id }}</td>
                          <td>{{ saving.Posting_Date }}</td>
                          <td>{{ saving.Document }}</td>
                          <td>{{ saving.memberemail }}</td>
                          <td>{{ saving.Account }}</td>
                          <td>{{ saving.Credit }}</td>
                          <td>{{ saving.Debit }}</td>
                          <td>{{ saving.Amount }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="ApprovalTemplate"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Loan Approval Form for {{ this.loanemail }}
            </h5>
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
            <form class="row g-3" @submit.prevent="submit">
              <div class="form-group col-md-6">
                <label for="inputEmail4" hidden>Userid</label>
                <input
                  type="number"
                  class="form-control"
                  id="userid"
                  placeholder="userid"
                  v-model="user_id"
                  hidden
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  v-model="this.loan.email"
                  disabled
                />
              </div>

              <!-- <p>{{ emaillive }}{{ user_id }}</p> -->

              <!-- <button @click="submit" class="btn btn-primary">Sign in</button> -->

              <div class="form-group col-md-6"></div>

              <div class="form-group col-md-6">
                <label for="inputEmail4" hidden>Userid</label>
                <input
                  type="number"
                  class="form-control"
                  id="userid"
                  placeholder="userid"
                  v-model="user_id"
                  hidden
                />
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <select
                    class="form-select"
                    v-model="selected"
                    @change="loantypechange"
                  >
                    <option
                      v-for="option in options"
                      v-bind:value="option.loan_type"
                      :key="option.id"
                    >
                      {{ option.loan_type }}
                      <!-- {{ option.id }}
													{{option.interest_rate}} -->
                    </option>
                  </select>
                  <span>Selected: {{ selected }}</span>

                  <li class="divider"></li>
                  <hr class="bg-danger border-2 border-top border-success" />

                  <label for="inputPassword4">Applied Amount</label>
                  <input
                    type="number"
                    class="form-control"
                    id="Amount"
                    placeholder=""
                    v-model="loan.Amount"
                  />
                  <hr class="bg-danger border-2 border-top border-success" />

                  <label for="Interest">interest rate </label>
                  <input
                    type="integer"
                    class="form-control"
                    id="interest"
                    placeholder=""
                    v-model="loan.interest"
                  />
                  <hr class="bg-danger border-2 border-top border-success" />
                  <label for="inputEmail4">Term ( Months) </label>
                  <input
                    type="number"
                    class="form-control"
                    id="Term"
                    placeholder="Enter Team in Months "
                    v-model="loan.Term"
                  />

                  <hr class="bg-danger border-2 border-top border-success" />

                  <h1>
                    Exposure
                    <span class="badge badge-secondary">{{
                      this.exposure
                    }}</span>
                  </h1>
                </div>

                <div class="form-group col-md-6">
                  <div class="col-md-12 order-md-2 mb-4">
                    <h4
                      class="d-flex justify-content-between align-items-center mb-3"
                    >
                      <span class="text-muted">Deposits Details</span>
                      <span class="badge badge-secondary badge-pill"></span>
                    </h4>
                    <ul class="list-group mb-12">
                      <li
                        class="list-group-item d-flex justify-content-between lh-condensed"
                      >
                        <div class="text-success">
                          <h6 class="my-0">Monthly Deposits</h6>
                        </div>
                        <h3>
                          <span class="text-muted">{{
                            mymonthlydepositsmember
                          }}</span>
                        </h3>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between lh-condensed"
                      >
                        <div class="text-success">
                          <h6 class="my-0">Total Savings</h6>
                        </div>
                        <h3>
                          <span class="text-muted">{{
                            this.totalSavings
                          }}</span>
                        </h3>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between lh-condensed"
                      >
                        <div class="text-success">
                          <h6 class="my-0">Total Loans</h6>
                        </div>
                        <h3>
                          <span class="text-muted">{{ this.totalLoans }}</span>
                        </h3>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between lh-condensed"
                      >
                        <div class="text-success">
                          <h6 class="my-0">Total Risk</h6>
                        </div>
                        <h3>
                          <span class="text-muted" v-if="this.exposure <= 0">
                            <b style="color: red"> {{ this.exposure }}</b></span
                          >
                          <span class="text-muted" v-if="this.exposure >= 1">
                            <b style="color: green">
                              {{ this.exposure }}</b
                            ></span
                          >
                        </h3>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-12 order-md-2 mb-4">
                    <h4
                      class="d-flex justify-content-between align-items-center mb-3"
                    >
                      <span class="text-muted">Loan Details</span>
                      <span class="badge badge-secondary badge-pill"></span>
                    </h4>
                    <ul class="list-group mb-12">
                      <li
                        class="list-group-item d-flex justify-content-between lh-condensed"
                      >
                        <div class="text-success">
                          <h6 class="my-0">Monthly Interest</h6>
                        </div>
                        <h3>
                          <span class="text-muted">{{
                            loan.Interest_Monthly
                          }}</span>
                        </h3>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between lh-condensed"
                      >
                        <div class="text-success">
                          <h6 class="my-0">Principle Monthly Repayment</h6>
                        </div>
                        <h3>
                          <span class="text-muted">{{
                            loan.Principle_Monthly
                          }}</span>
                        </h3>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between lh-condensed"
                      >
                        <div class="text-success">
                          <h6 class="my-0">Total Monthly Repayment</h6>
                        </div>
                        <h3>
                          <span class="text-muted">{{
                            loan.Monthrepayment
                          }}</span>
                        </h3>
                      </li>

                      <li
                        class="list-group-item d-flex justify-content-between lh-condensed"
                      >
                        <div class="text-success">
                          <h6 class="my-0">Total Loan</h6>
                        </div>
                        <h3>
                          <span class="text-muted">{{ loan.Total_Loan }}</span>
                        </h3>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-12 order-md-2 mb-4">
                    <h4
                      class="d-flex justify-content-between align-items-center mb-3"
                    >
                      <span class="text-muted">Guarantors Details</span>
                      <span class="badge badge-secondary badge-pill"></span>
                    </h4>
                  </div>
                </div>

                <p></p>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6"></div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6"></div>
              </div>

              <!-- <p>{{ emaillive }}{{ user_id }}</p> -->

              <!-- <button @click="submit" class="btn btn-primary">Sign in</button> -->
            </form>
            ...
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click="approveloan(item)"
            >
              Approve
            </button>
            <button type="button" class="btn btn-danger">Reject</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="Allocatedeposits"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Allocate Amount {{ this.loanemail }}
            </h5>
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
            <div class="table-responsive">
              <table class="table .table-borderless walla">
                <thead>
                  <tr>
                    <th cope="col">ID</th>
                    <th cope="col">Email</th>
                    <th cope="col">saving type</th>
                    <th cope="col">Account Code</th>
                    <th cope="col">Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="saving in monthdeposits" :key="saving.id">
                    <td>{{ saving.id }}</td>
                    <td>{{ saving.email }}</td>
                    <td>{{ saving.SavingsType }}</td>
                    <td>{{ saving.accountcode }}</td>
                    <!-- <td>{{ saving.Debit }}</td> -->
                    <td>{{ saving.Amount }}</td>
                    <td>
                      <div class="form-group form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1"
                          >Allocate</label
                        >
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
            <button
              type="button"
              class="btn btn-success"
              @click="approveloan(item)"
            >
              Approve
            </button>
            <button type="button" class="btn btn-danger">Reject</button>
          </div>
        </div>
      </div>
    </div>

    <!-- modal for deposits control  -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="Depositscontrol"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Allocate Amount {{ this.loanemail }}
            </h5>
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
            <div class="table-responsive">
              <table class="table .table-borderless walla">
                <thead>
                  <tr>
                    <th cope="col">ID</th>
                    <th cope="col">Email</th>
                    <th cope="col">saving type</th>
                    <th cope="col">Account Code</th>
                    <th cope="col">Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="saving in depositcontrol" :key="saving.id">
                    <td>{{ saving.id }}</td>
                    <td>{{ saving.email }}</td>
                    <td>{{ saving.SavingsType }}</td>
                    <td>{{ saving.accountcode }}</td>
                    <!-- <td>{{ saving.Debit }}</td> -->
                    <td>{{ saving.Amount }}</td>
                    <td>
                      <div class="form-group form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1"
                          >Allocate</label
                        >
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
            <button
              type="button"
              class="btn btn-success"
              @click="approveloan(item)"
            >
              Approve
            </button>
            <button type="button" class="btn btn-danger">Reject</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import financeNav from "@/components/FinanceNav";
// import financeNav from "@/components/FinanceNav";
import axios from "axios";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

// import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";


// import axios from "axios";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  name: "MonthAllocations",
  components: {
    financeNav,
    
  },

  data: function () {
    return {
      selected: "A",
      item: "",
      depositstotal: [],
      options: [],
      tableData: [],
      add_product: false,
      editing: false,
      mode: "dark",
      tabIndex: 0,
      modal: false,
      services: [
        { title: "Make payment", link: "#" },
        { title: "Make payment", link: "#" },
      ],
      members: [],
      memberscount: [],
      savings: [],
      loans: [],
      loan: [],
      // loan:'',
      loanschedule: [],
      monthdeposits: [],
      depositcontrol: [],
      Loans: {
        User_id: "",
        email: this.$store.state.email,
        Amount: this.Amount,
        loan_Type: "Development",
        interest: "",
        Interest_Monthly: "",
        Term: "",
        TotalLoans: "",
        Monthrepayment: "",
        Principle_Monthly: "",
        Total_Loan:"",
      },
      mymonthlydeposits: "",
      monthdepositsmember: "",
      monthlyloan: "",

      addvendors: [
        {
          id: "",
          companyname: "",
          companyemail: "",
          customerphone: "",
          primaryContact: "",
        },
      ],
      isOpen: false, // Variable if the menu is open or closed
    };
  },

  created() {
    this.getProducts();
    // this.getLoans();
  },
  mounted() {
    //API Call

    axios.get("/sys_config/api/v1/LoanType/").then((res) => {
      this.options = res.data.results;
      // $("#example").DataTable();
    });

    axios
      .get("/finance/api/v1/loanschedule/", {
        params: { organizationprofile: this.user_id },
      })
      .then((res) => {
        this.loanschedule = res.data.results;
        $("#walla").DataTable();
      });

    axios
      .get("/loans/api/v1/loans/", {
        params: { organizationprofile: this.user_id },
      })
      .then((res) => {
        this.loans = res.data.results;
        $("#walla").DataTable();
      });

    axios.get("/finance/api/v1/documents/").then((res) => {
      this.depositstotal = res.data.results.filter((depositstotal) =>
        depositstotal.Account.includes("deposits")
      );
      console.log("control", this.depositstotal);
      $("#walla").DataTable();
    });

    axios
      .get("/members/api/v1/MemberDetails/", {
        params: { organizationprofile: this.user_id },
      })
      .then((res) => {
        this.memberscount = res.data.count;
        // $("#members").DataTable();
        // console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/members/api/v1/MonthDeposits/", {
        params: { organizationprofile: this.user_id },
      })
      .then((res) => {
        this.monthdeposits = res.data.results;
        $("#monthdeposits").DataTable();
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("/finance/api/v1/documents/", {
        params: { organizationprofile: this.user_id },
      })
      .then((res) => {
        this.depositcontrol = res.data.results;
        $("#walla").DataTable();
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });

    // axios
    // 		.get("/members/api/v1/MonthDeposits/", {
    // 			params: { email:this.loan.email },
    // 		})
    // 		.then((res) => {
    // 			this.monthdepositsmember = res.data.results;
    // 			$("#walla").DataTable();
    // 			// console.log(res.data.results);
    // 		})
    // 		.catch((error) => {
    // 			console.error(error);
    // 		});

    axios
      .get("http://127.0.0.1:8000/loans/api/v1/guarantors/", {
        params: { organizationprofile: this.user_id },
      })
      .then((res) => {
        this.guarantors = res.data.results;
        $("#guarantors").DataTable();
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("/finance/api/v1/documents/", {
        params: {
          organizationprofile: this.user_id,
          Document: "depositcontrol",
        },
      })
      .then((res) => {
        this.savings = res.data.results;

        $("#walla").DataTable();
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  computed: {
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
    currentDate() {
      const current = new Date();
      // const date = `${current.getDate()}/${current.getMonth() +
      // 	1}/${current.getFullYear()}`;
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      return date;
    },
    totalLoans: function () {
      var sum = 0;
      this.loanschedule.forEach((e) => {
        sum += e.monthlyrepayment;
      });
      return sum;
    },
    totalSavings: function () {
      var sum = 0;
      this.depositstotal.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },
    tInterest() {
      // let tloans = this.Loans.Amount;
      // let tinterest = this.Loans.interest;
      // // let tTerm = this.Term;
      // return Math.round((tloans * tinterest) / 100);
      return Number(this.PaymentAmount - this.tLoans);
    },

    tLoans() {
      let tl = Math.round(this.emi * this.Loans.Term);

      if (isNaN(tl)) {
        tl = 0;
      }
      return tl;
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

    memberemail: function (loan) {
      return loan.email;
    },
    mymonthlydepositsmember: function () {
      var sum = 0;
      this.monthdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },
    exposure: function () {
      return this.totalSavings - this.totalLoans - this.loan.Amount;
    },

    loanemail() {
      return this.loan.email;
    },
  },

  methods: {
    changeStyle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
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
    approve(member) {
      // let random = Math.random();
      // item.label = random;

      console.log(member);
      this.member = member;
      axios
        .put("/members/update/" + this.member.id + "/", {
          Application_Status: "True",
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
          organizationprofile: this.user_id,
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

    invite(member) {
      // let random = Math.random();
      // item.label = random;

      console.log(member);
      this.member = member;

      Promise.all([
        axios
          .post(`dj-rest-auth/registration/`, {
            // names: '',
            username: this.member.email,
            email: this.member.email,
            is_staff: "",
            // phone_no:this.member.phone_no,
            // County:this.member.County,
            // Employer:this.member.Employer,
            // first_name:this.member.first_name,
            // last_name:this.member.last_name,
            password1: "Qwerty2021",
            password2: "Qwerty2021",
          })
          .then((response) => {
            response;
            this.$router.push({ name: "operations" });
          })
          .catch((e) => {
            alert(JSON.stringify(e.response.data));
            this.errors.push(e.data);
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
            organizationprofile: this.user_id,
          })
          .then((response) => {
            response;
            // confirm("We have received your application");
            this.$router.push({ name: "operations" });
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),
      ]);
    },
    change(item) {
      this.loan = item;
      var currentDate = new Date();
      console.log(currentDate);
      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      console.log(currentDateWithFormat);

      const memberfilter = this.loan.email;
      // alert(item.Total_Loan);

      Promise.all([
        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.monthdeposits = res.data.results;
            $("#walla").DataTable();
            // console.log(res.data.results);
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
            console.log("control", this.depositstotal);
            $("#walla").DataTable();
          }),

        axios
          .get("/finance/api/v1/loanschedule/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.loanschedule = res.data.results;
            $("#walla").DataTable();
          }),
      ]);
    },

    setLoan(info) {
      this.loan = info;

      console.log("info", this.loan);
    },
    addRow: function () {
      this.addvendors.push({
        id: "",
        companyname: "",
        companyemail: "",
        companyphone: "",
        primarContact: "",
      });
    },
    deleteRow(index) {
      this.addvendors.splice(index, 1);
    },
    showpopover() {
      var myPopover = this.active;
      myPopover.show();
    },
    addrecords() {
      axios
        .post(`http://127.0.0.1:8000/finance/api/v1/Vendor/`, {
          // names: '',
          // User_id: this.user_id,
          companyname: this.addvendors.companyname,
          companyemail: this.addvendors.companyemail,
          customerphone: this.addvendors.customerphone,
          primaryContact: this.addvendors.primaryContact,
          organizationprofile: this.user_id,
        })
        .then((response) => {
          response;
          confirm("We have received your application");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    updateloanschedule(item) {
      this.loan = item;

      Promise.all([
        axios
          .post(`/finance/api/v1/loanschedule/`, {
            // names: '',
            user_id: item.User_id,
            email: this.loan.email,
            date_disbursed: this.currentDate,
            loan_id: item.id,
            amountpaid: item.Amount,
            amount_disbursed: item.Amount,
            monthlyrepayment: item.Total_Loan,
            loan_approved: "True",
            deficit: 0,
            Transactiontype: "DIS" + item.id,
            organizationprofile: this.user_id,
          })
          .then((response) => {
            response;
            confirm("Loan Schedule updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),

        axios
          .post(`http://127.0.0.1:8000/finance/api/v1/Payments/`, {
            // names: '',
            user_id: item.User_id,
            email: this.loan.email,
            paymentNumber: "PYMT" + item.id,
            transactiondate: this.currentDate,
            account: "loans",
            paymentRef: item.id,
            amount: item.Amount,
            document: "loan",
            paid: "True",
            notes: "Loan Disbursment",
            organizationprofile: this.user_id,
          })
          .then((response) => {
            response;
            window.location.reload();
            // confirm("Loan Schedule updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),
      ]);
    },
    getProducts(Exception) {
      axios
        .get("/members/api/v1/MemberDetails/", {
          params: { organizationprofile: this.user_id },
        })
        .then((res) => {
          this.tableData = res.data.results;
          this.initDatatable();
        })
        .catch((error) => Exception.handle(error));
    },

    // getLoans(Exception) {
    // 	axios
    // 		.get("/loans/api/v1/loans/")
    // 		.then((res) => {
    // 			this.loans = res.data.results;
    // 			this.initDatatable();
    // 		})
    // 		.catch((error) => Exception.handle(error));
    // },

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
      // console.log(opt)
      this.Loans.interest = opt.interest_rate;
      this.Loans.Term = opt.maximum_loan_term;
    },
  },
};
</script>

<style></style>

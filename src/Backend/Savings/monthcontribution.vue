@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="mb-11" style="max-width: 98rem">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <headerDashboard></headerDashboard>
                <h5 class="card-title">Member Contrubtions Schedule</h5>

                <div class="topnav-right">
                  <a
                    type="link"
                    style="float: right; color: blue"
                    data-toggle="modal"
                    data-target="#Addnewbank"
                  >
                    <strong class="fas fa-user-plus"></strong>
                    Create a New Member contribution
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover walla">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Email</th>
                      <th>Date Applied</th>
                      <th>Contribution Type</th>
                      <th>GL Account Code</th>
                      <th>Employer</th>
                      <th>Organization ID</th>
                      <th>Amount to Save</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="contribution in tableData"
                      :key="contribution.id"
                    >
                      <td>{{ contribution.id }}</td>
                      <td>
                        {{ contribution.email }}
                      </td>
                      <td>{{ contribution.created }}</td>
                      <td>{{ contribution.SavingsType }}</td>
                      <td>{{ contribution.accountcode }}</td>
                      <td>{{ contribution.employer }}</td>
                      <td>{{ contribution.company_id }}</td>
                      <td>{{ contribution.Amount }}</td>
                      <td>
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <!-- <img src="..." class="rounded me-2" alt="..." /> -->
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>

    <div
      class="modal fade"
      id="ApplyLoan"
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
              Loan Application
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
            <div class="container">
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
                <!-- <div class="form-group col-md-6">
											<label for="inputEmail4">Email</label>
											<input
												type="email"
												class="form-control"
												id="inputEmail4"
												placeholder="Email"
												v-model="this.loan.email"
												disabled
											/>
										</div> -->

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <select class="form-select" v-model="selected">
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

                    <hr class="bg-danger border-2 border-top border-success" />

                    <label for="inputPassword4">Amount</label>
                    <input
                      type="number"
                      class="form-control"
                      id="Amount"
                      placeholder=""
                      v-model="Loans.Amount"
                    />
                    <hr class="bg-danger border-2 border-top border-success" />

                    <label for="Interest">interest </label>
                    <input
                      type="integer"
                      class="form-control"
                      id="interest"
                      placeholder=""
                      v-model="Loans.interest"
                    />
                    <hr class="bg-danger border-2 border-top border-success" />
                    <label for="inputEmail4">Term ( Months) </label>
                    <input
                      type="number"
                      class="form-control"
                      id="Term"
                      placeholder="Enter Team in Months "
                      v-model="Loans.Term"
                    />
                  </div>
                  <div class="form-group col-md-6">
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
                              this.interestmonthly
                            }}</span>
                          </h3>
                        </li>
                        <li
                          class="list-group-item d-flex justify-content-between lh-condensed"
                        >
                          <div class="text-success">
                            <h6 class="my-0">Monthly Repayment</h6>
                          </div>
                          <h3>
                            <span class="text-muted">{{
                              this.PrincipleMonthly
                            }}</span>
                          </h3>
                        </li>
                        <li
                          class="list-group-item d-flex justify-content-between lh-condensed"
                        >
                          <div class="text-success">
                            <h6 class="my-0">Monthly Repayment</h6>
                          </div>
                          <h3>
                            <span class="text-muted">{{
                              this.monthlyRepayment
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
                            <span class="text-muted">{{ this.tLoans }}</span>
                          </h3>
                        </li>
                      </ul>
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
            <button type="button" class="btn btn-primary">
              Save Application
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Role Name</label>
                  <input
                    type="text"
                    v-model="role.role_name"
                    class="form-control"
                    id="inputEmail4"
                  />
                </div>
              </div>
              <div class="form-group col-md-10">
                <label for="inputEmail4">Role Description</label>
                <textarea
                  type="text"
                  v-model="role.role_description"
                  class="form-control"
                  id="inputEmail4"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal to Add Members  -->
    <div
      class="modal fade"
      id="Addnewbank"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header"></div>
          <div class="modal-body">
            <form onsubmit="return false;" class="modal-content">
              <div class="container">
                <h2>New Contribution</h2>
                <p>
                  Please fill in this form to create an new member Deposit type.
                </p>

                <label for="psw-repeat"><b>Select Member</b></label>

                <select
                  class="form-select"
                  v-model="selectedmember"
                  @change="employerchangechange"
                  @click="getmembers"
                >
                  <option
                    v-for="option in memberdetails"
                    v-bind:value="option.email"
                    :key="option.id"
                  >
                    {{ option.email }}
                  </option>
                </select>
                <span>selected: {{ selectedmember }}</span>

                <hr />

                <input
                  type="number"
                  class="form-control"
                  id="user_id"
                  v-model="this.user_id"
                  hidden
                />
                <label for="inputAddress" hidden> Unique Field disables</label>
                <input
                  type="number"
                  class="form-control"
                  id="DepositsAmount"
                  placeholder=""
                  v-model="this.uidsavingtypekey"
                  disabled
                />
                <hr />
                <label for="psw"><b>Select saving type</b></label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="selected"
                  @change="savingtypechange"
                >
                  <option
                    v-for="option in savings"
                    v-bind:value="option.saving_type"
                    :key="option.id"
                  >
                    {{ option.saving_type }}
                  </option>
                </select>
                <span>Selected: {{ selected }}</span>

                <hr />
                <label for="inputAddress">Monthly Contribution Amount </label>
                <input
                  type="number"
                  class="form-control"
                  id="DepositsAmount"
                  placeholder=""
                  v-model="contribution.Amount"
                />

                <label for="psw-repeat"><b>Select Employer</b></label>

                <select
                  class="form-control"
                  v-model="selectedemployer"
                  disabled
                >
                  <option
                    v-for="option in employer"
                    v-bind:value="option.id"
                    :key="option.id"
                  >
                    {{ option.employer_name }}
                  </option>
                </select>
                <span>selected: {{ selectedemployer }}</span>

                <hr />

                <label for="inputAddress" hidden
                  >Monthly Contribution Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="DepositsAmount"
                  placeholder=""
                  v-model="this.email"
                  hidden
                />

                <hr />

                <label for="inputAddress">Account Code </label>
                <input
                  type="number"
                  class="form-control"
                  id="DepositsAmount"
                  placeholder=""
                  v-model="this.contribution.accountcode"
                  disabled
                />

                <hr />

                <p>
                  You are about to add a new Deposit Type
                  <!-- <a href="#" style="color:dodgerblue">Terms & Privacy</a>. -->
                </p>

                <div class="form-row">
                  <div class="col">
                    <button
                      style="margin-right: 16px"
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>

                    <button
                      style="margin-right: 16px"
                      type="submit"
                      class="btn btn-secondary"
                      @click="addsavings"
                    >
                      Create New
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import financeNav from "@/components/FinanceNav";
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
import headerDashboard from "@/components/headerdashboard.vue";

export default {
  name: "MonthContribution",
  components: {
    financeNav,
    headerDashboard,
  },
  data() {
    return {
      orgprofile: {},
      orgprofile1: {},
      path: "",
      contribution: {
        User_id:"" ,
        SavingsType: "Building",
        accountcode: "",
        uidsavintype: "",
        Amount: "",
      },
      selectedmember: "",
      selectedmemberid: "",
      selectedemployer: "",
      employer: [],
      selectedcounty: "",
      county: [],
      selected: "A",
      options: [],
      savings: [],
      memberdetails: [],
      tableData: [],
      add_product: false,
      editing: false,
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
        Total_Loan: "",
      },
      loan: [],
      product: [],
      loan_type: "",
      role: [],
      roles: [],
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
    this.getProducts();
    this.getmembers();
  },

  mounted() {
    axios
      .get("/sys_config/api/v1/OrganizationProfile/", {
        params: { admin_email: this.email },
      })
      .then((res) => {
        this.orgprofile = res.data.results;
      });

    axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
      this.employer = res.data.results;
      // $("#example").DataTable();
    });
    axios.get("/sys_config/api/v1/SavingsType/").then((res) => {
      this.savings = res.data.results;
      // $("#example").DataTable();
    });

    axios
      .get("/members/api/v1/MonthDeposits/")
      .then((res) => {
        this.tableData = res.data.results.filter(
          (orgprofile1) => orgprofile1.company_id == this.companyid
        );
        this.initDatatable();
      })


    // axios.get("/members/api/v1/MemberDetails/").then((res) => {
    // 	this.memberdetails = res.data.results;
    // 	// $("#example").DataTable();
    // });
  },

  methods: {
    getmembers() {
      const x = this.companyid;
      axios
        .get("/members/api/v1/MemberDetails/", {
          params: { company_id: x },
        })
        .then((res) => {
          this.memberdetails = res.data.results;
          console.log(x);
          // $("#example").DataTable();
        });
    },
    onChange() {
      this.$router.push(this.path);
    },
    change(Product) {
      this.loan = Product;
      // alert(this.loan.email);
    },

    showModal() {
      // var title = $(this).val();
      // $(".modal-title").html(title);
      $(".ApplyLoan").modal("show");
    },
    addsavings() {
      axios
        .post(`members/api/v1/MonthDeposits/`, {
          // names: '',
          User_id: this.selectedemployerid,
          email: this.selectedmember,
          Amount: this.contribution.Amount,
          accountcode: this.contribution.accountcode,
          uidsavintype: this.uidsavingtypekey,
          employer: this.selectedemployer,
          SavingsType: this.selected,
          company_id: this.companyid,
        })
        .then((response) => {
          response;
          window.location.reload();
          alert("We have received your application");
          // this.$router.push({ name: "operations" });
        })
        .catch((e) => {
          this.errors.push(e);
          alert("We have received your application");
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
    savingtypechange() {
      const opt = this.savings.find((o) => o.saving_type === this.selected);
      // console.log(opt)
      this.contribution.accountcode = opt.accountcode;
    },
    employerchangechange() {
      const opt = this.memberdetails.find(
        (o) => o.email === this.selectedmember
      );
      // console.log(opt)
      this.selectedemployer = opt.Employer;
      this.selectedemployerid = opt.id;
      // this.Loans.Term = opt.maximum_loan_term;
      // this.Loans.gl_account = opt.gl_account;
    },
  },

  computed: {
    uidsavingtypekey() {
      return (
        this.selectedemployerid + this.contribution.accountcode + this.user_id
      );
    },

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
    companyid() {
      var x = this.orgprofile[0].company_id;
      return x;
    },
  },
};
</script>

<style></style>

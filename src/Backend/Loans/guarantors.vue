@
<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Guarantors</h4>
            {{ this.companyid1 }}
          </div>

          <div class="card-body">
            <form @submit.prevent="submit">
              <div class="form-group row">
                <label for="" class="col-sm-2 form-control-label"
                  >Select Email</label
                >

                <div class="form-group col-md-6">
                  <input
                    class="form-select ."
                    id="select-country"
                    data-live-search="true"
                    v-model="this.email"
                  />
                </div>

                <label for="" class="col-sm-2 form-control-label"
                  >Loan ID</label
                >

                <div class="form-group col-md-2">
                  <select
                    class="form-select ."
                    id="select-country"
                    data-live-search="true"
                    v-model="selectedid"
                    @change="getloan"
                  >
                    <option
                      v-for="option in myloans1"
                      v-bind:value="option.id"
                      :key="option.id"
                    >
                      {{ option.id }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-2 form-control-label"
                  >Loan Product</label
                >

                <div class="col-sm-10">
                  <input
                    type="text"
                    id="select-country"
                    data-live-search="true"
                    v-model="memberloan.loan_Type"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-lg-2 required"
                  >Amount Applied
                </label>
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"> </span>
                        </div>

                        <input
                          v-model="this.memberloan.Amount"
                          type="number"
                          class="form-range"
                          min="0"
                          :max="maxtopup"
                          id="customRange2"
                          disabled
                        />
                      </div>
                    </div>

                    <label class="col-form-label col-lg-2 px-0"
                      >Loan Term {{ this.memberloan.Term }}</label
                    >
                    <div class="col-lg-2">
                      <input
                        type="range"
                        class="form-range"
                        id="Term"

                        min="0"
                        :max="this.Loans.Term"
                        v-model="memberloan.Term"
                        Disabled
                      />
                    </div>

                    <label class="col-form-label col-lg-2 px-0"
                      >Interest
                    </label>
                    <div class="col-lg-2">
                      <input
                        type="number"
                        class="form-control"
                        id="Interest"
                        v-model="memberloan.interest"
                        disabled
                      />
                    </div>

                    <!---->
                  </div>
                  <!---->
                </div>
              </div>

              <!-- Loan Details  -->

              <div class="form-group row">
                <label class="col-form-label col-lg-2 required"
                  >Total Repayment (KES)
                </label>
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="input-group">
                        <div class="input-group-prepend"></div>

                        <input
                          type="number"
                          class="form-control"
                          v-model="this.memberloan.Total_Loan"
                          Disabled
                        />
                      </div>
                      <!---->
                      <div id="ember1178" class="popover-container ember-view">
                        <div
                          id="ember1179"
                          class="d-none popover bs-popover-bottom ember-view pop-over-div"
                        >
                          <!---->
                        </div>
                      </div>
                    </div>
                    <label class="col-form-label col-lg-2 px-0"
                      >Monthly Repayment
                    </label>
                    <div class="col-lg-2">
                      <input
                        type="number "
                        class="form-control"
                        id="monthly"
                        v-model="memberloan.Monthrepayment"
                        disabled
                      />
                    </div>

                    <label class="col-form-label col-lg-2 px-0"
                      >Monthly Interest
                    </label>
                    <div class="col-lg-2">
                      <input
                        type="number"
                        class="form-control"
                        id="Interest"
                        v-model="this.memberloan.Interest_Monthly"
                        disabled
                      />
                    </div>

                    <!---->
                  </div>
                  <!---->
                </div>
              </div>

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
                    v-model="this.memberloan.ApplicationDate"
                  />
                  <!---->
                </div>
              </div>

              <div class="row mx-0">
                <div class="col-6">
                  <div class="table">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Guarantor</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(guarantor, index) in guarantors"
                          :key="guarantor.id"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ guarantor.email }}</td>
                          <td>{{ guarantor.Amount_guaranteed }}</td>
                          <td>
                            <button
                              @click="RemoveGuarantor(guarantor.id)"
                              type="button"
                              class="btn btn-outline-secondary"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="unused-amount-zero offset-lg-7 col-lg-5 clearfix">
                  <div class="row">
                    <p class="col-lg-8 text-right">My Current Deposits :</p>
                    <p class="col-lg-4 text-right">
                      {{ this.currentdeposits }}
                    </p>
                  </div>
                  <div class="row">
                    <p class="col-lg-8 text-right">My Loan Balance :</p>
                    <p class="col-lg-4 text-right">{{ this.loanbalance }}</p>
                  </div>
                  <div class="row">
                    <p class="col-lg-8 text-right">Available :</p>
                    <p class="col-lg-4 text-right">{{ maxtopup }}</p>
                  </div>
                  <div class="row">
                    <p class="col-lg-8 text-right">Secured:</p>
                    <p class="col-lg-4 text-right">
                      KES &nbsp; {{ this.secured }} //
                      {{ this.totalGuaranteed }}
                    </p>
                  </div>
                  <div class="row">
                    <p class="col-lg-8 text-right">
                      Need Guarantor:<a href="your link here">
                        <i class="fa fa-plus" aria-hidden="true"></i
                      ></a>
                    </p>
                    <p class="col-lg-4 text-right">
                      KES &nbsp; {{ this.unsecured }}
                    </p>
                  </div>
                  <div class="row"></div>
                </div>
              </div>
            </form>

            <div v-if="this.unsecured <= 0">
              <button
                type="button"
                class="btn btn-outline-secondary col-lg-4"
                data-toggle="modal"
                data-target="#loan"
                @click="submitapproveloan"
              >
                Submit Loan for Approval
              </button>
            </div>
            <div v-else>
              <div class="form-group col-md-10">
                <div class="row">
                  <div class="col-3">
                    <select
                      class="form-select ."
                      id="select-country"
                      data-live-search="true"
                      v-model="selectedemailG"
                      @change="changeGuarantor"
                    >
                      <option
                        v-for="option in optionloansemail"
                        v-bind:value="option.email"
                        :key="option.id"
                      >
                        {{ option.email }}
                      </option>
                    </select>
                  </div>
                  <label class="col-1">{{ maximumtoguarantee }}</label>
                  <div class="col-2">
                    {{ this.selectedamountG }}

                    <input
                      type="range"
                      class="form-range"
                      id="Term"

                      min="0"
                      :max="this.maximumtoguarantee"
                      v-model="selectedamountG"
                    />
                  </div>

                  <div class="col-2">
                    <button
                      @click="AddGuarantor"
                      type="button"
                      class="btn btn-outline-secondary"
                    >
                      Request for Guarantors
                    </button>
                  </div>

                  <div class="col-2">
                    <a href="/loans">
                      <button
                        type="button"
                        class="btn btn-outline-secondary col-lg-20"
                      >
                        Back to Loans
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
import { mapGetters, mapActions, mapState } from "vuex";


// import Popper from "vue-popperjs";
// import Tab from "@/components/Tab.vue";
// import Tabs from "@/components/Tabs.vue";

export default {
  name: "GuarantorArea",
  components: {},

  data() {
    return {
      message: "",
      guarantors: [],
      selectedamountG: "",
      search: "",
      selectedemail: "",
      selectedemailG: "",
      memberemail: [],
      optionloansemail: [],
      optionloans: "",
      loading: false,
      memberloan: {},
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
      selectedid: "",
      options: [],
      tableData: [],
      add_product: false,
      editing: false,
      loanschedule: [],
      loanscheduleMe: [],
      depositstotal: [],
      totaldeposits: [],
      totaldepositsMe: [],
      totaldepositsG: [],
      loanscheduleG: [],

      // totalSavings: [],
      Loans: {
        User_id: "",
        email: this.$store.state.email,
        Amount: "",
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
      applicount: [],
      product: [],
      loan_type: "",
      monthlyloan: [],
      monthdeposits: [],
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
    this.change();
    this.changeGuarantor();
    this.fetchMembers();
    this.fetchLoans();
    this.fetchDeposits();
    this.fetchSavingtype();
    this.fetchLoantype();
    this.fetchOrg();
    this.fetchDocuments();
    this.fetchEmployerinfo();
    this.fetchGuarantors();
    this.fetchUser();

  },

  mounted() {
    axios
      .get("/members/api/v1/MemberDetails/", {
        params: {
          email: this.email,
        },
      })
      .then((response) => {
        this.orgprofile = response.data.results;
        this.companyid1 = this.orgprofile[0].company_id;
      });
    axios
      .get("/loans/api/v1/loans/", {
        params: { email: this.email },
      })
      .then((res) => {
        this.monthlyloan = res.data.results;
        $("#walla").DataTable();
      }),
      axios
        .get("members/api/v1/MemberDetails/", {
          params: {},
        })
        .then((res) => {
          this.memberemail = res.data.results;
          //   console.log("loans", this.loans)
          $("#walla").DataTable();
        }),
      axios
        .get("members/api/v1/MemberDetails/", {
          params: { company_id: this.companyid1 },
        })
        .then((res) => {
          this.optionloansemail = res.data.results.filter(
            (item) =>
              item.company_id == this.companyid1 && item.email != this.email
          );
        });
  },

  methods: {
    // search member details

    ...mapState(["email"]),

     ...mapActions([
      "fetchDocuments",
      "fetchMembers",
      "fetchLoans",
      "fetchDeposits",
      "fetchSavingtype",
      "fetchLoantype",
      "fetchOrg",
      "fetchEmployerinfo",
      "fetchGuarantors",
      "fetchUser",
    ]),

    searchmember() {
      axios
        .get("/loans/api/v1/loans/" + this.selectedemail, {
          params: {},
        })
        .then((res) => {
          this.memberemail = res.data.results;
          $("#walla").DataTable();
        });
    },

    getloan() {
      this.loading = true;

      axios.get("/loans/api/v1/guarantors/").then((res) => {
        this.guarantors = res.data.results.filter(
          (item) => item.Loan_id == this.selectedid
        );
      }),
        // axios
        //   .get("/loans/api/v1/loans/" + this.selectedid + "/")
        //   .then((res) => {
        //     this.loading = false;

        //     this.memberloan = res.data;
        //     // $("#example").DataTable();
        //   });

      // axios.get("/loans/api/v1/loans/" + id + "/").then((res) => {
      // 	this.loading = false;

      // 	this.memberloan = res.data;
      // 	// $("#example").DataTable();
      // });
    },
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
            organizationprofile: this.user_id,
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
            console.log(JSON.stringify(error.response.data));
            // this.error = (e);
            alert(JSON.stringify(error.response.data));
          }),
      ]);
    },

    submitapproveloan() {
      // let random = Math.random();
      // item.label = random;

      axios
        .put("/loans/api/v1/loans/" + this.selectedid + "/", {
          User_id: this.memberloan.id,
          email: this.memberloan.email,
          Amount: this.memberloan.Amount,
          loan_Type: this.memberloan.loan_Type,
          interest: this.memberloan.interest,
          Interest_Monthly: this.memberloan.Interest_Monthly,
          Term: this.memberloan.Term,
          Status: this.memberloan.Status * 1 + 1,
          TotalLoans: this.memberloan.TotalLoans,
          Monthrepayment: this.memberloan.Monthrepayment,
          Principle_Monthly: this.memberloan.Principle_Monthly,
          Total_Loan: this.memberloan.Total_Loan,
          gl_account: this.memberloan.gl_account,
          organizationprofile: this.memberloan.organizationprofile,
          EmployerProfile: this.memberloan.EmployerProfile,
          company_id: this.memberloan.company_id,
          current_balance: 0,
          noofmonthspaid: 0,
          noofmonthspaidvar: 0,
        })
        .then((response) => {
          response;
          // window.location.reload();
          this.$router.push("/profile");
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
            company_id: this.companyid,
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

    AddGuarantor() {
      axios
        .post("/loans/api/v1/guarantors/", {
          User_id: this.user_id,
          name: "",

          email: this.selectedemailG,
          ID_Number: "",
          Loan_id: this.selectedid,
          Mobile_Number: "",
          Amount_guaranteed: this.selectedamountG,
          Approved_status: "",
          Approved_comment: "",
          Approved_by: "",
          Approved_date: this.currentDate,
          borrower_email: this.email,
          loan_Type: this.memberloan.loan_Type,
          Amount: this.memberloan.Amount,
          Term: this.memberloan.Term,
          Monthrepayment: this.memberloan.Monthrepayment,
          Total_Loan: this.memberloan.Total_Loan,
        })
        .then((response) => {
          response;
          window.location.reload();
          confirm("We have Added your guarantor refresh to add another one ");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    changeGuarantor() {
      if (this.selectedemailG === this.email) {
        this.message = "You can not add yourself as a guarantor";
      } else {
        axios
          .get("/finance/api/v1/documents/", {
            params: { Document: "deposits" },
          })
          .then((res) => {
            this.totaldepositsG = res.data.results.filter(
              (item) => item.memberemail == this.selectedemailG
            );
            $("#monthdeposits").DataTable();
            // console.log(res.data.results);
          })
          .catch((error) => {
            console.error(error);
          }),
          axios
            .get("/finance/api/v1/documents/", {
              params: { Document: "loans" },
            })
            .then((res) => {
              this.loanscheduleG = res.data.results.filter(
                (item) => item.memberemail == this.selectedamountG
              );
            })
            .catch((error) => {
              console.error(error);
            });

            
      }
    },

    change() {
      var currentDate = new Date();
      console.log(currentDate);
      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      console.log(currentDateWithFormat);

      const memberfilter = this.email;

      // alert(item.Total_Loan);

      Promise.all([
        axios
          .get("/loans/api/v1/loans/", {
            params: {
              email: this.email,
              Status: 0,
            },
          })
          .then((res) => {
            this.optionloans = res.data.results;
            $("#walla").DataTable();
          }),
        axios
          .get("/loans/api/v1/loans/", {
            params: { email: this.email },
          })
          .then((res) => {
            this.myapprovedloans = res.data.results;
            //   console.log("loans", this.loans)
            $("#walla").DataTable();
          }),

        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: { email: this.email },
          })
          .then((res) => {
            this.monthdepositsme = res.data.results;
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
          .get("/finance/api/v1/documents/", {
            params: { memberemail: this.email, Document: "deposits" },
          })
          .then((res) => {
            this.totaldepositsMe = res.data.results;
            $("#monthdeposits").DataTable();
            // console.log(res.data.results);
          })
          .catch((error) => {
            console.error(error);
          }),

        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: { email: this.email },
          })
          .then((res) => {
            this.monthdeposits = res.data.results;
            $("#monthdeposits").DataTable();
            // console.log(res.data.results);
          })
          .catch((error) => {
            console.error(error);
          }),

        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: memberfilter, Document: "loans" },
          })
          .then((res) => {
            this.myloans1 = res.data.results;
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
    // change(Product) {
    // 	this.loan = Product;
    // 	// alert(this.loan.email);
    // },

    showModal() {
      // var title = $(this).val();
      // $(".modal-title").html(title);
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
            organizationprofile: this.user_id,
            password1: "qxcv2010A",
            password2: "qxcv2010A",
          })
          .then((response) => {
            response;
            window.location.reload();
            confirm("We have received your application");
          })
          .catch((error) => {
            console.log(JSON.stringify(error.response.data));
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
          organizationprofile: this.user_id,
          gl_account: this.Loans.gl_account,
          EmployerProfile: this.loan.Employer,
          company_id: this.loan.company_id,
        })
        .then((response) => {
          response;
          // window.location.reload();
          confirm("We have received your application");
          this.$router.push({ name: "operations" });
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    loantypechange() {
      const opt = this.options.find((o) => o.loan_type === this.selected);
      // console.log(opt)
      this.Loans.interest = opt.interest_rate;
      this.Loans.Term = opt.maximum_loan_term;
      this.Loans.gl_account = opt.gl_account;
    },

    loanschange() {
      const opt = this.options.find((o) => o.loan_type === this.selectedid);
      // console.log(opt)
      this.Loans.interest = opt.interest_rate;
      this.Loans.Term = opt.maximum_loan_term;
      this.Loans.gl_account = opt.gl_account;
    },
  },

  computed: {

    ...mapGetters([
      "allDocuments",
      "allMembers",
      "allDeposits",
      "allOrg",
      "allEmployer",
      "allLoantype",
      "allLoans",
      "allGuarantors",
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
      return Number(this.PaymentAmount - this.tLoans);
    },

    companyid() {
      var x = this.orgprofile[0].company_id;
      return x;
    },

    mymonthlydepositsmember: function () {
      var sum = 0;
      this.monthdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    mymonthlydepositsMe: function () {
      var sum = 0;
      this.monthdepositsme.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    MonthlyLoan: function () {
      var sum = 0;
      this.monthlyloan.forEach((e) => {
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
      this.loanschedule.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalGuaranteed: function () {
      var sum = 0;
      this.allMyguarantee.forEach((e) => {
        sum += e.Amount_guaranteed;
      });
      return sum;
    },

    totalLoansMe: function () {
      var sum = 0;
      this.loanscheduleMe.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    loanbalance: function () {
      return this.totalLoansMe;
    },

    totalSavings: function () {
      var sum = 0;
      this.totaldeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalSavingsMe: function () {
      var sum = 0;
      this.mymonthdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalSavingsG: function () {
      var sum = 0;
      this.totaldepositsG.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalLoansG: function () {
      var sum = 0;
      this.loanscheduleG.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    Gcurrentloans: function () {
      return this.totalLoansG;
    },

    currentdeposits: function () {
      return this.totalSavingsMe;
    },

    Gcurrentdeposits: function () {
      return this.totalSavingsG;
    },

    totalSavingsmember: function () {
      var sum = 0;
      this.depositstotalMe.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
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

    secured: function () {
      let x = this.currentdeposits - this.loanbalance + this.totalGuaranteed;
      return x;
    },

    unsecured: function () {
      let x =
        this.memberloan.Amount - this.currentdeposits - this.totalGuaranteed;
      return x;
    },

    Riskacceptable() {
      const R = this.Gcurrentdeposits * 5; // 5 is the acceptable risk factor
      return R;
    },

    maximumtoguarantee() {
      const M2g = Math.round((this.Riskacceptable - this.Gcurrentloans) / 6); // 6 is the maximum number of people one can gurantee
      return M2g;
    },

      companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_id == this.user_id
      )[0].company_id;
    },

      companyid2() {
      return this.$store.getters.allMembers.filter(
        (item) => item.email == this.email
      )[0].company_id;
    },

    memberloan(){
      return this.myloans1.filter(
        (item) => item.id == this.selectedid
      )[0];
    },
    

     myloans1() {
      return this.$store.getters.allLoans.filter(
        (item) => item.email == this.email
      );
    },
      mymonthdeposits() {
      return this.$store.getters.allDeposits.filter(
        (item) => item.email == this.email
      );
    },
    allMyguarantors() {
      return this.$store.getters.allGuarantors.filter(
        (item) => item.borrower_email == this.email
      );
    },
    allMyguarantee() {
      return this.$store.getters.allGuarantors.filter(
        (item) => item.email == this.email
      );
    },

    //created a computed function to sum column totals for Amount on Documents
  },
};
</script>

<style></style>

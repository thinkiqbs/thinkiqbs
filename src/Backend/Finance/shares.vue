@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="mb-11" style="max-width: 98rem">
          <!-- <button @click="$store.dispatch('all_loans')">+</button> -->

          <div class="row">
            <accountingHeader></accountingHeader>

            <!-- {{ this.companyid3 }} -->
            <!-- {{this.glid }} -->
            <!-- {{ this.gldocs }} -->

            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">All Loans</h4>
                  <span>Org:{{ companyid3 }}</span>

                  <!-- button to toggle modal addSharesDeposits -->

                  <button
                    type="button"
                    style="float: right"
                    class="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addSharesDeposits"
                  >
                    Add Shares/Deposits
                  </button>
                </div>

                <div class="card-body">
                  <!--  -->

                  <table
                    class="table-borderless table-hover table-striped walla"
                  >
                    <thead>
                      <tr class="line-item-header">
                        <th>#</th>

                        <th>Posting Date</th>
                        <th>Source ID</th>
                        <th>Member</th>

                        <th>Document</th>
                        <th>Account Code</th>
                        <th>Descriptions</th>

                        <!---->
                        <th class="text-left">Notes</th>
                        <th class="text-left">Credit</th>
                        <th class="text-left">Debit</th>
                        <th class="text-left">Amount</th>

                        <th class="text-left">Status</th>

                        <!----><!---->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in alldocuments" :key="item.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.Posting_Date }}</td>
                        <td>{{ item.paymentnumber }}</td>

                        <td>{{ item.memberemail }}</td>

                        <td>{{ item.Document }}</td>
                        <td>{{ item.Account_Code }}</td>
                        <td>{{ item.accountype_description }}</td>

                        <td>{{ item.notes }}</td>
                        <td>{{ item.Credit }}</td>
                        <td>{{ item.Debit }}</td>
                        <td>{{ item.Amount }}</td>

                        <td>
                          <button
                            class="btn btn-success"
                            @click="updategl(item)"
                          >
                            updategl
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal for Adding Shares Deposits  -->
        <div
          class="modal fade modalbox"
          id="addSharesDeposits"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Shares Deposits
                </h5>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                 <div class="card">
              <div class="card-header">
                <headerDashboard></headerDashboard>

                <h4 class="card-title">Members</h4>

                <div class="btn-toolbar float-right align-items-center">
                  <!---->

                  <button
                    class="btn btn-success"
                    style="float: right"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#Addnewbank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                      />
                    </svg>

                    New Member

                    <H3 class="badge badge-pill badge-info">
                      {{ applicount }}
                    </H3>
                  </button>

                  <!--  -->

                  <!--  -->

                  <!--  -->
                </div>

                <div class="card-body table-responsive">
                  <table
                    class="table-borderless table-hover table-striped walla"
                  >
                    <thead>
                      <tr lass="line-item-header">
                        <th>#</th>
                        <th>Member Names</th>
                        <th>Phone Number</th>
                        <th>email</th>
                        <th>Account Number</th>
                        <th>Approved</th>
                        <th>Invite</th>
                        <th>Action</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="member in filterloans" :key="member.id">
                        <td>{{ member.id }}</td>
                        <td>{{ member.first_name }} {{ member.last_name }}</td>
                        <td>{{ member.phone_no }}</td>
                        <td>{{ member.email }}</td>
                        <td>{{ member.account_no }}</td>

                        <td>
                          <span v-if="member.Application_Status">
                            <i class="fas fa-check-circle"></i
                          ></span>
                          <span v-if="!member.Application_Status"
                            ><i
                              class="fa fa-warning text-warning"
                              style="font-size: 24px"
                            ></i
                          ></span>
                        </td>

                        <td>
                          <h1 v-if="member.invited == false">
                            <input
                              type="checkbox"
                              id="checkbox"
                              v-model="member.invited"
                              @click="invite(member)"
                            />
                          </h1>
                          <h5 v-else><label for="checkbox"></label> 👍</h5>
                        </td>

                        <td>
                          <div class="row">
                            <div class="col-4" v-if="member.Application_Status">
                              <a
                                href="#"
                                class="btn btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#Contribution"
                                @click="newcontribution(member)"
                              >
                                <i
                                  class="fas fa-piggy-bank"
                                  style="color: green"
                                ></i>
                              </a>
                            </div>
                            <div class="col-4" v-if="member.Application_Status">
                              <button
                                @click="change(member)"
                                type="button"
                                class="btn btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#loan"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-book"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div v-else>
                              <button
                                @click="change(product)"
                                type="button"
                                class="btn btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#"
                                disabled
                              >
                                Inactive
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#MemberInfo"
                            @click="change(member)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                              />
                              <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addSharesDeposits"
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import financeNav from "@/components/FinanceNav";
import accountingHeader from "@/components/accountingHeader.vue";
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
import { mapGetters, mapActions } from "vuex";

// import Popper from "vue-popperjs";
// import Tab from "@/components/Tab.vue";
// import Tabs from "@/components/Tabs.vue";

export default {
  name: "allShares",
  components: {
    financeNav,
    accountingHeader,
  },

  data() {
    return {
      picked: "",

      loan_id: "",
      maincodeid: [],
      loan: [],
      all_loans: [],
      options: "",
      guarantors: [],
      orgprofile: [],
      selectedamountG: "",
      search: "",
      selectedemail: "",
      selected: "",
      selectedemailG: "",
      optionloansemail: [],
      optionloans: "",
      totaldepositsG: [],
      loanscheduleG: [],
      totaldepositsMe: [],
      loanscheduleMe: [],
      totaldeposits: [],
      monthlyloan: [],
      monthdeposits: [],
      memberscount: [],
      myapprovedloans: [],
      gldocs: [],

      loading: false,
      memberloan: [],
      tableData: [],
      add_product: false,
      editing: false,

      loan_type: "",
      role: [],
      roles: [],
      path: "",
      loanschedule: [],
      shares:[
        {
              DocumentID: "",
              SourcedocID: "",
              accountype_description: "",
              maincode: "",
              maincode_description:"",
              Account:"",
              Reporting: "",
              user_Id: "",
              memberemail: "",
              Transaction_date: "",
              Account_Code: "",
              Accountcode_description: "",
              Document:"",
              Account_type:"",
              Transaction_type:"",
              Posting_Date:"",
              Amount: "",
              allocated:false,
              company_id:"",
              notes:"",
              updatedgl:false,
              paymentnumber:"",
              organizationprofile:"",
          }
        
      ],

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

  mounted() {
    axios
      .get("/sys_config/api/v1/OrganizationProfile/", {
        params: {
          admin_email: this.email,
        },
      })
      .then((response) => {
        this.orgprofile = response.data.results;
        this.orgprofileid = this.orgprofile[0].id;
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/loans/api/v1/loans/", {
        params: { company_id: this.companyid3 },
      })
      .then((res) => {
        this.all_loans = res.data.results;
        // console.log("myloans:",this.all_loans)
        // $("#walla").DataTable();
      }),
      axios
        .get("/loans/api/v1/loans/", {
          params: { organizationprofile: this.orgprofileid, Status: 4 },
        })
        .then((res) => {
          this.monthlyloan = res.data.results;
          $("#walla").DataTable();
        }),
      axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
        this.employer = res.data.results;
        // $("#example").DataTable();
      }),
      axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
        this.employer = res.data.results;
        // $("#example").DataTable();
      }),
      axios
        .get("/members/api/v1/MonthDeposits/", {
          params: { organizationprofile: this.orgprofileid },
        })
        .then((res) => {
          this.monthdeposits = res.data.results;
          $("#monthdeposits").DataTable();
        })
        .catch((error) => {
          console.error(error);
        }),
      axios
        .get("/finance/api/v1/documents/", {
          params: { Document: "deposits" },
        })
        .then((res) => {
          this.totaldeposits = res.data.results;
          $("#monthdeposits").DataTable();
        })
        .catch((error) => {
          console.error(error);
        }),
      axios
        .get("/finance/api/v1/documents/", {
          params: {
            organizationprofile: this.orgprofileid,
            Document: "loans",
          },
        })
        .then((res) => {
          this.loanschedule = res.data.results;
          $("#walla").DataTable();
        }),
      axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
        this.employer = res.data.results;
        // $("#example").DataTable();
      });

    axios
      .get("/members/api/v1/MemberDetails/", {
        params: { organizationprofile: this.orgprofileid },
      })
      .then((res) => {
        this.memberscount = res.data.count;
        // $("#members").DataTable();
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/members/api/v1/MemberDetails/", {
        params: {},
      })
      .then((res) => {
        this.memberemail = res.data.results;
        //   console.log("loans", this.loans)
        $("#walla").DataTable();
      }),
      axios
        .get("/loans/api/v1/loans/", {
          params: {},
        })
        .then((res) => {
          this.optionloansemail = res.data.results;
          $("#walla").DataTable();
        });
  },

  created() {
    this.getProducts();
    this.initDatatable();
    this.initDatatable();
    this.fetchDocuments();
    this.fetchDeposits();
    this.fetchMembers();
    this.fetchLoans();
    this.fetchBanktransactions();
    this.fetchPaymentsmade();
    this.fetchPaymentsreceived();
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
    ]),

    updategl(item) {
      this.fetchDocuments();
      this.expense = item;
      this.maincodeid = this.expense.Account_Code;
      (this.gldocs = this.$store.getters.allDocuments.filter(
        (gldocs) => gldocs.Account_Code == this.maincodeid
      )),
        console.log("gldocs", this.gldocs);
      axios
        .put("/finance/api/v1/Chartofaccounts/" + this.glid + "/", {
          account_type: this.glaccountype,
          maincode: this.glmaincode,
          parent_account: this.glparent_account,
          accountname: this.glaccountname,
          description: this.gladescription,
          financial_statement: this.glfinancial_statement,
          company_id: this.companyid3,
          key: this.glkey,
          debit: this.gldocsDebit,
          credit: this.gldocsCredit,
          balance: this.gldocsAmount,
        })
        .then(function () {
          // window.location.reload();
        })
        .catch((e) => {
          alert(e);
        });
    },

    Getloanbyid(item) {
      this.loan = item;
      const x = this.loan.id;
      console.table(x);

      axios
        .get("/loans/api/v1/guarantors/", {
          params: { Loan_id: x },
        })
        .then((res) => {
          this.guarantors = res.data.results;
          $("#walla").DataTable();
        }),
        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: this.loan.email, Document: "loans" },
          })
          .then((res) => {
            this.loanscheduleMe = res.data.results;
            $("#walla").DataTable();
          }),
        axios
          .get("sys_config/api/v1/LoanType/", {
            params: {},
          })
          .then((res) => {
            this.Termx = res.data.results.filter(
              (loan) => loan.loan_type == this.loan.loan_Type
            );
            this.TermY = this.Termx[0].maximum_loan_term;
            //   console.log("loans", this.loans)
            $("#walla").DataTable();
          }),
        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: this.loan.email, Document: "deposits" },
          })
          .then((res) => {
            this.totaldepositsMe = res.data.results;
            $("#monthdeposits").DataTable();
          })
          .catch((error) => {
            console.error(error);
          });
    },
    updateloanschedule(item) {
      this.loan = item;

      //if Topup is true
      if (this.loan.Topup == "1") {
        this.loan.Amount = this.newloan;
        this.Monthrepayment = this.newmonthlyRepayment;
        this.Interest_Monthly = this.newinterestmonthly;
      } else {
        this.loan.Amount;
      }

      Promise.all([
        axios
          .post(`/finance/api/v1/loanschedule/`, {
            // names: '',
            user_id: item.User_id,
            email: this.loan.email,
            date_disbursed: this.currentDate,
            loan_id: item.id,
            amountpaid: this.amounttopay,
            amount_disbursed: this.loan.Topup_Amount,
            monthlyrepayment: item.Total_Loan,
            loan_approved: "True",
            deficit: 0,
            Transactiontype: "DIS" + Math.random(),
            organizationprofile: this.orgprofileid,
            company_id: this.loan.company_id,
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
            source_id: this.loan.id,
            email: this.loan.email,
            paymentNumber: "PYMT" + Math.random(),
            transactiondate: this.currentDate,
            account: this.loan.gl_account,
            paymentRef: item.id,
            amount: this.amounttopay,
            document: "loans",
            paid: "True",
            notes: "Loan Disbursment for " + this.currentDate,
            organizationprofile: this.orgprofileid,
            gl_account: this.loan.gl_account,
            company_id: this.loan.company_id,
          })
          .then((response) => {
            response;
            // window.location.reload();
            // confirm("Loan Schedule updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),
        axios
          .put("/loans/api/v1/loans/" + this.loan.id + "/", {
            User_id: this.loan.id,
            email: this.loan.email,
            Amount: this.loan.Amount,
            loan_Type: this.loan.loan_Type,
            interest: this.loan.interest,
            Interest_Monthly: this.newinterestmonthly,
            Term: this.loan.Term,
            Status: this.loan.Status,
            TotalLoans: this.loan.TotalLoans,
            Disbursed: "True",
            Monthrepayment: this.newmonthlyRepayment,
            Principle_Monthly: this.loan.Principle_Monthly,
            Total_Loan: this.loan.Total_Loan,
            gl_account: this.loan.gl_account,
            organizationprofile: this.loan.organizationprofile,
            EmployerProfile: this.loan.EmployerProfile,
            company_id: this.loan.company_id,
            New_Term: 0,
            Topup_Amount: this.loan.Topup_Amount,
            NewMonthrepayment: this.newmonthlyRepayment,
            NewInterest_Monthly: this.newinterestmonthly,
            NewLoan: this.newloan,
            current_balance: this.loanbalance,
            noofmonthspaid: this.loan.noofmonthspaid,
            noofmonthspaidvar: this.loan.noofmonthspaidvar,
          })
          .then((response) => {
            response;
            this.fetchDocuments();
            this.fetchDeposits();
            this.fetchMembers();
            this.fetchLoans();
            this.fetchBanktransactions();
            this.fetchPaymentsmade();
            this.fetchPaymentsreceived();
            // window.location.reload();
            // confirm("We have received your application");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),
      ]);
    },
    submitapproveloan() {
      // let random = Math.random();
      // item.label = random;

      axios
        .put("/loans/api/v1/loans/" + this.loan.id + "/", {
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.loan.Amount,
          loan_Type: this.loan.loan_Type,
          interest: this.loan.interest,
          Interest_Monthly: this.loan.Interest_Monthly,
          Term: this.loan.Term,
          Status: this.loan.Status * 1 + 1,
          TotalLoans: this.loan.TotalLoans,
          Monthrepayment: this.loan.Monthrepayment,
          Principle_Monthly: this.loan.Principle_Monthly,
          Total_Loan: this.loan.Total_Loan,
          gl_account: this.loan.gl_account,
          organizationprofile: this.loan.organizationprofile,
          EmployerProfile: this.loan.EmployerProfile,
          company_id: this.loan.company_id,
          current_balance: this.loanbalance,
          noofmonthspaid: this.loan.noofmonthspaid,
          noofmonthspaidvar: this.loan.noofmonthspaidvar,
        })
        .then((response) => {
          response;

          this.fetchDocuments();
          this.fetchDeposits();
          this.fetchMembers();
          this.fetchLoans();
          this.fetchBanktransactions();
          this.fetchPaymentsmade();
          this.fetchPaymentsreceived();

          // confirm("We have received your application");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    submitTopup() {
      // let random = Math.random();
      // item.label = random;

      axios
        .put("/loans/api/v1/loans/" + this.loan.id + "/", {
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.loan.Amount,
          loan_Type: this.loan.loan_Type,
          interest: this.loan.interest,
          Interest_Monthly: this.loan.Interest_Monthly,
          Term: this.loan.Term,
          Status: 0,
          Disbursed: "False",
          TotalLoans: this.loan.TotalLoans,
          Monthrepayment: this.loan.Monthrepayment,
          Principle_Monthly: this.loan.Principle_Monthly,
          Total_Loan: this.loan.Total_Loan,
          gl_account: this.loan.gl_account,
          organizationprofile: this.loan.organizationprofile,
          EmployerProfile: this.loan.EmployerProfile,
          company_id: this.loan.company_id,
          New_Term: 0,
          Topup_Amount: this.loan.Topup_Amount,
          NewMonthrepayment: this.newmonthlyRepayment,
          NewInterest_Monthly: this.newinterestmonthly,
          NewLoan: this.newloan,
          Topup: "True",
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
            params: { id: this.loan.id, Document: "deposits" },
          })
          .then((res) => {
            this.totaldepositsMe = res.data.results;
            $("#monthdeposits").DataTable();
          })
          .catch((error) => {
            console.error(error);
          }),

        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: {
              company_id: this.companyid3,
            },
          })
          .then((res) => {
            this.monthdeposits = res.data.results;
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
          Status: "0",
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

    approveloan() {
      // let random = Math.random();
      // item.label = random;

      axios
        .put("/loans/api/v1/loans/" + this.loan.id + "/", {
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.loan.Amount,
          loan_Type: this.loan.loan_Type,
          interest: this.loan.interest,
          Interest_Monthly: this.loan.Interest_Monthly,
          Term: this.loan.Term,
          Status: this.loan.Status * 1 + 1,
          TotalLoans: this.loan.TotalLoans,
          Monthrepayment: this.loan.Monthrepayment,
          Principle_Monthly: this.loan.Principle_Monthly,
          Total_Loan: this.loan.Total_Loan,
          gl_account: this.loan.gl_account,
          organizationprofile: this.loan.organizationprofile,
          EmployerProfile: this.loan.EmployerProfile,
          company_id: this.loan.company_id,
          current_balance: this.loanbalance,
          noofmonthspaid: this.loan.noofmonthspaid,
          noofmonthspaidvar: this.loan.noofmonthspaidvar,
        })
        .then((response) => {
          response;
          this.fetchMembers(this.selected);

          this.fetchDocuments();
          this.fetchDeposits();
          this.fetchLoans();
          this.fetchBanktransactions();
          this.fetchPaymentsmade();
          this.fetchPaymentsreceived();

          confirm("We have received your application");
          //dismiss current modal
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    AddGuarantor() {
      axios
        .post("/loans/api/v1/guarantors/", {
          uuidguarantor: this.memberloan.id + this.memberloan.email,
          User_id: this.user_id,
          name: "",
          email: this.selectedemailG,
          ID_Number: "",
          Loan_id: this.loan.id,
          Mobile_Number: "",
          Amount_guaranteed: this.selectedamountG,
          Monthrepayment: this.loan.Monthrepayment,
          Term: this.loan.Term,
          Total_Loan: this.loan.Total_Loan,
          Amount: this.loan.Amount,
          loan_Type: this.loan.loan_Type,
          Amount_Approved: "",

          Approved_status: "",
          Approved_comment: "",
          Approved_by: "",
        })
        .then((response) => {
          response;

          //refresh modal
          // this.selectedemailG = "";
          // this.selectedamountG = "";

          window.location.reload();
          confirm("We have gurantor updates ");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    changeGuarantor() {
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
        });
    },

    onChange() {
      this.$router.push(this.path);
    },

    gotoops() {
      this.$router.push("/operations");
    },

    changetoapprove(item) {
      this.memberloan = item;

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

    changex(item) {
      // let random = Math.random();
      // item.label = random;

      this.memberloan = item;

      const memberfilter = this.memberloan.email;

      Promise.all([
        axios.get("/loans/api/v1/guarantors/").then((res) => {
          this.guarantors = res.data.results.filter(
            (item) => item.Loan_id == this.loan.id
          );
        }),
        axios
          .get("/loans/api/v1/loans/", {
            params: {
              email: memberfilter,
              Status: "1",
              organizationprofile: this.orgprofileid,
            },
          })
          .then((res) => {
            this.optionloans = res.data.results;
            $("#walla").DataTable();
          }),
        axios
          .get("/loans/api/v1/loans/", {
            params: { email: memberfilter, Status: "4" },
          })
          .then((res) => {
            this.myapprovedloans = res.data.results;
            //   console.log("loans", this.loans)
            $("#walla").DataTable();
          }),

        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: { email: memberfilter },
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

            $("#walla").DataTable();
          }),

        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: memberfilter, Document: "deposits" },
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
            params: { organizationprofile: this.orgprofileid },
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
            this.loanscheduleMe = res.data.results;
            $("#walla").DataTable();
          }),

        axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
          this.employer = res.data.results;
          // $("#example").DataTable();
        }),
      ]);

      // console.log(this.loanstype.loan_type);
    },
    addrecords() {
      axios
        .post(`/members/api/v1/MemberDetails/`, {
          // names: '',
          // User_id: this.user_id,
          first_name: this.addmembers.first_name,
          last_name: this.addmembers.last_name,
          phone_no: this.addmembers.phone_no,
          bankname: this.addmembers.bankname,
          email: this.addmembers.email,
          date_of_birth: this.addmembers.date_of_birth,
          Employer: this.addmembers.Employer,
          Department: this.addmembers.Department,
          county: this.addmembers.county,
        })
        .then((response) => {
          response;
          confirm("We have received your application");
        })
        .catch((error) => {
          // this.error = (e);
          alert(JSON.stringify(error.response.data));
        });
    },
    getProducts(Exception) {
      axios
        .get("/loans/api/v1/loans/", {
          params: { organizationprofile: this.orgprofileid },
        })
        .then((res) => {
          this.tableData = res.data.results.filter(
            (loan) => loan.company_id == this.companyid3
          );
          this.initDatatable();
        })
        .catch((error) => Exception.handle(error));
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

    maxtopup: function () {
      return this.currentdeposits * 3 - this.loanbalance;
    },

    sourceiddoc: function () {
      var x = "rcpt" + this.loan.id;

      return x;
    },

    interestmonthly() {
      // let tTerm = this.Loans.Term;
      // let tinterest = this.Loans.interest;
      // let tamount = this.Loans.Amount;
      // return Math.round(((tinterest / 12 / 100) * tamount) / tTerm);
      let int = Math.round((this.tLoans - this.loan.Amount) / this.loan.Term);

      if (isNaN(int)) {
        int = 0;
        ``;
      }
      return int;
    },

    newinterestmonthly() {
      // let tTerm = this.Loans.Term;
      // let tinterest = this.Loans.interest;
      // let tamount = this.Loans.Amount;
      // return Math.round(((tinterest / 12 / 100) * tamount) / tTerm);
      let int = Math.round((this.NewtLoans - this.newloan) / this.loan.Term);

      if (isNaN(int)) {
        int = 0;
        ``;
      }
      return int;
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

    secured: function () {
      let x = this.currentdeposits - this.loanbalance + this.totalGuaranteed;
      return x;
    },

    unsecured: function () {
      let x = this.loan.Amount - this.currentdeposits - this.totalGuaranteed;
      return x;
    },

    monthlyRepayment() {
      // let tinterest = this.interest/100;
      let tTerm = this.loan.Term;
      let tLoans = this.loan.Amount;
      let mr = Math.round(tLoans / tTerm + this.interestmonthly);

      if (isNaN(mr)) {
        mr = 0;
      }
      return mr;
    },

    newmonthlyRepayment() {
      // let tinterest = this.interest/100;
      let tTerm = this.loan.Term;
      let tLoans = this.newloan;
      let mr = Math.round(tLoans / tTerm + this.interestmonthly);

      if (isNaN(mr)) {
        mr = 0;
      }
      return mr;
    },

    Riskacceptable() {
      const R = this.Gcurrentdeposits * 5; // 5 is the acceptable risk factor
      return R;
    },

    interestRate() {
      return this.loan.interest / 100 / 12;
    },

    emi() {
      var x = Math.pow(1 + this.interestRate, this.loan.Term);
      var emiMonthly = (this.loan.Amount * x * this.interestRate) / (x - 1);
      return Number(emiMonthly);
    },

    Newemi() {
      var x = Math.pow(1 + this.interestRate, this.loan.Term);
      var emiMonthly = (this.newloan * x * this.interestRate) / (x - 1);
      return Number(emiMonthly);
    },

    tLoans() {
      let tl = Math.round(this.emi * this.loan.Term);

      if (isNaN(tl)) {
        tl = 0;
      }
      return tl;
    },

    NewtLoans() {
      let tl = Math.round(this.Newemi * this.loan.Term);

      if (isNaN(tl)) {
        tl = 0;
      }
      return tl;
    },

    maximumtoguarantee() {
      const M2g = Math.round((this.Riskacceptable - this.Gcurrentloans) / 6); // 6 is the maximum number of people one can gurantee
      return M2g;
    },

    //created a computed function to sum column totals for Amount on Documents
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

    totalGuaranteed: function () {
      var sum = 0;
      this.guarantors.forEach((e) => {
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

    totalSavingsMe: function () {
      var sum = 0;
      this.totaldepositsMe.forEach((e) => {
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

    mymonthlydepositsmember: function () {
      var sum = 0;
      this.monthdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    loanbalance: function () {
      return this.totalLoansMe;
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

    totalSavings: function () {
      var sum = 0;
      this.totaldeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalLoans: function () {
      var sum = 0;
      this.loanschedule.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    //create a current date function with format yyyy/mm/dd
    currentDatex: function () {
      const current = new Date();
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      return date;
    },

    currentMonth: function () {
      const current = new Date();
      const date = `${current.getMonth() + 1}`;
      return date;
    },

    currentYear: function () {
      const current = new Date();
      const date = `${current.getFullYear()}`;
      return date;
    },

    monthsTogo: function () {
      const current = new Date();
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      const date2 = `${this.memberloan.Loan_end_date}`;
      const date1 = new Date(date);
      const date3 = new Date(date2);
      const diffTime = Math.abs(date3 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    },

   filterloans: function () {
      return this.members1.filter((member) =>
        member.email.toLowerCase().includes(this.search.toLowerCase())
      );
    },

     members1: function () {
      return this.$store.getters.allMembers.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    newloan: function () {
      return this.loan.Amount + this.loan.Topup_Amount * 1;
    },

    amounttopay: function () {
      const x = this.loan.Amount;
      if (this.loan.Topup == "0") {
        return x;
      } else return this.loan.Topup_Amount;
    },
    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },

    all_loans1: function () {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    alldocuments: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    memberloanrepayment: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 &&
          item.SourcedocID == this.repaymentloanid &&
          item.Document == "loans"
      );
    },
    memberLoancureentbalance: function () {
      var sum = 0;
      this.memberloanrepayment.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    repaymentloanid: function () {
      return "LOAN" + this.loan.id;
    },

    // GL Update fields

    glid: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].id;
    },

    glaccountype: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].account_type;
    },
    glmaincode: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].maincode;
    },

    glparent_account: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].parent_account;
    },

    glfinancial_statement: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].financial_statement;
    },

    glaccountname: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].accountname;
    },

    gladescription: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].description;
    },

    glkey: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].key;
    },

    // GLid document

    glidDocuments: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.Account == this.maincodeid
      )[0].key;
    },

    //sum gldocs amount
    gldocsDebit: function () {
      var sum = 0;
      this.gldocs.forEach((e) => {
        sum += e.Debit;
      });
      return sum;
    },

    gldocsCredit: function () {
      var sum = 0;
      this.gldocs.forEach((e) => {
        sum += e.Credit;
      });
      return sum;
    },

    gldocsAmount: function () {
      this.fetchDocuments();
      var sum = 0;
      this.gldocs.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    // maincodeid: function() {
    // 	var x = this.expense.Account_Code;
    // 	return x;
    // },

    //
  },
};
</script>

<style></style>

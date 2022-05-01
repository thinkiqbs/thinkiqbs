@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="mb-11" style="max-width: 98rem">
          <div class="row">
            <accountingHeader></accountingHeader>

            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">All Jornals</h4>
                  <span>Org:{{ companyid3 }}</span>
                  <!-- {{this.maincodeid}} -->
                  <!-- {{glid}} -->
                  <!-- {{this.expense}} -->

                  <div class="btn-toolbar float-right align-items-center">
                    <!---->

                    <button
                      class="btn btn-success"
                      style="float: right"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#Newexpense"
                    >
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>

                      Create Journal
                    </button>

                    <!--  -->

                    <!--  -->
                  </div>
                  <AccountingMenu></AccountingMenu>
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
                        <th>Document</th>
                        <th>Account Code</th>

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
                      <tr v-for="(item, index) in allJournals" :key="item.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.Posting_Date }}</td>
                        <td>{{ item.Document }}</td>
                        <td>{{ item.Account_Code }}</td>
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

        <!-- Modal for Approvals  -->

        <div
          class="modal fade modalbox"
          id="Newexpense"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog ">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">
                  Journal Template
                </h3>
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
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        id="inputEmail4"
                        v-model="Journal.Posting_Date"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Employee/Reason</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-12">
                      <label for="inputEmail4"> Notes</label>
                      <textarea
                        class="form-control"
                        id="inputEmail4"
                        rows="3"
                        V-model="Journal.notes"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <!-- <label class="col-form-label col-lg-1 required"
											>Amount
										</label> -->
                    <div class="col-lg-10">
                      <div class="row">
                        <div class="col-lg-3">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">GL Account </span>
                            </div>
                            <select
                              v-model="selectedgl"
                              class="selectpicker form-control"
                            >
                              <option
                                v-for="option in allGl1Expense"
                                :value="option.maincode"
                                :key="option.id"
                              >
                                {{ option.accountname }}
                              </option>
                            </select>
                            <!-- <span>Selected: {{ selectedgl }}</span> -->
                          </div>
                          <!---->
                        </div>

                        <div class="col-lg-4">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Description </span>
                            </div>
                            <input
                              id="ember1179"
                              class="ember-text-field text-left ember-view form-control text-left"
                              type="text"
                            />

                            <!-- <span>Selected: {{ selectedgl }}</span> -->
                          </div>
                          <!---->
                        </div>

                        <div class="col-lg-2">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Dr </span>
                            </div>
                            <input
                              id="debit1"
                              class="ember-text-field text-left ember-view form-control text-left"
                              type="number"
                              v-model="Journal.Debit"
                            />
                          </div>

                          <!---->
                        </div>

                        <!---->

                        <div class="col-lg-2">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">CR</span>
                            </div>
                            <input
                              id="ember1179"
                              class="ember-text-field text-left ember-view form-control text-left"
                              type="number"
                              v-model="amountcr"
                              Disabled
                            />
                          </div>
                          <!---->
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">GL Account </span>
                            </div>
                            <select
                              v-model="selectedglcontr"
                              class="selectpicker form-control"
                            >
                              <option
                                v-for="option in allGl1Expense"
                                :value="option.maincode"
                                :key="option.id"
                              >
                                {{ option.accountname }}
                              </option>
                            </select>
                            <!-- <span>Selected: {{ selectedgl }}</span> -->
                          </div>
                          <!---->
                        </div>

                        <div class="col-lg-4">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Description </span>
                            </div>
                            <input
                              id="ember1179"
                              class="ember-text-field text-left ember-view form-control text-left"
                              type="text"
                            />

                            <!-- <span>Selected: {{ selectedgl }}</span> -->
                          </div>
                          <!---->
                        </div>

                        <div class="col-lg-2">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Dr </span>
                            </div>
                            <input
                              id="debit2"
                              class="ember-text-field text-left ember-view form-control text-left"
                              type="text"
                              v-model="Journal.Credit"
                              aria-hidden=""
                            />
                          </div>

                          <!---->
                        </div>

                        <!---->

                        <div class="col-lg-2">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">CR</span>
                            </div>
                            <input
                              id="ember1182"
                              class="ember-text-field text-left ember-view form-control"
                              type="text"
                              v-model="amountdr"
                              disabled
                            />
                            <!-- <span>Selected: {{ selectedgl }}</span> -->
                          </div>
                          <!---->
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
                  @click="postJounal(loan)"
                  type="button"
                  class="btn btn-primary"
                >
                  Save Journal Entry
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <!-- Button trigger modal -->

        //create modal button

        <!-- Modal -->
      </div>
    </div>
  </div>
</template>

<script>

import {getAPI} from  "@/axios-api";
import financeNav from "@/components/FinanceNav";
import accountingHeader from "@/components/accountingHeader.vue";
import AccountingMenu from "@/components/AccountingMenu.vue";
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
import { mapGetters, mapActions } from "vuex";

// import Popper from "vue-popperjs";
// import Tab from "@/components/Tab.vue";
// import Tabs from "@/components/Tabs.vue";

export default {
  name: "accounting-jounals",
  components: {
    financeNav,
    accountingHeader,
    AccountingMenu,
  },

  data() {
    return {
      selected: "A",
      options: [],
      picked: "",
      gldocs: [],

      taxes: [
        { text: "VAT", value: "1" },
        { text: "WHT", value: "2" },
        { text: "Three", value: "C" },
      ],
      expense: [],
      selectedglcontr: "",
      selectedgl: "",

      Journal: [
        {
          user_id: "",
          memberemail: "",
          Account: "",
          Transaction_date: "",
          Account_Code: "",
          Credit: "",
          Debit: "",
          Amount: "",
          Posting_Date: "",
          notes: "",
          message: "",
        },
      ],

      Journal1: [
        {
          user_id: "",
          memberemail: "",

          Account: "",

          Transaction_date: "",
          Account_Code: "",

          Credit: 123,
          Debit: "",
          Amount: "",

          Posting_Date: "",

          notes: "",
        },
      ],

      loan_id: "",
      loan: [],
      all_loans: [],
      selectedbank: [],
      bankglchange: [],
      banks: [],
      bank: [],
      // options: "",
      guarantors: [],
      orgprofile: [],
      selectedamountG: "",
      search: "",
      selectedemail: "",

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
      glchanged: [],

      loading: false,
      memberloan: [],
      tableData: [],
      add_product: false,
      editing: false,


      loan_type: "",
      role: [],
      roles: [],
      // path: "",
      loanschedule: [],
      selectedtax: "",
      payment: [
        {
          transactiondate: "",
          organizationprofile: "",
          company_id: "",
          description: "",
          gl_account: "",
          gl_account_description: "",
          amount: "",
          tax_Amount: "",
          Tax_code: "",

          tax_gl_account: "",
          tax_gl_account_description: "",
          expensebye: "",
          ref: "",
          chequeNo: "",
        },
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

  mounted() {},

  created() {
    this.updategllist();
    this.fetchExpenses();
    this.initDatatable();

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

    updategllist(allGl1) {
      this.options = allGl1;
    },

    //update GL
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

    postJounal(item) {
      const opt = this.allGls1.find((o) => o.maincode == this.bankgl);
      console.log("gl", opt);


      this.glchanged.account_type = opt.account_type;
      this.glchanged.accountype_description = opt.accounttype_description;
      this.glchanged.maincode = opt.maincode;
      this.glchanged.maincode_description = opt.maincode_description;
      this.glchanged.parent_account = opt.parent_account;
      this.glchanged.accountname = opt.accountname;
      Promise.all([
        (this.expense = item),
         
        getAPI
          .post(`/finance/api/v1/documents/`, {
            // names: '',
            user_Id: this.user_id,
            memberemail: "journal@email.com",
            DocumentID:
              this.companyid3 + Math.floor(Math.random() * 1000000) + "CR",
            SourcedocID: "NA",
            maincode:this.glchanged.maincode,
            maincode_description:this.glchanged.maincode_description,
            account_type:this.glchanged.account_type,
            accountype_description:this.glchanged.accountype_description,
            parent_account:this.glchanged.parent_account,
            accountname:this.glchanged.accountname,
            Account: this.selectedgl,
            Reporting: "P&L",
            Transaction_date: this.Journal.Posting_Date,

            Account_Code: this.selectedgl,
            Document: "Journal",
            Credit: this.amountcr,
            Debit: this.amountdr,
            Amount: this.amountdoc,
            ReferenceNo: "Jounal" + Math.floor(Math.random() * 11000000) + "CR",
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            Account_type: "Expense",
            organizationprofile: this.orgprof,
            company_id: this.companyid3,
            notes: "",
          })
          .then((response) => {
            response;
            // confirm("Loan Schedule updated");
            // alert("transactions updated");

            // refresh current window
            // window.location.reload();
          })

          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),

        (this.gldocs = this.$store.getters.allDocuments.filter(
          (gldocs) => gldocs.Account == this.expense.gl_account
        )),
        getAPI
          .post(`/finance/api/v1/documents/`, {
            // names: '',
            user_Id: this.user_id,
            memberemail: "journal@email.com",
            DocumentID:
              this.companyid3 + Math.floor(Math.random() * 11000000) + "CR",
            SourcedocID: "JNL" + this.expense.id,
            Account: this.selectedglcontr,
            Reporting: "P&L",
            Transaction_date: this.Journal.Posting_Date,
            Account_Code: this.selectedglcontr,
            Document: "Journal",
            Credit: this.amountdr,
            Debit: this.amountcr,
            Amount: this.amountdoc,
            ReferenceNo: "Jounal" + Math.floor(Math.random() * 11000000) + "CR",
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            Account_type: "Expense",
            organizationprofile: this.orgprof,
            company_id: this.companyid3,
            notes: "",
          })
          .then((response) => {
            response;
            // confirm("Loan Schedule updated");
            // alert("transactions updated");

            // refresh current window
            // window.location.reload();
          })

          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),

        (this.gldocs = this.$store.getters.allDocuments.filter(
          (gldocs) => gldocs.Account == this.expense.gl_account
        )),
      ]);
    },

    refreshgl() {
      Promise.all([this.$store.dispatch("fetchGl")]).finally(() => {
        // using "finally" so even if there are errors, it stops "loading"
        this.loading = false;
      });
    },

    updategl(item) {
      this.expense = item;
      (this.gldocs = this.$store.getters.allDocuments.filter(
        (gldocs) => gldocs.Account == this.expense.gl_account
      )),
        getAPI
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

      this.allGl();
    },
  },

  getProducts(Exception) {
    getAPI
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

  computed: {
    ...mapGetters(
      ["allDocuments",
      "allDeposits",
      "allMembers",
      "allLoans",
      "allOrg",
      "allUser",
      "allBanktransactions",
      "allPaymentsmade",
      "allPaymentsreceived",
      "allGl",
      "allExpenses"]
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

    maxtopup: function () {
      return this.currentdeposits * 3 - this.loanbalance;
    },

    sourceiddoc: function () {
      var x = "rcpt" + this.loan.id;

      return x;
    },

    amountdoc() {
      //create if statement
      if (this.Journal.Debit < 1) {
        return this.Journal.Credit;
      } else {
        return this.Journal.Debit;
      }
    },

    amountdr() {
      //create  an if statement
      if (this.Journal.Debit != null) {
        document.getElementById("debit2").disabled = true;
        return this.Journal.Debit;
      } else {
        return 0;
      }
    },

    amountcr() {
      //create  an if statement
      if (this.Journal.Credit != null) {
        document.getElementById("debit1").disabled = true;
        return this.Journal.Credit;
      } else {
        return 0;
      }
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
      return this.allExpenses1.filter((item) =>
        item.email.toLowerCase().includes(this.search.toLowerCase())
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

    allJournals: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 && item.Document == "Journal"
      );
    },

    allExpenses1: function () {
      return this.$store.getters.allExpenses.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    allGl1: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    // Income Statement Area

    allGl1revenue: function () {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.account_type == "4000000"
      );
    },

    allGl1cog: function () {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.account_type == "4000000"
      );
    },

    allGl1Expense: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    allGl1taxes: function () {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.account_type == "4000000"
      );
    },

    allGl1otherincome: function () {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.account_type == "4000000"
      );
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
      var sum = 0;
      this.gldocs.forEach((e) => {
        sum += e.Credit;
      });
      return sum;
    },

    orgprof() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].id;
    },

    //

    maincodeid: function () {
      var x = this.expense.gl_account;
      return x;
    },
  },
};
</script>

<style></style>
The resource requested could not be found on this server!

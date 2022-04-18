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
                  <h2 class="card-title">
                    Opening Balance- <span>Org:{{ companyid3 }}</span>
                  </h2>

                  <div class="row">
                    <div class="col">
                      Select Loans type?
                      <select
                        class="form-select"
                        id="select-country"
                        data-live-search="true"
                        v-model="selectedEquityAccount"
                        @change="gltypechange"
                        style="color=green"
                      >
                        <option
                          v-for="option in allGls1Capital"
                          v-bind:value="option.maincode"
                          :key="option.id"
                        >
                          {{ option.accountname }}
                        </option>
                      </select>
                    </div>

                    <div class="col">
                      <button
                        type="button"
                        style="float: right"
                        class="btn btn-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#addSharesDeposits"
                      >
                        Add Opening Balance
                      </button>
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        style="float: right"
                        class="btn btn-primary btn-sm"
                        @click="importexpences"
                      >
                        Go to Import
                      </button>
                    </div>
                    <div class="col" style="float: right">
                      <Refresh></Refresh>
                    </div>
                    <div class="col" style="float: right">
                      <AccountingMenu></AccountingMenu>
                    </div>
                  </div>

                  <!-- button to toggle modal addSharesDeposits -->

                  &nbsp;

                  <div
                    class="rounded-xlg mx-3 mb-3 entity-dashboard d-flex"
                    style="float: right"
                  >
                    <div></div>
                  </div>
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
                        <th>Account Code</th>
                        <th>Descriptions</th>
                        <th>Member</th>
                        <th>Document</th>
                        <th class="text-left">Credit</th>
                        <th class="text-left">Debit</th>
                        <th class="text-left">Amount</th>
                        <th class="text-left">Notes</th>
                        <th class="text-left">Status</th>
                        <th class="text-left">Actions</th>

                        <!---->

                        <!----><!---->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in allob" :key="item.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{item.Transaction_date}}</td>
                        <td>{{ item.maincode }}</td>
                        <td>{{ item.accountype_description }}</td>
                        <td>{{ item.memberemail }}</td>
                        <td>{{ item.Document }}</td>
                        <td>{{ item.Credit }}</td>
                        <td>{{ item.Debit }}</td>
                        <td>{{ item.Amount }}</td>
                        <td>{{ item.notes }}</td>

                        
                        <td>
                          <button
                            class="btn btn-success"
                            @click="updategl(item)"
                          >
                            Edit
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
                  Add Opening Balances
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
                <div class="row">
                  <div class="col">
                    <!-- form to addNewShares -->
                    <form class="row g-3" @submit.prevent="onSubmit">
                      <div class="col-md-4">
                        <label for="validationDefault01" class="form-label"
                          >As at
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="validationDefault01"
                          v-model="this.ob.Transaction_date"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="validationDefault03" class="form-label"
                          >Share Capital GL</label
                        >
                        <select
                          v-model="selectedgl"
                          class="selectpicker form-control"
                          @change="changeSharesGl"
                        >
                          <option
                            v-for="option in allGl1Expense"
                            :value="option.maincode"
                            :key="option.id"
                          >
                            {{ option.accountname }}
                          </option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label for="validationDefault02" class="form-label"
                          >Document</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="validationDefault02"
                          v-model="this.ob.Document"
                          required
                        />
                      </div>
                      <div class="col-md-4">
                        <label
                          for="validationDefaultUsername"
                          class="form-label"
                          >Email Address</label
                        >
                        <div class="input-group">
                          <span class="input-group-text" id="inputGroupPrepend2"
                            >@</span
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="validationDefaultUsername"
                            aria-describedby="inputGroupPrepend2"
                            v-model="this.ob.email"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-md-3">
                        <label for="validationDefault05" class="form-label"
                          >Debit
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="validationDefault05"
                          v-model="this.debit"
                          required
                        />

                        {{ this.debitpositing }}
                      </div>

                      <div class="col-md-3">
                        <label for="validationDefault05" class="form-label"
                          >Credit
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="validationDefault05"
                          v-model="this.credit"
                          required
                        />

                        {{ this.credit }}
                      </div>

                      <div class="col-md-3">
                        <label for="validationDefault05" class="form-label"
                          >Amount</label
                        >
                        <input
                          type="number"
                          class="form-control"
                          id="validationDefault05"
                          v-model="this.ob.Amount"
                          required
                        />
                      </div>

                      <div class="col-12">
                        <button
                          class="btn btn-primary"
                          type="submit"
                          @click="addMemberShares"
                        >
                          Add Opening Balance
                        </button>
                      </div>
                    </form>
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
</template>

<script>
// import getAPI from "getAPI";
import { getAPI } from "@/axios-api";

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
  name: "openingBalances",
  components: {
    financeNav,
    accountingHeader,
    AccountingMenu,
  },

  data() {
    return {
      picked: "",
      selectedgl: "",
      glchanged: {},
      selectedEquityAccount: "",

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
      selectedmember: {},
      ob: [
        {
          DocumentID: "sh" + "mem",
          SourcedocID: "mem",
          accountype_description: "",
          maincode: "",
          maincode_description: "",
          Account: "",
          Reporting: "",
          user_Id: "",
          memberemail: "",
          Transaction_date: "",
          Account_Code: "",
          Accountcode_description: "",
          Document: "",
          Account_type: "",
          Transaction_type: "",
          Posting_Date: "",
          Amount: "",
          allocated: false,
          company_id: "",
          notes: "",
          updatedgl: false,
          paymentnumber: "",
          organizationprofile: "",
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

  mounted() {
    getAPI
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
  },

  created() {
    this.initDatatable();
    this.initDatatable();
    this.fetchDocuments();
    this.fetchDeposits();
    this.fetchMembers();
    this.fetchLoans();
    this.fetchBanktransactions();
    this.fetchPaymentsmade();
    this.fetchPaymentsreceived();
    this.fetchGl();
    this.fetchShares();
    this.fetchOb();
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
      "fetchShares",
      "fetchOb",
    ]),

    importexpences() {
      this.$router.push("/obimports");
    },

    updategl(item) {
      this.fetchDocuments();
      this.expense = item;
      this.maincodeid = this.expense.Account_Code;
      (this.gldocs = this.$store.getters.allDocuments.filter(
        (gldocs) => gldocs.Account_Code == this.maincodeid
      )),
        console.log("gldocs", this.gldocs);
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
    },

    changemembershares(member) {
      this.selectedmember = member;
      console.log("member", this.selectedmember);
    },

    changeSharesGl() {
      const opt = this.allGls1.find((o) => o.maincode == this.selectedgl);
      console.log(opt);

      this.glchanged.account_type = opt.account_type;
      this.glchanged.accountype_description = opt.accounttype_description;
      this.glchanged.maincode = opt.maincode;
      this.glchanged.maincode_description = opt.maincode_description;
      this.glchanged.parent_account = opt.parent_account;
      this.glchanged.accountname = opt.accountname;
    },

    addMemberShares() {
      getAPI
        .post("/finance/api/v1/openingbalance/", {
          organizationprofile: this.orgprofileid,

          SourcedocID: "mem" + this.selectedmember.id,
          accountype_description: this.glchanged.accountype_description,
          maincode: this.glchanged.maincode,
          maincode_description: this.glchanged.maincode_description,
          Account: this.glchanged.parent_account,
          Reporting: "bs",
          user_Id: this.user_id,
          memberemail: this.ob.email,
          Transaction_date: this.currentDate,
          Account_Code: this.glchanged.parent_account,
          Accountcode_description: this.glchanged.accountname,
          Document: "shares",
          Account_type: this.glchanged.account_type,
          Transaction_type: "CR",
          Posting_Date: this.currentDate,
          Amount: this.ob.Amount,
          Credit: this.credit,
          Debit: this.debit,
          allocated: false,
          company_id: this.companyid3,
          notes: "Members Share Contribution",
          updatedgl: false,
          paymentnumber: Math.floor(Math.random() * 100000000) + 1000,
        })
        .then(function () {
          this.fetchOb();
          this.$swal({
            title: "Shares Added",
            text: "Shares Added Successfully",
            icon: "success",
            button: "OK",
          });
          // window.location.reload();
        })
        .catch((e) => {
          this.$wal({
            title: "Shares Not Added",
            text: "Shares Not Added" + e,
            icon: "error",
            button: "OK",
          });
          // alert(e);
        });
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
      "allGl",
      "allShares",
      "allOb",
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

    credit() {
      var val = this.debitpositing;
      var amount = this.ob.Amount;

      var x = "";

      if (val == "2") {
        x = 1;

        return x * amount;
      } else return 0;
    },

    debit() {
      var val = this.debitpositing;
      var amount = this.ob.Amount;

      var x = "";

      if (val == "1") {
        x = 1;

        return x * amount;
      } else return 0;
    },

    debitpositing() {
      var val = this.glchanged.account_type;
      var debit = "";

      // Only change code below this line
      switch (val) {
        case "1000000":
          debit = "1";

          console.log(debit);
          break;
        case "2000000":
          debit = "2";
          break;
        case "3000000":
          debit = "2";
          break;
        case "4000000":
          debit = "1";
          break;
        case "5000000":
          debit = "2";
          break;
      }

      // Only change code above this line
      return debit;
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
      return this.$store.getters.allShares.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    allob: function () {
      return this.$store.getters.allOb.filter(
        (item) =>
          item.company_id == this.companyid3
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
    allGl1Expense: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    allGls1: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    allGls1Capital: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
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

<template lang="html">
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="card-header"><h2>Allocation Tables</h2></div>
        <div class="card-body">
          <p></p>
          <div class="row">
            <div class="col-md-3" style="background-color: white">
              <h3>Deposits Control</h3>
              <H4 class="link-warning" style="float right">
                {{ totalDepositsControl }}
              </H4>
            </div>
            <div class="col-md-3" style="background-color: white">
              <h3>Loans Control</h3>
              <H4 class="link-secondary" style="align: right">
                {{ totalloansControl }}
              </H4>
            </div>
            <div class="col-md-3" style="background-color: white">
              <h3 style="centered">Interest Control</h3>
              <H4 class="link-secondary" style="float: centered">
                {{ totalinterestControl }}
              </H4>
            </div>
            <div class="col-md-3" style="background-color: white">
              <h4 style="centered">Receipts Control</h4>
              <H4 class="link-secondary">
                {{ cashatbank }}
              </H4>
            </div>

            <div class="row">
              <div
                id="v-model-select"
                class="col-md-3"
                style="background-color: white"
              >
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="selectedcontribution"
                >
                  <option selected>Open this select menu</option>
                  <option value="9000000">Pledges</option>
                  <option value="9000001">Loans</option>
                  <option value="9000002">Interests</option>
                  <option value="9000003">Share with Employer</option>
                </select>
                <span
                  >Selected Payment: {{ selectedcontribution }} Control Amount
                  {{ this.sumcontrolbyemployer }}</span
                >
              </div>

              <div
                id="v-model-select"
                class="col-2"
                v-if="this.selectedcontribution != ''"
                style="background-color: white"
              >
                <select
                  v-model="selectedemployer"
                  class="form-select"
                  aria-label="Default select example"
                  @change="employeremail"
                >
                  <option
                    v-for="option in all_employer"
                    :value="option.id"
                    :key="option.id"
                  >
                    {{ option.employer_name }}
                  </option>
                </select>
                <span
                  >Selected Employer: {{ selectedemployer }} un-allocated :
                  {{ this.totalDepositsControlemployer }}</span
                >
              </div>

              <div
                id="v-model-select"
                class="col-md-3"
                v-if="this.selectedemployer != ''"
                style="background-color: white"
              >
                <select
                  v-model="selectedreceipt"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option
                    v-for="option in all_receipts"
                    :value="option.paymentNumber"
                    :key="option.id"
                  >
                    {{ option.notes }}
                  </option>
                </select>
                <span>Selected Payment: {{ selectedreceipt }}</span>
              </div>

              <div class="col">
                <button class="btn btn-success" @click="Depositsupdate">
                  Update Contibution
                </button>
              </div>

              <div
                class="col-2"
                v-if="
                  this.selectedcontribution == 9000000 &&
                  this.sumcontrolbyemployer != 0
                "
              >
                <button class="btn btn-success" @click="postalldeposits">
                  post all Deposits
                </button>
              </div>

              <div
                class="col-2"
                v-if="
                  this.selectedcontribution == 9000001 &&
                  this.sumcontrolbyemployer != 0
                "
              >
                <button class="btn btn-success" @click="postloans">
                  post all Loans
                </button>
              </div>
            </div>
          </div>

          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->

          <div class="wrapper">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Member Contributions</h4>
                <span>Org:{{ companyid3 }}</span>
              </div>

              <div class="card-body">
                <!--  -->

                <!--  -->
              </div>
            </div>
            <!-- <button class="change__style" @click="changeStyle()">
							Change Style
						</button> -->
            <div class="card" v-if="this.selectedcontribution == 9000003">
              <div class="card-body">
                <div class="card-body table-responsive">
                  <table
                    class="table-borderless table-striped table-hover walla"
                  >
                    <thead>
                      <tr lass="line-item-header">
                        <th>#</th>
                        <th>Member Names</th>
                        <th>Phone Number</th>
                        <th>email</th>
                        <th>Account Number</th>
                        <th>Deposits</th>
                        <th>Loans</th>
                        <th>Interest</th>

                        <th>Allocate</th>
                        <th>Modify</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="member in members1" :key="member.id">
                        <td>{{ member.id }}</td>
                        <td>{{ member.first_name }} {{ member.last_name }}</td>
                        <td>{{ member.phone_no }}</td>
                        <td>{{ member.email }}</td>
                        <td>{{ member.account_no }}</td>
                        <td>
                          <input
                            type="number"
                            class="form-control-plaintext"
                            id="depositallocation"
                            v-model="member.deposits"
                          />
                          <!-- {{ member.deposits
												}} -->
                          <!-- <i
													class="ti-wallet"
													data-bs-toggle="modal"
													data-bs-target="#AllocateDeposits"
													@click="allocatememberdeposits(member)"
													style="color:red;"
												></i> -->
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control-plaintext"
                            id="loanallocation"
                            v-model="member.loans"
                          />

                          <!-- {{ member.loans
												}}<i
													class="ti-credit-card"
													data-bs-toggle="modal"
													data-bs-target="#AllocateLoans"
													@click="allocatememberdeposits(member)"
													style="color:blue;"
												></i> -->
                        </td>
                        <td>
                          <input
                            type="number"
                            class="form-control-plaintext"
                            id="intallocation"
                            v-model="member.interest"
                          />

                          <!-- {{ member.interest
												}}<i
													class="ti-shortcode"
													data-bs-toggle="modal"
													data-bs-target="#AllocateLoans"
													@click="allocatememberdeposits(member)"
													style="color:green;"
												></i> -->
                        </td>

                        <td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#AllocateDeposits"
                            @click="allocatememberdeposits(member)"
                          >
                            Deposits
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#AllocateLoans"
                            @click="allocatememberdeposits(member)"
                          >
                            Loans
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="card" v-if="this.selectedcontribution == 9000000">
              <div class="card-body">
                <div class="card-body table-responsive">
                  <table
                    class="table table-borderless table-hover table-striped walla"
                  >
                    <thead>
                      <tr class="line-item-header">
                        <th>#</th>

                        <th>Posting Date</th>
                        <th>Saving Type</th>
                        <th>Member</th>

                        <th>Account Code</th>

                        <!---->
                        <th class="text-left">Campany ID</th>
                        <th class="text-left">Employer</th>

                        <th class="text-left">Amount</th>

                        <th class="text-left">Status</th>

                        <!----><!---->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in alldeposits" :key="item.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.created }}</td>
                        <td>{{ item.SavingsType }}</td>

                        <td>{{ item.email }}</td>

                        <td>{{ item.accountcode }}</td>
                        <td>{{ item.company_id }}</td>
                        <td>{{ item.employer }}</td>
                        <td>{{ item.Amount }}</td>

                        <td>
                          <button
                            class="btn btn-success"
                            @click="postdepositsAll(item)"
                          >
                            Allocate
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="card" v-if="this.selectedcontribution == 9000001">
              <div class="card-body">
                <div class="card-body table-responsive">
                  <table class="table unbordered walla responsive">
                    <thead>
                      <tr class="line-item-header">
                        <th>#</th>

                        <th>Posting Date</th>
                        <th>Loan Type</th>
                        <th>Member</th>

                        <th>Account Code</th>

                        <!---->
                        <th class="text-left">Campany ID</th>
                        <!-- <th class="text-left">Employer</th> -->

                        <th class="text-left">Amount</th>
                        <th class="text-left">Monthly</th>
                        <th class="text-left">Interest</th>

                        <th class="text-left">Status</th>

                        <!----><!---->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in allloans" :key="item.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.created }}</td>
                        <td>{{ item.loan_Type }}</td>

                        <td>{{ item.email }}</td>

                        <td>{{ item.gl_account }}</td>
                        <td>{{ item.company_id }}</td>
                        <!-- <td>{{ item.employer }}</td> -->
                        <td>{{ item.Amount }}</td>
                        <td>{{ item.Principle_Monthly }}</td>
                        <td>{{ item.Interest_Monthly }}</td>

                        <td>
                          <button
                            class="btn btn-success"
                            @click="postLoansAll(item)"
                          >
                            Allocate
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal  For Deposits Allocations -->
          <div
            class="modal fade"
            id="AllocateDeposits"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Deposits Allocation for {{ this.allocation.email }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  id="v-model-select"
                  class="col-md-3"
                  style="background-color: white"
                >
                  <select
                    v-model="selectedreceipt"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option
                      v-for="option in all_receipts"
                      :value="option.paymentNumber"
                      :key="option.id"
                    >
                      {{ option.notes }}
                    </option>
                  </select>
                  <span>Selected: {{ selectedreceipt }}</span>
                </div>
                <div>
                  <p></p>
                </div>

                <div class="modal-body">
                  <!-- ... Table of all allocations  -->

                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">All Allocations</h4>
                      <span>Org:{{ companyid3 }}</span>
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
                            <th>Saving Type</th>
                            <th>Member</th>

                            <th>Account Code</th>

                            <!---->
                            <th class="text-left">Campany ID</th>
                            <th class="text-left">Employer</th>

                            <th class="text-left">Amount</th>

                            <th class="text-left">Status</th>

                            <!----><!---->
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in alldeposits"
                            :key="item.id"
                          >
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.created }}</td>
                            <td>{{ item.SavingsType }}</td>

                            <td>{{ item.email }}</td>

                            <td>{{ item.accountcode }}</td>
                            <td>{{ item.company_id }}</td>
                            <td>{{ item.employer }}</td>
                            <td>{{ item.Amount }}</td>

                            <td>
                              <button
                                class="btn btn-success"
                                @click="postdepositsAll(item)"
                              >
                                Allocate
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                </div>
              </div>
            </div>
          </div>

          <!-- Modal  For Deposits Allocations -->
          <div
            class="modal fade"
            id="AllocateLoans"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Depoits for {{ this.allocation.email }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div>
                  <p></p>
                </div>

                <div class="modal-body">
                  <!-- ... Table of all allocations  -->

                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">All Allocations</h4>
                      <span>Org:{{ companyid3 }}</span>
                    </div>

                    <div class="card-body">
                      <!--  -->

                      <table
                        class="table-bordrless table-hover table-striped walla"
                      >
                        <thead>
                          <tr class="line-item-header">
                            <th>#</th>

                            <th>Posting Date</th>
                            <th>Loan Type</th>
                            <th>Member</th>

                            <th>Account Code</th>

                            <!---->
                            <th class="text-left">Campany ID</th>
                            <!-- <th class="text-left">Employer</th> -->

                            <th class="text-left">Amount</th>
                            <th class="text-left">Monthly</th>
                            <th class="text-left">Interest</th>

                            <th class="text-left">Status</th>

                            <!----><!---->
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in allloans" :key="item.id">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.created }}</td>
                            <td>{{ item.loan_Type }}</td>

                            <td>{{ item.email }}</td>

                            <td>{{ item.gl_account }}</td>
                            <td>{{ item.company_id }}</td>
                            <!-- <td>{{ item.employer }}</td> -->
                            <td>{{ item.Amount }}</td>
                            <td>{{ item.Principle_Monthly }}</td>
                            <td>{{ item.Interest_Monthly }}</td>

                            <td>
                              <button
                                class="btn btn-success"
                                @click="postLoansAll(item)"
                              >
                                Allocate
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
import financeNav from "@/components/FinanceNav";
// import financeNav from "@/components/FinanceNav";
import axios from "axios";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DistributeReceipts",
  components: {
    financeNav,
  },
  data() {
    return {
      employer_email: "",
      membery: [],
      glchanged: [],
      allocation: [],
      receipts: [],
      selectedreceipt: [],
      selectedcontribution: [],
      selectedemployer: [],

      memdeposit: [],
      memdeposits: [],
      depositcontroltotal: [],
      tableData: [],
      add_product: false,
      editing: false,
      selected: "",
      selectedgl: "",
      selectedbank: "",
      selectedpaymentmode: "",
      options: [],
      coa: [],
      paymentmodes: [],
      mode: "light",
      tabIndex: 0,
      modal: false,
      services: [
        { title: "Make payment", link: "#" },
        { title: "Make payment", link: "#" },
      ],
      members: [],
      savings: [],
      loans: [],
      loan: [],
      // loan:'',
      loanschedule: [],
      monthdeposits: [],
      payments: [],
      payment: [],
      paymentsreceived: [],
      paymentrcvd: [],
      banktransactions: [],
      addvendors: [
        {
          id: "",
          companyname: "",
          companyemail: "",
          customerphone: "",
          primaryContact: "",
        },
      ],
      addpayment: [
        {
          id: "",
          transactiondate: "",
          customer: "",
          glaccounts: "",
          bankaccount: "",
          paymentNumber: "",
          referenceNumber: "",
          amount: "",
          paymentmode: "",
          notes: "",
        },
      ],
      isOpen: false, // Variable if the menu is open or closed
    };
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
    this.fetchEmployerinfo();
    // this.getLoans();
  },

  mounted() {
    //API Call
    axios.get("/members/api/v1/MonthDeposits/").then((res) => {
      this.monthdeposits = res.data.results.filter(
        (monthdeposit) => monthdeposit.company_id == this.companyid3
      );
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
      "allEmployer"]
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
    currentDate() {
      const current = new Date();
      // const date = `${current.getDate()}/${current.getMonth() +
      // 	1}/${current.getFullYear()}`;
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      return date;
    },
    totalAmount: function () {
      var sum = 0;
      this.monthdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },
    totalloan: function () {
      var sum = 0;
      this.loans.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },
    totalinterest: function () {
      var sum = 0;
      this.loans.forEach((e) => {
        sum += e.Interest_Monthly;
      });
      return sum;
    },
    totalcheques: function () {
      var sum = 0;
      this.payments.forEach((e) => {
        sum += e.amount;
      });
      return sum;
    },
    totalpaymentreceived: function () {
      var sum = 0;
      this.paymentsreceived.forEach((e) => {
        sum += e.amount;
      });
      return sum;
    },
    cashatbank: function () {
      var sum = 0;
      this.banktransactions.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    depositsconttotal: function () {
      var sum = 0;
      this.depositcontroltotal.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
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

    alldeposits: function () {
      return this.$store.getters.allDeposits.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },

    all_loans: function () {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    all_employer: function () {
      return this.$store.getters.allEmployer.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    all_documents: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 && item.all_documents == 9000000
      );
    },

    controlamount: function () {
      if (this.selectedcontribution == 1) {
        return this.totalDepositsControl;
      } else if (this.selectedcontribution == 2) {
        return this.totalloansControl;
      } else if (this.selectedcontribution == 3) {
        return this.totalinterestControl;
      } else {
        return 0;
      }
    },

    all_documentscontrol: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 && item.Account_Code == 9000000
      );
    },

    all_documentscontrolemployer: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 &&
          item.Account_Code == this.selectedcontribution &&
          item.memberemail == this.employer_email &&
          item.paymentnumber == this.selectedreceipt
      );
    },

    all_loanscontrol: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 && item.Account_Code == 9000001
      );
    },

    all_interrestcontrol: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 && item.Account_Code == 9000002
      );
    },

    all_receipts: function () {
      return this.$store.getters.allPaymentsreceived.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    totalDepositsControlemployer: function () {
      var sum = 0;
      this.all_documentscontrolemployer.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalDepositsControl: function () {
      var sum = 0;
      this.all_documentscontrol.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    sumcontrolbyemployer: function () {
      var sum = 0;
      this.all_documentscontrolemployer.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalloansControl: function () {
      var sum = 0;
      this.all_loanscontrol.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    allemployerinfo() {
      return this.$store.getters.allEmployer.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    totalinterestControl: function () {
      var sum = 0;
      this.all_interrestcontrol.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    alldocuments: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 &&
          item.Account_Code === this.selected
      );
    },

    // alldeposits: function() {
    // 	return this.$store.getters.allDeposits.filter(
    // 		(item) =>
    // 			item.company_id == this.companyid3 &&
    // 			item.email == this.allocation.email
    // 	);
    // },

    allloans: function () {
      return this.$store.getters.allLoans.filter(
        (item) =>
          item.company_id == this.companyid3 &&
          item.EmployerProfile == this.selectedemployer
      );
    },
    allGls1: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },
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
      "fetchEmployerinfo",
    ]),

    // bulkpositing deposits

    employeremail() {
      const opt = this.allemployerinfo.find(
        (o) => o.id == this.selectedemployer
      );
      console.log(opt);

      this.employer_email = opt.employer_email;
    },

    postalldeposits() {
      for (let i = 0; i < this.alldeposits.length; i++) {
        let acctype = this.alldeposits[i];
        const memberx = acctype;

        const opt = this.allGls1.find((o) => o.maincode == 9000000);
        console.log(opt);

        this.glchanged.account_type = opt.account_type;
        this.glchanged.accountype_description = opt.accounttype_description;
        this.glchanged.maincode = opt.maincode;
        this.glchanged.maincode_description = opt.maincode_description;
        this.glchanged.parent_account = opt.parent_account;
        this.glchanged.accountname = opt.accountname;

        axios
          .post("/finance/api/v1/documents/", {
            user_Id: this.user_id,
            memberemail: memberx.email,
            DocumentID: "deal" + i + this.selectedreceipt + 9000000 + "CR",
            SourcedocID: "rcpt" + this.allocatedeposits.id,
            Account: 9000000,
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: 9000000,
            Document: "control",
            Amount: memberx.Amount * -1,
            Credit: memberx.Amount,
            Debit: 0,
            ReferenceNo: this.paymentrcvd.paymentNumber,
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            Account_type: this.glchanged.account_type,
            organizationprofile: this.orgprofileid,
            company_id: memberx.company_id,
            Accountcode_description: this.glchanged.accountname,
            accountype_description: this.glchanged.accountype_description,
            maincode: this.glchanged.maincode,
            maincode_description: this.glchanged.maincode_description,
            paymentnumber: this.selectedreceipt,
          })
          .then((response) => {
            this.accounttype1.push(response.data);
          })
          .catch((error) => {
            console.log(error);
            this.accounttype1.push("error", error.data);
          });
      }

      for (let i = 0; i < this.alldeposits.length; i++) {
        let acctype = this.alldeposits[i];
        const memberx = acctype;

        const opt = this.allGls1.find((o) => o.maincode == memberx.accountcode);
        console.log(opt);

        this.glchanged.account_type = opt.account_type;
        this.glchanged.accountype_description = opt.accounttype_description;
        this.glchanged.maincode = opt.maincode;
        this.glchanged.maincode_description = opt.maincode_description;
        this.glchanged.parent_account = opt.parent_account;
        this.glchanged.accountname = opt.accountname;

        axios
          .post("/finance/api/v1/documents/", {
            user_Id: this.user_id,
            memberemail: memberx.email,
            DocumentID:
              "deal" + i + this.selectedreceipt + memberx.accountcode + "DR",
            SourcedocID: "alloc" + this.allocatedeposits.id,
            Account: memberx.accountcode,
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: memberx.accountcode,
            Document: "deposits",
            Amount: memberx.Amount,
            Credit: memberx.Amount,
            Debit: 0,
            ReferenceNo: this.paymentrcvd.paymentNumber,
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            Account_type: this.glchanged.account_type,
            organizationprofile: this.orgprofileid,
            company_id: memberx.company_id,
            Accountcode_description: this.glchanged.accountname,
            accountype_description: this.glchanged.accountype_description,
            maincode: this.glchanged.maincode,
            maincode_description: this.glchanged.maincode_description,
            paymentnumber: this.selectedreceipt,
          })
          .then((response) => {
            this.accounttype1.push(response.data);
          })
          .catch((error) => {
            console.log(error);
            this.accounttype1.push("error", error.data);
          });

        console.log(i, acctype);

        // axios
        // 	.post("/finance/api/v1/accounttypes/", accounttypes)
        // 	.then(console.log)
        // 	.catch(console.log);
      }
    },

    postloans() {
      for (let i = 0; i < this.allloans.length; i++) {
        let acctype = this.allloans[i];
        const memberx = acctype;

        const opt = this.allGls1.find(
          (o) => o.maincode == this.selectedcontribution
        );
        console.log(opt);

        this.glchanged.account_type = opt.account_type;
        this.glchanged.accountype_description = opt.accounttype_description;
        this.glchanged.maincode = opt.maincode;
        this.glchanged.maincode_description = opt.maincode_description;
        this.glchanged.parent_account = opt.parent_account;
        this.glchanged.accountname = opt.accountname;

        axios
          .post("/finance/api/v1/documents/", {
            user_Id: this.user_id,
            memberemail: memberx.email,
            DocumentID:
              "deal" +
              i +
              this.selectedreceipt +
              this.selectedcontribution +
              "CR",
            SourcedocID: "rcpt" + this.allocatedeposits.id,
            Account: this.selectedcontribution,
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: this.selectedcontribution,
            Document: "control",
            Amount: memberx.Principle_Monthly * -1,
            Credit: memberx.Principle_Monthly,
            Debit: 0,
            ReferenceNo: this.paymentrcvd.paymentNumber,
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            Account_type: this.glchanged.account_type,
            organizationprofile: this.orgprofileid,
            company_id: memberx.company_id,
            Accountcode_description: this.glchanged.accountname,
            accountype_description: this.glchanged.accountype_description,
            maincode: this.glchanged.maincode,
            maincode_description: this.glchanged.maincode_description,
            paymentnumber: this.selectedreceipt,
          })
          .then((response) => {
            this.accounttype1.push(response.data);
          })
          .catch((error) => {
            console.log(error);
            this.accounttype1.push("error", error.data);
          });

        console.log(i, acctype);

        // axios
        // 	.post("/finance/api/v1/accounttypes/", accounttypes)
        // 	.then(console.log)
        // 	.catch(console.log);
      }

      for (let i = 0; i < this.allloans.length; i++) {
        let acctype = this.allloans[i];
        const memberx = acctype;

        const opt = this.allGls1.find((o) => o.maincode == memberx.gl_account);
        console.log(opt);

        this.glchanged.account_type = opt.account_type;
        this.glchanged.accountype_description = opt.accounttype_description;
        this.glchanged.maincode = opt.maincode;
        this.glchanged.maincode_description = opt.maincode_description;
        this.glchanged.parent_account = opt.parent_account;
        this.glchanged.accountname = opt.accountname;

        axios
          .post("/finance/api/v1/documents/", {
            user_Id: this.user_id,
            memberemail: memberx.email,
            DocumentID:
              "deal" + i + this.selectedreceipt + memberx.gl_account + "DR",
            SourcedocID: "rcpt" + this.allocatedeposits.id,
            Account: memberx.gl_account,
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: memberx.gl_account,
            Document: "loans",
            Amount: memberx.Principle_Monthly * -1,
            Credit: memberx.Principle_Monthly,
            Debit: 0,
            ReferenceNo: this.paymentrcvd.paymentNumber,
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            Account_type: this.glchanged.account_type,
            organizationprofile: this.orgprofileid,
            company_id: memberx.company_id,
            Accountcode_description: this.glchanged.accountname,
            accountype_description: this.glchanged.accountype_description,
            maincode: this.glchanged.maincode,
            maincode_description: this.glchanged.maincode_description,
            paymentnumber: this.selectedreceipt,
          })
          .then((response) => {
            this.accounttype1.push(response.data);
          })
          .catch((error) => {
            console.log(error);
            this.accounttype1.push("error", error.data);
          });
      }
    },

    allocatememberdeposits(member) {
      this.allocation = member;
    },

    postdepositsAll(item) {
      this.allocatedeposits = item;

      const opt = this.allGls1.find(
        (o) => o.maincode == this.allocatedeposits.accountcode
      );
      console.log(opt);

      this.glchanged.account_type = opt.account_type;
      this.glchanged.accountype_description = opt.accounttype_description;
      this.glchanged.maincode = opt.maincode;
      this.glchanged.maincode_description = opt.maincode_description;
      this.glchanged.parent_account = opt.parent_account;
      this.glchanged.accountname = opt.accountname;

      const postdepositsCr = axios

        .post(`/finance/api/v1/documents/`, {
          // names: '',
          user_Id: this.user_id,
          memberemail: this.allocatedeposits.email,
          DocumentID:
            "deal" +
            this.allocatedeposits.id +
            this.selectedreceipt +
            9000000 +
            "CR",
          SourcedocID: "rcpt" + this.allocatedeposits.id,
          Account: 9000000,
          Reporting: "Balance Sheet",
          Transaction_date: this.currentDate,
          Account_Code: 9000000,
          Document: "control",
          Amount: this.allocatedeposits.Amount * -1,
          Credit: this.allocatedeposits.Amount,
          Debit: 0,
          ReferenceNo: this.paymentrcvd.paymentNumber,
          Transaction_type: "CR",
          Posting_Date: this.currentDate,
          Account_type: this.glchanged.account_type,
          organizationprofile: this.orgprofileid,
          company_id: this.allocatedeposits.company_id,
          Accountcode_description: this.glchanged.accountname,
          accountype_description: this.glchanged.accountype_description,
          maincode: this.glchanged.maincode,
          maincode_description: this.glchanged.maincode_description,
        })
        .then((response) => {
          response;
          // confirm("Loan Schedule updated");
          console.log("contribution", this.loan);
          alert("Deposits control updated");
          this.fetchDocuments();

          this.fetchLoans();

          this.fetchPaymentsreceived();
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });

      const postdepositsDr = axios
        .post(`/finance/api/v1/documents/`, {
          // names: '',
          user_Id: this.user_id,
          memberemail: this.allocatedeposits.email,
          DocumentID:
            "deal" +
            this.allocatedeposits.id +
            this.selectedreceipt +
            this.allocatedeposits.gl_account +
            "CR",
          SourcedocID: "rcpt" + this.allocatedeposits.id,
          Account: this.allocatedeposits.accountcode,
          Reporting: "Balance Sheet",
          Transaction_date: this.currentDate,
          Account_Code: this.allocatedeposits.accountcode,
          Document: "deposits",
          Amount: this.allocatedeposits.Amount,
          Credit: this.allocatedeposits.Amount,
          Debit: 0,
          ReferenceNo: this.paymentrcvd.paymentNumber,
          Transaction_type: "CR",
          Posting_Date: this.currentDate,
          Account_type: this.glchanged.account_type,
          organizationprofile: this.orgprofileid,
          company_id: this.allocatedeposits.company_id,
          Accountcode_description: this.glchanged.accountname,
          accountype_description: this.glchanged.accountype_description,
          maincode: this.glchanged.maincode,
          maincode_description: this.glchanged.maincode_description,
        })
        .then((response) => {
          response;
          // confirm("Loan Schedule updated");
          console.log("contribution", this.loan);
          alert("Deposits control updated");
          this.fetchDocuments();

          this.fetchLoans();

          this.fetchPaymentsreceived();
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });

      Promise.all([postdepositsDr, postdepositsCr]);
    },

    postLoansAll(item) {
      this.allocatedeposits = item;

      const opt = this.allGls1.find(
        (o) => o.maincode == this.allocatedeposits.gl_account
      );
      console.log(opt);

      this.glchanged.account_type = opt.account_type;
      this.glchanged.accountype_description = opt.accounttype_description;
      this.glchanged.maincode = opt.maincode;
      this.glchanged.maincode_description = opt.maincode_description;
      this.glchanged.parent_account = opt.parent_account;
      this.glchanged.accountname = opt.accountname;

      const postloansCr = axios
        .post(`/finance/api/v1/documents/`, {
          // names: '',
          user_Id: this.user_id,
          memberemail: this.allocatedeposits.email,
          DocumentID: "loal" + this.allocatedeposits.id + "CR" + 9000001,
          SourcedocID: "rcpt" + this.allocatedeposits.id,
          Account: 9000001,
          Reporting: "Balance Sheet",
          Transaction_date: this.currentDate,
          Account_Code: 9000001,
          Document: "control",
          Amount: this.allocatedeposits.Principle_Monthly * -1,
          Credit: this.allocatedeposits.Principle_Monthly,
          Debit: 0,
          ReferenceNo: this.paymentrcvd.paymentNumber,
          Transaction_type: "CR",
          Posting_Date: this.currentDate,
          Account_type: this.glchanged.account_type,
          organizationprofile: this.orgprofileid,
          company_id: this.allocatedeposits.company_id,
          Accountcode_description: this.glchanged.accountname,
          accountype_description: this.glchanged.accountype_description,
          maincode: this.glchanged.maincode,
          maincode_description: this.glchanged.maincode_description,
        })
        .then((response) => {
          response;
          // confirm("Loan Schedule updated");
          console.log("contribution", this.loan);
          alert("Deposits control updated");
          this.fetchDocuments();

          this.fetchLoans();

          this.fetchPaymentsreceived();
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });

      const postloansDr = axios
        .post(`/finance/api/v1/documents/`, {
          // names: '',
          user_Id: this.user_id,
          memberemail: this.allocatedeposits.email,
          DocumentID:
            "loal" +
            this.allocatedeposits.id +
            "CR" +
            this.allocatedeposits.gl_account,
          SourcedocID: "rcpt" + this.allocatedeposits.id,
          Account: this.allocatedeposits.gl_account,
          Reporting: "Balance Sheet",
          Transaction_date: this.currentDate,
          Account_Code: this.allocatedeposits.gl_account,
          Document: "loans",
          Amount: this.allocatedeposits.Principle_Monthly * -1,
          Credit: this.allocatedeposits.Principle_Monthly,
          Debit: 0,
          ReferenceNo: this.paymentrcvd.paymentNumber,
          Transaction_type: "CR",
          Posting_Date: this.currentDate,
          Account_type: this.glchanged.account_type,
          organizationprofile: this.orgprofileid,
          company_id: this.allocatedeposits.company_id,
          Accountcode_description: this.glchanged.accountname,
          accountype_description: this.glchanged.accountype_description,
          maincode: this.glchanged.maincode,
          maincode_description: this.glchanged.maincode_description,
        })
        .then((response) => {
          response;
          // confirm("Loan Schedule updated");
          console.log("contribution", this.loan);
          alert("Deposits control updated");
          this.fetchDocuments();

          this.fetchLoans();

          this.fetchPaymentsreceived();
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });

      Promise.all([postloansDr, postloansCr]);
    },

    Depositsupdate() {
      for (let i = 0; i < this.members1.length; i++) {
        var array = this.monthdeposits,
          sumOfId = (email) =>
            array
              .filter((i) => i.email === email)
              .reduce((a, b) => a + b.Amount, 0);

        const sumOf1 = sumOfId(this.members1[i].email); //85

        this.members1 = this.members1.map((item) => {
          if (item.email === this.members1[i].email) {
            item.deposits = sumOf1;
          }
          return item;
        });

        console.log(this.members1[i].email, this.members1[i].deposits, sumOf1);
      }

      for (let i = 0; i < this.members1.length; i++) {
        var loans = this.all_loans,
          sumOfloans = (email) =>
            loans
              .filter((i) => i.email === email)
              .reduce((a, b) => a + b.Principle_Monthly, 0);

        const sumOf1 = sumOfloans(this.members1[i].email); //85

        this.members1 = this.members1.map((item) => {
          if (item.email === this.members1[i].email) {
            item.loans = sumOf1;
          }
          return item;
        });

        console.log(this.members1[i].email, this.members1[i].deposits, sumOf1);
      }
      for (let i = 0; i < this.members1.length; i++) {
        var interest = this.all_loans,
          sumOfint = (email) =>
            interest
              .filter((i) => i.email === email)
              .reduce((a, b) => a + b.Interest_Monthly, 0);

        const sumOf1 = sumOfint(this.members1[i].email); //85

        this.members1 = this.members1.map((item) => {
          if (item.email === this.members1[i].email) {
            item.interest = sumOf1;
          }
          return item;
        });

        console.log(this.members1[i].email, this.members1[i].deposits, sumOf1);
      }
    },

    changeStyle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },

    updaterecords() {
      alert("coming soon");
    },
    changepymtrcvd(item) {
      this.paymentrcvd = item;
    },

    change(loan) {
      this.payment = loan;
      // alert(loan.amount);
    },
    setLoan(info) {
      this.loan = info;
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

    addpaymentsreceived() {
      axios
        .post(`http://127.0.0.1:8000/finance/api/v1/PaymentsReceived/`, {
          // names: '',
          // User_id: this.user_id,

          transactiondate: this.addpayment.transactiondate,
          customer: this.selected,
          glaccounts: this.selectedgl,
          bankaccount: this.selectedbank,
          paymentNumber: this.addpayment.paymentNumber,
          referenceNumber: this.addpaymentsreceived.referenceNumber,
          amount: this.addpaymentsreceived.amount,
          paymentmode: this.selectedpaymentmode,
          notes: this.addpaymentsreceived.notes,
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

    updateledgers(loan) {
      this.loan = loan;

      Promise.all([
        axios
          .post(`http://127.0.0.1:8000/finance/api/v1/Bank_transactions/`, {
            // names: '',
            user_id: this.User_id,
            email: this.email,
            notes: this.payment.notes,
            Transaction_date: this.currentDate,
            bank: this.payment.bank,
            Paid_to: this.payment.user_id,
            ChequeNo: this.payment.ChequeNo,
            Amount: this.payment.amount,
            ReferenceNo: this.payment.paymentNumber,
            Reconciled: "False",
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
          .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
            // names: '',
            user_Id: this.payment.user_id,
            DocumentID: this.payment.paymentNumber,
            Account: this.payment.account,
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: "",
            Document: this.payment.document,
            Amount: this.payment.amount,
            ReferenceNo: this.payment.paymentNumber,
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            Account_type: "Other Current Asset",
          })
          .then((response) => {
            response;
            // confirm("Loan Schedule updated");
            alert("transactions updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),

        axios
          .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
            // names: '',
            user_Id: this.payment.user_id,
            DocumentID: this.payment.paymentNumber,
            Account: "Bank",
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: "",
            Document: this.payment.document,
            Amount: this.payment.amount,
            ReferenceNo: this.payment.paymentNumber,
            Transaction_type: "DR",
            Posting_Date: this.currentDate,
            Account_type: "Other Current Asset",
          })
          .then((response) => {
            response;
            // confirm("Loan Schedule updated");
            alert("transactions updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),
      ]);
    },

    depmemberupdate(memdeposit) {
      this.memdeposit = memdeposit;

      Promise.all([
        axios
          .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
            // names: '',
            user_Id: this.user_id,
            DocumentID:
              "meal" +
              this.memdeposit.SavingsType +
              this.memdeposit.User_id +
              this.currentDate,
            Account: "deposits control",
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: "",
            Document: "Allocation",
            Amount: memdeposit.Amount * -1,
            Credit: 0,
            Debit: this.memdeposit.Amount,
            ReferenceNo: this.memdeposit.uidsavintype,
            Transaction_type: "DR",
            Posting_Date: this.currentDate,
            Account_type: "Other Current Asset",
          })
          .then((response) => {
            response;
            // confirm("Loan Schedule updated");
            alert("Deposits control updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),

        axios
          .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
            // names: '',
            user_Id: this.user_id,
            DocumentID:
              "mealDe" +
              this.memdeposit.SavingsType +
              this.memdeposit.User_id +
              this.currentDate,
            Account: "Deposits",
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: "",
            Document: "Allocation",
            Amount: this.memdeposit.Amount,
            Credit: this.memdeposit.Amount,
            Debit: 0,
            ReferenceNo: this.memdeposit.uidsavintype,
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            Account_type: "Other Current Asset",
          })
          .then((response) => {
            response;
            // confirm("Loan Schedule updated");
            alert("Deposits control updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),
      ]);
    },

    loanmemberupdate(memdeposit) {
      this.memdeposit = memdeposit;

      Promise.all([
        axios
          .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
            // names: '',
            user_Id: this.user_id,
            DocumentID:
              "mealLc" +
              this.memdeposit.loan_Type +
              this.memdeposit.User_id +
              this.currentDate,
            Account: "loans control",
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: "",
            Document: "Allocation",
            Amount: memdeposit.Monthrepayment * -1,
            Credit: 0,
            Debit: this.memdeposit.Monthrepayment,
            ReferenceNo: this.memdeposit.email,
            Transaction_type: "DR",
            Posting_Date: this.currentDate,
            Account_type: "Other Current Asset",
          })
          .then((response) => {
            response;
            // confirm("Loan Schedule updated");
            alert("Deposits control updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),

        axios
          .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
            // names: '',
            user_Id: this.user_id,
            DocumentID:
              "mealLo" +
              this.memdeposit.loan_Type +
              this.memdeposit.User_id +
              this.currentDate,
            Account: "Loans",
            Reporting: "Balance Sheet",
            Transaction_date: this.currentDate,
            Account_Code: "",
            Document: "Allocation",
            Amount: this.memdeposit.Monthrepayment,
            Credit: this.memdeposit.Monthrepayment,
            Debit: 0,
            ReferenceNo: this.memdeposit.email,
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            Account_type: "Other Current Asset",
          })
          .then((response) => {
            response;
            // confirm("Loan Schedule updated");
            alert("Deposits control updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),
      ]);
    },

    allocatedeposits() {
      axios
        .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
          // names: '',
          user_Id: this.user_id,
          DocumentID: "dealcont" + this.memdeposit.User_id + this.currentDate,
          Account: "deposits control",
          Reporting: "Balance Sheet",
          Transaction_date: this.currentDate,
          Account_Code: "",
          Document: "Allocation",
          Amount: this.totalAmount,
          Credit: this.totalAmount,
          Debit: 0,
          ReferenceNo: this.memdeposit.uidsavintype,
          Transaction_type: "CR",
          Posting_Date: this.currentDate,
          Account_type: "Other Current Asset",
        })
        .then((response) => {
          response;
          // confirm("Loan Schedule updated");
          alert("Deposits control updated");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    allocateinterest() {
      axios
        .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
          // names: '',
          user_Id: this.user_id,
          DocumentID: "Intal" + this.paymentrcvd.paymentNumber,
          Account: "Interest Income Control",
          Reporting: "Balance Sheet",
          Transaction_date: this.currentDate,
          Account_Code: "",
          Document: "Allocation",
          Amount: this.totalinterest,
          Credit: this.totalinterest,
          Debit: 0,
          ReferenceNo: this.paymentrcvd.paymentNumber,
          Transaction_type: "CR",
          Posting_Date: this.currentDate,
          Account_type: "Other Current Liability",
        })
        .then((response) => {
          response;
          // confirm("Loan Schedule updated");
          alert("Deposits control updated");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    allocateloans() {
      axios
        .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
          // names: '',
          user_Id: this.user_id,
          DocumentID: "loal" + this.paymentrcvd.paymentNumber,
          Account: "loans control",
          Reporting: "Balance Sheet",
          Transaction_date: this.currentDate,
          Account_Code: "",
          Document: "Allocation",
          Amount: this.totalloan,
          Credit: 0,
          Debit: this.totalloan,
          ReferenceNo: this.paymentrcvd.paymentNumber,
          Transaction_type: "CR",
          Posting_Date: this.currentDate,
          Account_type: "Other Current Liability",
        })
        .then((response) => {
          response;
          // confirm("Loan Schedule updated");
          alert("Loans control updated");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },
    getProducts() {
      axios
        .get("/members/api/v1/MemberDetails/")
        .then((res) => {
          this.tableData = res.data.results;
          this.initDatatable();
        })

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
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  font-family: "Karla", sans-serif;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
}

.change__style {
  background-color: #eee;
  font-size: 1em;
  margin-bottom: 10px;
  padding: 5px;
}
</style>

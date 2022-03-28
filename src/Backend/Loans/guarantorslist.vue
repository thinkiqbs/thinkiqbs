@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>
      <div class="col-10">
        <div class="mb-11" style="max-width: 98rem">
          <div class="topnav-right col-2">
            //Search by email.
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Search"
              v-model="search"
              @keyup.enter="filterloans"
            />
          </div>

          <div class="row">
            <headerDashboard></headerDashboard>

            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Guarantor List</h4>
                </div>

                <div class="card-body">
                  <!--  -->

                  <table class="table table-hover walla">
                    <thead>
                      <tr class="line-item-header">
                        <th>#</th>

                        <th>Date</th>
                        <th>Loan ID</th>
                        <th>Guarantor</th>

                        <!---->
                        <th class="text-left">Loan Type</th>
                        <th class="text-left">Loan Term</th>

                        <th class="text-left">Amount</th>
                        <th class="text-left">Amount Guaranteed</th>
                        <th class="text-left" style="color: green">
                          Total(inc Int)
                        </th>

                        <!-- <th class="text-left">Amount Due</th> -->
                        <th class="text-left">Status</th>

                        <!----><!---->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in filterloans" :key="item.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.created }}</td>
                        <td>{{ item.Loan_id }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.loan_Type }}</td>
                        <td>{{ item.Term }}</td>

                        <td>{{ item.Amount }}</td>
                        <td>{{ item.Amount_guaranteed }}</td>

                        <td>{{ item.Total_Loan }}</td>

                        <td>
                          <div v-if="item.Status != 0">
                            <button
                              type="button"
                              class="btn btn-warning"
                              data-toggle="modal"
                              data-target="#ApprovalTemplate"
                              @click="Getloanbyid(item)"
                            >
                              Approval needed
                            </button>
                          </div>
                          <div v-else>
                            <button
                              type="button"
                              class="btn btn-warning"
                              data-toggle="modal"
                              data-target="#ApprovalTemplate"
                              @click="Getloanbyid(item)"
                              Disabled
                            >
                              Approved
                            </button>
                          </div>
                        </td>

                        <td>
                          <div>
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#Guarantorinfo"
                              @click="Getloanbyid(item)"
                            >
                              <i class="fas fa-eye"></i>
                            </button>
                          </div>
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

      <!-- Button trigger modal -->
      <!-- <button
				type="button"
				class="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Launch demo modal
			</button> -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="Guarantorinfo"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Guarantor Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container">
                <form @submit.prevent="submit">
                  <div class="form-group row">
                    <label for="" class="col-sm-2 form-control-label"
                      >Email</label
                    >

                    <div class="form-group col-md-6">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                        v-model="this.loan.email"
                        disabled
                      />
                    </div>
                  </div>

                  <!-- Loan Details  -->

                  <div class="row mx-0">
                    <div
                      class="unused-amount-zero offset-lg-7 col-lg-5 clearfix"
                    >
                      <div class="row">
                        <p class="col-lg-8 text-right">Current Deposits :</p>
                        <p class="col-lg-4 text-right">
                          {{ this.currentdeposits }}
                        </p>
                      </div>
                      <div class="row">
                        <p class="col-lg-8 text-right">Loan Balance :</p>
                        <p class="col-lg-4 text-right">
                          {{ this.loanbalance }}
                        </p>
                      </div>
                      <div class="row">
                        <p class="col-lg-8 text-right">Available :</p>
                        <p class="col-lg-4 text-right">{{ maxtopup }}</p>
                      </div>
                      <div class="row">
                        <p class="col-lg-8 text-right">Guaranteed:</p>
                        <p class="col-lg-4 text-right">KES &nbsp; 0.00</p>
                      </div>
                    </div>
                  </div>
                </form>

                <div>
                  <table class="table line-item-table">
                    <thead>
                      <tr class="line-item-header">
                        <th>#</th>

                        <th>Date</th>
                        <th>Loan ID</th>
                        <!---->
                        <th class="text-left">Loan Type</th>
                        <th class="text-left">Loan Term</th>

                        <th class="text-left">Amount</th>
                        <th class="text-left" style="color: green">Paid</th>

                        <th class="text-left">Amount Due</th>

                        <!----><!---->
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in myapprovedloans"
                        :key="item.id"
                      >
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.created }}</td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.loan_Type }}</td>
                        <td>{{ item.Term }}</td>

                        <td>{{ item.Amount }}</td>
                        <td>{{ item.Amount }}</td>

                        <td>{{ item.Total_Loan }}</td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding-top: 0px">
                          <small class="text-muted"
                            >**List contains only Approved Loans</small
                          >
                        </td>
                        <td></td>
                        <td></td>
                        <td colspan="1" class="text-right">
                          <b>Total Loans</b>
                        </td>
                        <!---->
                        <td class="text-right">
                          <b>{{ this.totalLoans }}</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="row mx-o">
                  <div>
                    <table class="table line-item-table">
                      <thead>
                        <tr class="line-item-header">
                          <th>#</th>

                          <th>Date Applied</th>
                          <th>Loan ID</th>
                          <!---->
                          <th class="text-left">Guarantor Email</th>

                          <th class="text-left">Guaranteed Amount</th>
                          <th class="text-left">Status</th>

                          <!----><!---->
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in guarantorlist"
                          :key="item.id"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ item.created }}</td>
                          <td>{{ item.Loan_id }}</td>
                          <td>{{ item.email }}</td>
                          <td>{{ item.Amount_guaranteed }}</td>

                          <td>
                            <div v-if="item.Status === '1'">
                              Pending Approval 1

                              <a href="#" class="lin">Add Guarantors</a>
                            </div>
                            <div v-else-if="item.Status === '2'">
                              Pending Approval 2
                            </div>
                            <div v-else-if="item.Status === '3'">
                              Pending Approval 3
                            </div>
                            <div v-else>Disbursed</div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" style="padding-top: 0px">
                            <small class="text-muted"
                              >**List contains only Approved Loans</small
                            >
                          </td>

                          <td colspan="2" class="text-left">
                            <b>Total Guaranteed </b>
                          </td>
                          <!---->
                          <td class="text-left">
                            <b>
                              {{ this.totalGuaranteed }}
                            </b>
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
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import financeNav from "@/components/FinanceNav";
import headerDashboard from "@/components/headerdashboard.vue";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  name:"Guarantors-list",
  components: {
    financeNav,
    headerDashboard,
  },
  data() {
    return {
      search: "",
      guarantorlist: [],
      orgprofile: [],
      loan: {},
      selected: "",
      options: [],
      Loans: [],
      totaldepositsMe: [],
      loanscheduleMe: [],
      myapprovedloans: [],
      loanschedule: [],
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
        this.companyid1 = this.orgprofile[0].company_id;
        this.companyid = this.orgprofile[0].company_id;
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/finance/api/v1/documents/", {
        params: { memberemail: this.loan.email, Document: "loans" },
      })
      .then((res) => {
        this.loanscheduleMe = res.data.results;
        $("#walla").DataTable();
      }),
      axios
        .get("/finance/api/v1/documents/", {
          params: {
            company_id: this.companyid,
            Document: "loans",
          },
        })
        .then((res) => {
          this.loanschedule = res.data.results;
          $("#walla").DataTable();
        }),
      axios
        .get("/loans/api/v1/guarantors/", {
          params: { company_id: this.companyid },
        })
        .then((res) => {
          this.guarantorlist = res.data.results;
          $("#walla").DataTable();
          // console.log(res.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
  },

  methods: {
    loantypechange() {
      const opt = this.options.find((o) => o.loan_type === this.selected);

      this.Loans.interest = opt.interest_rate;
      this.Loans.Term = opt.maximum_loan_term;
      this.Loans.gl_account = opt.gl_account;
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

    Getloanbyid(item) {
      this.loan = item;
      const x = this.loan.id;
      console.table(x);

      axios
        .get("/loans/api/v1/loans/", {
          params: { email: this.loan.email, Status: "4" },
        })
        .then((res) => {
          this.myapprovedloans = res.data.results;

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
  },

  created() {
    this.initDatatable();
  },

  computed: {
    filterloans: function () {
      return this.guarantorlist.filter(
        (item) => item.email.toLowerCase().includes(this.search.toLowerCase()),

        $("#walla").DataTable().destroy()
      );
    },
    interestRate() {
      return this.loan.interest / 100 / 12;
    },

    totalLoans: function () {
      var sum = 0;
      this.loanschedule.forEach((e) => {
        sum += e.Amount;
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

    interestmonthly() {
      let int = Math.round((this.tLoans - this.loan.Amount) / this.loan.Term);

      if (isNaN(int)) {
        int = 0;
      }
      return int;
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
    emi() {
      var x = Math.pow(1 + this.interestRate, this.loan.Term);
      var emiMonthly = (this.loan.Amount * x * this.interestRate) / (x - 1);
      return Number(emiMonthly);
    },

    tLoans() {
      let tl = Math.round(this.emi * this.loan.Term);

      if (isNaN(tl)) {
        tl = 0;
      }
      return tl;
    },
    totalSavingsMe: function () {
      var sum = 0;
      this.totaldepositsMe.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },
    currentdeposits: function () {
      return this.totalSavingsMe;
    },
    maxtopup: function () {
      return this.currentdeposits * 3 - this.loanbalance;
    },
  },
};
</script>

<style></style>

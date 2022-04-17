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

            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">General Ledger</h4>
                  <span>Org:{{ companyid3 }}</span>
                  <div class="topnav-right">
                    <button
                      type="button"
                      class="btn btn-success"
                      style="float: right"
                      @click="Printlist"
                    >
                      <i class="fa fa-fw fa-download me-1"></i> Update Balances
                    </button>
                  </div>
                  <AccountingMenu></AccountingMenu>
                </div>

                <div class="card-body">
                  <!--  -->

                  <table
                    class="table table-borderless table-hover table-striped walla"
                  >
                    <thead>
                      <tr class="line-item-header">
                        <th>#</th>

                        <th>Name</th>
                        <th>Accoung GL code</th>
                        <th>description</th>

                        <!---->
                        <th class="text-left">Company ID</th>
                        <th class="text-left">debit</th>
                        <th class="text-left">credit</th>

                        <th class="text-left">Balance</th>

                        <th class="text-left">Status</th>
                        <th class="text-left">Action</th>

                        <!----><!---->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in allGls1" :key="item.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.accountname }}</td>
                        <td>{{ item.maincode }}</td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.company_id }}</td>
                        <td>{{ item.debit }}</td>
                        <td>{{ item.credit }}</td>
                        <td>{{ item.balance }}</td>
                        <td>
                          <i class="fa fa-check-circle text-success"></i>
                        </td>
                        <td>
                          <i class="fa fa-edit" @click="edit(item.id)"></i>
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
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import financeNav from "@/components/FinanceNav";
import accountingHeader from "@/components/accountingHeader.vue";
import AccountingMenu from "@/components/AccountingMenu.vue";
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
  name: "AccountingPage",
  components: {
    financeNav,
    accountingHeader,
    AccountingMenu,
  },

  data() {
    return {
      picked: "",
      allGls2: [],

      loan_id: "",
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

      loading: false,
      memberloan: [],
      tableData: [],
      add_product: false,
      editing: false,

      loan_type: "",
      role: [],
      roles: [],

      loanschedule: [],

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
      Loans: {
        User_id: "",
        email: this.$store.state.email,
        Amount: this.Amount,
        loan_Type: "Development",
        interest: "",
        Interest_Monthly: "",
        Term: "",
        TotalLoans: "",
        Monthrepayment: this.tLoans,
        Principle_Monthly: this.PrincipleMonthly,
        Total_Loan: this.tLoans,
      },
    };
  },

  mounted() {},

  created() {
    this.Printlist();
    this.fetchGl();
    this.fetchDocuments();
    this.initDatatable();
  },

  methods: {
    ...mapActions(["fetchDocuments", "fetchGl"]),

    //greate a loop using for to print out sum of array

    Printlist() {
      for (let i = 0; i < this.allGls1.length; i++) {
        var array = this.alldocs,
          sumOfId = (Account_Code) =>
            array
              .filter((i) => i.Account_Code === Account_Code)
              .reduce((a, b) => a + b.Amount, 0);

        const sumOf1 = sumOfId(this.allGls1[i].maincode); //85

        this.allGls2 = this.allGls1.map((item) => {
          if (item.maincode === this.allGls1[i].maincode) {
            item.balance = sumOf1;
          }
          return item;
        });

        console.log(
          this.allGls1[i].accountname,
          this.allGls1[i].maincode,
          sumOf1
        );
      }
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
  },

  computed: {
    ...mapGetters(["allGl"]),

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

    filterlgls: function () {
      return this.allGls1.filter((item) =>
        item.email.toLowerCase().includes(this.search.toLowerCase())
      );
    },

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },

    allGls1: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    alldocs: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3
      );
    },
  },
};
</script>

<style></style>

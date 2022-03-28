@
<template>
  <div class="container-responsive">
    <div class="content content-boxed">
      <div class="block block-rounded">
        <div class="block-header block-header-default">
          <h3 class="block-title">#BALANCE SHEET</h3>
          <div class="block-options"></div>
        </div>
        <div class="block-content">
          <div class="p-sm-4 p-xl-7">
            <div class="row mb-4">
              <div class="col-6 fs-sm">
                <p class="h3">Company</p>
                <address>
                  Street Address<br />
                  State, City<br />
                  Region, Postal Code<br />
                  ltd@example.com
                </address>
              </div>
            </div>
            <div class="table-responsive push">
              <div class="align-center">
                <span
                  class="org-name"
                  id="organization-name"
                  role="textbox"
                  contenteditable=""
                ></span>
              </div>

              <h3 class="report-header">
                TRIAL BALANCE REPORT: companyid :{{ this.companyid3 }}
              </h3>
              <div class="row">
                <div class="col-2">
                  <button class="btn btn-success" @click="updatetb">
                    update balances
                  </button>
                </div>

                <div class="col-1">
                  <h2
                    class="ti-printer"
                    id="printPageButton"
                    @click="printdocument"
                  ></h2>
                </div>
              </div>

              <div class="align-center">
                <span
                  class="org-address font-normal"
                  id="organization-address"
                  role="textbox"
                  contenteditable=""
                ></span>
              </div>
              <div class="mt-20 scroll-table">
                <div class="table-responsive push">
                  <table class="table table-border-end">
                    <thead>
                      <th class="text-left">Assets</th>
                    </thead>
                    <thead>
                      <tr class="line-item-header">
                        <!-- <th>#</th> -->

                        <th>Account</th>
                        <!---->
                        <th class="text-left">Account Code</th>
                        <th class="text-center">Debit</th>
                        <th class="text-center">Credit</th>
                        <th class="text-center">Balance</th>

                        <!----><!---->
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="item in Allglaccounts" :key="item.id">
                        <!-- <th scope="row">{{ index + 1 }}</th> -->

                        <td colspan="1" class="text-left">
                          {{ item.parent_account }}
                        </td>
                        <td colspan="1" class="text-left">
                          {{ item.accountname }}
                        </td>

                        <td colspan="1" class="text-right">{{ item.debit }}</td>
                        <td colspan="1" class="text-right">
                          {{ item.credit }}
                        </td>
                        <td colspan="1" class="text-right">
                          {{ item.balance }}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <small class="text-muted"
                            >**List contains only Approved All Revenue
                            Acounts</small
                          >
                        </td>
                        <td>
                          <b>Totals</b>
                        </td>
                        <td colspan="1" class="text-right">
                          {{ totalDebits }}
                        </td>
                        <td colspan="1" class="text-right">
                          {{ totalCredits }}
                        </td>
                        <!---->
                        <td class="text-right">
                          <b>{{}}</b>
                        </td>
                      </tr>
                    </tbody>

                    <td class="table-account font-weight-600">TOTAL ASSETS</td>
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TrialBalance",
  
  data() {
    return {
      allGls1: [],
      allGls2: [],
    };
  },

  created() {
    this.fetchDocuments();
    this.fetchGl();
    this.fetchOrg();
    this.updatetb();
  },

  methods: {
    ...mapActions(["fetchGl", "fetchDocuments", "fetchOrg"]),
    printdocument() {
      window.print();
    },
    updatetb() {
      for (let i = 0; i < this.Allglaccounts.length; i++) {
        var array = this.alldocs,
          sumOfId = (Account_Code) =>
            array
              .filter((i) => i.Account_Code === Account_Code)
              .reduce((a, b) => a + b.Amount, 0);

        const sumOf1 = sumOfId(this.Allglaccounts[i].maincode); //85

        this.allGls2 = this.Allglaccounts.map((item) => {
          if (item.maincode === this.Allglaccounts[i].maincode) {
            item.balance = sumOf1;
          }
          return item;
        });

        console.log(
          this.Allglaccounts[i].accountname,
          this.Allglaccounts[i].maincode,
          sumOf1
        );
      }
      for (let i = 0; i < this.Allglaccounts.length; i++) {
        var arrayCr = this.alldocs,
          sumOfIdCr = (Account_Code) =>
            arrayCr
              .filter((i) => i.Account_Code === Account_Code)
              .reduce((a, b) => a + b.Credit, 0);

        const sumOf2 = sumOfIdCr(this.Allglaccounts[i].maincode); //85

        this.allGls2 = this.Allglaccounts.map((item) => {
          if (item.maincode === this.Allglaccounts[i].maincode) {
            item.credit = sumOf2;
          }
          return item;
        });

        console.log(
          this.Allglaccounts[i].accountname,
          this.Allglaccounts[i].maincode,
          sumOf2
        );
      }

      for (let i = 0; i < this.Allglaccounts.length; i++) {
        var arrayDr = this.alldocs,
          sumOfIdDr = (Account_Code) =>
            arrayDr
              .filter((i) => i.Account_Code === Account_Code)
              .reduce((a, b) => a + b.Debit, 0);

        const sumOf3 = sumOfIdDr(this.Allglaccounts[i].maincode); //85

        this.allGls2 = this.Allglaccounts.map((item) => {
          if (item.maincode === this.Allglaccounts[i].maincode) {
            item.debit = sumOf3;
          }
          return item;
        });

        console.log(
          this.Allglaccounts[i].accountname,
          this.Allglaccounts[i].maincode,
          sumOf3
        );
      }
    },
  },
  computed: {
    ...mapGetters(
      ["allDocuments",
      "allGl",
      "allMembers",
      "allLoans",
      "allOrg",
      "allUser",
      "allBanktransactions",
      "allPaymentsmade",
      "allPaymentsreceived"]
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

    Allglaccounts() {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },

    alldocs: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    totalCredits: function () {
      var sum = 0;
      this.alldocs.forEach((e) => {
        sum += e.Credit;
      });
      return sum;
    },

    totalDebits: function () {
      var sum = 0;
      this.alldocs.forEach((e) => {
        sum += e.Debit;
      });
      return sum;
    },
  },
};
</script>

<style>
@media print {
  #printPageButton {
    display: none;
  }
}
</style>

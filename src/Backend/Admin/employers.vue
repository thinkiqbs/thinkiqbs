@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <!-- <div class="col-1">
				<SysAdminNav></SysAdminNav>
			</div> -->
      <div class="col-2">
        <SysAdminNav></SysAdminNav>
      </div>

      <div class="col-10">
        <div class="table-responsive">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Employer</h4>
              <div class="topnav-right">
                <button
                  class="btn btn-success"
                  style="float: right"
                  type="button"
                  data-toggle="modal"
                  data-target="#Newemployer"
                >
                  New
                </button>
              </div>
            </div>

            <div class="card-body">
              <table class="table table-hover walla">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Employer Name</th>
                    <th>Employers PIN</th>
                    <th>Contact Email</th>
                    <th>Action</th>
                    <!-- <th>Interest Type</th>
									<th>Term</th>
									<th>Account</th>
									<th>Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in tableData" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.employer_name }}</td>
                    <td>{{ item.employer_pin }}</td>
                    <td>{{ item.employer_email }}</td>
                    <!-- <td>{{ item.interest_rate }}%</td>
									<td>{{ item.interest_calc_mode }}</td>
									<td>{{ item.maximum_saving_term }}</td>
									<td>{{ item.accountcode }}</td> -->
                    <td>
                      <button
                        type="button"
                        @click="change(item)"
                        class="btn btn-secondary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        @click="change(item)"
                        class="btn btn-secondary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Add Members
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                      <label for="inputEmail4">Email</label>
                      <input
                        type="text"
                        v-model="loanstype.loan_type"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-9">
                      <label for="inputEmail4"> Description</label>
                      <input
                        type="textarea"
                        v-model="loanstype.loan_description"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Maximum Guarantors</label>
                    <input
                      type="text"
                      v-model="loanstype.no_of_guarantors"
                      class="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Interest</label>
                    <input
                      type="text"
                      interest_rate
                      class="form-control"
                      id="inputEmail4"
                      v-model="loanstype.interest_rate"
                    />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">calculation</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputCity"
                        v-model="loanstype.interest_calc_mode"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputCity">Loan Term</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputCity"
                        v-model="loanstype.maximum_loan_term"
                      />
                    </div>
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
                <button type="button" class="btn btn-primary">
                  update changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal to Add new Roles  -->
        <div
          class="modal fade"
          id="Newemployer"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">
                  <strong>New Employer</strong>
                </h4>
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
                      <label for="inputEmail4">Company Name </label>
                      <input
                        type="text"
                        class="form-control"
                        id="companyname"
                        v-model="employers.employer_name"
                      />
                    </div>
                    <div class="form-group col-md-9">
                      <label for="inputEmail4">PIN Number </label>
                      <input
                        type="text"
                        class="form-control"
                        id="pinnumber"
                        v-model="employers.employer_pin"
                      />
                    </div>

                    <div class="form-group col-md-9">
                      <label for="inputEmail4"
                        >Organizaion Contact Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="contactemail"
                        v-model="employers.employer_email"
                      />
                    </div>

                    <div class="form-group col-md-9 topnav-right">
                      <button
                        class="btn btn-success"
                        style="float: right"
                        type="button"
                        @click="CreateControls"
                      >
                        Create Controls
                      </button>
                    </div>
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addrecords"
                >
                  Save
                </button>
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
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import SysAdminNav from "@/components/SysAdminNav";
import { mapGetters, mapActions } from "vuex";

// import { mapState } from "vuex";

export default {
  name: "EmployerArea",
  components: {
    SysAdminNav,
    // computed: mapState(["accessToken"]),
  },
  data() {
    return {
      companyid: "",
      tableData: [],
      orgprofile: {},
      add_product: false,
      editing: false,
      selected: "",
      keymember: this.$store.state.id,
      options: [],
      coa: [],
      loan_type: "",
      savingtypes: [],
      loanstype: [],
      role: [],
      roles: [],
      selectedaccmaster: "",
      selectedloancontrol: "",
      selecteddepositscontrol: "",

      accmaster: [],
      loanscontrol: [],
      depositscontrol: [],
      employers: [
        {
          employer_name: "",
          employer_pin: "",
          employer_email: "",
        },
      ],
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
    this.fetchGl();
  },

  computed: {
    ...mapGetters(
      "allDocuments",
      "allDeposits",
      "allMembers",
      "allLoans",
      "allOrg",
      "allUser",
      "allBanktransactions",
      "allPaymentsmade",
      "allPaymentsreceived",
      "allGl"
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

    sel: function () {
      return this.selected + this.keymember;
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

    isdepositcontrol: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3 && item.maincode == 9000000
      )[0].maincode;
    },
    isloancontrol: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3 && item.maincode == 9000001
      )[0].maincode;
    },
    isinterestcontrol: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3 && item.maincode == 9000002
      )[0].maincode;
    },
  },

  mounted() {
    axios
      .get("/sys_config/api/v1/OrganizationProfile/", {
        params: { admin_email: this.email },
      })
      .then((res) => {
        this.orgprofile = res.data.results;
        this.orgprofileid = this.orgprofile[0].id;
        this.companyid = this.orgprofile[0].company_id;
      });

    axios
      .get("/sys_config/api/v1/EmployerProfile/")
      .then((res) => {
        this.tableData = res.data.results.filter(
          (orgprofile1) => orgprofile1.company_id == this.companyid3
        );
        this.initDatatable();
      })


    axios
      .get("/finance/api/v1/Chartofaccounts/", {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      })
      .then((res) => {
        this.coa = res.data.results;
        $("#walla").DataTable();
        // console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/finance/api/v1/Chartofaccounts/", {
        params: { parent_account: 1200000 },
      })
      .then((res) => {
        this.accmaster = res.data.results;
        // this.initDatatable();
      });

    axios
      .get("/finance/api/v1/Chartofaccounts/", {
        params: { parent_account: 2200000 },
      })
      .then((res) => {
        this.loanscontrol = res.data.results;
        // this.initDatatable();
      });

    axios
      .get("/finance/api/v1/Chartofaccounts/", {
        params: { parent_account: 1200000 },
      })
      .then((res) => {
        this.depositscontrol = res.data.results;
        // this.initDatatable();
      });
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
    ]),
    change(item) {
      // let random = Math.random();
      // item.label = random;

      // console.log(item);
      this.loanstype = item;
      // console.log(this.loanstype.loan_type);
    },

    DepositsControlCreate() {
      axios
        .post("/finance/api/v1/Chartofaccounts/", {
          account_type: "1000000",
          maincode: "9000000",
          parent_account: "1200000",
          accountname: "Deposits Control ",
          description:
            "This account is used to hold a balance before Allocations to member account",
          financial_statement: "BS",
          company_id: this.companyid,
          key: this.companyid + Math.floor(Math.random() * 100),
          maincode_description: "Non Interest Bearing",
          accounttype_description: "Liabilities",
        })
        .then((response) => {
          // window.location.reload()
          response;
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },

    LoansControlCreate() {
      axios
        .post("/finance/api/v1/Chartofaccounts/", {
          account_type: "2000000",
          maincode: "9000001",
          parent_account: "2200000",
          accountname: "Loans Control ",
          description:
            "This account is used to hold a balance before Allocations to member account",
          financial_statement: "BS",
          company_id: this.companyid,
          key: this.companyid + Math.floor(Math.random() * 100),
          maincode_description: "Non Interest Bearing",
          accounttype_description: "Liabilities",
        })
        .then((response) => {
          // window.location.reload()
          response;
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },

    InterestControlCreate() {
      axios
        .post("/finance/api/v1/Chartofaccounts/", {
          account_type: "2000000",
          maincode: "9000002",
          maincode_description: "Non Interest Bearing",
          accounttype_description: "Liabilities",
          parent_account: "2200000",
          accountname: "Interest Control ",
          description:
            "This account is used to hold a balance before Allocations to member account",
          financial_statement: "BS",
          company_id: this.companyid,
          key: this.companyid + Math.floor(Math.random() * 100),
        })
        .then((response) => {
          // window.location.reload()
          response;
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },

    CreateControls() {
      const DepositsControlCreate = axios
        .post("/finance/api/v1/Chartofaccounts/", {
          account_type: "2000000",
          maincode: "9000000",
          parent_account: "2200000",
          accountname: "Interest Control ",
          description:
            "This account is used to hold a balance before Allocations to member account",
          financial_statement: "BS",
          company_id: this.companyid,
          key: this.companyid + 9000000,
          maincode_description: "Non Interest Bearing",
          accounttype_description: "Liabilities",
        })
        .then((response) => {
          // window.location.reload()
          response;
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });

      const LoansControlCreate = axios
        .post("/finance/api/v1/Chartofaccounts/", {
          account_type: "2000000",
          maincode: "9000001",
          parent_account: "2200000",
          accountname: "Loans Control ",
          description:
            "This account is used to hold a balance before Allocations to member account",
          financial_statement: "BS",
          company_id: this.companyid,
          key: this.companyid + 9000001,
          maincode_description: "Non Interest Bearing",
          accounttype_description: "Liabilities",
        })
        .then((response) => {
          // window.location.reload()
          response;
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });

      const InterestControlCreate = axios
        .post("/finance/api/v1/Chartofaccounts/", {
          account_type: "2000000",
          maincode: "9000002",
          parent_account: "2200000",
          accountname: "Interest Control ",
          description:
            "This account is used to hold a balance before Allocations to member account",
          financial_statement: "BS",
          company_id: this.companyid,
          key: this.companyid + 9000002,
          maincode_description: "Non Interest Bearing",
          accounttype_description: "Liabilities",
        })
        .then((response) => {
          // window.location.reload()
          response;
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });

      this.fetchGl();

      Promise.all([
        DepositsControlCreate,
        LoansControlCreate,
        InterestControlCreate,
      ]);
    },

    addrecords() {
      axios
        .post(`/sys_config/api/v1/EmployerProfile/`, {
          // names: '',
          // User_id: this.user_id,

          employer_name: this.employers.employer_name,
          employer_pin: this.employers.employer_pin,
          employer_email: this.employers.employer_email,
          organizationprofile: this.orgprofileid,
          loan_control: 9000001,
          deposits_control: 9000000,
          interest_control: 9000002,
          gl_account: this.selectedaccmaster,
          company_id: this.companyid,
        })
        .then((response) => {
          response;
          window.location.reload();
          confirm("We have received your application");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
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
  },
};
</script>

<style></style>

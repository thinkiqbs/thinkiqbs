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
              <h4 class="card-title">Saving Products</h4>
              <div class="topnav-right">
                <button
                  class="btn btn-success"
                  style="float: right"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Newroles"
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
                    <th>Loan Type</th>
                    <th>Description</th>
                    <th>Min Contribution</th>
                    <th>Interest</th>
                    <th>Interest Type</th>
                    <th>Term</th>
                    <th>Account</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in tableData" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.saving_type }}</td>
                    <td>{{ item.saving_description }}</td>
                    <td>{{ item.minimum_contribution }}</td>
                    <td>{{ item.interest_rate }}%</td>
                    <td>{{ item.interest_calc_mode }}</td>
                    <td>{{ item.maximum_saving_term }}</td>
                    <td>{{ item.accountcode }}</td>
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
          id="Newroles"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add New saving type
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
                <form class="modal-content">
                  <div class="container">
                    <h2>Saving Product</h2>
                    <p>Please fill in this form to create an saving product.</p>
                    <hr />

                    <label for="inputsavingtype">saving type </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputsavingtype"
                      v-model="addsavingtype.saving_type"
                      autocomplete="off"
                    />

                    <label for="inputEmail4">Description </label>
                    <textarea
                      type="textarea"
                      class="form-control"
                      id="inputEmail4"
                      v-model="addsavingtype.saving_description"
                    />

                    <label for="inputZip">account Code</label>
                    <select
                      v-model="selected"
                      class="form-control"
                      @change="glchange"
                    >
                      <option
                        v-for="option in allGls1"
                        v-bind:value="option.maincode"
                        :key="option.id"
                      >
                        {{ option.accountname }}
                        <!-- {{ option.id }}
													{{option.interest_rate}} -->
                      </option>
                    </select>
                    <span>Selected: {{ selected }}</span>

                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="inputCity">minimum contribution</label>
                        <input
                          type="number"
                          class="form-control"
                          id="inputCity"
                          v-model="addsavingtype.minimum_contribution"
                        />
                      </div>
                      <!-- <div class="form-group col-md-4">
												<label for="inputState">Calculation</label>
												<select
													id="inputState"
													class="form-control"
													v-model="addsavingtype.interest_calc_mode"
												>
													<option selected>Choose...</option>
													<option>Reducing</option>
													<option>Straight Line</option>
												</select>
											</div> -->
                      <div class="form-group col-md-2">
                        <label for="inputZip">max term</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputZip"
                          v-model="addsavingtype.maximum_saving_term"
                        />
                      </div>
                      <div class="form-group col-md-fs-2">
                        <label for="inputZip">Int%</label>
                        <input
                          type="number"
                          class="form-control"
                          id="inputZip"
                          v-model="addsavingtype.interest_rate"
                        />
                      </div>

                      <div class="checkbox form-group col-md-fs-2">
                        <label>
                          Allow Security.

                          <input
                            type="checkbox"
                            id="chkbox1"
                            runat="server"
                            v-model="addsavingtype.security"
                          />
                        </label>
                      </div>

                      <div class="form-group col-md-3">
                        <!-- <label for="inputZip" >Memberkey</label> -->
                        <input
                          type="text"
                          class="form-control"
                          id="inputZip"
                          v-model="this.sel"
                          hidden
                        />
                      </div>
                      <div class="form-group col-md-3"></div>
                    </div>

                    <p>
                      Members can apply to save on this product.
                      <!-- <a href="#" style="color:dodgerblue">Terms & Privacy</a>. -->
                    </p>
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
import { mapActions, mapGetters } from "vuex";

// import { mapState } from "vuex";

export default {
  name: "Saving-Type",
  components: {
    SysAdminNav,

    // computed: mapState(["accessToken"]),
  },
  data() {
    return {
      glchanged: [],
      companyid: "",
      orgprofile: {},
      tableData: [],
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
      addsavingtype: [
        {
          id: "",
          saving_type: "",
          saving_description: "",
          minimum_contribution: "1000",
          interest_rate: "6",
          interest_calc_mode: "",
          maximum_saving_term: "12",
          accountcode: this.selected,
          memberkey: "",
        },
      ],
    };
  },

  created() {
    this.fetchGl();
  },

  computed: {
    ...mapGetters(["accessToken"], ["allGl"]),
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
        (item) =>
          item.company_id == this.companyid3 && item.account_type == 2000000
      );
    },
  },

  mounted() {
    axios
      .get("/sys_config/api/v1/OrganizationProfile/", {
        params: { admin_email: this.email },
      })
      .then((res) => {
        this.orgprofile = res.data.results;
        this.orgprofile1id = res.data.results[0].id;
        this.companyid = res.data.results[0].company_id;

        axios
          .get("/sys_config/api/v1/SavingsType/")
          .then((res) => {
            this.tableData = res.data.results.filter(
              (orgprofile1) => orgprofile1.company_id == this.companyid3
            );
            this.initDatatable();
          })

      });
    axios
      .get("/finance/api/v1/Chartofaccounts/", {
        params: { account_type: 2000000 },
      })
      .then((res) => {
        this.coa = res.data.results.filter(
          (orgprofile1) => orgprofile1.company_id == this.companyid
        );
        $("#walla").DataTable();
      })
      .catch((error) => {
        console.error(error);
      });
  },

  methods: {
    ...mapActions(["fetchGl", "fetchAccountmaster"]),
    change(item) {
      // let random = Math.random();
      // item.label = random;

      console.log(item);
      this.loanstype = item;
      // console.log(this.loanstype.loan_type);
    },

    glchange() {
      const opt = this.allGls1.find((o) => o.maincode === this.selected);
      console.log(opt);
      this.glchanged.account_type = opt.account_type;
      this.glchanged.accounttype_description = opt.accounttype_description;
      this.glchanged.maincode = opt.maincode;
      this.glchanged.maincode_description = opt.maincode_description;
      this.glchanged.parent_account = opt.parent_account;
      this.glchanged.accountname = opt.accountname;
    },

    addrecords() {
      axios
        .post(`/sys_config/api/v1/SavingsType/`, {
          // names: '',
          // User_id: this.user_id,

          email: this.email,
          saving_type: this.addsavingtype.saving_type,
          saving_description: this.addsavingtype.saving_description,
          minimum_contribution: this.addsavingtype.minimum_contribution,
          interest_rate: this.addsavingtype.interest_rate,
          interest_calc_mode: this.addsavingtype.interest_calc_mode,
          maximum_saving_term: this.addsavingtype.maximum_saving_term,
          accountcode: this.selected,
          Account_type: this.glchanged.account_type,
          accountype_description: this.glchanged.accounttype_description,
          maincode: this.glchanged.maincode,
          maincode_description: this.glchanged.maincode_description,
          parent_account: this.glchanged.parent_account,
          accountname: this.glchanged.accountname,
          memberkey: this.sel,
          company_id: this.companyid3,
          security: this.addsavingtype.security,
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

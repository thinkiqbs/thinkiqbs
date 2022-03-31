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
              <h4 class="card-title">Loan Products</h4>
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
                    <th>Max Guarantors</th>
                    <th>Interest</th>
                    <th>Interest Type</th>
                    <th>Term</th>
                    <th>Account</th>
                    <th>Income Account</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in tableData" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.loan_type }}</td>
                    <td>{{ item.loan_description }}</td>
                    <td>{{ item.no_of_guarantors }}</td>
                    <td>{{ item.interest_rate }}%</td>
                    <td>{{ item.interest_calc_mode }}</td>
                    <td>{{ item.maximum_loan_term }}</td>
                    <td>{{ item.gl_account }}</td>
                    <td>{{ item.income_account }}</td>

                    <td>
                      <button
                        type="button"
                        @click="change(item)"
                        class="btn btn-success"
                        data-toggle="modal"
                        data-target="#EditLoantype"
                      >
                        Edit loan Type
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
                <h5 class="modal-title" id="exampleModalLabel">
                  Loan Product Configuration
                </h5>
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
                  <div class="row">
                    <div class="form-group col">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="text"
                        v-model="loanstype.loan_type"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col">
                      <label for="inputEmail4"> Description</label>
                      <input
                        type="textarea"
                        v-model="loanstype.loan_description"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                  </div>

                  <div class="form-row">
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
        <!-- Modal to Add new Loan Products  -->
        <div
          class="modal fade modalbox"
          id="Newroles"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add New Loan Product
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
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputloantype">Loan Type Name </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputloantype"
                        placeholder="Development Loan"
                        v-model="addloantype.loan_type"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Loan Type Description</label>
                      <textarea
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="describe the loan product in details let your members know how they can benefit"
                        v-model="addloantype.loan_description"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-me-2">
                      <label for="inputEmail4">Maximum Guarantors</label>
                      <select
                        class="form-control"
                        id="inputState"
                        v-model="addloantype.no_of_guarantors"
                      >
                        <option selected>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>

                    <div class="form-group col-md-2">
                      <label for="inputEmail4">X Ratio</label>
                      <select
                        class="form-control"
                        id="inputState"
                        v-model="addloantype.x_ratio"
                      >
                        <option selected>Choose...</option>
                        <option>0.1</option>
                        <option>0.2</option>
                        <option>0.3</option>
                        <option>0.4</option>
                        <option>0.5</option>
                        <option>0.6</option>
                        <option>0.7</option>
                        <option>0.8</option>
                        <option>0.9</option>
                        <option>1</option>
                      </select>
                    </div>

                    <div class="form-group col-md-fs-2">
                      <label for="inputState">Calculation</label>
                      <select
                        id="inputState"
                        class="form-control"
                        v-model="addloantype.interest_calc_mode"
                      >
                        <option
                          v-for="option in options"
                          :value="option.text"
                          :key="option.id"
                        >
                          {{ option.text }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group col-md-2">
                      <label for="inputState">Maximum Term</label>
                      <select
                        id="inputState"
                        class="form-control"
                        v-model="addloantype.maximum_loan_term"
                      >
                        <option selected>Choose...</option>

                        <option>3</option>
                        <option>6</option>
                        <option>12</option>
                        <option>24</option>
                        <option>36</option>
                        <option>48</option>
                        <option>60</option>
                      </select>
                    </div>

                    <div class="input-group mb-3">
                      <!-- <label for="inputZip">Interest rate</label> -->

                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Interest Rate"
                        aria-label="interest_rate"
                        aria-describedby="basic-addon2"
                        v-model="addloantype.interest_rate"
                      />
                      <span class="input-group-text" id="basic-addon2">%</span>
                    </div>

                    <div class="input-group mb-3">
                      <!-- <label for="inputZip">Interest rate</label> -->
                      <span class="input-group-text" id="basic-addon2"
                        >account Code</span
                      >

                      <select v-model="selected" class="form-control">
                        <option
                          v-for="option in coa"
                          v-bind:value="option.maincode"
                          :key="option.id"
                        >
                          {{ option.accountname }}
                          <!-- {{ option.id }}
													{{option.interest_rate}} -->
                        </option>
                      </select>
                    </div>
                    <div class="input-group mb-3">
                      <!-- <label for="inputZip">Interest rate</label> -->
                      <span class="input-group-text" id="basic-addon2"
                        >Income account Code</span
                      >

                      <select
                        v-model="selectedIncomeAccount"
                        class="form-control"
                      >
                        <option
                          v-for="option in coaincome"
                          v-bind:value="option.maincode"
                          :key="option.id"
                        >
                          {{ option.accountname }}
                          <!-- {{ option.id }}
													{{option.interest_rate}} -->
                        </option>
                      </select>
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
      x

      <!-- Modal to Edit new Loan Products  -->
      <div
        class="modal fade"
        id="EditLoantype"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Loan Product {{ this.loantype.id }}
              </h5>
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
                    <label for="inputEmail4">Loan Type Name </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail4"
                      v-model="this.loantype.loan_type"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Loan Type Description</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="describe the loan product in details let your members know how they can benefit"
                      v-model="this.loantype.loan_description"
                    ></textarea>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-me-2">
                    <label for="inputEmail4">Maximum Guarantors</label>
                    <select
                      class="form-control"
                      id="inputState"
                      v-model="this.loantype.no_of_guarantors"
                    >
                      <option selected>Choose...</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>

                  <div class="form-group col">
                    <label for="inputEmail4">X Ratio</label>
                    <select
                      class="form-control"
                      id="inputState"
                      v-model="this.loantype.x_ratio"
                    >
                      <option selected>Choose...</option>
                      <option>0.1</option>
                      <option>0.2</option>
                      <option>0.3</option>
                      <option>0.4</option>
                      <option>0.5</option>
                      <option>0.6</option>
                      <option>0.7</option>
                      <option>0.8</option>
                      <option>0.9</option>
                      <option>1</option>
                    </select>
                  </div>

                  <div class="form-group col">
                    <label for="inputState">Calculation</label>
                    <select
                      id="inputState"
                      class="form-control"
                      v-model="this.loantype.interest_calc_mode"
                    >
                      <option
                        v-for="option in options"
                        :value="option.text"
                        :key="option.id"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group col">
                    <label for="inputState">Maximum Term</label>
                    <select
                      id="inputState"
                      class="form-control"
                      v-model="this.loantype.maximum_loan_term"
                    >
                      <option selected>Choose...</option>

                      <option>3</option>
                      <option>6</option>
                      <option>12</option>
                      <option>24</option>
                      <option>36</option>
                      <option>48</option>
                      <option>60</option>
                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <!-- <label for="inputZip">Interest rate</label> -->

                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter Interest Rate"
                      aria-label="interest_rate"
                      aria-describedby="basic-addon2"
                      v-model="this.loantype.interest_rate"
                    />
                    <span class="input-group-text" id="basic-addon2">%</span>
                  </div>

                  <div class="input-group mb-3">
                    <!-- <label for="inputZip">Interest rate</label> -->
                    <span class="input-group-text" id="basic-addon2"
                      >account Code</span
                    >

                    <select v-model="selected" class="form-control">
                      <option
                        v-for="option in coa"
                        v-bind:value="option.maincode"
                        :key="option.id"
                      >
                        {{ option.accountname }}
                        <!-- {{ option.id }}
													{{option.interest_rate}} -->
                      </option>
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <!-- <label for="inputZip">Interest rate</label> -->
                    <span class="input-group-text" id="basic-addon2"
                      >Income account Code</span
                    >

                    <select
                      v-model="selectedIncomeAccount"
                      class="form-control"
                    >
                      <option
                        v-for="option in coaincome"
                        v-bind:value="option.maincode"
                        :key="option.id"
                      >
                        {{ option.accountname }}
                        {{ option.maincode }}

                        <!-- {{ option.id }}
													{{option.interest_rate}} -->
                      </option>
                    </select>

                    {{ this.selectedIncomeAccount }}
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
                @click="editloantype"
              >
                Save
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
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import SysAdminNav from "@/components/SysAdminNav";

export default {
  name:"Loan-Type",
  components: {
    SysAdminNav,
  },
  data() {
    return {
      options: [
        { text: "Fixed Flat", value: "A" },
        { text: " Declining Balance", value: "B" },
        { text: "Declining Balance (Equal Installments)", value: "C" },
      ],
      companyid: "",
      selected: "",
      selectedIncomeAccount: "",
      tableData: [],
      orgprofile: {},
      add_product: false,
      editing: false,
      loan_type: "",
      loanstypes: [],
      loanstype: [],
      loantype: [],
      role: [],
      // coa: [],
      roles: [],
      addloantype: [
        {
          id: "",
          loan_type: "",
          loan_description: "",
          no_of_guarantors: "",
          interest_rate: "",
          interest_calc_mode: "",
          maximum_loan_term: "",
          x_ratio: "",
        },
      ],
    };
  },

  created() {},

  computed: {
    token() {
      return this.$store.state.accessToken;
    },

    email() {
      return this.$store.state.email;
    },

    first_name() {
      return this.$store.state.first_name;
    },

    last_name() {
      return this.$store.state.last_name;
    },

    company() {
      let miny = JSON.stringify(this.orgdetails.company_id);
      // let  xid = miny.company_id;
      return miny;
    },

    user_id() {
      return this.$store.state.id;
    },
    firstname() {
      return this.$store.state.firstname;
    },
    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },
    coa() {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.parent_account == 1100000
      );
    },

    coaincome() {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.parent_account == 4100000
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
        this.orgprofileid = res.data.results[0].id;
        this.companyid = res.data.results[0].company_id;
      });

    axios.get("/sys_config/api/v1/LoanType/").then((res) => {
      this.tableData = res.data.results.filter(
        (orgprofile1) => orgprofile1.company_id == this.companyid3
      );
      this.initDatatable();
    });
    //   .catch((error) => Exception.handle(error));
  },

  methods: {
    change(item) {
      this.loantype = item;
    },

    addrecords() {
      axios
        .post(`/sys_config/api/v1/LoanType/`, {
          // names: '',
          // User_id: this.user_id,
          email: this.email,
          loan_type: this.addloantype.loan_type,
          loan_description: this.addloantype.loan_description,
          no_of_guarantors: this.addloantype.no_of_guarantors,
          interest_rate: this.addloantype.interest_rate,
          interest_calc_mode: this.addloantype.interest_calc_mode,
          maximum_loan_term: this.addloantype.maximum_loan_term,
          gl_account: this.selected,
          income_account: this.selectedIncomeAccount,

          company_id: this.companyid3,
          xratio: this.addloantype.x_ratio,
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

    editloantype(item) {
      this.loantype = item;
      const path = "/sys_config/api/v1/LoanType/`" + this.loantype.id;
      console.log("path", path);
      axios
        .put("/sys_config/api/v1/LoanType/" + this.loantype.id + "/", {
          // names: '',
          // User_id: this.user_id,
          email: this.email,
          loan_type: this.loantype.loan_type,
          loan_description: this.loantype.loan_description,
          no_of_guarantors: this.loantype.no_of_guarantors,
          interest_rate: this.loantype.interest_rate,
          interest_calc_mode: this.loantype.interest_calc_mode,
          maximum_loan_term: this.loantype.maximum_loan_term,
          gl_account: this.loantype.gl_account,
          income_account: this.selectedIncomeAccount,
          active: this.loantype.active,

          company_id: this.companyid3,
          xratio: this.addloantype.x_ratio,
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

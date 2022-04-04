<template>
  <div class="row">
    <!-- <div class="col-2">
			<financeNav></financeNav>
		</div> -->

    <div class="col-2">
      <SysAdminNav></SysAdminNav>
    </div>

    <!-- Modal -->
    <div
      class="modal fade modalbox"
      id="AddnewGL"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xxl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Chart of Account</h5>
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
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label"
                  >Account Type
                </label>
                <select
                  v-model="selected"
                  class="form-control"
                  @change="getMainaccounts"
                >
                  <option
                    v-for="option in acctype"
                    :value="option.accountcode"
                    :key="option.id"
                  >
                    {{ option.accounttype }}
                  </option>
                </select>
                <span>Selected: {{ selected }}</span>

                <hr />

                <label for="inputPassword4" class="form-label"
                  >Main Account
                </label>
                <select
                  v-model="selectedmainacc"
                  class="form-control"
                  @change="getAccountmaster"
                >
                  <option
                    v-for="option in manacc"
                    :value="option.account_code"
                    :key="option.id"
                  >
                    {{ option.account_description }}
                  </option>
                </select>
                <span>Selected: {{ selectedmainacc }}</span>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label"
                  >account group
                </label>
                <select
                  v-model="selectedaccmaster"
                  class="form-control"
                  @change="changemain"
                >
                  <option
                    v-for="option in accmaster"
                    :value="option.maincode"
                    :key="option.id"
                  >
                    {{ option.accountname }}
                  </option>
                </select>
                <span>Selected: {{ selectedaccmaster }}</span>

                <hr />

                <label for="inputAddress2" class="form-label"
                  >Account Code</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="10050"
                  v-model="Key"
                />

                <hr />
                {{ this.Key }}
              </div>
              <div class="col-12">
                <label for="inputEmail4" class="form-label">Account Name</label>
                <input
                  v-model="coa.accountname"
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                />
                <hr />
                <label for="inputAddress" class="form-label">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Indicate what the account is used for"
                  v-model="coa.description"
                />
              </div>
              <div class="col-12"></div>

              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Active
                  </label>
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
            <button type="button" class="btn btn-primary" @click="postcoa">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    

    <div
      class="modal fade modalbox"
      id="addmaster"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Master Chart of Accounts
            </h5>
            <!-- {{ this.message }} -->
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
            <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-borderless table-hover table-striped walla"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Account Type</th>
                      <th>Description</th>

                      <th>Parent Account</th>
                      <th>Description</th>

                      <th>Main Account</th>
                      <th>Account Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in accountmaster" :key="product.id">
                      <td>{{ product.id }}</td>
                      <td>{{ product.account_type }}</td>
                      <td>{{ product.accountype_description }}</td>

                      <td>{{ product.parent_account }}</td>
                      <td>{{ product.maincode_description }}</td>

                      <td>{{ product.maincode }}</td>
                      <td>{{ product.accountname }}</td>
                      <td>
                        <button
                          class="btn btn-success btn-sm"
                          @click="editMode(product)"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          class="btn btn-success btn-sm"
                          @click="addcoamaster(product)"
                        >
                          <i class="bi bi-plus-square-fill"></i>
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
            <button type="button" class="btn btn-primary" @click="postcoa">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    

    <div class="col-10">
      <div class="mb-11" style="max-width: 98rem">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">Chart of Account</h2>
              
                
                

                <div class="topnav-right">
                  <button
                    type="button"
                    class="btn btn-success"
                    style="float: right"
                    data-bs-toggle="modal"
                    data-bs-target="#AddnewGL"
                  >
                    New GL Account
                  </button>
                </div>
                <div class="topnav-right">
                  <button
                    type="button"
                    class="btn btn-success"
                    style="float: right"
                    data-bs-toggle="modal"
                    data-bs-target="#addmaster"
                  >
                    Add from Master
                  </button>
                </div>
            

              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-borderless walla">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Account Name</th>
                        <th>Account Type</th>
                        <th>Main Account</th>
                        <th>Account Code</th>
                        <th>Actions</th>
                        <!-- <th></th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in allGls1" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.accountname }}</td>
                        <td>{{ product.account_type }}</td>
                        <td>{{ product.parent_account }}</td>
                        <td>{{ product.maincode }}</td>
                        <td>
                          <button
                            class="btn btn-success btn-sm"
                            @click="editMode(product)"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                          <button
                            class="btn btn-danger btn-sm"
                            @click="deleteProduct(product.id)"
                          >
                            <i class="fa fa-trash"></i>
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
      </div>
    </div>
  </div>
</template>
<script>
import SysAdminNav from "@/components/SysAdminNav";

import { getAPI} from "@/axios-api.js"
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
  name:"chart-of-account",
  components: {
    SysAdminNav,
  },

  data() {
    return {
      glchanged: [],
      tableData: [],
      message: "hello",
      orgprofile: {},
      // accountmaster: [],
      add_product: false,
      editing: false,
      selected: "",
      selectedmainacc: "",
      selectedaccmaster: "",
      acctype: [],
      manacc: [],
      accmaster: [],
      options: [
        { id: 0, code: 0, text: "Control" },
        { id: 1, code: 1, text: "Accounts Payables" },
        { id: 2, code: 2, text: "Accounts Receivables" },
        { id: 3, code: 3, text: "Bank" },
        { id: 4, code: 4, text: "Cash" },
        { id: 5, code: 5, text: "Cost of Goods" },
        { id: 6, code: 6, text: "Equity" },
        { id: 7, code: 2220000, text: "ACCRUED EXPENSES" },
        { id: 8, code: 2220000, text: "EMPLOYEE BENEFITS PAYABLE" },
        {
          id: 9,
          code: 2220000,
          text: "OTHER NON-INTEREST-BEARING LIABILITIES",
        },
        { id: 10, code: 3000000, text: "CAPITAL" },
        { id: 11, code: 4000000, text: "Income" },
        { id: 12, code: 1000000, text: "Asset" },
        { id: 13, code: 10, text: "Current Asset" },
        { id: 14, code: 2000000, text: "Liabilities" },
        { id: 12, code: 12, text: "Current Liability" },
      ],
      coa: [],
      Key: "",
      product: "",
    };
  },
  created() {
    this.getMainaccounts();
    // this.getAccountmaster();
    this.fetchGl();
    this.fetchAccountmaster();
    this.initDatatable();
  },

  beforeMount() {
    getAPI
      .get("/finance/api/v1/Accounttypes/", {
        params: { organizationprofile: this.user_id },
      })
      .then((res) => {
        this.acctype = res.data.results;
        $("#walla").DataTable();
      });

    getAPI
      .get("/sys_config/api/v1/OrganizationProfile/", {
        params: { admin_email: this.email },
      })
      .then((res) => {
        this.orgprofile = res.data.results;
        this.companyid = this.orgprofile[0].company_id;
      });

    getAPI
      .get("/finance/api/v1/Chartofaccounts/")
      .then((res) => {
        this.tableData = res.data.results.filter(
          (orgprofile1) => orgprofile1.company_id == this.companyid
        );
        this.initDatatable();
      })
      .catch((error) => {
        console.log(error);
      });

    // getAPI
    // .get("/finance/api/v1/mainaccounts/", {
    // 	params: { organizationprofile: this.user_id },
    // })
    // .then((res) => {
    // 	this.manacc = res.data.results;
    // 	$("#walla").DataTable();
    // });
  },
  computed: {
    ...mapGetters(["allOrg", "allGl", "allAccountmaster"]),
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
    nextaccountcode() {
      const x = 10;
      return this.selectedaccmaster * 1 + x;
    },

    allGls1: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    accountmaster: function () {
      return this.$store.getters.allAccountmaster;
    },

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },
  },

  methods: {
    ...mapActions(["fetchOrg", "fetchGl", "fetchAccountmaster"]),

    glchange() {
      const opt = this.accmaster.find((o) => o.maincode === this.selected);
      // console.log(opt)
      this.glchanged.account_type = opt.account_type;
      this.glchanged.accounttype_description = opt.accounttype_description;
      this.glchanged.maincode = opt.maincode;
      this.glchanged.maincode_description = opt.maincode_description;
      this.glchanged.parent_account = opt.parent_account;
      this.glchanged.accountname = opt.accountname;
    },

    changemain() {
      this.Key = this.selectedaccmaster * 1 + 10;
      const opt = this.accmaster.find(
        (o) => o.maincode === this.selectedaccmaster
      );
      console.log(opt);
      this.glchanged.account_type = opt.account_type;
      this.glchanged.accountype_description = opt.accountype_description;
      this.glchanged.maincode = opt.maincode;
      this.glchanged.maincode_description = opt.maincode_description;
      this.glchanged.parent_account = opt.parent_account;
      this.glchanged.accountname = opt.accountname;

      // console.log(opt.account_type)
    },
    getMainaccounts(Exception) {
      getAPI
        .get("/finance/api/v1/mainaccounts/", {
          params: { accounttype: this.selected },
        })
        .then((res) => {
          this.manacc = res.data.results;
          // this.initDatatable();
        })
        .catch((error) => Exception.handle(error));
    },

    getAccountmaster(Exception) {
      getAPI
        .get("/finance/api/v1/accountmaster/", {
          params: { parent_account: this.selectedmainacc },
        })
        .then((res) => {
          this.accmaster = res.data.results;

          // this.initDatatable();
        })
        .catch((error) => Exception.handle(error));
    },
    // getProducts(Exception) {

    // },

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
    postcoa(product) {
      this.coaitem = product;

      getAPI
        .post("/finance/api/v1/Chartofaccounts/", {
          account_type: this.selected,
          accounttype_description: this.glchanged.accountype_description,

          maincode: this.nextaccountcode,

          maincode_description: this.glchanged.maincode_description,
          parent_account: this.selectedmainacc,
          accountname: this.coa.accountname,
          description: this.coa.description,
          financial_statement: "BS",
          company_id: this.companyid,
          key: this.companyid + this.Key,
        })
        .then(function (response) {
          window.location.reload();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },

    // add chart of accounts item fkrom master
    addcoamaster(product) {
      this.coaitem = product;
      // this.message = "loading"
      getAPI
        .post("/finance/api/v1/Chartofaccounts/", {
          account_type: product.account_type,
          accounttype_description: product.accountype_description,
          maincode: product.maincode,
          maincode_description: product.maincode_description,
          parent_account: product.parent_account,
          accountname: product.accountname,
          description: product.accountname,
          financial_statement: "BS",
          company_id: this.companyid,
          key: this.companyid + product.maincode,
        })
        .then((response) => {
          response;

          this.fetchGl();
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

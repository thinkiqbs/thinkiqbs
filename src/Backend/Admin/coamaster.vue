<template>
  <div class="row">
    <div class="col-2">
      <financeNav></financeNav>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Chart of Account</h5>
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
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Account Name</label>
                <input
                  v-model="coa.accountname"
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label"
                  >Account Type
                </label>
                <select v-model="selected" class="form-control">
                  <option
                    v-for="option in options"
                    :value="option.text"
                    :key="option.id"
                  >
                    {{ option.text }}
                  </option>
                </select>
                <span>Selected: {{ selected }}</span>
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Indicate what the account is used for"
                  v-model="coa.description"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label"
                  >Account Code</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="10050"
                  v-model="coa.accountcode"
                />
              </div>
              <!-- <div class="col-md-6">
								<label for="inputCity" class="form-label">City</label>
								<input type="text" class="form-control" id="inputCity" />
							</div>
							<div class="col-md-4">
								<label for="inputState" class="form-label">State</label>
								<select id="inputState" class="form-select">
									<option selected>Choose...</option>
									<option>...</option>
								</select>
							</div>
							<div class="col-md-2">
								<label for="inputZip" class="form-label">Zip</label>
								<input type="text" class="form-control" id="inputZip" />
							</div> -->
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
              data-dismiss="modal"
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
              <h4 class="card-title">Chart of Account</h4>
              <div
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                <strong>{{ this.email }}!</strong> Go back to Sacco
                <router-link :to="{ name: 'finance' }" exact
                  >Finance Navigator
                </router-link>
                <!-- <button
												type="button"
												class="btn-close"
												data-bs-dismiss="alert"
												aria-label="Close"

											></button> -->

                <div class="topnav-right">
                  <button
                    type="button"
                    class="btn btn-success"
                    style="float: right"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    New GL Account
                  </button>
                </div>
              </div>

              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-striped walla">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Account Type</th>
                        <th>Parent Account</th>
                        <th>Main Account</th>
                        <th>Account Name</th>
                        <th>Category</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in tableData" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.account_type }}</td>
                        <td>{{ product.parent_account }}</td>
                        <td>{{ product.maincode }}</td>
                        <td>{{ product.accountname }}</td>
                        <td>{{ product.description }}</td>
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
import financeNav from "@/components/FinanceNav";
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

export default {
  name:"MasterChartofaccount",
  components: {
    financeNav,
  },

  data() {
    return {
      tableData: [],
      add_product: false,
      editing: false,
      selected: "",
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
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
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
  },

  methods: {
    getProducts(Exception) {
      axios
        .get("/finance/api/v1/accountmaster/")
        .then((res) => {
          this.tableData = res.data.results;
          this.initDatatable();
        })
        .catch((error) => Exception.handle(error));
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
    postcoa() {
      axios
        .post("/finance/api/v1/Chartofaccounts/", {
          accountname: this.coa.accountname,
          accountcode: this.coa.accountcode,
          accounttype: this.selected,
          description: this.coa.description,
        })
        .then(function (response) {
          window.location.reload();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

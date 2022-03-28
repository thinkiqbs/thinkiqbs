<template>
  <div class="row">
    <!-- <div class="col-2">
			<financeNav></financeNav>
		</div> -->

    <!-- Modal -->

    <div class="col-2">
      <SysAdminNav></SysAdminNav>
    </div>

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
            <h5 class="modal-title" id="exampleModalLabel">List of Users</h5>
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
              <div class="form-row align-items-center">
                <div class="col-sm-3 my-1">
                  <label class="sr-only" for="inlineFormInputName">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputName"
                    placeholder="Jane Doe"
                  />
                </div>
                <div class="col-sm-3 my-1">
                  <label class="sr-only" for="inlineFormInputGroupUsername"
                    >Username</label
                  >
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="col-auto my-1">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck2"
                    />
                    <label class="form-check-label" for="autoSizingCheck2">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-auto my-1">
                  <button type="submit" class="btn btn-primary">Submit</button>
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
      <div class="col-sm-10">
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
            </div>

            <div class="topnav-right">
              <button
                type="button"
                class="btn btn-success"
                style="float: right"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i class="fa fa-fw fa-plus me-1"></i> Add User
              </button>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-unbordered walla">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>

                      <th>email</th>
                      <th>Is Staff</th>
                      <th>Company Id</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in tableData" :key="product.id">
                      <td>{{ product.id }}</td>
                      <td>{{ product.first_name }}</td>
                      <td>{{ product.last_name }}</td>
                      <td>{{ product.email }}</td>
                      <td>{{ product.is_staff }}</td>
                      <td>{{ product.company_id }}</td>

                      <td>
                        <button
                          class="btn btn-success btn-sm"
                          @click="updateCompanyid(product)"
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
</template>
<script>
import SysAdminNav from "@/components/SysAdminNav";
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
  name:"Users-list ",
  components: {
    SysAdminNav,
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

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },
  },

  methods: {
    getProducts(Exception) {
      axios
        .get("/users/")
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
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    updateCompanyid(product) {
      this.member = product;

      axios
        .put("users/api/v1/CustomUser/ " + this.member.id + "/", {
          // names: '',
          first_name: this.member.first_name,
          last_name: this.member.last_name,
          email: this.member.email,
          company_id: this.companyid3,
        })
        .then((response) => {
          response;
          // window.location.reload();
          // this.errors = "hey we got your record";
        })
        .catch((e) => {
          this.errors.push(e.errors);
        });
    },
  },
};
</script>

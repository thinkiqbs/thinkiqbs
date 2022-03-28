@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-1">
        <SysAdminNav></SysAdminNav>
      </div>

      <div class="col-10">
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="content">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Member List</h4>
                    <div class="topnav-right">
                      <button
                        type="button"
                        class="btn btn-success"
                        style="float: right"
                        data-toggle="modal"
                        data-target="#Addnewbank"
                      >
                        Create New Account
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <table class="table table-hover walla">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Member Names</th>
                          <th>Phone Number</th>
                          <th>email</th>
                          <th>Account Number</th>
                          <th>Employer</th>
                          <th>Department</th>
                          <th>Approved</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="product in tableData" :key="product.id">
                          <td>{{ product.id }}</td>
                          <td>
                            {{ product.first_name }} {{ product.last_name }}
                          </td>
                          <td>{{ product.phone_no }}</td>
                          <td>{{ product.email }}</td>
                          <td>{{ product.account_no }}</td>
                          <td>{{ product.Employer }}</td>
                          <td>{{ product.Department }}</td>
                          <td>{{ product.Application_Status }}</td>

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
        </main>
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
                      <label for="inputEmail4">Role Name</label>
                      <input
                        type="text"
                        v-model="role.role_name"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                  </div>
                  <div class="form-group col-md-10">
                    <label for="inputEmail4">Role Description</label>
                    <textarea
                      type="text"
                      v-model="role.role_description"
                      class="form-control"
                      id="inputEmail4"
                    />
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
                <button type="button" class="btn btn-primary">update</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal to Add new Roles  -->
        <div
          class="modal fade"
          id="Addnewbank"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="Addnewbanknew">New Bank</h5>
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
                      <label for="inputEmail4">Account Code</label>
                      <input
                        type="text"
                        v-model="addbank.accountcode"
                        class="form-control"
                        id="accountcodenew"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Account Name </label>
                      <input
                        type="text"
                        v-model="addbank.accountname"
                        class="form-control"
                        id="accountnamenew"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Account Type</label>
                      <input
                        type="text"
                        v-model="addbank.bankaccounttype"
                        class="form-control"
                        id="bankaccounttypenew"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Bank Name</label>
                      <input
                        type="text"
                        v-model="addbank.bankname"
                        class="form-control"
                        id="banknamenew"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Account Number</label>
                      <input
                        type="text"
                        v-model="addbank.accountnumber"
                        class="form-control"
                        id="accountnumdernew"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Routing Number</label>
                      <input
                        type="text"
                        v-model="addbank.routingnumber"
                        class="form-control"
                        id="routingnumbernew"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Currency</label>
                      <input
                        type="text"
                        v-model="addbank.currency"
                        class="form-control"
                        id="currencynew"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Description</label>
                      <input
                        type="text"
                        v-model="addbank.description"
                        class="form-control"
                        id="descriptionnew"
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addrecords"
                >
                  Save Role
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
import SysAdminNav from "@/components/SysAdminNav";
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
// import Popper from "vue-popperjs";
// import Tab from "@/components/Tab.vue";
// import Tabs from "@/components/Tabs.vue";

export default {
  components: {
    SysAdminNav,
  },
  data() {
    return {
      tableData: [],
      add_product: false,
      editing: false,

      loan_type: "",
      role: [],
      roles: [],
      addbank: [
        {
          accountcode: "",
          accountname: "",
          bankaccounttype: "",
          bankname: "",
          accountnumber: "",
          routingnumber: "",
          currency: "",
          description: "",
        },
      ],
    };
  },

  created() {
    this.getProducts();
  },

  computed: {},

  mounted() {},

  methods: {
    change(item) {
      // let random = Math.random();
      // item.label = random;

      console.log(item);
      this.role = item;
      // console.log(this.loanstype.loan_type);
    },
    addrecords() {
      axios
        .post(`/members/api/v1/MemberDetails/`, {
          // names: '',
          // User_id: this.user_id,
          accountcode: this.addbank.accountcode,
          accountname: this.addbank.accountname,
          bankaccounttype: this.addbank.bankaccounttype,
          bankname: this.addbank.bankname,
          accountnumber: this.addbank.accountnumber,
          routingnumber: this.addbank.routingnumber,
          currency: this.addbank.currency,
          description: this.addbank.description,
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
    getProducts() {
      axios
        .get("/members/api/v1/MemberDetails/")
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
  },
};
</script>

<style></style>

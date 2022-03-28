@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="mb-11" style="max-width: 98rem">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">All Loans</h4>
                  <div
                    class="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>{{ this.email }}!</strong> Go back to Sacco
                    <router-link :to="{ name: 'operations' }" exact
                      >Operations
                    </router-link>
                    <!-- <button
												type="button"
												class="btn-close"
												data-bs-dismiss="alert"
												aria-label="Close"

											></button> -->
                  </div>
                  <div class="topnav-right">
                    <!-- <button
												type="button"
												class="btn btn-success"
												style="float: right;"
												data-toggle="modal"
												data-target="#Addnewbank"
											>
												New Loan
											</button> -->
                    <p1 style="float: right">|</p1>
                    <router-link
                      to="/members"
                      tag="button"
                      class="btn btn-success"
                      style="float: right"
                      >Members</router-link
                    >
                  </div>
                </div>
                <div class="card-body">
                  <table class="table table-hover walla">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>email</th>
                        <th>Loan Type</th>
                        <th>Term</th>
                        <th>Amount</th>
                        <th>Monthly Repayment</th>
                        <th>Interest</th>
                        <th>Total Loan</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in tableData" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.created }}</td>
                        <td>{{ product.email }} {{ product.last_name }}</td>
                        <td>{{ product.loan_Type }}</td>
                        <td>{{ product.Term }}</td>
                        <td>{{ product.Amount }}</td>
                        <td>{{ product.Monthrepayment }}</td>
                        <td>{{ product.Interest_Monthly }}</td>
                        <td>{{ product.Total_Loan }}</td>

                        <td>
                          <button
                            class="btn btn-success btn-sm"
                            @click="editMode(product)"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
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

        <!-- Modal to Add Members  -->
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
                <h5 class="modal-title" id="Addnewbanknew">New Member</h5>
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
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div class="row mb-4">
                    <div class="col">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form6Example1"
                          class="form-control"
                          v-model="addmembers.first_name"
                        />
                        <label class="form-label" for="form6Example1"
                          >First name</label
                        >
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form6Example2"
                          class="form-control"
                          v-model="addmembers.last_name"
                        />
                        <label class="form-label" for="form6Example2"
                          >Last name</label
                        >
                      </div>
                    </div>
                  </div>

                  <!-- Text input -->
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form6Example3"
                      class="form-control"
                      v-model="addmembers.employer"
                    />
                    <label class="form-label" for="form6Example3"
                      >Employer
                    </label>
                  </div>

                  <!-- Text input -->
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form6Example4"
                      class="form-control"
                      v-model="addmembers.Department"
                    />
                    <label class="form-label" for="form6Example4"
                      >Department</label
                    >
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form6Example5"
                      class="form-control"
                      v-model="addmembers.email"
                    />
                    <label class="form-label" for="form6Example5">Email</label>
                  </div>

                  <!-- Number input -->
                  <div class="form-outline mb-4">
                    <input
                      type="tel"
                      id="form6Example6"
                      class="form-control"
                      v-model="phone_no"
                    />
                    <label class="form-label" for="form6Example6">Phone</label>
                  </div>

                  <!-- Message input -->
                  <div class="form-outline mb-4">
                    <input
                      type="tel"
                      id="form6Example7"
                      class="form-control"
                      v-model="addmembers.county"
                    />
                    <label class="form-label" for="form6Example7">County</label>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary btn-block mb-4"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary btn-block mb-4"
                  @click="addrecords"
                >
                  Add Member
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
import financeNav from "@/components/FinanceNav";
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
    financeNav,
  },
  data() {
    return {
      tableData: [],
      add_product: false,
      editing: false,

      loan_type: "",
      role: [],
      roles: [],
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
    };
  },

  created() {
    this.getProducts();
  },

  mounted() {},

  methods: {
    gotoops() {
      this.$router.push("/operations");
    },
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
          first_name: this.addmembers.first_name,
          last_name: this.addmembers.last_name,
          phone_no: this.addmembers.phone_no,
          bankname: this.addmembers.bankname,
          email: this.addmembers.email,
          date_of_birth: this.addmembers.date_of_birth,
          Employer: this.addmembers.Employer,
          Department: this.addmembers.Department,
          county: this.addmembers.county,
        })
        .then((response) => {
          response;
          confirm("We have received your application");
        })
        .catch((error) => {
          console.log(JSON.stringify(error.response.data));
          // this.error = (e);
          alert(JSON.stringify(error.response.data));
        });
    },
    getProducts() {
      axios
        .get("/loans/api/v1/loans/", {
          params: { organizationprofile: this.user_id },
        })
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
    currentDate() {
      const current = new Date();
      // const date = `${current.getDate()}/${current.getMonth() +
      // 	1}/${current.getFullYear()}`;
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      return date;
    },
  },
};
</script>

<style></style>

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
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Bank Setup</h4>
                <div class="topnav-right">
                  <button
                    type="button"
                    class="btn btn-success"
                    style="float: right"
                    data-bs-toggle="modal"
                    data-bs-target="#Addnewbank"
                  >
                    Create New Account
                  </button>
                </div>
              </div>
              <div class="card-body">
                <table class="table table-borderless walla">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Bank code</th>
                      <th>Bank Name</th>
                      <th>Description</th>
                      <th>Gl Account</th>
                      <th>Account Type</th>
                      <th>Account Number</th>
                      <th>Routing Number</th>
                      <th>Currency</th>
                      <th>Company ID</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in tableData" :key="product.id">
                      <td>{{ product.id }}</td>
                      <td>{{ product.accountcode }}</td>
                      <td>{{ product.bankname }}</td>
                      <td>{{ product.description }}</td>
                      <td>{{ product.gl_account }}</td>
                      <td>{{ product.bankaccounttype }}</td>
                      <td>{{ product.accountnumber }}</td>
                      <td>{{ product.routingnumber }}</td>
                      <td>{{ product.company_id }}</td>
                      <td>{{ product.currency }}</td>

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
          class="modal fade modalbox"
          id="Addnewbank"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="Addnewbanknew">
                  <strong> CREATE NEW BANK</strong>
                </h4>
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
                  <label for="bankname"
                    >Name of bank, credit union or building society</label
                  >
                  <input
                    type="text"
                    id="bankname"
                    name="bankname"
                    placeholder="Enter Name of BANK"
                    v-model="addbank.bankname"
                    autocomplete="off"
                  />

                  <label for="branch">Branch</label>
                  <input
                    type="text"
                    id="lname"
                    name="branch"
                    placeholder="Your last name.."
                  />

                  <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">City</label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputState">State</label>
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input type="text" class="form-control" id="inputZip" />
                    </div>
                  </div>

                  <label for="branch">Account Name </label>
                  <input
                    type="text"
                    id="Accname"
                    name="AccountNames"
                    placeholder="Account Name.."
                    v-model="addbank.accountname"
                  />

                  <div class="form-row">
                    <div class="form-group col-md-2">
                      <label for="inputEmail4">Account Code</label>
                      <input
                        type="text"
                        v-model="addbank.accountcode"
                        class="form-control"
                        id="accountcodenew"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Account Number</label>
                      <input
                        type="text"
                        v-model="addbank.accountnumber"
                        class="form-control"
                        id="accountnumdernew"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputEmail4">Routing Number</label>
                      <input
                        type="text"
                        v-model="addbank.routingnumber"
                        class="form-control"
                        id="routingnumbernew"
                      />
                    </div>
                    <div class="form-group col-md-2">
                      <label for="inputEmail4">Currency</label>
                      <input
                        type="text"
                        v-model="addbank.currency"
                        class="form-control"
                        id="currencynew"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputZip">account Code</label>
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
                      <span>Selected: {{ selected }}</span>
                    </div>

                    <div class="form-group col-md-6">
                      <label for="sel1">Account Type:</label>
                      <select
                        class="form-control"
                        v-model="addbank.bankaccounttype"
                      >
                        <option disabled value="">Please select one</option>
                        <option>Savings</option>
                        <option>Current</option>
                        <option>Ficed</option>
                      </select>
                      <span>Selected: {{ this.addbank.bankaccounttype }}</span>
                    </div>
                  </div>

                  <label for="inputEmail4">Description</label>
                  <input
                    type="textarea"
                    v-model="addbank.description"
                    class="form-control"
                    id="descriptionnew"
                  />

                  <!-- delete below -->
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
                  Add New Bank
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
// import financeNav from "@/components/FinanceNav";
import SysAdminNav from "@/components/SysAdminNav";

import $ from "jquery";

export default {
  name:"Bank-Setup",
  components: {
    SysAdminNav,
  },
  data() {
    return {
      tableData: [],
      orgprofile: {},
      add_product: false,
      editing: false,
      selected: "",

      loan_type: "",
      role: [],
      coa: [],
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
    companyid() {
      return this.companyid3;
    },
    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
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
      });

    axios
      .get("/finance/api/v1/Bank/")
      .then((res) => {
        this.tableData = res.data.results.filter(
          (orgprofile1) => orgprofile1.company_id == this.companyid
        );
        this.initDatatable();
      })


    axios
      .get("/finance/api/v1/Chartofaccounts/", {
        params: {
          account_type: 1000000,
          organizationprofile: this.orgprofileid,
        },
      })
      .then((res) => {
        this.coa = res.data.results.filter(
          (orgprofile1) => orgprofile1.company_id == this.companyid
        );
      })
      .catch((error) => {
        console.error(error);
      });
  },

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
        .post(`/finance/api/v1/Bank/`, {
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
          gl_account: this.selected,
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

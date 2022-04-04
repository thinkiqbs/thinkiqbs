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
                      <!-- <td>{{ product.accountnumber }}</td>
                      <td>{{ product.routingnumber }}</td> -->
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
                      <td>
                        <div class="d-flex align-items-center">
                        <div class="dropdown d-inline-block ms-2">
                          <button
                            type="button"
                            class="btn btn-sm btn-alt-secondary d-flex align-items-center"
                            id="page-header-user-dropdown"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              class="bi bi-menu-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                              />
                            </svg>
                            <span class="d-none d-sm-inline-block ms-2"
                              >Add Transactions</span
                            >
                            <i
                              class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
                            ></i>
                          </button>

                          <div
                            class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
                            aria-labelledby="page-header-user-dropdown"
                          >
                            <div
                              class="p-3 text-center bg-body-light border-bottom rounded-top"
                            >
                              <p class="mt-2 mb-0 fw-medium">Money Out</p>
                            </div>
                            <div class="p-2">
                              <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#Newexpense"
                              >
                                <span class="fs-sm fw-medium">Expenses</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#payloans"
                              >
                                <span class="fs-sm fw-medium">Pay Loans </span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#Newexpense"
                              >
                                <span class="fs-sm fw-medium"
                                  >Transfer to Another Account</span
                                >
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#Newexpense"
                              >
                                <span class="fs-sm fw-medium"
                                  >Process Dividend</span
                                >
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                @click="gotopayments"
                              >
                                <span class="fs-sm fw-medium"
                                  >View All Payments</span
                                >
                              </a>
                            </div>
                            <div
                              role="separator"
                              class="dropdown-divider m-0"
                            ></div>

                            <div class="p-1 text-center">
                              <p class="mt-2 mb-0 fw-medium">Money in</p>
                            </div>
                            <div class="p-2">
                              <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#Newpayments"
                                @click="loadstore"
                              >
                                <span class="fs-sm fw-medium"
                                  >Bank Receips</span
                                >
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#Newpayments"
                                @click="loadstore"
                              >
                                <span class="fs-sm fw-medium"
                                  >Receipts from Employer</span
                                >
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#Newexpense"
                              >
                                <span class="fs-sm fw-medium"
                                  >Transfer From Another Account</span
                                >
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#Newexpense"
                              >
                                <span class="fs-sm fw-medium"
                                  >Income Interest</span
                                >
                              </a>
                               <a
                                class="dropdown-item d-flex align-items-center justify-content-between"
                                @click="gotoreceipts"
                              >
                                <span class="fs-sm fw-medium"
                                  >View All Receipts</span
                                >
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
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

import {getAPI} from "@/axios-api.js";
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
    getAPI
      .get("/sys_config/api/v1/OrganizationProfile/", {
        params: { admin_email: this.email },
      })
      .then((res) => {
        this.orgprofile = res.data.results;
        this.orgprofileid = this.orgprofile[0].id;
      });

    getAPI
      .get("/finance/api/v1/Bank/")
      .then((res) => {
        this.tableData = res.data.results.filter(
          (orgprofile1) => orgprofile1.company_id == this.companyid
        );
        this.initDatatable();
      })


    getAPI
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
      getAPI
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
  },
};
</script>

<style></style>

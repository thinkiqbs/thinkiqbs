@
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1">
        <financeNav></financeNav>
      </div>

      <div class="col-9">
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="container">
            <h2>sales functions</h2>
            <p></p>

            <div>
              <ul class="nav nav-tabs col-is-10-widescreen">
                <div class="dropdown">
                  <button class="dropbtn">Action</button>
                  <i class="fa fa-caret-down"></i>
                  <div class="dropdown-content">
                    <a data-toggle="tab" href="#home">Customers</a>
                    <a data-toggle="tab" href="#menu2">Quotes </a>
                    <a data-toggle="tab" href="#menu3">Sales Orders </a>
                    <a data-toggle="tab" href="#menu4">Invoices </a>
                    <a
                      ><router-link
                        :to="{ name: 'paymentsReceipts' }"
                        exact
                        tag="button"
                        class="btn btn-success"
                      >
                        Receive Payments
                      </router-link>
                    </a>
                    <a data-toggle="tab" href="#menu6">Customer Credit</a>

                    <!-- <a data-toggle="tab" href="#menu6">Payments made</a> -->
                  </div>
                </div>
              </ul>
            </div>

            <div class="tab-content">
              <div id="home" class="tab-pane fade in active">
                <h4>Customers</h4>

                <div class="table-responsive">
                  <div class="topnav-right">
                    <button
                      type="button"
                      class="btn btn-success"
                      style="float: right"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      New
                    </button>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th cope="col">ID</th>
                        <th cope="col">Name</th>
                        <th cope="col">Email</th>
                        <th cope="col">phone</th>
                        <th cope="col">Primary Contact</th>
                        <th cope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="customer in customers" :key="customer.id">
                        <td>{{ customer.id }}</td>
                        <td>{{ customer.companyname }}</td>
                        <td>{{ customer.companyemail }}</td>
                        <td>{{ customer.customerphone }}</td>
                        <td>{{ customer.primaryContact }}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div id="menu2" class="tab-pane fade">
                <h3>Expenses</h3>
                <div class="table-responsive">
                  <div class="topnav-right">
                    <!-- <button
											type="button"
											class="btn btn-success"
											style="float: right;"
											data-toggle="modal"
											data-target="#myModal"
											@click="$router.push('expenses')"
										>
											New
										</button> -->
                    <button style="float: right" type="button">
                      <router-link
                        :to="{ name: 'expenses' }"
                        exact
                        style="float: right"
                        tag="button"
                        class="btn btn-success"
                        >New Expenses
                      </router-link>
                    </button>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th cope="col">ID</th>
                        <th cope="col">Name</th>
                        <th cope="col">Email</th>
                        <th cope="col">phone</th>
                        <th cope="col">Primary Contact</th>
                        <th cope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="customer in customers" :key="customer.id">
                        <td>{{ customer.id }}</td>
                        <td>{{ customer.companyname }}</td>
                        <td>{{ customer.companyemail }}</td>
                        <td>{{ customer.customerphone }}</td>
                        <td>{{ customer.primarContact }}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div id="menu3" class="tab-pane fade">
                <h3>Purchase Orders</h3>
                <div class="table-responsive">
                  <div class="topnav-right">
                    <!-- <button
											type="button"
											class="btn btn-success"
											style="float: right;"
											data-toggle="modal"
											data-target="#myModal"
											@click="$router.push('expenses')"
										>
											New
										</button> -->
                    <button style="float: right" type="button">
                      <router-link
                        :to="{ name: 'expenses' }"
                        exact
                        style="float: right"
                        tag="button"
                        class="btn btn-success"
                        >New Expenses
                      </router-link>
                    </button>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th cope="col">ID</th>
                        <th cope="col">Name</th>
                        <th cope="col">Email</th>
                        <th cope="col">phone</th>
                        <th cope="col">Primary Contact</th>
                        <th cope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="vendor in vendors" :key="vendor.id">
                        <td>{{ vendor.id }}</td>
                        <td>{{ vendor.companyname }}</td>
                        <td>{{ vendor.companyemail }}</td>
                        <td>{{ vendor.customerphone }}</td>
                        <td>{{ vendor.primarContact }}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="menu4" class="tab-pane fade">
                <h3>Bills</h3>
                <div class="table-responsive">
                  <div class="topnav-right">
                    <!-- <button
											type="button"
											class="btn btn-success"
											style="float: right;"
											data-toggle="modal"
											data-target="#myModal"
											@click="$router.push('expenses')"
										>
											New
										</button> -->
                    <button style="float: right" type="button">
                      <router-link
                        :to="{ name: 'expenses' }"
                        exact
                        style="float: right"
                        tag="button"
                        class="btn btn-success"
                        >New Expenses
                      </router-link>
                    </button>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th cope="col">ID</th>
                        <th cope="col">Name</th>
                        <th cope="col">Email</th>
                        <th cope="col">phone</th>
                        <th cope="col">Primary Contact</th>
                        <th cope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="vendor in vendors" :key="vendor.id">
                        <td>{{ vendor.id }}</td>
                        <td>{{ vendor.companyname }}</td>
                        <td>{{ vendor.companyemail }}</td>
                        <td>{{ vendor.customerphone }}</td>
                        <td>{{ vendor.primarContact }}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div id="menu5" class="tab-pane fade">
                <h3>Payments Received</h3>

                <div class="table-responsive">
                  <div class="topnav-right">
                    <!-- <button
											type="button"
											class="btn btn-success"
											style="float: right;"
											data-toggle="modal"
											data-target="#myModal"
											@click="$router.push('expenses')"
										>
											New
										</button> -->
                    <button style="float: right" type="button">
                      <router-link
                        :to="{ name: 'paymentsReceipts' }"
                        exact
                        style="float: right"
                        tag="button"
                        class="btn btn-success"
                        >Receive Payment
                      </router-link>
                    </button>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th cope="col">ID</th>
                        <th cope="col">Name</th>
                        <th cope="col">Email</th>
                        <th cope="col">phone</th>
                        <th cope="col">Primary Contact</th>
                        <th cope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="vendor in vendors" :key="vendor.id">
                        <td>{{ vendor.id }}</td>
                        <td>{{ vendor.companyname }}</td>
                        <td>{{ vendor.companyemail }}</td>
                        <td>{{ vendor.customerphone }}</td>
                        <td>{{ vendor.primarContact }}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div id="menu3" class="tab-pane fade">
                <h3>payments</h3>
                <div class="table-responsive">
                  <div class="topnav-right">
                    <button
                      type="button"
                      class="btn btn-success"
                      style="float: right"
                    >
                      New
                    </button>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th cope="col">ID</th>
                        <th cope="col">Name</th>
                        <th cope="col">Email</th>
                        <th cope="col">phone</th>
                        <th cope="col">Primary Contact</th>
                        <th cope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="vendor in vendors" :key="vendor.id">
                        <td>{{ vendor.id }}</td>
                        <td>{{ vendor.companyname }}</td>
                        <td>{{ vendor.companyemail }}</td>
                        <td>{{ vendor.customerphone }}</td>
                        <td>{{ vendor.primarContact }}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div class="container mt-6">
          <!-- The Modal -->
          <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">New Customer</h4>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="customername">Company Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="customername"
                          v-model="addcustomers.companyname"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail4"
                          v-model="addcustomers.companyemail"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="vendorphone">Phone Contact</label>
                        <input
                          type="tel"
                          class="form-control"
                          id="vendorphone"
                          v-model="addcustomers.customerphone"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="vendorphone">Primary Contact</label>
                        <input
                          type="tel"
                          class="form-control"
                          id="vendorphone"
                          v-model="addcustomers.primaryContact"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        v-model="addcustomers.address"
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputAddress2">customertype</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                        v-model="addcustomers.customertype"
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputAddress2">webstite</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                        v-model="addcustomers.website"
                      />
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputCity"
                        />
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
                  </form>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
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
  </div>
</template>

<script>
import financeNav from "@/components/FinanceNav";
// import financeNav from "@/components/FinanceNav";
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
  components: {
    financeNav,
  },
  mounted() {
    //API Call
    axios.get("https://www.testjsonapi.com/users/").then((res) => {
      this.users = res.data;
      $("#example").DataTable();
    });
    axios
      .get("http://127.0.0.1:8000/finance/api/v1/Vendor/", {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      })
      .then((res) => {
        this.vendors = res.data.results;
        $("#vendors").DataTable();
        // console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://127.0.0.1:8000/finance/api/v1/Customer/", {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      })
      .then((res) => {
        this.customers = res.data.results;
        $("#customers").DataTable();
        // console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
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
    addRow: function () {
      this.addvendors.push({
        id: "",
        companyname: "",
        companyemail: "",
        companyphone: "",
        primarContact: "",
      });
    },
    deleteRow(index) {
      this.addvendors.splice(index, 1);
    },
    showpopover() {
      var myPopover = this.active;
      myPopover.show();
    },
    addrecords() {
      axios
        .post(`http://127.0.0.1:8000/finance/api/v1/Customer/`, {
          // names: '',
          // User_id: this.user_id,
          companyname: this.addcustomers.companyname,
          companyemail: this.addcustomers.companyemail,
          customerphone: this.addcustomers.customerphone,
          primaryContact: this.addcustomers.primaryContact,
          address: this.addcustomers.address,
          customertype: this.addcustomers.customertype,
          website: this.addcustomers.website,
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
    // linkClass(idx) {
    // 	if (this.tabIndex === idx) {
    // 		return ["bg-primary", "text-light"];
    // 	} else {
    // 		return ["bg-light", "text-info"];
    // 	}
    // },
  },

  data: function () {
    return {
      tabIndex: 0,
      modal: false,
      services: [
        { title: "Make payment", link: "#" },
        { title: "Make payment", link: "#" },
      ],
      users: [],
      vendors: [],
      customers: [],
      addcustomers: [
        {
          id: "",
          companyname: "",
          companyemail: "",
          customerphone: "",
          primaryContact: "",
          address: "",
          customertype: "",
          primarContact: "",
          website: "www.test.com",
        },
      ],
      isOpen: false, // Variable if the menu is oppen or closed
    };
  },
};
</script>

<style>
.dropbtn {
  background-color: rgb(241, 239, 239);
  color: black;
  padding: 13px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>

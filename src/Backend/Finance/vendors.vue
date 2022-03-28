@
<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <finance-nav></finance-nav>
      </div>

      <div class="col-8">
        <h3>Vendor Listing</h3>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#addvendor"
        >
          New
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="addvendor"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
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
                      <label for="inputPassword4">Company Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword4"
                        v-model="addvendors.companyname"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        v-model="addvendors.companyemail"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Phone</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                      v-model="addvendors.companyphone"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputAddress2">Primary Contact Person</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                      placeholder="John Esuchi"
                      v-model="addvendors.primaryContact"
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addrecords"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table table-hover" id="vendors">
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
        <!-- <div class="col">
				Column
			</div> -->
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
  name: "App",
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
        console.log(res.data.results);
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
        .post(`http://127.0.0.1:8000/finance/api/v1/Vendor/`, {
          // names: '',
          // User_id: this.user_id,
          companyname: this.addvendors.companyname,
          companyemail: this.addvendors.companyemail,
          companyphone: this.addvendors.companyphone,
          primaryContact: this.addvendors.primaryContact,
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
  },

  data: function () {
    return {
      modal: false,
      services: [
        { title: "Make payment", link: "#" },
        { title: "Make payment", link: "#" },
      ],
      users: [],
      vendors: [],
      addvendors: [
        {
          id: "",
          companyname: "",
          companyemail: "",
          companyphone: "",
          primaryContact: "",
        },
      ],
      isOpen: false, // Variable if the menu is open or closed
    };
  },
};
</script>

<style></style>

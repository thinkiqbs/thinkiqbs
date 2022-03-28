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
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">User Roles</h4>
                    <div class="topnav-right">
                      <button
                        class="btn btn-success"
                        style="float: right"
                        type="button"
                        data-toggle="modal"
                        data-target="#Newroles"
                      >
                        New
                      </button>
                    </div>

                    <div class="card-body">
                      <table class="table table-hover walla">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Role Name</th>
                            <th scope="col">Role Description</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in tableData"
                            :key="item.id"
                            @click="change(item)"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            <th scope="row">{{ id }}</th>
                            <td>{{ item.role_name }}</td>
                            <td>{{ item.role_description }}</td>
                            <td>
                              <button
                                type="button"
                                @click="change(item)"
                                class="btn btn-success"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                Edit
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
                <form class="modal-content">
                  <div class="container">
                    <h2>New Member</h2>
                    <p>
                      Please fill in this form to create an new member account.
                    </p>
                    <hr />

                    <label for="psw"><b>First Name</b></label>
                    <input
                      type="text"
                      v-model="role.role_name"
                      class="form-control"
                      id="userrole"
                    />

                    <label for="lastname"><b>Last Name</b></label>
                    <textarea
                      type="text"
                      v-model="role.role_description"
                      class="form-control"
                      id="inputEmail4"
                    />

                    <p>
                      By creating an account the user has agreed to become a
                      member
                      <!-- <a href="#" style="color:dodgerblue">Terms & Privacy</a>. -->
                    </p>
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
          id="Newroles"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add New Role</h5>
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
                <form class="modal-content">
                  <div class="container">
                    <h2>New Member</h2>
                    <p>Please fill in this form to create an new role.</p>
                    <hr />

                    <label for="psw"><b>Role</b></label>
                    <input
                      type="text"
                      v-model="addroles.role_name"
                      class="form-control"
                      id="userrole"
                    />

                    <label for="role_description"><b>Description</b></label>
                    <textarea
                      type="text"
                      v-model="addroles.role_description"
                      class="form-control"
                      id="role_description"
                    />

                    <p>
                      Roles will be used to assign a group of permisions to
                      logged in users.
                      <!-- <a href="#" style="color:dodgerblue">Terms & Privacy</a>. -->
                    </p>
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

//Bootstrap and jQuery libraries
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
  name:"UserRole",
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
      addroles: [
        {
          id: "",
          role_name: "",
          role_description: "",
        },
      ],
    };
  },

  computed: {},

  mounted() {},

  created() {
    this.getProducts();
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
        .post(`http://127.0.0.1:8000/members/api/v1/Role/`, {
          // names: '',
          // User_id: this.user_id,
          role_name: this.addroles.role_name,
          role_description: this.addroles.role_description,
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
    getProducts(Exception) {
      axios
        .get("/members/api/v1/Role/")
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

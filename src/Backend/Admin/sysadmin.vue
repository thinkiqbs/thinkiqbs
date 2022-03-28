@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <!-- <div class="col-1">
				<SysAdminNav></SysAdminNav>
			</div> -->

      <div class="col-10">
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="table-responsive">
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
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Role Name</th>
                  <th scope="col">Role Description</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in roles"
                  @click="change(item)"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  :key="item.id"
                >
                  <th scope="row">{{ id }}</th>
                  <td>{{ item.role_name }}</td>
                  <td>{{ item.role_description }}</td>

                  <button
                    type="button"
                    @click="change(item)"
                    class="btn btn-success"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Edit
                  </button>
                </tr>
              </tbody>
            </table>
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
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">role name</label>
                      <input
                        type="text"
                        v-model="addroles.role_name"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">role Description</label>
                      <input
                        type="text"
                        v-model="addroles.role_description"
                        class="form-control"
                        id="inputEmail4"
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

export default {
  name:"System-Adamin",
  components: {},
  data() {
    return {
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

  computed: {
    loant() {
      return this.loan_type;
    },
    apiurls() {
      return (
        "http://127.0.0.1:8000/sys_config/api/v1/LoanType/" + this.loan_type
      );
    },
    loantypex() {
      return this.loantype.loan_type;
    },
    modalvalues() {
      return "";
    },
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/members/api/v1/Role/", {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      })
      .then((res) => {
        this.roles = res.data.results;
        // $("#loantypes").DataTable();
        // console.log(res.data.results);
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
        .post(`http://127.0.0.1:8000/members/api/v1/Role/`, {
          // names: '',
          // User_id: this.user_id,
          role_name: this.addroles.role_name,
          role_description: this.addroles.role_description,
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
};
</script>

<style></style>

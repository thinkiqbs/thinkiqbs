<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top"
    id="mainNav"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/" v-if="token == null">
        <img
          src="../assets/images/logo/IQSACCO_Logo_Blue-PhotoRoom.png"
          width="250"
          height="250"
          alt="Sacco ERP Software"
          class="logo-display img-fluid"
        />
      </a>

      <a class="navbar-brand" href="#" v-if="token != null">
        <img class="logo-display img-fluid" :src="this.logo" :title="orgname" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="#features" v-if="token == null"
              >Features</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="#download" v-if="token == null"
              >Download</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="/contacts" v-if="token == null"
              >CONTACTS</a
            >
          </li>
        </ul>

        <button
          class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
          @click="gotologin"
          v-if="token == null"
        >
          <span class="d-flex align-items-center">
            <b class="bold">Sign in </b>
            &nbsp; &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-in-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
              />
              <path
                fill-rule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
          </span>
        </button>

        <button
          class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
          @click="gotoSignup"
          v-if="token == null"
        >
          <span class="d-flex align-items-center">
            <i class="bi-chat-text-fill me-2"></i>
            <span class="small">or Sign up</span>
          </span>
        </button>
        <div v-if="token != null">
          <div v-if="this.organizationdetails == 2 && this.memberdetails == 2">
            <button
              class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
              @click="gotocreateorganization"
            >
              <span class="d-flex align-items-center">
                <i class="bi-chat-text-fill me-2"></i>
                <span class="small">Start A New SACCO</span>
              </span>
            </button>
          </div>
        </div>

        <div v-if="token != null" class="dropdown d-inline-block ms-6">
          <button
            type="button"
            class="btn btn-sm btn-alt-secondary d-flex align-items-center"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span v-if="token != null" class="d-none d-sm-inline-block ms-2">{{
              this.orgname
            }}</span>
            <i
              class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
            ></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
            aria-labelledby="page-header-user-dropdown"
            style="width: 300px"
          >
            <div
              class="p-3 text-center bg-body-light border-bottom rounded-top"
            >
              <img
                class="img-avatar img-avatar48 img-avatar-thumb"
                src="assets/media/avatars/avatar10.jpg"
                alt=""
              />
              <p class="mt-2 mb-0 fw-medium" v-if="this.allmembers != null">
                {{ this.memberfirstname }} {{ this.memberlastname }}
              </p>
              <p class="mb-0 text-muted fs-sm fw-medium">
                Member #ACC No:{{ this.memberaccounname }}
              </p>
              <p class="mb-0 text-muted fs-sm fw-medium">
                Company ID: {{ this.usercompanyid }}
              </p>

              <a class="nav-link me-lg-3" href="/Profile" v-if="token != null"
                >My Account</a
              >
            </div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="#"
                @click="gotoDashboard"
                v-if="this.organizationdetails == 1"
              >
                <span class="fs-sm fw-medium">Back Office</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="#"
                @click="gotoDashboard"
                v-if="this.organizationdetails == 1"
              >
                <span class="fs-sm fw-medium">Front Office</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>

              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/Customize"
              >
                <span class="fs-sm fw-medium">Settings</span>
              </a>
            </div>
            <div role="separator" class="dropdown-divider m-0"></div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="op_auth_lock.html"
              >
                <span class="fs-sm fw-medium">Lock Account</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="#"
                @click="logout"
                v-if="token != null"
              >
                <span class="fs-sm fw-medium">Log Out</span>
              </a>
            </div>
          </div>
        </div>

        <div v-if="token != null" class="dropdown d-inline-block ms-2">
          <button
            type="button"
            class="btn btn-sm btn-alt-secondary"
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-fw fa-bell"></i>
            <span class="text-primary">•</span>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 border-0 fs-sm"
            aria-labelledby="page-header-notifications-dropdown"
            style="width: 400px"
          >
            <div
              class="p-2 bg-body-light border-bottom text-center rounded-top"
            >
              <h5 class="dropdown-header text-uppercase">Notifications</h5>
            </div>
            <ul class="nav-items mb-0">
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-check-circle text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      You have a
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                      new member Pending Approval
                    </div>
                    <span class="fw-medium text-muted">15 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-plus-circle text-primary"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                      new loan applications
                    </div>
                    <span class="fw-medium text-muted">22 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-times-circle text-danger"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                      Pending Cheques
                    </div>
                    <span class="fw-medium text-muted">26 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-plus-circle text-primary"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                      Un-Reconciles Bank Transactions
                    </div>
                    <span class="fw-medium text-muted">33 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-user-plus text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      You have
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                      new Pending Receipts Allocations
                    </div>
                    <span class="fw-medium text-muted">41 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-check-circle text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                      Journals Have not been posted to GL
                    </div>
                    <span class="fw-medium text-muted">42 min ago</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-check-circle text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                      Expenses Have not been posted to GL
                    </div>
                    <span class="fw-medium text-muted">42 min ago</span>
                  </div>
                </a>
              </li>
            </ul>
            <div class="p-2 border-top text-center">
              <a class="d-inline-block fw-medium" href="javascript:void(0)">
                <i class="fa fa-fw fa-arrow-down me-1 opacity-50"></i> Load
                More..
              </a>
            </div>
          </div>
        </div>
        <div v-if="token != null" class="dropdown d-inline-block ms-2">
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
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
              />
              <path
                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
              />
            </svg>
            <span class="d-none d-sm-inline-block ms-2"></span>
            <i
              class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
            ></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
            aria-labelledby="page-header-user-dropdown"
            style="width: 300px"
          >
            <div
              class="p-3 text-center bg-body-light border-bottom rounded-top"
            >
              <img
                class="img-avatar img-avatar48 img-avatar-thumb"
                src="assets/media/avatars/avatar10.jpg"
                alt=""
              />
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control form-control-alt"
                  placeholder="Search.."
                  id="page-header-search-input2"
                  name="page-header-search-input2"
                  autocomplete="off"
                />
                <span class="input-group-text border-0">
                  <i class="fa fa-fw fa-search"></i>
                </span>
              </div>
            </div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/organization"
              >
                <span class="fs-sm fw-medium">Organization</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/imports"
              >
                <span class="fs-sm fw-medium">Import Data</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/users"
              >
                <span class="fs-sm fw-medium">Users</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/coa"
              >
                <span class="fs-sm fw-medium">Chart of Accounts </span>
                <span class="badge rounded-pill bg-primary ms-2">1</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/savingstype"
              >
                <span class="fs-sm fw-medium">Saving Products</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/loantype"
              >
                <span class="fs-sm fw-medium">Loan Products</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/banksetup"
              >
                <span class="fs-sm fw-medium">Banks Setup</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/employers"
              >
                <span class="fs-sm fw-medium">Employers</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/approvers"
              >
                <span class="fs-sm fw-medium">Approvers</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/users"
              >
                <span class="fs-sm fw-medium">Users & Staff</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
            </div>
            <div role="separator" class="dropdown-divider m-0"></div>
          </div>
        </div>
        <div v-if="token != null" class="dropdown d-inline-block ms-2">
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
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
              />
            </svg>
            <span class="d-none d-sm-inline-block ms-2"></span>
            <i
              class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
            ></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
            aria-labelledby="page-header-user-dropdown"
            style="width: 300px"
          >
            <div
              class="p-3 text-center bg-body-light border-bottom rounded-top"
            >
              <img
                class="img-avatar img-avatar48 img-avatar-thumb"
                src="assets/media/avatars/avatar10.jpg"
                alt=""
              />
              <p class="mt-2 mb-0 fw-medium">John Smith</p>
              <p class="mb-0 text-muted fs-sm fw-medium">Web Developer</p>
            </div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="be_pages_generic_inbox.html"
              >
                <span class="fs-sm fw-medium">Inbox</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="be_pages_generic_profile.html"
              >
                <span class="fs-sm fw-medium">Profile</span>
                <span class="badge rounded-pill bg-primary ms-2">1</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="javascript:void(0)"
              >
                <span class="fs-sm fw-medium">Settings</span>
              </a>
            </div>
            <div role="separator" class="dropdown-divider m-0"></div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="op_auth_lock.html"
              >
                <span class="fs-sm fw-medium">Lock Account</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="op_auth_signin.html"
              >
                <span class="fs-sm fw-medium">Log Out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import AuthService from "@/auth/AuthService";

import { getAPI } from "@/axios-api.js";
import { mapGetters, mapActions } from "vuex";

// const auth = new AuthService();
// import { mapState } from "vuex";
// import Profile from '../views/Profile';
export default {
  name: "Nav-bar",
  components: {},
  data() {
    return {
      is_staff: "",
      logo: "",
      admincheck: [],
      is_member: 0,
      membercount: "",
      authenticated: false,
      message: "",
    };
  },
  created() {
    // this.countadmin();
    this.becomememberhide();
    this.fetchOrg();
    this.fetchMembers();
  },
  mounted() {
    this.admincheck = this.allorg;

    getAPI
      .get("sys_config/api/v1/logoFile/", {
        params: {
          company_id: this.companyid3,
        },
      })
      .then((response) => {
        this.logoinfo = response.data.results;
        this.logo = this.logoinfo[0].logo;
      });
  },

  methods: {
    ...mapActions(["fetchMembers", "fetchOrg", "fetchUserinfo"]),

    gotocreateorganization() {
      this.$router.push("createorganization");
    },

    gotoDashboard() {
      window.location.replace("/DashBoards");
    },

    gotologin() {
      window.location.replace("/login");
    },
    gotoSignup() {
      window.location.replace("/register");
    },

    countadmin: function () {
      if (this.organizationdetails === 1) {
        this.$router.push("/members");
        //disable button id checkadmin
      } else {
        document.getElementById("checkadmin").hidden = true;
        this.message = "You are not an admin";
      }
    },
    becomememberhide: function () {
      // async function to cont member from memberDetails
      getAPI
        .get("/members/api/v1/MemberDetails/", {
          params: { email: this.email },
        })
        .then((res) => {
          this.membercount = res.data.count;
        });
      if (this.membercount === 1) {
        this.message = "you are already a member";
      } else {
        this.message = "";
      }
    },
    logout: function () {
      this.$store.dispatch("userLogout").then(() => {
        window.localStorage.clear();

        window.location.replace("/");
      });
    },
  },
  computed: {
    // computed: mapState(["token"]),
    // ...mapState(["org1"]),
    ...mapGetters(["allMembers", "allOrg", "allUser"]),
    token() {
      return this.$store.state.accessToken;
    },
    email() {
      return this.$store.state.email;
    },
    username() {
      return this.$store.state.username;
    },

    id() {
      return this.$store.state.id;
    },
    first_name() {
      if(this.$store.state.first_name != null){

        return this.$store.state.first_name;
      }
      else {
        return null
      }
    },
    last_name() {
      if(this.$store.state.first_name != null){

        return this.$store.state.last_name;
      }
      else {
        return null
      }
      
    },

    memberfirstname() {
      if(this.allMembers.length > 0) {

        return this.$store.getters.allMembers.filter(
          (item) => item.email == this.email
        )[0].first_name;
      }
      else {
        return null
      }
    },

    memberlastname() {
      if( this .allMembers.length > 0 ) {

        return this.$store.getters.allMembers.filter(
          (item) => item.email == this.email
        )[0].last_name;
      }
      else {

        return null
      }
    },

    memberaccounname() {
      if(this.allorg.length > 0 ){
        return null
      }
      else {
        if(this.allmember.length>0){

        return this.$store.getters.allMembers.filter(
          (item) => item.email == this.email
        )[0].account_no;
      }
      else {
        return null 
      }

      }
      
    },

    usercompanyid() {
      if(this.allmember.length > 0) {

        return this.$store.getters.allMembers.filter(
          (item) => item.email == this.email
        )[0].company_id;
      }
      else {
        return null
      }
    },
    staffcheck() {
      return this.$store.state.is_staff;
    },
    memberdetails() {
      var x = 1;
      var y = 2;
      if (this.allmember != "") {
        return x;
      } else {
        return y;
      }
    },
    organizationdetails() {
      var x = 1;
      var y = 2;
      if (this.allorg != "") {
        return x;
      } else {
        return y;
      }
    },

    orgname() {
      if (this.allorg.length > 0) {
        return this.allorg[0].organization_name;
      } else {
        return null;
      }
    },

    allorg() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      );
    },
    allmember() {
      return this.$store.getters.allMembers.filter(
        (item) => item.email == this.email
      );
    },
  },
};
</script>

<style>
.navbar {
  min-height: 20px;
}
.navbar-brand {
  padding: 0 20px;
  height: 20px;
  line-height: 60px;
}

.navbar-toggle {
  /* (80px - button height 34px) / 2 = 23px */
  margin-top: 23px;
  padding: 9px 10px !important;
}

@media (min-width: 768px) {
  .navbar-nav > li > a {
    /* (80px - line-height of 27px) / 2 = 26.5px */
    padding-top: 10.5px;
    padding-bottom: 10.5px;
    line-height: 10px;
  }
}
</style>
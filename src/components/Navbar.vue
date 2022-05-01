<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-1"
    id="mainNav"
  >
    <div class="container">
     
      <a class="navbar-brand" href="#" v-if="token == null">
        <img
          src="../assets/images/logo/IQSACCO_Logo_Blue-PhotoRoom.png"
          width="100"
          height="100"
          alt="Sacco ERP Software"
          class="navbar-brand-img"

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
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="/Profile" v-if="token != null"
              >My Account</a
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
          @click="logout"
          v-if="token != null"
        >
          <span class="d-flex align-items-center">
            <i class="bi-chat-text-fill me-2"></i>
            <span class="small">Log Out</span>
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
          <div v-if="this.organizationdetails == 1">
            <button
              class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
              @click="gotoDashboard"
            >
              <span class="d-flex align-items-center">
                <i class="bi-chat-text-fill me-2"></i>
                <span class="small">Back Office</span>
              </span>
            </button>
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
      return this.$store.state.first_name;
    },
    last_name() {
      return this.$store.state.last_name;
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
      
      return this.allorg[0].org_name;
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
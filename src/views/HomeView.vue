@<template>
  <body id="page-top">
    <!-- Navigation-->

    <!-- Mashead header-->
    <header class="masthead">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <!-- Mashead text and app badges-->
            <div class="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 class="display-1 lh-1 mb-3">Manage Your SACCO online.</h1>
              <p class="lead fw-normal text-muted mb-5">
                It's simple to manage your SACCO's day-to-day operations with
                IQSACCO. The dashboards allow you to monitor your SACCO
                activities in real time, and reporting for your annual audit has
                never been easier.
              </p>
              
              <div v-if="token != null && this.memberdetails == 2">
                <button
                  class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
                  data-bs-toggle="modal"
                  data-bs-target="#JoinSaccoModal"
                >
                  <span class="d-flex align-items-center">
                    <i class="bi-chat-text-fill me-2"></i>
                    <span class="small">Join a Sacco</span>
                  </span>
                </button>
              </div>
              <div class="d-flex flex-column flex-lg-row align-items-center">
                <a class="me-lg-3 mb-4 mb-lg-0" href="#!"
                  ><img
                    class="app-badge"
                    src="../assets/img/google-play-badge.svg"
                    alt="..."
                  />
                </a>
                <a class="me-lg-3 mb-4 mb-lg-0" href="#!"
                  ><img
                    class="app-badge"
                    src="../assets/img/app-store-badge.svg"
                    alt="..."
                /></a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- Masthead device mockup feature-->
            <div class="masthead-device-mockup">
              <div class="device-wrapper">
                <div
                  class="device"
                  data-device="iPhoneX"
                  data-orientation="portrait"
                  data-color="black"
                >
                  <div class="screen bg-black">
                    <!-- PUT CONTENTS HERE:-->
                    <!-- * * This can be a video, image, or just about anything else.-->
                    <!-- * * Set the max width of your media to 100% and the height to-->
                    <!-- * * 100% like the demo example below.-->
                    <video
                      muted="muted"
                      autoplay=""
                      loop=""
                      style="max-width: 100%; height: 100%"
                    >
                      <source
                        src="../assets/img/demo-screen.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Quote/testimonial aside-->
    <aside class="text-center bg-gradient-primary-to-secondary">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-xl-8">
            <div class="h2 fs-1 text-white mb-4">
              "Simple, low-cost software that allows you to manage your business
              from anywhere. and rapidly expand your membership You have the
              option of customizing it to your liking."
            </div>
            <img
              src="../assets/images/logo/IQSACCO_Logo_Blue-PhotoRoom.png"
              alt="..."
              style="height: 3rem"
            />
          </div>
        </div>
      </div>
    </aside>
    <!-- App features section-->
    <section id="features">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
            <div class="container-fluid px-5">
              <div class="row gx-5">
                <div class="col-md-6 mb-5">
                  <!-- Feature item-->
                  <div class="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                      />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <h3 class="font-alt">Member Management</h3>
                    <p class="text-muted mb-0">
                      Several methods for onboarding new members, with the
                      ability to manage them all from a single location!!
                    </p>
                  </div>
                </div>
                <div class="col-md-6 mb-5">
                  <!-- Feature item-->
                  <div class="text-center">
                    <i
                      class="bi-camera icon-feature text-gradient d-block mb-3"
                    ></i>
                    <h3 class="font-alt">Loan Managment</h3>
                    <p class="text-muted mb-0">
                      Loan Approval Automation Powered by an Intelligent
                      Decision Engine!
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                  <!-- Feature item-->
                  <div class="text-center">
                    <i
                      class="bi-gift icon-feature text-gradient d-block mb-3"
                    ></i>
                    <h3 class="font-alt">Finace & Accounting</h3>
                    <p class="text-muted mb-0">
                      Real-time reporting with checks and balances, and all
                      major financial statements are ready for printing.
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <!-- Feature item-->
                  <div class="text-center">
                    <i
                      class="bi-patch-check icon-feature text-gradient d-block mb-3"
                    ></i>
                    <h3 class="font-alt">Bank Operations</h3>
                    <p class="text-muted mb-0">
                      With a REST API that is ready for integration with any
                      third-party organization systems!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 order-lg-0">
            <!-- Features section device mockup-->
            <div class="features-device-mockup">
              <div class="device-wrapper">
                <div
                  class="device"
                  data-device="iPhoneX"
                  data-orientation="portrait"
                  data-color="black"
                >
                  <div class="screen bg-black">
                    <!-- PUT CONTENTS HERE:-->
                    <!-- * * This can be a video, image, or just about anything else.-->
                    <!-- * * Set the max width of your media to 100% and the height to-->
                    <!-- * * 100% like the demo example below.-->
                    <video
                      muted="muted"
                      autoplay=""
                      loop=""
                      style="max-width: 100%; height: 100%"
                    >
                      <source
                        src="../assets/img/demo-screen.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Basic features section-->
    <section class="bg-light">
      <div class="container px-5">
        <div
          class="row gx-5 align-items-center justify-content-center justify-content-lg-between"
        >
          <div class="col-12 col-lg-5">
            <h2 class="display-4 lh-1 mb-4">New world of possibilities</h2>
            <p class="lead fw-normal text-muted mb-5 mb-lg-0">
              We created IQSACCO to assist you in running your business more
              efficiently. We are here to assist you with all of your day-to-day
              business requirements. Allow us to assist you in growing your
              SACCO.
            </p>
          </div>
          <div class="col-sm-8 col-md-6">
            <div class="px-5 px-sm-0">
              <img
                class="img-fluid rounded-circle"
                src="../assets/images/cta/iqsacco-CTA.jpeg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Call to action section-->
    <section class="cta">
      <div class="cta-content">
        <div class="container px-5">
          <h2 class="text-white display-1 lh-1 mb-4">
            Stop waiting.
            <br />
            Start Growing.
          </h2>
          <a
            class="btn btn-outline-light py-3 px-4 rounded-pill"
            href="https://startbootstrap.com/theme/new-age"
            target="_blank"
            >Contact US Now</a
          >
        </div>
      </div>
    </section>
    <!-- App badge section-->
    <section class="bg-gradient-primary-to-secondary" id="download">
      <div class="container px-5">
        <h2 class="text-center text-white font-alt mb-4">Coming Soon!</h2>
        <div
          class="d-flex flex-column flex-lg-row align-items-center justify-content-center"
        >
          <a class="me-lg-3 mb-4 mb-lg-0" href="#!"
            ><img
              class="app-badge"
              src="../assets/img/google-play-badge.svg"
              alt="..."
          /></a>
          <a href="#!"
            ><img
              class="app-badge"
              src="../assets/img/app-store-badge.svg"
              alt="..."
          /></a>
        </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="bg-black text-center py-5">
      <div class="container px-5">
        <div class="text-white-50 small">
          <div class="mb-2">
            &copy; #ThinkIQDigital 2022. All Rights Reserved.
          </div>
          <a href="#!">Privacy</a>
          <span class="mx-1">&middot;</span>
          <a href="#!">Terms</a>
          <span class="mx-1">&middot;</span>
          <a href="#!">FAQ</a>
        </div>
      </div>
    </footer>
    <!-- Register Modal-->

    <!-- Login Modal-->
    <div
      class="modal fade"
      id="LoginModal"
      tabindex="-1"
      aria-labelledby="feedbackModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-gradient-primary-to-secondary p-4">
            <h5 class="modal-title font-alt text-white" id="feedbackModalLabel">
              Access Your Account.
            </h5>
            <button
              class="btn-close btn-close-white"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body border-0 p-4">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form v-on:submit.prevent>
              <div class="form-group basic">
                <div class="input-wrapper">
                  <label class="label" for="email1">ID Number </label>
                  <input
                    type="text"
                    class="form-control"
                    id="idnumber"
                    placeholder="Your National ID "
                    v-model="username"
                  />
                  <i class="clear-input"
                    ><ion-icon name="close-circle"></ion-icon
                  ></i>
                </div>
              </div>
              <!-- <div class="form-group basic">
                    <div class="input-wrapper">
                        <label class="label" for="email1">E-mail</label>
                        <input type="email" class="form-control" id="email1" placeholder="Your e-mail" v-model="email">
                        <i class="clear-input"><ion-icon name="close-circle"></ion-icon></i>
                    </div>
                </div> -->

              <div class="form-group basic">
                <div class="input-wrapper">
                  <label class="label" for="password1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password1"
                    placeholder="Your password"
                    v-model="password"
                  />
                  <i class="clear-input"
                    ><ion-icon name="close-circle"></ion-icon
                  ></i>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-block btn-lg"
                @click="login"
              >
                Log in
              </button>

              <div class="form-links mt-2">
                <div>
                  <a @click="gotoregister" class="text-muted">Register</a>
                  <!-- <router-link to="/register">Register Now</router-link> -->
                </div>
                {{ access }}
                <div>
                  <a href="app-forgot-password.html" class="text-muted"
                    >Forgot Password?</a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// import AuthService from "@/auth/AuthService";
import axios from "axios";

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
      selectedcompanyid: "",
      is_staff: "",
      admincheck: [],
      is_member: 0,
      membercount: "",
      authenticated: false,
      message: "",
      username: "",
      password: "",
      email: "",
      incorrectAuth: false,
      autherror: "",
      county: [],
      companynumber: "",
      addmembers: [
        {
          first_name: "",
          last_name: "",
          phone_no: "",
          national_id: "",
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
    // this.countadmin();
    this.becomememberhide();
    this.fetchOrg();
    this.fetchMembers();
    this.fetchEmployerinfo();
  },
  mounted() {
    this.admincheck = this.allorg;
    getAPI.get("/sys_config/api/v1/county/").then((res) => {
      this.county = res.data.results;
      // $("#example").DataTable();
    });
  },

  methods: {
    ...mapActions([
      "fetchMembers",
      "fetchOrg",
      "fetchUserinfo",
      "fetchEmployerinfo",
    ]),

    gotocreateorganization() {
      this.$router.push("createorganization");
    },

    gotoregister() {
      window.location.replace("/register");
    },
    gotoDashboard() {
      window.location.replace("/DashBoards");
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
    addnewmeber() {
      Promise.all([
        getAPI
          .post(`/members/api/v1/MemberDetails/`, {
            // names: '',
            // User_id: this.user_id,
            first_name: this.addmembers.first_name,
            last_name: this.addmembers.last_name,
            phone_no: this.addmembers.phone_no,
            national_id: this.usernamestate,
            bankname: this.addmembers.bankname,
            email: this.emailstate,
            username: this.usernamestate,
            date_of_birth: this.addmembers.date_of_birth,
            Employer: this.selectedemployer,
            Department: this.addmembers.Department,
            County: this.selectedcounty,
            Address: this.addmembers.Address,
            organizationprofile: this.orgprofileid,
            company_id: this.companyid3,
            password1: "qxcv2010A",
            password2: "qxcv2010A",
          })
          .then((response) => {
            response;

            // this.$router.go(); // Refreshes page
            this.$swal({
              title: "Success",
              text: "Member Has Been Added",
              icon: "success",
              button: "OK",
            });
          })
          .catch((error) => {
            this.$swal({
              title: "Error",
              text: JSON.stringify(error.response.data),
              icon: "error",
              button: "OK",
            });
            // alert(JSON.stringify(error.response.data));
          }),
      ]);
    },
    logout: function () {
      this.$store.dispatch("userLogout").then(() => {
        window.localStorage.clear();

        window.location.replace("/");
      });
    },

    login() {
      this.$store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.fetchOrg();
          this.fetchMembers();
          this.$swal({
            title: "Success",
            text: "You have successfully logged in",
            icon: "success",
            button: "OK",
          });
          //Dismiss Modal
          // ("#loginModal").modal("hide");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          (this.autherror = err), (this.incorrectAuth = true);
        });
    },

    forgotmyPassword() {
      axios
        .post("/dj-rest-auth/password/reset/ ", {
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          this.$swal({
            title: "Success!",
            text: "Check your email for a password reset link",
            icon: "success",
            button: "OK",
          });
          this.$router.push({ name: "login" });
        });
    },
  },
  computed: {
    // computed: mapState(["token"]),

    ...mapGetters(["allMembers", "allOrg", "allUser", "allEmployer"]),
    token() {
      return this.$store.state.accessToken;
    },
    employers() {
      return this.$store.getters.allEmployer.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    emailstate() {
      return this.$store.state.email;
    },
    usernamestate() {
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
      if (this.allmember != null) {
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

    organizations() {
      return this.$store.getters.allOrg;
    },
    allorg() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.emailstate
      );
    },
    allmember() {
      return this.$store.getters.allMembers.filter(
        (item) => item.email == this.emailstate
      );
    },
  },
};
</script>

<style>
@import "../assets/css/style.css";
</style>
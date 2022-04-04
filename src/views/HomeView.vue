@<template>
  <body id="page-top">
    <!-- Navigation-->
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div class="container px-5">
        <a class="navbar-brand fw-bold" href="#page-top">Start Bootstrap</a>
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
              <a class="nav-link me-lg-3" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-lg-3" href="#download">Download</a>
            </li>
          </ul>

          <div v-if="token == null">
            <button
              class="btn btn-success rounded-pill px-3 mb-2 mb-lg-0"
              data-bs-toggle="modal"
              data-bs-target="#LoginModal"
            >
              <span class="d-flex align-items-center">
                <i class="bi-chat-text-fill me-2"></i>
                <span class="small">Sign in</span>
              </span>
            </button>
          </div>

          <div>
            <button
              class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
              data-bs-toggle="modal"
              data-bs-target="#feedbackModal"
            >
              <span class="d-flex align-items-center">
                <i class="bi-chat-text-fill me-2"></i>
                <span class="small">Join a Sacco</span>
              </span>
            </button>
          </div>

          <div>
            <button
              class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
              data-bs-toggle="modal"
              data-bs-target="#feedbackModal"
            >
              <span class="d-flex align-items-center">
                <i class="bi-chat-text-fill me-2"></i>
                <span class="small">Start A New SACCO</span>
              </span>
            </button>
          </div>
          <div v-if="token != null">
            <button
              class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
              @click="logout"
            >
              <span class="d-flex align-items-center">
                <i class="bi-chat-text-fill me-2"></i>
                <span class="small">Log Out</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <!-- Mashead header-->
    <header class="masthead">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <!-- Mashead text and app badges-->
            <div class="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 class="display-1 lh-1 mb-3">
                Showcase your app beautifully.
              </h1>
              <p class="lead fw-normal text-muted mb-5">
                Launch your mobile app landing page faster with this free, open
                source theme from Start Bootstrap!
              </p>
              <div class="d-flex flex-column flex-lg-row align-items-center">
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
          </div>
          <div class="col-lg-6">
            <!-- Masthead device mockup feature-->
            <div class="masthead-device-mockup">
              <svg
                class="circle"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="circleGradient"
                    gradientTransform="rotate(45)"
                  >
                    <stop class="gradient-start-color" offset="0%"></stop>
                    <stop class="gradient-end-color" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50"></circle></svg
              ><svg
                class="shape-1 d-none d-sm-block"
                viewBox="0 0 240.83 240.83"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(120.42 -49.88) rotate(45)"
                ></rect>
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(-49.88 120.42) rotate(-45)"
                ></rect></svg
              ><svg
                class="shape-2 d-none d-sm-block"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
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
                        src="assets/img/demo-screen.mp4"
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
              "An intuitive solution to a common problem that we all face,
              wrapped up in a single app!"
            </div>
            <img src="assets/img/tnw-logo.svg" alt="..." style="height: 3rem" />
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
                    <i
                      class="bi-phone icon-feature text-gradient d-block mb-3"
                    ></i>
                    <h3 class="font-alt">Device Mockups</h3>
                    <p class="text-muted mb-0">
                      Ready to use HTML/CSS device mockups, no Photoshop
                      required!
                    </p>
                  </div>
                </div>
                <div class="col-md-6 mb-5">
                  <!-- Feature item-->
                  <div class="text-center">
                    <i
                      class="bi-camera icon-feature text-gradient d-block mb-3"
                    ></i>
                    <h3 class="font-alt">Flexible Use</h3>
                    <p class="text-muted mb-0">
                      Put an image, video, animation, or anything else in the
                      screen!
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
                    <h3 class="font-alt">Free to Use</h3>
                    <p class="text-muted mb-0">
                      As always, this theme is free to download and use for any
                      purpose!
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <!-- Feature item-->
                  <div class="text-center">
                    <i
                      class="bi-patch-check icon-feature text-gradient d-block mb-3"
                    ></i>
                    <h3 class="font-alt">Open Source</h3>
                    <p class="text-muted mb-0">
                      Since this theme is MIT licensed, you can use it
                      commercially!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 order-lg-0">
            <!-- Features section device mockup-->
            <div class="features-device-mockup">
              <svg
                class="circle"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="circleGradient"
                    gradientTransform="rotate(45)"
                  >
                    <stop class="gradient-start-color" offset="0%"></stop>
                    <stop class="gradient-end-color" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50"></circle></svg
              ><svg
                class="shape-1 d-none d-sm-block"
                viewBox="0 0 240.83 240.83"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(120.42 -49.88) rotate(45)"
                ></rect>
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(-49.88 120.42) rotate(-45)"
                ></rect></svg
              ><svg
                class="shape-2 d-none d-sm-block"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
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
                        src="assets/img/demo-screen.mp4"
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
            <h2 class="display-4 lh-1 mb-4">Enter a new age of web design</h2>
            <p class="lead fw-normal text-muted mb-5 mb-lg-0">
              This section is perfect for featuring some information about your
              application, why it was built, the problem it solves, or anything
              else! There's plenty of space for text here, so don't worry about
              writing too much.
            </p>
          </div>
          <div class="col-sm-8 col-md-6">
            <div class="px-5 px-sm-0">
              <img
                class="img-fluid rounded-circle"
                src="https://source.unsplash.com/u8Jn2rzYIps/900x900"
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
            Start building.
          </h2>
          <a
            class="btn btn-outline-light py-3 px-4 rounded-pill"
            href="https://startbootstrap.com/theme/new-age"
            target="_blank"
            >Download for free</a
          >
        </div>
      </div>
    </section>
    <!-- App badge section-->
    <section class="bg-gradient-primary-to-secondary" id="download">
      <div class="container px-5">
        <h2 class="text-center text-white font-alt mb-4">Get the app now!</h2>
        <div
          class="d-flex flex-column flex-lg-row align-items-center justify-content-center"
        >
          <a class="me-lg-3 mb-4 mb-lg-0" href="#!"
            ><img
              class="app-badge"
              src="assets/img/google-play-badge.svg"
              alt="..."
          /></a>
          <a href="#!"
            ><img
              class="app-badge"
              src="assets/img/app-store-badge.svg"
              alt="..."
          /></a>
        </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="bg-black text-center py-5">
      <div class="container px-5">
        <div class="text-white-50 small">
          <div class="mb-2">&copy; Your Website 2022. All Rights Reserved.</div>
          <a href="#!">Privacy</a>
          <span class="mx-1">&middot;</span>
          <a href="#!">Terms</a>
          <span class="mx-1">&middot;</span>
          <a href="#!">FAQ</a>
        </div>
      </div>
    </footer>
    <!-- Feedback Modal-->
    <div
      class="modal fade"
      id="feedbackModal"
      tabindex="-1"
      aria-labelledby="feedbackModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-gradient-primary-to-secondary p-4">
            <h5 class="modal-title font-alt text-white" id="feedbackModalLabel">
              Send feedback
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
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label for="name">Full name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                />
                <label for="email">Email address</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                />
                <label for="phone">Phone number</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
              <!-- Message input-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style="height: 10rem"
                  data-sb-validations="required"
                ></textarea>
                <label for="message">Message</label>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms"
                    >https://startbootstrap.com/solution/contact-forms</a
                  >
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              <!-- Submit Button-->
              <div class="d-grid">
                <button
                  class="btn btn-primary rounded-pill btn-lg disabled"
                  id="submitButton"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
                  <router-link to="/register">Register Now</router-link>
                </div>
                {{ access }}
                <div>
                  <a href="app-forgot-password.html" class="text-muted"
                    >Forgot Password?</a
                  >
                </div>
              </div>

              <div class="form-button-group"></div>
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
import { mapGetters, mapActions, mapState } from "vuex";

// const auth = new AuthService();
// import { mapState } from "vuex";
// import Profile from '../views/Profile';
export default {
  name: "Nav-bar",
  components: {},
  data() {
    return {
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
    };
  },
  created() {
    // this.countadmin();
    this.becomememberhide();
    this.fetchOrg();
  },
  mounted() {
    this.admincheck = this.allorg;
  },

  methods: {
    ...mapActions(["fetchMembers", "fetchOrg", "fetchUserinfo"]),

    gotocreateorganization() {
      this.$router.push("createorganization");
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
      this.$router.go("/MemberDetails");
      this.$store.dispatch("userLogout").then(() => {
        window.localStorage.clear();

        window.location.reload();
      });
    },

    login() {
      this.$store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$swal({
            title: "Success",
            text: "You have successfully logged in",
            icon: "success",
            button: "OK",
          });

          this.$router.push("/profile");
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
    ...mapState(["org1"]),
    ...mapGetters(["allMembers", "allOrg", "allUser"]),
    token() {
      return this.$store.state.accessToken;
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
/*! CSS Used from: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css */
[class^="bi-"]::before {
  display: inline-block;
  font-family: bootstrap-icons !important;
  font-style: normal;
  font-weight: normal !important;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: -0.125em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bi-camera::before {
  content: "\f220";
}
.bi-chat-text-fill::before {
  content: "\f266";
}
.bi-gift::before {
  content: "\f3ec";
}
.bi-list::before {
  content: "\f479";
}
.bi-patch-check::before {
  content: "\f4b6";
}
.bi-phone::before {
  content: "\f4e7";
}
/*! CSS Used from: https://startbootstrap.github.io/startbootstrap-new-age/css/styles.css */
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
h5,
h3,
h2,
.h2,
h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: "Newsreader", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 600;
  line-height: 1.2;
}
h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1 {
    font-size: 2.5rem;
  }
}
h2,
.h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2,
  .h2 {
    font-size: 2rem;
  }
}
h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3 {
    font-size: 1.75rem;
  }
}
h5 {
  font-size: 1.25rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
ul {
  padding-left: 2rem;
}
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
.small {
  font-size: 0.875em;
}
a {
  color: #2937f0;
  text-decoration: underline;
}
a:hover {
  color: #212cc0;
}
img,
svg {
  vertical-align: middle;
}
label {
  display: inline-block;
}
button {
  border-radius: 0;
}
button:focus:not(:focus-visible) {
  outline: 0;
}
input,
button,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button {
  text-transform: none;
}
button,
[type="button"],
[type="submit"] {
  -webkit-appearance: button;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
textarea {
  resize: vertical;
}
iframe {
  border: 0;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}
.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.container,
.container-fluid {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.col-12 {
  flex: 0 0 auto;
  width: 100%;
}
.gx-5 {
  --bs-gutter-x: 3rem;
}
@media (min-width: 576px) {
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}
@media (min-width: 768px) {
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}
@media (min-width: 992px) {
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}
@media (min-width: 1200px) {
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #949bf8;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(41, 55, 240, 0.25);
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled {
  background-color: #e9ecef;
  opacity: 1;
}
textarea.form-control {
  min-height: calc(1.5em + 0.75rem + 2px);
}
.form-floating {
  position: relative;
}
.form-floating > .form-control {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.form-floating > .form-control:-ms-input-placeholder {
  color: transparent;
}
.form-floating > .form-control::placeholder {
  color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus,
.form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}
.btn {
  display: inline-block;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
}
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(41, 55, 240, 0.25);
}
.btn:disabled,
.btn.disabled {
  pointer-events: none;
  opacity: 0.65;
}
.btn-primary {
  color: #fff;
  background-color: #2937f0;
  border-color: #2937f0;
}
.btn-primary:hover {
  color: #fff;
  background-color: #232fcc;
  border-color: #212cc0;
}
.btn-primary:focus {
  color: #fff;
  background-color: #232fcc;
  border-color: #212cc0;
  box-shadow: 0 0 0 0.25rem rgba(73, 85, 242, 0.5);
}
.btn-primary:active {
  color: #fff;
  background-color: #212cc0;
  border-color: #1f29b4;
}
.btn-primary:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(73, 85, 242, 0.5);
}
.btn-primary:disabled,
.btn-primary.disabled {
  color: #fff;
  background-color: #2937f0;
  border-color: #2937f0;
}
.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:hover {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light:active {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light:disabled {
  color: #f8f9fa;
  background-color: transparent;
}
.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}
.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}
.collapse:not(.show) {
  display: none;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #2937f0;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover,
.nav-link:focus {
  color: #212cc0;
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar > .container {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}
.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.25rem;
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}
.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}
.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(41, 55, 240, 0.25);
  opacity: 1;
}
.btn-close:disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  opacity: 0.25;
}
.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}
.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.d-block {
  display: block !important;
}
.d-grid {
  display: grid !important;
}
.d-flex {
  display: flex !important;
}
.d-none {
  display: none !important;
}
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.border-0 {
  border: 0 !important;
}
.flex-column {
  flex-direction: column !important;
}
.justify-content-center {
  justify-content: center !important;
}
.align-items-center {
  align-items: center !important;
}
.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}
.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.me-2 {
  margin-right: 0.5rem !important;
}
.me-4 {
  margin-right: 1.5rem !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.mb-2 {
  margin-bottom: 0.5rem !important;
}
.mb-3 {
  margin-bottom: 1rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.mb-5 {
  margin-bottom: 3rem !important;
}
.ms-auto {
  margin-left: auto !important;
}
.p-4 {
  padding: 1.5rem !important;
}
.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}
.fw-normal {
  font-weight: 500 !important;
}
.fw-bold {
  font-weight: 700 !important;
}
.fw-bolder {
  font-weight: bolder !important;
}
.lh-1 {
  line-height: 1 !important;
}
.text-center {
  text-align: center !important;
}
.text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}
.text-white {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}
.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}
.text-white-50 {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}
.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
.bg-black {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}
.rounded-circle {
  border-radius: 50% !important;
}
.rounded-pill {
  border-radius: 50rem !important;
}
@media (min-width: 576px) {
  .d-sm-block {
    display: block !important;
  }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
@media (min-width: 768px) {
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
}
@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .order-lg-0 {
    order: 0 !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .me-lg-3 {
    margin-right: 1rem !important;
  }
  .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .text-lg-start {
    text-align: left !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }
}
.bg-black {
  background-color: #000 !important;
}
.bg-gradient-primary-to-secondary {
  background: linear-gradient(45deg, #2937f0, #9f1ae2) !important;
}
.font-alt {
  font-family: "Kanit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji" !important;
}
.text-gradient {
  background: -webkit-linear-gradient(#2937f0, #9f1ae2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
aside,
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.app-badge {
  height: 3rem;
}
#mainNav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;
}
#mainNav .navbar-brand {
  font-family: "Kanit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
#mainNav .navbar-brand:hover,
#mainNav .navbar-brand:active {
  color: #2937f0;
}
#mainNav .navbar-toggler {
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  color: #212529;
}
#mainNav .navbar-nav .nav-item .nav-link {
  color: #212529;
}
#mainNav .navbar-nav .nav-item .nav-link:hover {
  color: #6c757d;
}
.device-wrapper {
  max-width: 300px;
  width: 100%;
}
.device {
  position: relative;
  background-size: cover;
}
.device::after {
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.device .screen {
  position: absolute;
  background-size: cover;
  pointer-events: auto;
}
.device[data-device="iPhoneX"][data-orientation="portrait"][data-color="black"] {
  padding-bottom: 198.898071625%;
}
.device[data-device="iPhoneX"][data-orientation="portrait"][data-color="black"]
  .screen {
  top: 3.1855955679%;
  left: 6.8870523416%;
  width: 86.2258953168%;
  height: 93.6288088643%;
}
.device[data-device="iPhoneX"][data-orientation="portrait"][data-color="black"]::after {
  content: "";
  background-image: url("https://startbootstrap.github.io/startbootstrap-new-age/assets/img/portrait_black.png");
}
section.cta {
  position: relative;
  padding: 15rem 0;
  background-image: url("https://source.unsplash.com/5g41N3uRPf8/1500x800");
  background-position: center;
  background-size: cover;
}
section.cta .cta-content {
  position: relative;
  z-index: 1;
}
section.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.icon-feature {
  font-size: 4rem;
}
.features-device-mockup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.features-device-mockup .circle {
  position: absolute;
  left: 0;
  fill: url(https://startbootstrap.github.io/startbootstrap-new-age/css/styles.css#circleGradient);
  width: 70%;
  display: none;
}
.features-device-mockup .circle .gradient-start-color {
  stop-color: #2937f0;
}
.features-device-mockup .circle .gradient-end-color {
  stop-color: #9f1ae2;
}
.features-device-mockup .shape-1 {
  position: absolute;
  height: 1rem;
  width: 1rem;
  transform: rotate(10deg);
  fill: #2937f0;
  top: 15%;
  right: 10%;
}
.features-device-mockup .shape-2 {
  position: absolute;
  height: 0.75rem;
  width: 0.75rem;
  fill: #2937f0;
  bottom: 15%;
  left: 10%;
}
.features-device-mockup .device-wrapper {
  max-width: 10rem;
}
@media (min-width: 576px) {
  .features-device-mockup .circle {
    width: 70%;
    display: block;
    left: auto;
  }
  .features-device-mockup .device-wrapper {
    max-width: 12.5rem;
  }
}
@media (min-width: 768px) {
  .features-device-mockup .circle {
    width: 60%;
    left: auto;
  }
  .features-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 992px) {
  .features-device-mockup .circle {
    width: 90%;
    left: -25%;
  }
  .features-device-mockup .shape-1 {
    top: 5%;
    right: -15%;
  }
  .features-device-mockup .shape-2 {
    bottom: 10%;
    left: -10%;
  }
  .features-device-mockup .device-wrapper {
    max-width: 15rem;
    margin-left: auto;
  }
}
@media (min-width: 1200px) {
  .features-device-mockup .circle {
    width: 75%;
    left: 0;
  }
  .features-device-mockup .shape-2 {
    bottom: 15%;
    left: 10%;
  }
  .features-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1400px) {
  .features-device-mockup .circle {
    width: 80%;
    left: 0;
  }
  .features-device-mockup .device-wrapper {
    max-width: 17rem;
  }
}
footer a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
}
footer a:hover,
footer a:active,
footer a:focus {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: underline;
}
.masthead {
  background-color: #f8f9fa;
  padding-top: 9.5rem;
  padding-bottom: 5rem;
}
.masthead .masthead-device-mockup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.masthead .masthead-device-mockup .circle {
  position: absolute;
  fill: url(https://startbootstrap.github.io/startbootstrap-new-age/css/styles.css#circleGradient);
  width: 70%;
  display: none;
}
.masthead .masthead-device-mockup .circle .gradient-start-color {
  stop-color: #2937f0;
}
.masthead .masthead-device-mockup .circle .gradient-end-color {
  stop-color: #9f1ae2;
}
.masthead .masthead-device-mockup .shape-1 {
  position: absolute;
  height: 1rem;
  width: 1rem;
  transform: rotate(-10deg);
  fill: #2937f0;
  bottom: 15%;
  left: 10%;
}
.masthead .masthead-device-mockup .shape-2 {
  position: absolute;
  height: 0.75rem;
  width: 0.75rem;
  fill: #2937f0;
  top: 15%;
  right: 10%;
}
.masthead .masthead-device-mockup .device-wrapper {
  max-width: 10rem;
}
@media (min-width: 576px) {
  .masthead .masthead-device-mockup .circle {
    width: 70%;
    display: block;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 12.5rem;
  }
}
@media (min-width: 768px) {
  .masthead .masthead-device-mockup .circle {
    width: 60%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 992px) {
  .masthead .masthead-device-mockup .circle {
    width: 90%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1200px) {
  .masthead .masthead-device-mockup .circle {
    width: 75%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1400px) {
  .masthead .masthead-device-mockup .circle {
    width: 70%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 17rem;
  }
}
/*! CSS Used from: Embedded */
.d-none {
  display: none;
}
.invalid-feedback {
  display: none;
}
.btn.disabled {
  pointer-events: none;
  opacity: 0.65;
}
/*! CSS Used fontfaces */
@font-face {
  font-family: "bootstrap-icons";
  src: url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/fonts/bootstrap-icons.woff2?856008caa5eb66df68595e734e59580d")
      format("woff2"),
    url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/fonts/bootstrap-icons.woff?856008caa5eb66df68595e734e59580d")
      format("woff");
}
@font-face {
  font-family: "Newsreader";
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/newsreader/v7/cY9kfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLP4obnf7fTXglsMz2SNZIFjKShVCjzSZ-Mg.woff)
    format("woff");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Newsreader";
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/newsreader/v7/cY9kfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLP4obnf7fTXglsMz2SNZJFjKShVCjzSZ-Mg.woff)
    format("woff");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Newsreader";
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/newsreader/v7/cY9kfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLP4obnf7fTXglsMz2SNZHFjKShVCjzSY.woff)
    format("woff");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Newsreader";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/newsreader/v7/cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438wpojwBOZDHDWwgUii5SY.woff)
    format("woff");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Newsreader";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/newsreader/v7/cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438wpojwBeZDHDWwgUii5SY.woff)
    format("woff");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Newsreader";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/newsreader/v7/cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438wpojwC-ZDHDWwgUii.woff)
    format("woff");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Kanit";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKX-Go6G5tXcraQKxaAcI5DPFpLGw.woff2)
    format("woff2");
  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
}
@font-face {
  font-family: "Kanit";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKX-Go6G5tXcraQKw2AcI5DPFpLGw.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Kanit";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKX-Go6G5tXcraQKwyAcI5DPFpLGw.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Kanit";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKX-Go6G5tXcraQKwKAcI5DPFo.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKZ-Go6G5tXcraBGwCKd6xBDFs.woff2)
    format("woff2");
  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
}
@font-face {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKZ-Go6G5tXcraaGwCKd6xBDFs.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKZ-Go6G5tXcrabGwCKd6xBDFs.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKZ-Go6G5tXcraVGwCKd6xB.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>
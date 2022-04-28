<template>
  <div class="container-fluid">
    <header id="page-header">
      <div class="content-header">
        <div class="d-flex align-items-center">
          <a class="navbar-brand" href="#" v-if="token == null">
            <img
              src="../assets/images/logo/IQSACCO_Logo_Blue-PhotoRoom.png"
              width="150"
              height="150"
              alt="Sacco ERP Software"
            />
          </a>
          <a class="navbar-brand" href="#" v-if="token != null">
            <img
              class="logo-display img-fluid"
              :src="this.logo"
              :title="orgname"
            />
          </a>

          <form
            class="d-none d-md-inline-block"
            action="be_pages_generic_search.html"
            method="POST"
          >
            <div class="input-group input-group-sm">
              <input
                type="text"
                class="form-control form-control-alt"
                placeholder="Search.."
                id="page-header-search-input2"
                name="page-header-search-input2"
              />
              <span class="input-group-text border-0">
                <i class="bi bi-search"></i>
              </span>
            </div>
          </form>
        </div>
        
        
        

        <div class="d-flex align-items-right">
          <li class="nav-item">
            <a
              class="nav-link"
              href="/"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <span class="nav-link-text" v-if="token == null">HOME</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/contacts" v-if="token == null">CONTACTS</a>
          </li>

          <li class="nav-item" v-if="token == null">
            <a class="nav-link me-lg-3" href="#features">Features</a>
          </li>
          <li class="nav-item" v-if="token == null">
            <a class="nav-link me-lg-3" href="#download">Download</a>
          </li>
        </div>
        <div v-if="token != null && this.memberdetails == 1">
          <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li class="nav-item">
              <a class="nav-link me-lg-3" href="/Profile">My Account</a>
            </li>
          </ul>
        </div>

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

        <div v-if="token != null">
          <div v-if="this.organizationdetails == 2 && this.memberdetails == 2">
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
        <div>
          <div v-if="token == null">
            <button
              class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
              @click="gotologin"
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
              <img
                class="rounded-circle"
                src="../assets/images/faces/1.jpg"
                alt="Header Avatar"
                style="width: 21px"
              />
              <span class="d-none d-sm-inline-block ms-2">{{
                this.email
              }}</span>
              <i class="bi bi-chevron-double-down"></i>
            </button>
            <div
              class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
              aria-labelledby="page-header-user-dropdown"
              style=""
            >
              <div
                class="p-3 text-center bg-body-light border-bottom rounded-top"
              >
                <a href="profile">
                  <img
                    class="img-avatar img-avatar48 img-avatar-thumb"
                    src="../assets/images/faces/5.jpg"
                    alt=""
                    href="/profile"
                  />
                </a>
                <p class="mt-2 mb-0 fw-medium">{{ this.email }}</p>
                <p class="mb-0 text-muted fs-sm fw-medium">My Account</p>
              </div>
              <div class="p-2" v-if="this.memberdetails == 2">
                <a
                  id="becomemember"
                  class="dropdown-item d-flex align-items-center justify-content-between"
                  @click="becomememberhide"
                >
                  Become a Member
                </a>
              </div>
              <div v-if="this.organizationdetails == 1" class="p-2">
                <a
                  class="dropdown-item d-flex align-items-center justify-content-between"
                  id="checkadmin"
                  @click="countadmin"
                >
                  Backoffice
                </a>

                <a
                  class="dropdown-item d-flex align-items-center justify-content-between"
                  id="checkadmin"
                  @click="countadmin"
                >
                  Front Office
                </a>
              </div>
              <div
                v-else-if="
                  this.organizationdetails === 2 && this.memberdetails == 2
                "
                class="p-2"
              >
                <a
                  class="dropdown-item d-flex align-items-center justify-content-between"
                  id="checkadmin"
                  @click="gotocreateorganization"
                  bs-data-toggle="modal"
                  bs-data-target="#CreateOrganizations"
                >
                  Create Organization
                </a>
              </div>

              <div v-else>
                <a
                  id="becomemember"
                  class="nav-link dropdown-toggle"
                  hidden
                  @click="becomememberhide"
                >
                  Become a Member
                </a>
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
                <li class="dropdown-item" v-if="token == null">
                  <router-link :to="{ name: 'login' }"
                    ><span class="fs-sm fw-medium">Log In</span></router-link
                  >
                </li>

                <li class="dropdown-item" v-if="token != null">
                  <a
                    class="dropdown-item d-flex align-items-center justify-content-between"
                    @click="logout"
                    >Log Out</a
                  >
                </li>
              </div>
            </div>
          </div>
          <div class="dropdown d-inline-block ms-2">
            <button
              type="button"
              class="btn btn-sm btn-alt-secondary"
              id="page-header-notifications-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="bi bi-bell-fill"></i>
              <span class="text-primary">•</span>
            </button>
            <div
              class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 border-0 fs-sm"
              aria-labelledby="page-header-notifications-dropdown"
              style=""
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
                      <div class="fw-semibold">You have a new follower</div>
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
                      <div class="fw-semibold">1 new sale, keep it up</div>
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
                        Update failed, restart server
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
                      <div class="fw-semibold">2 new sales, keep it up</div>
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
                      <div class="fw-semibold">You have a new subscriber</div>
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
                      <div class="fw-semibold">You have a new follower</div>
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
          <button
            type="button"
            class="btn btn-sm btn-alt-secondary ms-2"
            data-toggle="layout"
            data-action="side_overlay_toggle"
          >
            <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
          </button>
        </div>
      </div>

      <div id="page-header-loader" class="overlay-header bg-body-extra-light">
        <div class="content-header">
          <div class="w-100 text-center">
            <i class="fa fa-fw fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </div>
    </header>
    

    <!-- App Header -->
    <!-- <div class="appHeader bg-primary text-light">
				<div class="left">
					<a
						href="#"
						class="headerButton"
						data-toggle="modal"
						data-target="#sidebarPanel"
					>
						<ion-icon name="menu-outline"></ion-icon>
					</a>
				</div>
				<div class="pageTitle">
					<img src="assets/img/logo.png" alt="logo" class="logo" />
				</div>
				<div class="right">
					<a href="app-notifications.html" class="headerButton">
						<ion-icon class="icon" name="notifications-outline"></ion-icon>
						<span class="badge badge-danger">4</span>
					</a>
					<a href="app-settings.html" class="headerButton">
						<img
							src="assets/img/sample/avatar/avatar1.jpg"
							alt="image"
							class="imaged w32"
						/>
						<span class="badge badge-danger">6</span>
					</a>
				</div>
			</div> -->
    <!-- * App Header -->
    <!-- <nav class="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
			<div class="container">
				<a class="navbar-brand" href="#">
					<img
						src="https://i1.wp.com/thinkiqbs.com/wp-content/uploads/2021/01/cropped-Logo-150-by-150-1.png?fit=150%2C61&ssl=1"
						alt="Logo"
					/>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="ti-menu"></span>
				</button>



				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item dropdown">
							<div
								class="collapse navbar-collapse w-responsive"
								v-if="token != null"
							>
								<div v-if="this.organizationdetails === 1" class="col-md-4">
									<a
										class="nav-link dropdown-toggle"
										id="checkadmin"
										@click="countadmin"
									>
										<i class="ti-layout-media-right-alt"></i>Back office
									</a>
								</div>
								<div
									v-else-if="
										this.organizationdetails === 2 && this.memberdetails == 2
									"
									class="col-md-4"
								>
									<a
										class="nav-link dropdown-toggle"
										id="checkadmin"
										@click="gotocreateorganization"
										bs-data-toggle="modal"
										bs-data-target="#CreateOrganizations"
									>
										<i class="ti-layout-media-right-alt"></i>Create Organization
									</a>
								</div>
								&nbsp;

								<div class="col-md-5 responsive" v-if="token != null">
									<div v-if="this.memberdetails == 2">
										<a
											id="becomemember"
											class="nav-link dropdown-toggle"
											@click="becomememberhide"
										>
											<i class="ti-layout-tab-v"></i>Become a Member
										</a>
									</div>
									<div v-else>
										<a
											id="becomemember"
											class="nav-link dropdown-toggle"
											hidden
											@click="becomememberhide"
										>
											Become a Member
										</a>
									</div>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<router-link
								class="nav-link dropdown-toggle"
								:to="{ name: 'home' }"
								><span class="fs-sm fw-medium">Home</span></router-link
							>


						</li>

						<li class="nav-item @@contact">
							<a class="nav-link" href="/contacts">Contact</a>
						</li>

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
									<img
										class="rounded-circle"
										src="../assets/images/faces/1.jpg"
										alt="Header Avatar"
										style="width: 21px;"
									/>
									<span class="d-none d-sm-inline-block ms-2">{{
										this.first_name
									}}</span>
									<i
										class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
									></i>
								</button>
								<div
									class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
									aria-labelledby="page-header-user-dropdown"
									style=""
								>
									<div
										class="p-3 text-center bg-body-light border-bottom rounded-top"
									>
										<a
											v-if="token != null"
											class="dropdown-item d-flex align-items-center justify-content-between"
											href="/Profile"
										>
											<img
												class="rounded-circle"
												src="../assets/images/faces/1.jpg"
												alt="Header Avatar"
												style="width: 51px;"
											/>
										</a>

										<p v-if="token != null" class="mt-2 mb-0 fw-medium">
											<small>{{ this.email }}</small>
										</p>
										<p class="mb-0 text-muted fs-sm fw-medium"></p>
									</div>
									<div class="p-2">
										<a
											v-if="token != null"
											class="dropdown-item d-flex align-items-center justify-content-between"
											href="#"
										>
											<span class="fs-sm fw-medium">Loans</span>
											<span class="badge rounded-pill bg-primary ms-2">3</span>
										</a>
										<a
											v-if="token != null"
											class="dropdown-item d-flex align-items-center justify-content-between"
											href="#"
										>
											<span class="fs-sm fw-medium">Deposits</span>
											<span class="badge rounded-pill bg-primary ms-2">1</span>
										</a>
										<a
											v-if="token != null"
											class="dropdown-item d-flex align-items-center justify-content-between"
											href="javascript:void(0)"
										>
											<span class="fs-sm fw-medium">Guarantors</span>
										</a>
									</div>
									<div role="separator" class="dropdown-divider m-0"></div>
									<div class="p-2">
										<li class="dropdown-item" v-if="token == null">
											<router-link :to="{ name: 'login' }"
												><span class="fs-sm fw-medium"
													>Log In</span
												></router-link
											>
										</li>

										<li class="dropdown-item" v-if="token != null">

											<a
												class="dropdown-item d-flex align-items-center justify-content-between"
												@click="logout"
												>Log Out</a
											>
										</li>
									</div>

								</div>
							</div>
							<div class="dropdown d-inline-block ms-1">
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
									class="dropdown-menu dropdown-menu-xxl dropdown-menu-end p-0 border-0 fs-sm"
									aria-labelledby="page-header-notifications-dropdown"
								>
									<div
										class="p-2 bg-body-light border-bottom text-center rounded-top"
									>
										<h5 class="dropdown-header text-uppercase">
											Notifications
										</h5>
									</div>
									<ul class="nav-items mb-5"></ul>
									<div class="p-2 border-top text-center">
										<a
											class="d-inline-block fw-medium"
											href="javascript:void(0)"
										>
											<i class="fa fa-fw fa-arrow-down me-1 opacity-50"></i>
											Load More..
										</a>
									</div>
								</div>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</nav> -->
  </div>
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
      this.$router.push("login");
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
      return this.org1;
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

<style scoped>
/*! CSS Used from: https://demo.pixelcave.com/oneui/assets/css/oneui.min-5.2.css */
*,
::after,
::before {
  box-sizing: border-box;
}
h5 {
  margin-top: 0;
  margin-bottom: 1.375rem;
  font-weight: 600;
  line-height: 1.25;
}
h5 {
  font-size: 1.125rem;
}
p {
  margin-top: 0;
  margin-bottom: 1.875rem;
}
ul {
  padding-left: 2rem;
}
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
a {
  color: #4c78dd;
  text-decoration: none;
}
a:hover {
  color: #1f47a4;
  text-decoration: none;
}
img {
  vertical-align: middle;
}
button {
  border-radius: 0;
}
button:focus:not(:focus-visible) {
  outline: 0;
}
button,
input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button {
  text-transform: none;
}
[type="button"],
button {
  -webkit-appearance: button;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #334155;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dfe3ea;
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
  color: #334155;
  background-color: #fff;
  border-color: #a6bcee;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(76, 120, 221, 0.25);
}
.form-control::-moz-placeholder {
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
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #334155;
  text-align: center;
  white-space: nowrap;
  background-color: #ebeef2;
  border: 1px solid #dfe3ea;
  border-radius: 0.25rem;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-text {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.input-group:not(.has-validation)
  > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group
  > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn {
  display: inline-block;
  font-weight: 600;
  line-height: 1.5;
  color: #334155;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
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
  color: #334155;
}
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(76, 120, 221, 0.25);
}
.btn:disabled {
  pointer-events: none;
  opacity: 0.65;
}
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.dropdown {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 11.25rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #334155;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d2d9e2;
  border-radius: 0.25rem;
}
.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #dfe3ea;
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  clear: both;
  font-weight: 400;
  color: #334155;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:focus,
.dropdown-item:hover {
  color: #334155;
  background-color: #ebeef2;
}
.dropdown-item:active {
  color: #334155;
  text-decoration: none;
  background-color: #dde2e9;
}
.dropdown-item:disabled {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}
.dropdown-menu.show {
  display: block;
}
.dropdown-header {
  display: block;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}
.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badge:empty {
  display: none;
}
.opacity-50 {
  opacity: 0.5 !important;
}
.d-inline-block {
  display: inline-block !important;
}
.d-flex {
  display: flex !important;
}
.d-none {
  display: none !important;
}
.border-0 {
  border: 0 !important;
}
.border-top {
  border-top: 1px solid #dfe3ea !important;
}
.border-bottom {
  border-bottom: 1px solid #dfe3ea !important;
}
.w-100 {
  width: 100% !important;
}
.flex-grow-1 {
  flex-grow: 1 !important;
}
.flex-shrink-0 {
  flex-shrink: 0 !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.align-items-center {
  align-items: center !important;
}
.m-0 {
  margin: 0 !important;
}
.mt-1 {
  margin-top: 0.25rem !important;
}
.mt-2 {
  margin-top: 0.5rem !important;
}
.me-1 {
  margin-right: 0.25rem !important;
}
.me-2 {
  margin-right: 0.5rem !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.ms-1 {
  margin-left: 0.25rem !important;
}
.ms-2 {
  margin-left: 0.5rem !important;
}
.ms-3 {
  margin-left: 1rem !important;
}
.p-0 {
  padding: 0 !important;
}
.p-2 {
  padding: 0.5rem !important;
}
.p-3 {
  padding: 1rem !important;
}
.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.pe-2 {
  padding-right: 0.5rem !important;
}
.fs-sm {
  font-size: 0.875rem !important;
}
.fw-medium {
  font-weight: 500 !important;
}
.fw-semibold {
  font-weight: 600 !important;
}
.text-center {
  text-align: center !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
.text-success {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}
.text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}
.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}
.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}
.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(
    var(--bs-primary-rgb),
    var(--bs-bg-opacity)
  ) !important;
}
.rounded-circle {
  border-radius: 50% !important;
}
.rounded-pill {
  border-radius: 50rem !important;
}
.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}
@media (min-width: 576px) {
  .d-sm-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 768px) {
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-none {
    display: none !important;
  }
}
@media (min-width: 992px) {
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-none {
    display: none !important;
  }
}
a {
  transition: color 0.12s ease-out;
}
p {
  line-height: 1.6;
}
.text-uppercase {
  letter-spacing: 0.0625em;
}
.form-control {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.form-control.form-control-alt {
  border-color: #ebeef2;
  background-color: #ebeef2;
  transition: none;
}
.form-control.form-control-alt:focus {
  border-color: #dde2e9;
  background-color: #dde2e9;
  box-shadow: none;
}
.btn-alt-secondary {
  color: #2f3c4e;
  background-color: #ebeef2;
  border-color: #ebeef2;
}
.btn-alt-secondary:hover {
  color: #283342;
  background-color: #d4d6da;
  border-color: #d4d6da;
}
.btn-alt-secondary:focus {
  color: #283342;
  background-color: #d4d6da;
  border-color: #d4d6da;
  box-shadow: 0 0 0 0.25rem rgba(207, 211, 217, 0.5);
}
.btn-alt-secondary:active {
  color: #000;
  background-color: #eff1f5;
  border-color: #edf0f3;
}
.btn-alt-secondary:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(207, 211, 217, 0.5);
}
.btn-alt-secondary:disabled {
  color: #000;
  background-color: #ebeef2;
  border-color: #ebeef2;
}
.btn-alt-danger {
  color: #841717;
  background-color: #f6c9c9;
  border-color: #f6c9c9;
}
.btn-alt-danger:hover {
  color: #580f0f;
  background-color: #ee9393;
  border-color: #ee9393;
}
.btn-alt-danger:focus {
  color: #580f0f;
  background-color: #ee9393;
  border-color: #ee9393;
  box-shadow: 0 0 0 0.25rem rgba(229, 174, 174, 0.5);
}
.btn-alt-danger:active {
  color: #000;
  background-color: #f8d4d4;
  border-color: #f7cece;
}
.btn-alt-danger:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(229, 174, 174, 0.5);
}
.btn-alt-danger:disabled {
  color: #000;
  background-color: #f6c9c9;
  border-color: #f6c9c9;
}
.dropdown-menu {
  box-shadow: 0 0.25rem 2rem rgba(0, 0, 0, 0.08);
}
.dropdown-menu.dropdown-menu-md {
  min-width: 200px;
}
.dropdown-menu.dropdown-menu-lg {
  min-width: 300px;
}
.form-control {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.form-control.form-control-alt {
  border-color: #ebeef2;
  background-color: #ebeef2;
  transition: none;
}
.form-control.form-control-alt:focus {
  border-color: #dde2e9;
  background-color: #dde2e9;
  box-shadow: none;
}
.nav-items {
  padding-left: 0;
  list-style: none;
}
.nav-items a:hover {
  background-color: #f6f7f9;
}
.nav-items a:active {
  background-color: #ebeef2;
}
.nav-items > li:not(:last-child) > a {
  border-bottom: 1px solid #ebeef2;
}
@media print {
  #page-header {
    display: none !important;
  }
}
#page-header {
  position: relative;
  margin: 0 auto;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
}
.overlay-header {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  transform: translateY(-100%);
  will-change: opacity;
  z-index: 1;
}
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 4rem;
}
#page-header .content-header {
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 768px) {
  #page-header .content-header {
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  }
}
#page-container > #page-header .content-header {
  max-width: 1920px;
}
@media (min-width: 1200px) {
  #page-container.main-content-narrow > #page-header .content-header {
    width: 90%;
  }
}
#page-container.page-header-fixed #page-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  min-width: 320px;
  max-width: 100%;
  width: auto;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.02);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
@media (min-width: 992px) {
  #page-container.page-header-fixed.sidebar-o #page-header {
    padding-left: 240px;
  }
  #page-container.page-header-fixed.sidebar-o #page-header .overlay-header {
    left: 240px;
  }
}
.img-avatar {
  display: inline-block !important;
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
.img-avatar.img-avatar48 {
  width: 48px;
  height: 48px;
}
.img-avatar-thumb {
  margin: 0.25rem;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.3);
}
.bg-primary {
  background-color: #4c78dd !important;
}
.bg-body-light {
  background-color: #f6f7f9 !important;
}
.bg-body-extra-light {
  background-color: #fff !important;
}
.text-primary {
  color: #4c78dd !important;
}
.text-success {
  color: #65a30d !important;
}
.text-danger {
  color: #dc2626 !important;
}
.text-muted {
  color: #6c757d !important;
}
.fa {
  font-family: var(--fa-style-family, "Font Awesome 6 Free");
  font-weight: var(--fa-style, 900);
}
.fa {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: var(--fa-display, inline-block);
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}
.fa-fw {
  text-align: center;
  width: 1.25em;
}
.fa-spin {
  -webkit-animation-name: fa-spin;
  animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
  animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
  animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
  animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(
    --fa-animation-iteration-count,
    infinite
  );
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
  animation-timing-function: var(--fa-animation-timing, linear);
}
@media (prefers-reduced-motion: reduce) {
  .fa-spin {
    -webkit-animation-delay: -1ms;
    animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
    animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
.fa-flip-horizontal {
  transform: scale(-1, 1);
}
.fa-angle-down::before {
  content: "\f107";
}
.fa-arrow-down::before {
  content: "\f063";
}
.fa-bars::before {
  content: "\f0c9";
}
.fa-bell::before {
  content: "\f0f3";
}
.fa-check-circle::before {
  content: "\f058";
}
.fa-circle-notch::before {
  content: "\f1ce";
}
.fa-plus-circle::before {
  content: "\f055";
}
.fa-times-circle::before {
  content: "\f057";
}
.fa-ellipsis-v::before {
  content: "\f142";
}
.fa-list-ul::before {
  content: "\f0ca";
}
.fa-search::before {
  content: "\f002";
}
.fa-user-plus::before {
  content: "\f234";
}
/*! CSS Used keyframes */
@-webkit-keyframes fa-spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*! CSS Used fontfaces */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>

<template>
  <div>
    <!--  -->

    <div id="main-wrapper" class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="card border-0">
            <div class="card-body p-0">
              <div class="row no-gutters">
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="mb-5">
                      <h3 class="h4 font-weight-bold text-theme">Login</h3>
                    </div>

                    <h6 class="h5 mb-0">Welcome back!</h6>
                    <p class="text-muted mt-2 mb-5">
                      Enter your email address and password to access your
                      profile.
                    </p>

                    <form v-on:submit.prevent="login">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          v-model="username"
                        />
                      </div>
                      <div class="form-group mb-5">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          v-model="password"
                        />
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox"
                          />
                          <label class="form-check-label" for="checkbox">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-theme">Login</button>

                      <a
                        class="forgot-link float-right text-primary"
                        href="#"
                        data-bs-target="#pwdModal"
                        data-bs-toggle="modal"
                        >Forgot my password</a
                      >
                      <!-- <a href="#l" class="forgot-link float-right text-primary">Forgot password?</a> -->
                    </form>
                  </div>
                </div>

                <div class="col-lg-6 d-none d-lg-inline-block">
                  <div class="account-block rounded-right">
                    <div class="overlay rounded-right"></div>
                    <div class="account-testimonial"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->

          <p class="text-muted text-center mt-3 mb-0">
            Don't have an account?
            <router-link to="/register">Sign up</router-link>
            <!-- <a href="/register" class="text-primary ml-1">register</a> -->
          </p>

          <!-- end row -->
        </div>
        <!-- end col -->
      </div>
      <!-- Row -->
    </div>

    <div class="container">
      <a href="#" data-bs-target="#pwdModal" data-bs-toggle="modal"
        >Forgot my password</a
      >
    </div>

    <!--modal-->
    <div
      id="pwdModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
            <h1 class="text-center">What's My Password?</h1>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="text-center">
                    <p>
                      If you have forgotten your password you can reset it here.
                    </p>
                    <div class="panel-body">
                      <fieldset>
                        <div class="form-group">
                          <input
                            class="form-control input-lg"
                            placeholder="E-mail Address"
                            name="email"
                            type="email"
                            v-model="email"
                          />
                        </div>
                        <button
                          class="btn btn-lg btn-primary btn-block"
                          value="Send My Password"
                          type="submit"
                          @click="forgotmyPassword"
                        >
                          Reset
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col-md-12">
              <button class="btn" data-bs-dismiss="modal" aria-hidden="true">
                Cancel
              </button>
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
  name: "LogIn",

  data() {
    return {
      username: "",
      password: "",
      email: "",
      incorrectAuth: false,
      autherror: "",
    };
  },

  created() {},
  methods: {
    login() {
      this.$store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "profile" });
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
};
</script>

<style>
body {
  margin-top: 20px;
  background: #f6f9fc;
}
.account-block {
  padding: 0;
  background-image: url("https://random.imagecdn.app/500/150");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
}
.account-block .overlay {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.account-block .account-testimonial {
  text-align: center;
  color: #fff;
  position: absolute;
  margin: 0 auto;
  padding: 0 1.75rem;
  bottom: 3rem;
  left: 0;
  right: 0;
}

.text-theme {
  color: #5369f8 !important;
}

.btn-theme {
  background-color: #5369f8;
  border-color: #5369f8;
  color: #fff;
}
</style>

<template>
  <div>
    <!--  -->

    <!--  -->

    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                  alt="login form"
                  class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form v-on:submit.prevent="submit" autocomplete="off">
                    <div class="title-text">
                      <h3>Sign Up for New Account</h3>
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder="name@example.com"
                        v-model="first_name"
                      />
                      <label for="floatingInput">First Name</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        placeholder="jonathan"
                        v-model="last_name"
                      />
                      <label for="floatingInput">Last Name</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="ID Number"
                        v-model="username"
                      />
                      <label for="floatingInput">National ID</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="username"
                        placeholder="myemail@gmail.com"
                        v-model="email"
                      />
                      <label for="floatingInput">Email</label>
                    </div>

                    <div class="form-floating mb-3">
                      <phone-mask-input
                        type="tel"
                        placeholder="254723456789"
                        name="mobilenumber"
                        autoDetectCountry
                        showFlag
                        @onValidate="onValidate"
                        wrapperClass="wrraper-example"
                        inputClass="input-example"
                        flagClass="flag-example"
                        required
                        v-model="phone_no"
                      />

                      <!-- <label for="floatingInput">Phone Number</label> -->
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="********"
                        v-model="password1"
                      />
                      <label for="floatingInput">Password</label>
                    </div>

                    <div class="form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        autocomplete="off"
                        v-model="password2"
                      />
                      <label for="floatingPassword">Confirm Password</label>
                    </div>

                    <div class="form-group">
                      <a href="">Terms and Conditions</a>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="formCheck-1"
                          v-model="agree"
                        />
                        <label class="form-check-label" for="formCheck-1">
                          I agree to the terms and conditions
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary btn-block"
                      v-if="agree"
                      @click="userRegister"
                    >
                      Register
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary btn-block"
                      v-else
                      @click="alertterms"
                    >
                      Register
                    </button>
                    <a class="small text-muted" href="#!">Forgot password?</a>
                    I already have an account?
                    <router-link
                      :to="{ name: 'login' }"
                      exact
                      class="small text-muted"
                      >click here to login
                    </router-link>
                    &nbsp;
                  </form>
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
import axios from "axios";
// import Swal from 'sweetalert2/dist/sweetalert2.js'

export default {
  name: "RegisterUser",
  data() {
    return {
      first_name: "",
      last_name: "",
      phone_no: "",
      username: "",
      email: "",
      password1: "",
      password2: "",
      incorrectAuth: false,
      agree: false,
    };
  },
  methods: {
    alertterms() {
      this.$swal("You have not accepted terms & conditions");
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
    userRegister() {
      axios
        .post("/dj-rest-auth/registration/", {
          // names: '',
          first_name: this.first_name,
          last_name: this.last_name,
          // Employer: "Org Admin",
          // phone_no: this.phone_no,
          // username: this.username,
          username: this.username,
          email: this.email,
          password1: this.password1,
          password2: this.password2,
        })
        .then((response) => {
          response;
          this.$swal("Success", "You have successfully registered", "success");
          this.$router.push({ name: "login" });
        })
        .catch((e) => {
          this.$swal(JSON.stringify(e.response.data.email[0]));

          // alert(JSON.stringify(e.response.data));
          this.errors.push(e.data);
        });
    },
  },
};
</script>

<style>
.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.logo {
  width: 25px;
  height: 100px;
  margin-top: 20px;
  margin-left: 35px;
}

.image {
  width: 180px;
  height: 280px;
}

.border-line {
  border-right: 1px solid #eeeeee;
}

.facebook {
  background-color: #3b5998;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.twitter {
  background-color: #1da1f2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.linkedin {
  background-color: #2867b2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.line {
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
}

.or {
  width: 10%;
  font-weight: bold;
}

.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #bdbdbd;
  opacity: 1;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

::-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

input,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304ffe;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1a237e;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #000;
  cursor: pointer;
}

.bg-blue {
  color: #fff;
  background-color: #1a237e;
}

@media screen and (max-width: 400px) {
  .logo {
    margin-left: 0px;
  }

  .image {
    width: 300px;
    height: 220px;
  }

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
}
</style>

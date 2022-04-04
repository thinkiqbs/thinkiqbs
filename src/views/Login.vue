<template>
  <div class="card-group container-fluid">
    <div class="card">
      <div class="card-body">
        <div class="section mt-8 text-center">
          <h1>Log in</h1>
          <h4>Fill the form to log in</h4>
        </div>
        <div class="section mt-5 mb-5 p-3">
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
    <div class="card">
      <img
        class="card-img-top"
        src="https://picsum.photos/200/200"
        alt="Card image cap"
      />
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
  computed() {
    return {
      access: this.$store.state.access,
    };
  },

  methods: {
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

<template>
  <div class="card-group container-fluid align-self-center mt-auto mb-auto">
    <div class="card">
      <div class="card-body justify-content-center mt-auto">
        <div class="section mt-8 text-center">
          <h1>Contact Us</h1>
          <h4>Kindly Please contact us via the form below</h4>
        </div>
        <div class="section mt-2 mb-5 p-3">
          <form ref="form" @submit.prevent="sendEmail">
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="user_name"
                  autocomplete="off"
                  placeholder="Enter Your Names"
                  v-model="this.first_name"
                />
              </div>
            </div>
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="email">Email Address </label>
                <input
                  type="email"
                  class="form-control"
                  id="name"
                  name="user_email"
                  autocomplete="off"
                  placeholder="Enter Your Names"
                  v-model="this.email"
                />
              </div>
            </div>
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="message">Message </label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  autocomplete="off"
                  placeholder="Enter Your Names"
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-block btn-lg"
              value="Send"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="card">
      <img
        class="card-img-top"
        src="https://picsum.photos/1200/1100/?random"
        alt="or Send an email to sauti@iqsacco.com"
      />
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "contactUs",
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_uoa0168",
          "template_zx9pkll",
          this.$refs.form,
          "16W_pZT3IC4vK0p21"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
  computed: {

    token() {
      return this.$store.state.accessToken;
    },

    email() {
      return this.$store.state.email;
    },
    username() {
      return this.$store.state.username;
    },

    password() {
      return this.$store.state.password;
    },

    first_name() {
      return this.$store.state.first_name;
    },

    last_name() {
      return this.$store.state.last_name;
    },

    companyid() {
      return this.usercompanyid;
    },
  }
};
</script>
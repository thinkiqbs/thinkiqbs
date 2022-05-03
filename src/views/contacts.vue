<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: "contactUs",
  methods: {
    sendEmail() {
      emailjs.sendForm('service_uoa0168', 'template_zx9pkll', this.$refs.form, '16W_pZT3IC4vK0p21')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>
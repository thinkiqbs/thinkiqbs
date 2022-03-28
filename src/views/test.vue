<template>
  <div>
    <div>
      <p>{{ message }}</p>
      <p>{{ message2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick () {
      this.msg = 'Hello World'
    }
  }
}
</script>

<style></style>

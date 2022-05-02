<template>
  <Navbar></Navbar>

  <div class="container-fluid mt-2">
    <error />
    <div class="">
      <router-view />
    </div>
  </div>
  <!-- <router-view/> -->
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
/*! CSS Used from: https://demo.pixelcave.com/oneui/assets/css/oneui.min-5.2.css */
*,
::after,
::before {
  box-sizing: border-box;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
.d-none {
  display: none !important;
}
.ms-2 {
  margin-left: 0.5rem !important;
}
@media (min-width: 576px) {
  .d-sm-inline-block {
    display: inline-block !important;
  }
}
</style>

/* eslint-disable vue/multi-word-component-names */ @
<template>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">
      Quickly design and customize responsive mobile-first sites with Bootstrap,
      the world’s most popular front-end open source toolkit, featuring Sass
      variables and mixins, responsive grid system, extensive prebuilt
      components, and powerful JavaScript plugins.
    </p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <button
        type="button"
        class="btn btn-primary btn-lg px-4 me-sm-3"
        @click="backend"
      >
        Go to Back office
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        @click="profile"
      >
        Access Your Profile
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile2',
  data () {
    return {
      message: 'Welcome to Your Microfinance App'
    }
  },

  methods: {
    backend () {
      this.$router.push('/members')
    },

    profile () {
      this.$router.push('/profile')
    }
  }
}
</script>

<style></style>

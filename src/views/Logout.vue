<template>
  <div class="log"></div>
</template>

<script>
export default {
  name: 'LogOut',
  created () {
    this.$store.dispatch('userLogout').then(() => {
      this.$router.push({ name: 'login' })
    })
  }
}
</script>

<style></style>

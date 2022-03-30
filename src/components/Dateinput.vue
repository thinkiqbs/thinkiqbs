<!-- your-component.vue-->
<template>
  <vue-tel-input v-model="phone" mode="international"></vue-tel-input>
</template>
<script>
  import { ref } from 'vue';
  import { VueTelInput } from 'vue-tel-input';
  import 'vue-tel-input/dist/vue-tel-input.css';

  export default {
      name: "DateIput",
    components: {
      VueTelInput,
    },

    setup() {
      const phone = ref(null);

      return {
        value,
      };
    },
  };
</script>
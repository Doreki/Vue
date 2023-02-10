<template>
  <div>
    <h3>Username: {{ username }}</h3>
    <h2>Age: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "VueActiveUser",
  props: ["username", "age"],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>

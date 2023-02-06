<template>
  <div>
    <input type="text" v-model="valueModel" />
  </div>
</template>

<script>
export default {
  name: "GitDataBindingInputText",

  data() {
    return {
      valueModel: "South Korea",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>

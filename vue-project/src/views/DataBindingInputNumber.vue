<template>
  <div>
    <input type="number" v-model.number="numberModel" />
  </div>
</template>

<script>
export default {
  name: "GitDataBindingInputText",

  data() {
    return {
      numberModel: 3,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>

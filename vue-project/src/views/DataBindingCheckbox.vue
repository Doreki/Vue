<template>
  <div>
    <label for="">
      <input
        type="checkbox"
        v-model="checked"
        true-value="yes"
        false-value="no"
      />
      {{ checked }}
    </label>
  </div>
</template>

<script>
export default {
  name: "GitDataBindingTextera",

  data() {
    return {
      checked: true
    };
  },
s
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>

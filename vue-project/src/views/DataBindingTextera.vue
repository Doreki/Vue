<template>
  <div>
    <textarea v-model="message"></textarea>
  </div>
</template>

<script>
export default {
  name: "GitDataBindingTextera",

  data() {
    return {
      message: "여러 줄을 입력할 수 있는 textarea 입니다.",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>

<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "VueCourseGoals",

  data() {
    return {
      goals: ["Finish the course", "Learn the Vue"],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>

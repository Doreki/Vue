<template>
  <div>
    <active-user :username="username" :age="age" />
    <user-data @submitData="submitData" />
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  name: "VueApp",
  components: { ActiveUser, UserData },

  data() {
    return {
      username: "",
      age: 0,
    };
  },

  mounted() {},

  methods: {
    submitData(name, age) {
      this.username = name;
      this.age = age;
    },
  },
};
</script>

<style lang="scss" scoped></style>

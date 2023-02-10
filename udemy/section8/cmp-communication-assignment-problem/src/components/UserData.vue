<template>
  <div>
    <form @submit.prevent="submitData">
      <div>
        <label>Name</label>
        <input type="text" v-model="enteredName" />
      </div>
      <div>
        <label>Age</label>
        <input type="tel" v-model="enteredAge" />
      </div>
      <div>
        <button>submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "VueUserData",

  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },

  mounted() {},

  methods: {
    submitData() {
      this.$emit("submit-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>

<style lang="scss" scoped></style>

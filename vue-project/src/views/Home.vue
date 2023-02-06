<template>
  <div class="home">
    <data-binding-input-text></data-binding-input-text>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DataBindingInputText from "./DataBindingInputText.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    DataBindingInputText,
  },
};
</script>

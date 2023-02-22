<template>
  <section class="container">
    <user-data :firstName="firstName" :lastName="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { reactive, ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
export default {
  components: {
    UserData,
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(31);

    provide('userAge', uAge);
    const user = reactive({
      name: 'Maximilian',
      age: 31,
    });

    const uName = computed(function () {
      return firstName.value + '' + lastName.value;
    });
    watch([uName, user], function (newValue, oldValue) {
      console.log(newValue[0], oldValue[1]);
    });

    function setNewAge() {
      uAge.value = 32;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      user: user,
      setAge: setNewAge,
      age: uAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
      uName,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>

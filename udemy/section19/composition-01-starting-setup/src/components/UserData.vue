<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject, onMounted } from 'vue';
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function () {
      console.log(context);
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    // constext.emit();

    onBeforeMount(function () {
      console.log(1);
    });

    return {
      userName: uName,
      age,
    };
  },
};
</script>

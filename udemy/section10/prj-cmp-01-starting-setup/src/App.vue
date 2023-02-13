<template>
  <the-header title="RememberMe"></the-header>
  <stored-resource :resources="storedResources"></stored-resource>
</template>

<script>
import TheHeader from '../../../section9/cmp-adv-01-starting-setup/src/components/layout/TheHeader.vue';
import StoredResource from './components/learning-resources/StoredResource.vue';

export default {
  name: 'VueApp',
  components: {
    StoredResource,
    TheHeader,
  },

  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official-Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The Google documentation.',
          link: 'https://google.com',
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

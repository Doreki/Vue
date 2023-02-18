import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import counterModule from './counter/index.js';
const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;

Vue.createApp({
  data() {
    return {
      num: 0,
    };
  },
  computed: {
    result() {
      if (this.num < 37) {
        return "Not there yet";
      } else if (this.num > 37) {
        return "Too much";
      }
    },
  },
  watch: {
    result(value) {
      const that = this;
      setTimeout(function () {
        that.num = 0;
      }, 5000);
    },
  },
  methods: {
    add(value) {
      this.num += value;
    },
  },
}).mount("#assignment");

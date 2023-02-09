Vue.createApp({
  data() {
    return {
      clazz: "",
      isVisible: "show",
      bg: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    change(value) {
      if (this.isVisible == "show") {
        this.isVisible = "hidden";
      } else if (this.isVisible == "hidden") {
        this.isVisible = "show";
      }
    },
    bgColor(value) {
      this.bg = value;
    },
  },
}).mount("#assignment");

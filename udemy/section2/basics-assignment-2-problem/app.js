Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    show() {
      alert("아무거나");
    },
    setName(event) {
      this.name = event.target.value;
    },
    getName(event) {
      this.confirmedName = event.target.value;
    },
  },
}).mount("#assignment");

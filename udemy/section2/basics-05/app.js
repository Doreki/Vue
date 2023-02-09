const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   }
    //   this.fullname = value + this.lastname;
    // },
    // lastname(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   }
    //   this.fullname = this.name + value;
    // },
  },
  computed: {
    fullname() {
      console.log("Running agin...");
      if (this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + this.lastname;
    },
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + "도현";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submiited!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");

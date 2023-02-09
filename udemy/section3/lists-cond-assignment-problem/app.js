Vue.createApp({
  data() {
    return {
      currentTask: "",
      tasks: [],
      isShow: true,
      btnCap: "Hide List",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.currentTask);
    },
    show() {
      this.isShow = !this.isShow;
      if (this.isShow == false) {
        this.btnCap = "Show List";
      } else {
        this.btnCap = "Hide List";
      }
    },
  },
}).mount("#assignment");

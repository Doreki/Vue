Vue.createApp({
  data() {
    return {
      name: "임도현",
      age: 28,
      imgUrl: "https://t1.daumcdn.net/cfile/tistory/990C6B365C0738381D",
    };
  },
  methods: {
    random() {
      return Math.random();
    },
  },
}).mount("#assignment");

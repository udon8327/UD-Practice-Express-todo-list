<template lang="pug">
#create-edit
  .form-area
    ud-input(v-model="form.title" placeholder="請輸入標題")
    ud-radio(v-model="form.status" :options="statusOptions" flex)
  .button-area
    ud-button(@click="toUrl('/')" plain) 取消
    ud-button(@click="submit") 儲存
</template>

<script>
export default {
  name: "CreateEdit",
  components: {},
  data() {
    return {
      mode: "create",
      form: {
        title: "",
        status: "",
      },
      statusOptions: [
        { label: "完成", value: "complete" },
        { label: "未完成", value: "todo" },
      ],
    };
  },
  mounted() {
    if (this.$route.path.indexOf("edit") !== -1) {
      this.mode = "edit";
      this.getEditTodo();
    }
  },
  methods: {
    getEditTodo() {
      this.udAxios
        .get(`http://localhost:9100/todo/edit/${this.$route.params.id}`)
        // .get(`https://mock.udons.site/todo/edit/${this.$route.params.id}`)
        .then((res) => {
          this.form.title = res.data.title;
          this.form.status = res.data.status;
        });
    },
    submit() {
      if (this.mode === "create") {
        this.udAxios
          .post(`http://localhost:9100/todo/create`, this.form)
          // .post(`https://mock.udons.site/todo/edit`, this.form)
          .then((res) => {
            this.$router.push("/");
          });
      } else {
        this.udAxios
          .post(`http://localhost:9100/todo/edit/${this.$route.params.id}`, this.form)
          // .post(`https://mock.udons.site/todo/edit/${this.$route.params.id}`, this.form)
          .then((res) => {
            this.$router.push("/");
          });
      }
    },
    toUrl(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style lang="sass" scoped>
.form-area
  padding: 15px 10%

.button-area
  padding: 0 10%
  display: flex
  justify-content: space-between
  .ud-button
    flex: 0 0 48%
</style>

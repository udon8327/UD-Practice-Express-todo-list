<template lang="pug">
#create-edit
  .title-area
    h6 {{ mode === "create" ? "新增" : "編輯" }}待辦事項
  .form-area
    ud-input(v-model="form.title" placeholder="請輸入標題")
    ud-radio(v-model="form.status" v-if="mode === 'edit'" :options="statusOptions" flex)
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
        status: "todo",
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
        .get(`/todo/edit/${this.$route.params.id}`)
        .then((res) => {
          this.form.title = res.data.title;
          this.form.status = res.data.status;
        });
    },
    submit() {
      if (this.mode === "create") {
        this.udAxios
          .post(`/todo/create`, this.form)
          .then((res) => {
            this.$router.push("/");
          });
      } else {
        this.udAxios
          .put(`/todo/edit/${this.$route.params.id}`, this.form)
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
.title-area
  padding: 15px 10% 0 10%

.form-area
  padding: 15px 10%

.button-area
  padding: 0 10%
  display: flex
  justify-content: space-between
  .ud-button
    flex: 0 0 48%
</style>

<template lang="pug">
#home
  .todo-area
    .todo(v-for="todo in todoList" :key="todo.id")
      p.title {{ todo.title }}
      p.status(:class="{ red: todo.status === 'todo' }") {{ todo.status === "todo" ? "未完成" : "完成" }}
  .button-area
    ud-button(@click="getTodoList" type="primary") 查詢
    ud-button(@click="createTodo" type="primary") 新增
    ud-button(@click="editTodo" type="primary") 編輯
    ud-button(@click="deleteTodo" type="primary") 刪除
  .search-area
    ud-input(v-model="search.title" placeholder="請輸入標題")
    ud-radio(v-model="search.status" :options="statusOptions" flex)
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      search: {
        title: null,
        status: null,
      },
      statusOptions: [
        { label: "全部", value: null },
        { label: "完成", value: "complete" },
        { label: "未完成", value: "todo" },
      ],
      todoList: [],
    };
  },
  mounted() {
    this.getTodoList();
  },
  methods: {
    getTodoList() {
      this.udAxios
        // .get("https://mock.udons.site/todo/")
        .get("http://localhost:9100/todo", {
          params: this.search,
        })
        .then((res) => {
          this.todoList = res.data;
          this.$message({
            type: "success",
            message: "取得成功",
          });
        });
    },
    createTodo() {
      this.udAxios
        .post("http://localhost:9100/todo/create",{
        // .post("https://mock.udons.site/todo/create",{
          title: "爬山",
          status: "todo",
        })
        .then((res) => {
          this.$message({
            type: "success",
            message: "新增成功",
          });
        });
    },
    editTodo() {
      this.udAxios
        // .post("http://localhost:9100/cats/edit/1",{
        .post("https://mock.udons.site/todo/edit/1",{
          user_name: "nekomimi",
          password: "cat1234",
        })
        .then((res) => {
          console.log("res: ", res);
          this.$message({
            type: "success",
            message: "編輯成功",
          });
        });
    },
    deleteTodo() {
      this.udAxios
        // .delete("http://localhost:9100/cats/delete/1", {
        .delete("https://mock.udons.site/todo/delete/1")
        .then((res) => {
          console.log('res: ', res);
          this.$message({
            type: "success",
            message: "刪除成功",
          });
        });
    },
    toUrl(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style lang="sass" scoped>
.todo-area
  padding: 15px 10%
  .todo
    display: flex
    justify-content: space-between
    border-bottom: 1px solid #ccc
    padding: 2px 0
    p
      &.status
        color: green
        &.red
          color: red

.button-area
  padding: 0 10%
  display: flex
  justify-content: space-between
  margin-bottom: 15px
  .ud-button
    flex: 0 0 24%

.search-area
  padding: 0 10%
</style>

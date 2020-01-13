<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <p>{{ todo.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoList",
  data() {
    return { todos: [] };
  },
  methods: {
    async getAllTodoTitle() {
      const response = await axios.get("http://localhost:4000/api/todos/");
      this.todos = response.data;
    }
  },
  mounted() {
    this.getAllTodoTitle();
  }
};
</script>
<style></style>

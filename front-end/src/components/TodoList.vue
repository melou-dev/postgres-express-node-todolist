<template>
  <div>
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        {{ todo.title }}
        <ul v-for="todoItem in todo.todoItems" :key="todoItem.id">
          <li>{{ todoItem.content }}</li>
        </ul>
      </li>
      =============
    </ul>
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
    async getAllTodo() {
      const response = await axios.get("http://localhost:4000/api/todos/");
      this.todos = response.data;
    }
  },
  mounted() {
    this.getAllTodo();
  },
  beforeDestroy() {
    // eslint-disable-next-line no-console
    console.log(this.todos);
  }
};
</script>
<style></style>

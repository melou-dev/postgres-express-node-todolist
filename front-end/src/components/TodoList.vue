<template>
  <div>
    <h1><strong>Ma todo Liste</strong></h1>
    <form>
      <input type="text" placeholder="Ajoute une nouvelle catégorie" />
      <button><strong>Ajouter</strong></button>
    </form>
    <form>
      <input type="text" placeholder="Quelle est ta nouvelle tâche ?" />
      <select
        ><option>catégorie ?</option>
        <option v-for="todo in todos" :key="todo.id"
          ><br />{{ todo.title }}</option
        ></select
      >
      <button><strong>Ajouter</strong></button>
    </form>

    <div>
      <ul v-for="todo in todos" :key="todo.id">
        <li>
          {{ todo.title }}
          <button>
            <span>Edit</span>
          </button>
          <button>
            <span>Delete</span>
          </button>
          <ul>
            <li v-for="todoItem in todo.todoItems" :key="todoItem.id">
              <label> <input type="checkbox" />{{ todoItem.content }}</label>
              {{ todoItem.content }}
              <button>
                <span>Edit</span>
              </button>
            </li>
            <button>
              <span>Delete item</span></button
            ><br />
            ============================
          </ul>
        </li>
      </ul>
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
    async getAllTodo() {
      const response = await axios.get("http://localhost:4000/api/todos/");
      this.todos = response.data;
    },
    async postTodo() {
      const response = await axios.post("http://localhost:4000/api/todos/");
      this.input = response.title;
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

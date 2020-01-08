<template>
  <div class="home">
    <TodoList msg="Welcome to Your Vue.js todo-list" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "home",
  components: {
    TodoList
  }
};
</script>

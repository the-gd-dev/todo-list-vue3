<script setup>
import { computed, defineEmits } from "vue";
import store from "../../store.js";
import Todo from "./Todo.vue";
const hasTodos = computed(() => store.todos.length > 0);
const deleteTodoHandler = (id) => {
  if (confirm("Are you sure ? ")) store.deleteTodo(id);
};
</script>

<template>
  <div class="todos">
    <Todo
      v-for="(t, k) in store.todos"
      :key="k"
      :todo="t"
      @on-delete="deleteTodoHandler"
      @on-complete="(id) => store.completeTodo(id)"
    />
  </div>
  <div class="no-data" v-if="!hasTodos">
    <div class="content">
      <h1>No Todos Available.</h1>
      <p>Create a new todo.</p>
      <button type="button" @click="store.setShowInput">New Todo Item</button>
    </div>
  </div>
</template>

<style scoped>
.todos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 15px;
}

.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.no-data .content {
  text-align: center;
  background: var(--bg-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
}

.no-data .content h1 {
  color: var(--crimson-dark); /* Dark crimson */
  font-size: 24px;
  margin-bottom: 10px;
}

.no-data .content p {
  color: var(--crimson-darkest); /* Deep crimson */
  font-size: 16px;
}

.no-data .content button {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  background: var(--crimson-base); /* Primary button color */
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.no-data .content button:hover {
  background: var(--crimson-dark); /* Darker crimson on hover */
}
</style>

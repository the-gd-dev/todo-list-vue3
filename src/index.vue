<script setup>
import { ref, computed } from "vue";
import AppLayout from "./layouts/AppLayout.vue";
import Todos from "./components/todos/Todos.vue";

import store from "./store.js";
window.document.title = "Todo Vue3";
const title = ref("");
const desc = ref("");
const todo_date = ref("");
const hasTodos = computed(() => store.todos.length > 0);
function createNewTodo(e) {
  store.addNewTodo({
    title: title.value,
    desc: desc.value,
    todo_date: todo_date.value,
  });
}
</script>

<template>
  <AppLayout>
    <div class="container">
      <div class="form-container" v-if="store.showInput || hasTodos">
        <div class="add-todo-form">
          <form @submit.prevent="createNewTodo">
            <div class="row">
              <input required type="text" placeholder="Title" v-model="title" />
              <input
                required
                type="datetime-local"
                placeholder="Todo Date"
                v-model="todo_date"
              />
            </div>
            <input required placeholder="Description" v-model="desc" />
            <div class="btn-container">
              <button class="discard" type="button" @click="store.setShowInput">
                Hide
              </button>
              <button class="primary">Add Todo</button>
            </div>
          </form>
        </div>
      </div>
      <div class="todos-container">
        <Todos />
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.form-container {
  background: #ffe6e6; /* Soft pinkish background */
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #b22222;
  max-width: 420px;
  margin: 30px auto;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
}

.form-container h3 {
  font-size: 1.25rem;
  color: #b22222;
  text-align: justify;
  font-weight: 500;
  margin-bottom: 15px;
}
.add-todo-form textarea {
  height: 80px;
}

/* Input Fields */
.add-todo-form input,
.add-todo-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #b22222;
  border-radius: 6px;
  font-size: 1rem;
  transition: border 0.2s ease;
  resize: none;
}

.add-todo-form input:focus,
.add-todo-form textarea:focus {
  border-color: #8b0000;
  outline: none;
}

/* Row Layout */
.add-todo-form .row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.add-todo-form .row input {
  width: 48%;
}

/* Button */
.btn-container {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  gap: 10px;
}

.btn-container button {
  padding: 8px 16px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease;
  min-width: 80px;
}

.btn-container button.primary {
  background: var(--base-color);
  color: white;
}

.btn-container button.discard {
  background: var(--white);
  color: var(--dark-gray);
  border: #dbdbdb solid 1px;
}

.btn-container button.primary:hover {
  background: #8b0000;
}
.todos-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 12px;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  /* background-color: #dc143c; */
  padding: 20px;
}
</style>

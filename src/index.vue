<script setup>
import { ref, computed } from "vue";
import AppLayout from "./layouts/AppLayout.vue";
import store from "./store.js";
window.document.title = "Welcome Vue3";
const title = ref("");
const desc = ref("");
const todo_date = ref("");
function createNewTodo(e) {
  store.addNewTodo({
    title: title.value,
    desc: desc.value,
    todo_date: todo_date.value,
  });
}
function deleteTodoHandler(id) {
  if (confirm("Are you sure ?")) {
    store.deleteTodo(id);
  }
}
</script>

<template>
  <AppLayout>
    <div class="container">
      <div class="form-container" v-if="store.showInput">
        <div class="add-todo-form">
          <form @submit="createNewTodo">
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
        <div class="todos">
          <div
            :class="`todo ${todo.isCompleted ? 'completed' : ''}`"
            v-for="(todo, key) in store.todos"
            :key="key"
          >
            <div class="header">
              <label>
                <input
                  type="checkbox"
                  :value="todo.isCompleted === true"
                  @change="store.completeTask(todo.id)"
                />
                Mark as completed
              </label>
              <div class="actions" v-if="!todo.isCompleted">
                <a href="#" @click="deleteTodoHandler(todo.id)">Delete</a>
              </div>
            </div>

            <h2>{{ todo.title }}</h2>

            <p>{{ todo.desc }}</p>
            <small> {{ todo.todo_date_formatted }} </small>
            <div class="actions" v-if="!todo.isCompleted">
              <a href="#">change content</a>
              <a href="#">change date</a>
            </div>
          </div>
        </div>
        <div class="no-data" v-if="store.todos.length === 0">
          <div class="content" >
            <h1>No Todos Available.</h1>
            <p>Create a new todo.</p>
            <button type="button" @click="store.setShowInput">New Todo Item</button>
          </div>
        </div>
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
  justify-content: center;
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

.todos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 15px;
}
.todo.completed {
  background: #f5f5f5;
  border-left: 5px solid #5e5e5e;
}
.todo.completed h2 {
  color: #5e5e5e;
}
.todo.completed label,
.todo.completed input[type="checkbox"] {
  accent-color: #5e5e5e;
  cursor: not-allowed;
  pointer-events: none;
}
.todo {
  width: 325px;
  background: #f8d7da; /* Light crimson shade */
  padding: 16px;
  border-radius: 12px;
  border-left: 5px solid #b22222; /* Darker crimson accent */
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.todo:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Checkbox Styling */
.todo .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: var(--deep-maroon) solid 1px;
  padding-bottom: 8px;
}
.todo label {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  gap: 8px;

  cursor: pointer;
}

.todo input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #b22222;
  cursor: pointer;
}

/* Title Styling */
.todo h2 {
  margin: 0;
  padding: 0;
  margin-top: 8px;
  font-size: 1.25rem;
  font-weight: 500;
  color: #b22222; /* Deep crimson */
}

/* Paragraph */
.todo p {
  font-size: 1rem;
  color: #333;
}

/* Date Styling */
.todo small {
  margin-top: 1em;
  color: #666;
  font-size: 0.85rem;
  display: block;
}

/* Actions Styling */
.actions {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
}

.actions a {
  text-decoration: none;
  color: #b22222;
  font-weight: 600;
  transition: color 0.2s ease, transform 0.2s ease;
}

.actions a:hover {
  color: #7a0e18;
  transform: scale(1.05);
}

.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.no-data .content {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
}

.no-data .content h1 {
  color: #b22222; /* Dark crimson */
  font-size: 24px;
  margin-bottom: 10px;
}

.no-data .content p {
  color: #8b0000; /* Deep crimson */
  font-size: 16px;
}

.no-data .content button {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  background: crimson; /* Primary button color */
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.no-data .content button:hover {
  background: #a50021; /* Darker crimson on hover */
}

</style>

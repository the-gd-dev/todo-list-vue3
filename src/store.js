import { reactive } from "vue";

const formatDate = (date) => {
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Date(date).toLocaleString("en-US", options).replace(",", "");
};

const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

const store = reactive({
  showInput: false,

  setShowInput() {
    this.showInput = !this.showInput;
  },

  todos: savedTodos,

  addNewTodo(payload) {
    const newTodo = {
      id: this.todos.length + 1,
      ...payload,
      todo_date_formatted: formatDate(payload.todo_date),
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },

  completeTodo(id) {
    this.todos = this.todos.map((item) => {
      if (item.id === id) {
        item.isCompleted = true;
      }
      return item;
    });
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },

  deleteTodo(id) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1); // Mutates the array
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },

  updateTodo(id, payload) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      Object.assign(this.todos[index], payload);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },
});

export default store;

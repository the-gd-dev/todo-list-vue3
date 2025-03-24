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

const store = reactive({
  showInput: false,
  setShowInput() {
    this.showInput = !this.showInput;
  },
  todos: [],
  addNewTodo(payload) {
    this.todos.push({
      id: this.todos.length + 1,
      ...payload,
      todo_date_formatted: formatDate(payload.todo_date),
      isCompleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  },
  completeTask(id) {
    this.todos = this.todos.map((item) => {
      if (item.id === id) {
        item.isCompleted = true;
      }
      return item;
    });
  },
  deleteTodo(id) {
    this.todos = this.todos.filter((item) => item.id !== id);
  },
  updateTodo(id, payload) {
    const updatedList = this.todos.map((item) => {
      if (item.id === id) {
        item = payload;
      }
      return item;
    });
    this.todos = updatedList;
  },
});

export default store;

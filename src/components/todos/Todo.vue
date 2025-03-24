<script setup>
defineProps(["todo"]);
// const emits = defineEmits(["on-delete", "on-complete"]);
</script>

<template>
  <div :class="`todo ${todo.isCompleted ? 'completed' : ''}`">
    <div class="header">
      <label>
        <input
          type="checkbox"
          :checked="todo.isCompleted"
          :value="true"
          @change="$emit('on-complete', todo.id)"
        />
        Mark as completed
      </label>
      <div class="actions" v-if="!todo.isCompleted">
        <a href="#" @click="$emit('on-delete', todo.id)">Delete</a>
      </div>
    </div>

    <h2>{{ todo.title }}</h2>

    <p>{{ todo.desc }}</p>
    <small> {{ todo.todo_date_formatted }} </small>
  </div>
</template>

<style scoped>
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
</style>

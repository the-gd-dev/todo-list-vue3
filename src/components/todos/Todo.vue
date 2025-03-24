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
  background: var(--completed-bg);
  border-left: 5px solid var(--success-dark);
}

.todo.completed label,
.todo.completed small,
.todo.completed p,
.todo.completed h2 {
  color: var(--gray-darker);
}
.todo.completed label,
.todo.completed input[type="checkbox"] {
  accent-color: var(--success-dark);
  cursor: not-allowed;
  pointer-events: none;
}
.todo {
  width: 325px;
  background: var(--crimson-lighter); /* Light crimson shade */
  padding: 16px;
  border-radius: 12px;
  border-left: 5px solid var(--crimson-dark); /* Darker crimson accent */
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.todo:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
.todo.completed .header {
  border-bottom: var(--success-dark) solid 1px;
}
/* Checkbox Styling */
.todo .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: var(--crimson-dark) solid 1px;
  padding-bottom: 8px;
}
.todo label {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  gap: 8px;
  color: var(--gray-darker);
  cursor: pointer;
}

.todo input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

/* Title Styling */
.todo h2 {
  margin: 0;
  padding: 0;
  margin-top: 8px;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--gray-darker);
}

/* Paragraph */
.todo p {
  font-size: 1rem;
  color: var(--gray-darker);
}

/* Date Styling */
.todo small {
  margin-top: 1em;
  color: var(--gray-darker);
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
  color: var(--gray-darker);
  font-weight: 600;
  transition: color 0.2s ease, transform 0.2s ease;
}

.actions a:hover {
  color: var(--gray-darker);
  transform: scale(1.05);
}
</style>

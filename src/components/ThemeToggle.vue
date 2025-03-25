<script setup>
import { computed, watchEffect } from "vue";
import store from "../store.js";

const isDarkMode = computed(() => store.theme === "dark");

const toggleDarkMode = () => {
  store.toggleTheme();
};

// Watch for changes
watchEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
</script>

<template>
  <label class="toggle-switch">
    <input type="checkbox" :checked="isDarkMode" @change="toggleDarkMode" />
    <span class="slider">
      <span class="icon">
        <!-- Moon Icon (Sharp-Edged) -->
        <svg
          class="moon"
          viewBox="0 0 24 24"
          height="15"
          width="15"
          v-if="isDarkMode"
        >
          <path
            fill="#ffb600"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.67 0 5.11-1.05 7-2.75a8 8 0 0 1-7-8 8 8 0 0 1 7-8C17.11 3.05 14.67 2 12 2z"
          />
        </svg>

        <!-- Sun Icon -->
        <svg class="sun" viewBox="0 0 24 24" height="24" width="24" v-else>
          <circle fill="#ffb600" cx="12" cy="12" r="5" />
          <path
            fill="#ffb600"
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </svg>
      </span>
    </span>
  </label>
</template>

<style scoped>
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-color);
  border: var(--gray-darkest) solid 1px;
  transition: 0.4s ease-in-out;
  border-radius: 30px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  padding: 5px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 3px;
  bottom: 2px;
  background-color: var(--gray-darkest);
  transition: 0.4s ease-in-out;
  border-radius: 50%;
}

.icon {
  position: absolute;
  width: 18px;
  height: 18px;
  top: 40%;
  transform: translateY(-45%);
  transition: all 0.4s ease-in-out;
}

.sun {
  transform: translateX(-2px);
}

.moon {
  transform: translateX(35px);
}

/* input:checked + .slider::before {
  background-color: var(--gray-light);
  
}

input:checked + .slider {
  background-color: var(--gray-darkest);
} */

input:checked + .slider:before {
  transform: translateX(30px);
}
</style>

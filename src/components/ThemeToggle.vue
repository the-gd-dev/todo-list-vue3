<template>
  <label class="toggle-switch">
    <input type="checkbox" :checked="isDarkMode" @change="toggleDarkMode" />
    <span class="slider">
      <span class="icon">
        <svg v-if="isDarkMode" class="moon" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 4.23,16.13A10,10 0 0,0 12,14A10,10 0 0,0 12,2Z"
          />
        </svg>
        <svg v-else class="sun" viewBox="0 0 24 24">
          <path
            fill="yellow"
            d="M12,4.54A1.46,1.46 0 0,1 13.46,6A1.46,1.46 0 0,1 12,7.46A1.46,1.46 0 0,1 10.54,6A1.46,1.46 0 0,1 12,4.54M5.34,7.05L6.75,8.46L5.34,9.88L3.93,8.46L5.34,7.05M12,18.54A1.46,1.46 0 0,1 13.46,20A1.46,1.46 0 0,1 12,21.46A1.46,1.46 0 0,1 10.54,20A1.46,1.46 0 0,1 12,18.54M18.66,7.05L20.07,8.46L18.66,9.88L17.25,8.46L18.66,7.05M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          />
        </svg>
      </span>
    </span>
  </label>
</template>

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
  background-color: white;
  border: #202020 solid 1px;
  transition: 0.4s ease-in-out;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 3px;
  bottom: 2px;
  background-color: #202020;
  transition: 0.4s ease-in-out;
  border-radius: 50%;
}

input:checked + .slider::before {
  background-color: white;
}

input:checked + .slider {
  background-color: #202020;
}

input:checked + .slider:before {
  transform: translateX(30px);
}
</style>

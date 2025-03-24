<script setup>
import store from "../store.js";
</script>

<template>
  <header>
    <div class="bubble">
      <div class="inner-content">
        <div>
          <h1>Todo</h1>
          <p>
            Manage your tasks!
          </p>
        </div>
        <div class="user-options">
          <ul>
            <li>
              <button type="button" @click="store.setShowInput">
                Create Todo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

header {
  position: relative;
  z-index: 999;
}

.inner-content {
  transition: all 0.3s ease-in-out;
  text-align: center;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 25%;
  padding-top: 40%;
}
.inner-content .user-options {
  transition: 0.3s ease-in-out;
  opacity: 0;
}

.user-options ul {
  list-style: none;
  padding: 0;
  margin-top: 25px;
}
.user-options ul li {
  margin-bottom: 10px;
  text-align: left;
}
.user-options ul li button {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    font-weight: bold;
  }
}

.bubble {
  padding-left: 200px;
  padding-top: 200px;
  transition: all 0.3s ease-in-out;
  color: white;
  background-color: var(--base-color);
  position: absolute;
  padding: 16px;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  left: -100px;
  top: -100px;

  &:hover {
    height: 400px;
    width: 400px;
    left: -10%;
    top: -20vh;
    box-shadow: var(--light-crimson) 1px 1px 50px;
  }

  &:hover .inner-content .user-options {
    opacity: 1;
  }

  &:hover .inner-content {
    padding-left: 15%;
    padding-top: 42%;
    justify-content: flex-start;
  }
}
</style>

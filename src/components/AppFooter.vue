<script setup lang="ts"></script>

<template>
  <footer>
    <div class="bubble">
      <div class="inner-content">
        <div>
          <h1>Todo</h1>
          <p>&copy; 2025 <br />All rights reserved</p>
        </div>
        <div class="company-info"></div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
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
  justify-content: flex-end;
  align-items: center;
  padding-right: 25%;
  padding-bottom: 50%;
}
.inner-content .company-info {
  transition: 0.3s ease-in-out;
  opacity: 0;
}

.bubble {
  padding-right: 200px;
  padding-bottom: 200px;
  transition: all 0.3s ease-in-out;
  color: white;
  background-color: var(--crimson-base);
  position: absolute;
  padding: 16px;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  right: -100px;
  bottom: -100px;

  &:hover {
    height: 400px;
    width: 400px;
    right: -10%;
    bottom: -20vh;
    box-shadow: var(--crimson-light) 1px 1px 50px;
  }

  &:hover .inner-content .company-info {
    opacity: 1;
  }

  &:hover .inner-content {
    padding-right: 15%;
    padding-bottom: 50%;
  }
}
</style>

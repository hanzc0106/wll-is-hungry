<script setup lang="ts"></script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/meal.svg" />
    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">今晚吃什么</h1>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin-inline: auto;
  width: 100px;
  height: 100px;
}

h1 {
  font-weight: 500;
  font-size: 2rem;

  text-align: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    gap: 1rem;
  }

  .logo {
    width: 100px;
    height: 100px;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  h1 {
    font-size: 2.6rem;
    text-align: left;
  }
}
</style>

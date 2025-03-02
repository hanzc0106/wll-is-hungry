<script setup lang="ts"></script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/meal.svg" width="125" height="125" />
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
  margin: 0 auto 2rem;
}

h1 {
  font-weight: 500;
  font-size: 2rem;

  position: relative;
  text-align: center;
  top: -10px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
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

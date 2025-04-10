<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

// 获取当前路由
const route = useRoute()
// 是否是recipes路由
const isRecipes = computed(() => route.name === 'recipes')
const router = useRouter()

const goBack = () => {
  router.back()
}
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <header v-if="isRecipes">
    <div class="header-content">
      <a class="go-back" @click="goBack">返回</a>
      <nav>
        <img alt="Vue logo" class="logo" src="@/assets/meal.svg" @click="goHome" />
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <a href="https://beian.miit.gov.cn/" target="_blank" ref="noreferer">京ICP备2025113239号-1</a>
    <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11011402054575" target="_blank" ref="noreferer">
      <img src="@/assets/beian.png" height="16" />
      京公网安备11011402054575号
    </a>
  </footer>
</template>

<style scoped>
header {
  height: 4rem;
  padding-block: 1rem;
  background: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);

  position: sticky;
  top: 0;
  inset-inline: 0;

  & .header-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .go-back {
    position: absolute;
    left: 1.5rem;
    cursor: pointer;
  }

  & .logo {
    display: block;
    margin: 0 auto;
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
}

main {
  flex: 1;
  max-width: 1280px;
  margin-inline: auto;
}

footer {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 0;
  column-gap: 0.5rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0;

    &:hover {
      background-color: unset;
    }
  }
}

@media (min-width: 1024px) {
  header {
    & .header-content {
      position: relative;
      max-width: 1280px;
      margin-inline: auto;
    }

    & .logo {
      width: 32px;
      height: 32px;
    }
  }
  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  footer {
    row-gap: 0.5rem;
    column-gap: 1rem;
  }
}
</style>

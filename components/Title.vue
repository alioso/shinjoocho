<template>
  <div
    class="main-title-container"
    :class="$nuxt.$route.path === '/' && 'home'"
  >
    <h1 class="main-title">Shinjoo Cho</h1>
    <p class="main-subtitle">bandoneon / piano</p>
  </div>
</template>

<script></script>

<style>
.main-title-container {
  @apply fixed
    z-10
    mt-2
    ml-4
    flex
    flex-col
    items-start;
}

.main-title {
  @apply m-0
    lowercase;
  letter-spacing: 4px;
  transition: color 1000ms ease-in-out;
}

.main-subtitle {
  @apply text-white
    m-0;
}

.home .main-title,
.home .main-subtitle {
  @apply text-white;
}
</style>

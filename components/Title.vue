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
    mt-2
    ml-4
    flex
    flex-col
    items-start;
  z-index: 101;
}

.main-title-container.hide {
  z-index: -1;
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

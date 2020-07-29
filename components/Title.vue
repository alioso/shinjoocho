<template>
  <div
    class="main-title-container"
    :class="$nuxt.$route.path === '/' && 'home'"
  >
    <h1 class="main-title">
      Shinjoo Cho
    </h1>
    <p class="main-subtitle">bandoneon / piano</p>
  </div>
</template>

<script></script>

<style>
.main-title-container {
  @apply fixed
    inline-block
    z-10
    p-4;
  top: 50%;
  margin-top: -5.5rem;
}

.main-title {
  @apply m-0
    lowercase;
  letter-spacing: 4px;
  transition: color 500ms ease-in-out;
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

<template>
  <header class="main-title-container">
    <div class="main-title">Shinjoo Cho</div>
    <div class="main-subtitle">bandoneon / piano</div>
  </header>
</template>

<script></script>

<style lang="scss">
.main-title-container {
  transform: translateY(-8px);
}

.main-title {
  @apply m-0
    lowercase
  text-grey900;
  letter-spacing: 4px;
  font-weight: 400;
  font-size: 1.75rem;
  /* font-size: var(--h1); */
  line-height: calc(2.25rem * 1.125);
  line-height: calc(var(--h1) * 1.125);
  transition: color 125ms ease-in-out;
}

.main-subtitle {
  @apply text-black
    m-0;
  font-size: 1.1rem;
}
</style>

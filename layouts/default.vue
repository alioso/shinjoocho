<template>
  <div class="main-container">
    <Header />
    <Nuxt class="content-container" />
  </div>
</template>

<script>
export default {
  created() {
    if (this.$route.path !== '/' && !this.$store.getters['menu/menuOpen']) {
      this.$store.dispatch('menu/toggleMenu', true);
    }
  }
};
</script>

<style>
html {
  @apply font-body;
  line-height: var(--body-line-height);
  font-size: var(--body-font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

p {
  @apply font-normal text-grey700;
  margin-top: var(--paragraph-margin-top);
  margin-bottom: var(--paragraph-margin-bottom);
}

a {
  @apply text-blue500;
}

a:hover {
  @apply text-orange;
}

.main-container {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
}

.content-container {
  @apply min-h-screen
    flex;
  padding: 4rem;
  transform: translateX(300px);
  width: calc(100% - 300px);
}

.content-container > div {
  @apply w-full;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 325ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

:root {
  --body-font-size: 1rem;
  --caption-font-size: 0.75rem;
  --pre-font-size: 0.9rem;
  --body-line-height: 1.5;
  --subtitle-font-weight: 400;
  --paragraph-margin-top: 1rem;
  --paragraph-margin-bottom: 0;
  --heading-margin-top: 1.5rem;
  --heading-margin-bottom: 0;
  --list-margin-top: 0.75rem;
  --list-margin-bottom: 0.75rem;
  --list-padding-left: 40px;
  --input-box-shadow: 0 0 0 4px rgba(216, 236, 250, 1);
}
</style>

<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts"></script>

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

h1,
h2,
h3,
h4,
h5 {
  @apply text-grey900;
  margin-top: var(--heading-margin-top);
  margin-bottom: var(--heading-margin-bottom);
}

h1 {
  @apply font-normal;
  font-size: var(--h1);
  line-height: calc(var(--h1) * 1.125);
}

h2 {
  @apply font-normal;
  font-size: var(--h2);
  line-height: calc(var(--h2) * 1.125);
}

h3 {
  @apply font-semibold;
  font-size: var(--h3);
  line-height: calc(var(--h3) * 1.125);
}

h4 {
  @apply font-semibold;
  font-size: var(--h4);
  line-height: calc(var(--h4) * 1.125);
}

h5 {
  @apply font-bold;
  font-size: var(--h5);
  line-height: calc(var(--h5) * 1.125);
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
  @apply text-blue900;
}

.container {
  @apply min-h-screen
    flex
    items-center
    mx-auto;
  max-width: 30em;
}

.container > div {
  @apply w-full;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
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
  --heading-font-weight: 400;
  --subtitle-font-weight: 400;
  --h1: 2.25rem;
  --h2: 2rem;
  --h3: 1.5rem;
  --h4: 1.25rem;
  --h5: 1rem;
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

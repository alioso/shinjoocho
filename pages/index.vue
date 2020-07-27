<template>
  <div class="home-container">
    <div>
      <Menu />
      <h1 class="title">
        Shinjoo Cho
      </h1>
      <h2>Bandoneon, Piano</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'home'
});
</script>

<style>
.home-container {
  @apply min-h-screen
    flex
    justify-center
    items-center
    text-center
    mx-auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>

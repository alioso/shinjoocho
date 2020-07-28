<template>
  <div class="container">
    <div>
      <h1 class="title">
        Shinjoo Cho
      </h1>
      <h2>Bandoneon, Piano</h2>
      <div v-for="(bg, id) in bgs" :key="id">
        <img :src="bg.fields.image.fields.file.url" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    bgs() {
      return (this as any).$store.state.backgroundImages;
    }
  }
};
</script>

<style>
/* styles */
</style>

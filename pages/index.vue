<template>
  <div class="home-image-container">
    <Title class="home-title" :class="$store.getters['menu/menuOpen'] && 'hid'" />
    <div class="home-image-wrapper">
      <div
        :style="`background-image: url(${featuredTile.fields.image.fields.file.url}`"
        class="home-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    featuredTile() {
      const featuredTile = this.$store.state.homeTiles[0];

      return featuredTile;
    }
  }
};
</script>

<style lang="scss">
.home-image-container {
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;

  &.content-container {
    padding: 0;
    transform: none;
  }
}

.home-image-wrapper {
  height: 100%;
  z-index: 100;
}

.home-image {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
}

.home-title {
  position: fixed;
  right: 0;
  padding: 1.5rem;
  z-index: 1000;
  opacity: 1;
  transition: opacity 325ms ease-in-out;

  &.hid {
    opacity: 0;
  }

  * {
    color: white;
  }
}
</style>

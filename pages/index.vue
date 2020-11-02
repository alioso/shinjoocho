<template>
  <div class="home-image-container">
    <ul class="home-image-wrapper">
      <li
        v-for="(tile, i) in tiles"
        :key="tile.fields.url"
        class="tile"
        :class="[
          { active: active_el === i },
          { inactive: active_el !== i && inactive_el !== null },
          'tile-' + i
        ]"
      >
        <a href="javascript:;" class="home-image-link" @click="activate(i)">
          <div
            :style="`background-image: url(${tile.fields.image.fields.file.url}`"
            class="home-image"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_el: null,
      inactive_el: null
    };
  },
  computed: {
    tiles() {
      const tilesArray = this.$store.state.homeTiles;

      return tilesArray;
    }
  },
  methods: {
    activate(el) {
      this.active_el = el;
      this.inactive_el = !el;
    }
  }
};
</script>

<style lang="scss">
@import '../css/index.scss';
</style>

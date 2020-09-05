<template>
  <div>
    <ul class="home-image-wrapper">
      <li
        v-for="(tile, i) in tiles"
        :key="tile.fields.url"
        class="home-image-container"
        :class="[{ active : active_el === i }, 'tile-' + i]"
      >
        <a href="javascript:;" class="home-image-link" @click="activate(i)">
          <h2 class="home-image-title">{{ tile.fields.title }}</h2>
          <img :src="tile.fields.image.fields.file.url" class="home-image" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      active_el: null
    };
  },
  computed: {
    tiles() {
      const TilesArray = (this as any).$store.state.homeTiles;

      return TilesArray;
    }
  },
  methods: {
    activate: function (el: any) {
      (this.active_el as any) === el;
    }
  }
};
</script>

<style>
.home-image-wrapper {
  @apply fixed
    top-0
    left-0
    w-full
    h-full
    flex
    flex-wrap;
}

.home-image-container {
  @apply relative
    overflow-hidden
    bg-black;
  flex-basis: 50%;
  height: 50%;
  transition: transform 200ms ease-in-out;
}

.home-image-container.active {
  transform: scale(1, 2);
  z-index: 10000;
}

.home-image {
  @apply relative
    z-10
    w-full
    h-full;
  transition: opacity 225ms ease-in-out, transform 2s ease-in-out;
  object-fit: cover;
  transform: scale(1);
  opacity: 0.75;
}

.home-image-container:hover .home-image {
  transform: scale(1.15);
  opacity: 1;
}

.home-image-title {
  @apply absolute
    text-white
    z-20
    lowercase
    m-0
    p-4;
  letter-spacing: 4px;
}

.home-image-link {
  @apply absolute
    flex
    w-full
    h-full
    overflow-hidden;
}

.home-image-container:nth-of-type(1) .home-image-link {
  @apply items-end
    justify-end
    mr-2
    mb-2;
}

.home-image-container:nth-of-type(2) .home-image-link {
  @apply items-end
    justify-start
    ml-2
    mb-2;
}

.home-image-container:nth-of-type(3) .home-image-link {
  @apply items-start
    justify-end
    mr-2
    mt-2;
}

.home-image-container:nth-of-type(4) .home-image-link {
  @apply items-start
    justify-start
    ml-2
    mt-2;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enters,
.page-leave-to {
  opacity: 0;
}

/* .page-enter .home-image-container:nth-of-type(1),
.page-leave-to .home-image-container:nth-of-type(1) {
  height: 100%;
} */
</style>

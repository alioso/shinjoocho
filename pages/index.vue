<template>
  <div>
    <ul class="home-image-wrapper">
      <li
        v-for="tile in tiles"
        :key="tile.fields.url"
        class="home-image-container"
      >
        <nuxt-link :to="'/' + tile.fields.url" class="home-image-link"
          ><h2 class="home-image-title">{{ tile.fields.title }}</h2>
          <img :src="tile.fields.image.fields.file.url" class="home-image" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    tiles() {
      const TilesArray = (this as any).$store.state.homeTiles;

      const getRandom = (arr: Object[], n: number) => {
        const result = new Array(n);
        let len = arr.length;
        const taken = new Array(len);
        if (n > len)
          throw new RangeError('getRandom: more elements taken than available');
        while (n--) {
          const x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
      };

      const randomTiles = getRandom(TilesArray, 4);

      return randomTiles;
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
    p-8;
  letter-spacing: 4px;
}

.home-image-link {
  @apply absolute
    flex
    w-full
    h-full
    overflow-hidden;
}

/* .home-image-container:nth-of-type(1) {
      @apply mb-2;
    } */

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
</style>

<template>
  <div>
    <ul class="home-image-wrapper">
      <li
        v-for="(tile, i) in tiles"
        :key="tile.fields.url"
        class="home-image-container"
        :class="
          [
            { active: active_el === i },
            { inactive: active_el !== i && inactive_el !== null },
            'tile-' + i
          ]
        "
      >
        <a href="javascript:;" class="home-image-link" @click="activate(i)">
          <h2 class="home-image-title">{{ tile.fields.title }}</h2>
          <img :src="tile.fields.image.fields.file.url" class="home-image" />
        </a>
        <div class="home-body__wrapper">
          <button @click="onClose" aria-label="Close">
            <img
              src="~/assets/icons/close.png"
              class="close-icon"
              alt="close"
            />
          </button>
          <div
            v-html="body.richTextHtml"
            v-if="tile.fields.body"
            class="home-body"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

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
    },
    body() {
      const body = this.$store.state.homeTiles[0].fields.body;
      const richTextHtml = documentToHtmlString(body);

      return { richTextHtml };
    }
  },
  methods: {
    activate(el) {
      this.active_el = el;
      this.inactive_el = !el;
    },
    onClose() {
      this.active_el = null;
      this.inactive_el = null;
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
    flex-wrap
    bg-white;
}

.home-image-container {
  @apply relative
    overflow-hidden
    bg-black;
  flex-basis: 50%;
  height: 50%;
  transition: height 450ms ease-in-out, opacity 450ms ease-in-out, margin 450ms ease-in-out;
}

/* .home-image-container.active {
  transform: scale(1, 2);
  z-index: 10000;
} */

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

.home-image-container:not(.active):hover .home-image {
  transform: scale(1.15);
  opacity: 1;
}

.home-image-container:not(.active):hover .home-image-title {
  letter-spacing: 4px;
}

.home-image-container.active {
  @apply my-0;
  position: relative;
  height: 100%;
  z-index: 100000;
}

.home-image-container.inactive {
  @apply my-0;
  height: 0;
  opacity: 0 !important;
}

.home-image-title {
  @apply absolute
    text-white
    z-20
    lowercase
    -mt-2
    p-4;
  letter-spacing: 2px;
  transition: letter-spacing 450ms ease-in-out;
}

.home-image-link {
  @apply absolute
    flex
    w-full
    h-full
    overflow-hidden;
}

.tile-0 {
  border-right: 0.25rem solid black;
  border-bottom: 0.25rem solid black;
}

.tile-0 .home-image-link {
  @apply items-end
    justify-end;
}

.tile-1 {
  border-left: 0.25rem solid black;
  border-bottom: 0.25rem solid black;
}

.tile-1 .home-image-link {
  @apply items-end
    justify-start;
}

.tile-2 {
  border-right: 0.25rem solid black;
  border-top: 0.25rem solid black;
}

.tile-2 .home-image-link {
  @apply items-start
    justify-end;
}

.tile-3 {
  border-left: 0.25rem solid black;
  border-top: 0.25rem solid black;
}

.tile-3 .home-image-link {
  @apply items-start
    justify-start;
}

.home-body__wrapper {
  @apply fixed
    flex
    items-center;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  overflow-y: auto;
}

.home-body {
  @apply py-8;
  max-width: 60%;
  margin: 0 auto;
  max-height: 100%;
}

.home-body:after {
  content: '';
  height: 3rem;
  display: block;
}

.close-icon {
  position: fixed;
  right: 2rem;
  top: 2rem;
  width: 30px;
}

/* 
**********************
Page transitions below
**********************
*/
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

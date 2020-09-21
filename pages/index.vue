<template>
  <div>
    <Title :class="active_el !== null && 'hide'" />
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
      </li>
    </ul>
    <div
      class="home-body__wrapper"
      :class="[
        (active_el === 0 || active_el === 2) && 'home-body__wrapper--active right-0',
        (active_el === 1 || active_el === 3) && 'home-body__wrapper--active left-0'
      ]"
    >
      <button
        aria-label="Close"
        class="close-icon"
        :class="[
          (active_el === 0 || active_el === 2) && 'close-icon--right',
          (active_el === 1 || active_el === 3) && 'close-icon--left'
        ]"
        @click="onClose"
      >
        <img
          src="~/assets/icons/close.png"
          alt="close"
        />
      </button>
      <div
        v-if="active_el === 0"
        class="home-body"
        v-html="about.richTextHtml"
      ></div>
      <div
        v-if="active_el === 1"
        class="home-body"
      >
        <Events :events="events" />
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Events from '@/components/Events';

export default {
  components: {
    Events
  },
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
    about() {
      const about = this.$store.state.homeTiles.filter((tile) => {
        return tile.fields.url === 'about';
      });
      const richTextHtml = documentToHtmlString(about[0].fields.body);

      return { richTextHtml };
    },
    events() {
      const all = this.$store.state.events;

      return all;
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
  z-index: 100;
}

.home-image-container {
  @apply relative
    overflow-hidden
    bg-black;
  flex-basis: 50%;
  height: 50%;
  transform: translateY(0);
  transition:
    height 450ms ease-in-out,
    transform 450ms ease-in-out,
    opacity 450ms ease-in-out,
    margin 450ms ease-in-out;
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

.home-image-container:not(.active):hover .home-image {
  transform: scale(1.15);
  opacity: 1;
}

.home-image-container.active {
  @apply my-0;
  position: relative;
  height: 100%;
  z-index: 100000;
  border-top: 0 !important;
  border-bottom: 0 !important;
}

.home-image-container.inactive {
  @apply my-0;
  opacity: 0 !important;
  border-top: 0 !important;
  border-bottom: 0 !important;
}

.inactive.tile-0,
.inactive.tile-1 {
  transform: translateY(-100%);
}

.inactive.tile-2,
.inactive.tile-3 {
  transform: translateY(-100%);
}

.active.tile-0,
.active.tile-1 {
  transform: translateY(0%);
}

.active.tile-2,
.active.tile-3 {
  transform: translateY(-50%);
}


.home-image-container.inactive .home-image-title {
  opacity: 0;
}

.home-image-title {
  @apply absolute
    text-white
    z-20
    lowercase
    -mt-2
    p-4;
  opacity: 1;
  transition: opacity 50ms ease-in-out;
  letter-spacing: 2px;
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

.tile-0 .home-image-title {
  right: 0;
  top: 0;
  transform: translateY(calc(50vh - 4rem));
}

.tile-1 {
  border-left: 0.25rem solid black;
  border-bottom: 0.25rem solid black;
}

.tile-1 .home-image-title {
  left: 0;
  top: 0;
  transform: translateY(calc(50vh - 4rem));
}

.tile-2 {
  border-right: 0.25rem solid black;
  border-top: 0.25rem solid black;
}

.tile-2 .home-image-title {
  right: 0;
  bottom: 0;
  transform: translateY(calc(-50vh + 4rem));
}

.tile-3 {
  border-left: 0.25rem solid black;
  border-top: 0.25rem solid black;
}

.tile-3 .home-image-title {
  left: 0;
  bottom: 0;
  transform: translateY(calc(-50vh + 4rem));
}

.home-body__wrapper {
  @apply fixed
    flex
    items-center;
  top: 0;
  width: 50%;
  height: 100%;
  overflow-y: auto;
}

.home-body__wrapper--active {
  z-index: 102;
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
  top: 2rem;
  width: 30px;
  display: none;
}

.close-icon--right {
  right: 2rem;
  display: block;
}

.close-icon--left {
  left: 2rem;
  display: block;
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

<template>
  <ul
    v-if="pages"
    role="menu"
    class="main-menu"
    :class="$nuxt.$route.path === '/' && 'home'"
  >
    <li>
      <nuxt-link :to="'/'" role="menuitem" :class="listItemsClassNames"
        >Home</nuxt-link
      >
    </li>
    <li v-for="page in pages" :key="page.fields.slug">
      <nuxt-link
        :to="'/' + page.fields.slug"
        role="menuitem"
        :class="listItemsClassNames"
      >
        {{ page.fields.title }}
      </nuxt-link>
    </li>
    <li>
      <nuxt-link
        :to="'/events/upcoming'"
        role="menuitem"
        :class="listItemsClassNames"
        >Events</nuxt-link
      >
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  computed: {
    pages() {
      return (this as any).$store.state.pages;
    }
  },

  created() {
    const listItemsClassNames = 'block uppercase mb-2';
    (this as any).listItemsClassNames = listItemsClassNames;
  }
};
</script>

<style>
.main-menu {
  @apply fixed
    inline-block
    z-10
    p-4
    font-semibold;
  top: 50%;
  margin-top: -2rem;
  letter-spacing: 4px;
  opacity: 1;
  transition: opacity 1000ms ease-in-out;
}

.main-menu.home {
  opacity: 0;
}
</style>

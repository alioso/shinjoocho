<template>
  <ul v-if="pages" role="menu" class="main-menu">
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
    const listItemsClassNames = 'block lowercase mb-2 text-grey900';
    (this as any).listItemsClassNames = listItemsClassNames;
  }
};
</script>

<style>
.main-menu {
  @apply inline-block
    z-10;
  margin-top: 2rem;
  opacity: 1;
  font-size: 1.1rem;
}
</style>

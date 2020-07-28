<template>
  <ul v-if="pages" role="menu" class="m-4 fixed">
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

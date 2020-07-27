<template>
  <ul v-if="pages" role="menu">
    <li>
      <nuxt-link :to="'/'" role="menuitem">Home</nuxt-link>
    </li>
    <li v-for="page in pages" :key="page.fields.slug">
      <nuxt-link :to="'/' + page.fields.slug" role="menuitem">
        {{ page.fields.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$store.state.pages;
    }
  }
};
</script>

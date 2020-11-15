<template>
  <section class="container">
    <div>
      <h1>{{ page.fields.title }}</h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <article v-html="body.richTextHtml"></article>
    </div>
  </section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    page() {
      const page = this.$store.state.pages.filter(
        (page) => page.fields.slug === this.slug
      );

      return page[0];
    },
    body() {
      const page = this.$store.state.pages.filter(
        (page) => page.fields.slug === this.slug
      );

      const richTextHtml = documentToHtmlString(page[0].fields.body);

      return {
        richTextHtml
      };
    }
  },
  head() {
    return {
      title: this.page.fields.title
    };
  }
};
</script>

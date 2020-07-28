<template>
  <section class="container">
    <div>
      <h1>{{ event.fields.title }}</h1>
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
    event() {
      const event = this.$store.state.events.filter(
        (event) => event.fields.slug === this.slug
      );

      return event[0];
    },
    body() {
      const event = this.$store.state.events.filter(
        (event) => event.fields.slug === this.slug
      );

      const richTextHtml = documentToHtmlString(event[0].fields.body);

      return {
        richTextHtml
      };
    }
  },
  head() {
    return {
      title: this.event.fields.title
    };
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

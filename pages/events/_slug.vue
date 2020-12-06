<template>
  <section class="flex">
    <div class="icon-col">
      <Left class="icon-left" />
    </div>
    <div>
      <h1>{{ event.fields.title }}</h1>
      <img
        v-if="event.fields.image"
        :src="event.fields.image.fields.file.url"
        :alt="event.fields.title"
      />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <article v-html="body.richTextHtml"></article>
    </div>
  </section>
</template>

<style lang="scss">
.icon-col {
  flex-basis: 140px;
}
.icon-left {
  width: 40px;
  height: 40px;
}
</style>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Left from '@/assets/icons/left.svg?inline';

export default {
  components: {
    Left
  },
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
      const richTextHtml = documentToHtmlString(this.event.fields.body);

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

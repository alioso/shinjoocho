<template>
  <section class="container">
    <div>
      <h1 class="content-title">{{ page.fields.title }}</h1>
      <div class="content-wrapper">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div
          v-if="image"
          class="content-image"
          :style="`background-image: url(${'https:' + image})`"
        ></div>
        <article class="content-text" v-html="body.richTextHtml" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.content-image {
  min-width: 100%;
  height: 300px;
  margin: 0;
  top: 0;
  background-size: cover;
  background-position: 50% 40%;
  position: absolute;
  left: 0;
}

.content-text {
  position: relative;
  z-index: 2;
  top: 300px;
}

.content-title {
  position: absolute;
  z-index: 3;
  top: 278px;
  background: linear-gradient(#fff 0%, #fff 65%, #000 55%, #000 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

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
      const richTextHtml = documentToHtmlString(this.page.fields.body);

      return {
        richTextHtml
      };
    },
    image() {
      return this.page.fields.image?.fields.file.url;
    }
  },
  head() {
    return {
      title: this.page.fields.title
    };
  }
};
</script>

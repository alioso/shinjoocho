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
        <Events class="content-text" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.name
    };
  },
  computed: {
    page() {
      const page = this.$store.state.pages.filter(
        (page) => page.fields.slug === this.slug
      );

      return page[0];
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

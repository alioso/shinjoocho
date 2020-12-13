<template>
  <section class="flex">
    <div class="icon-col">
      <nuxt-link to="/events" aria-label="Back to Events">
        <Left class="icon-left" />
      </nuxt-link>
    </div>
    <div>
      <h1>{{ event.fields.title }}</h1>
      <div class="flex my-8">
        <Cal class="cal-icon" />
        {{ $dateFns.format(event.fields.date, 'EEEE, MMMM d, yyyy') }}
      </div>
      <div v-if="event.fields.locationName" class="text-xl">{{ event.fields.locationName }}</div>
      <div v-if="event.fields.location">
        <a
          :href="`http://www.google.com/maps/place/${event.fields.location.lat},${event.fields.location.lon}`"
          target="_blank"
        >{{ event.fields.locationReadableAddress ? event.fields.locationReadableAddress : 'Open Map' }}</a>
      </div>
      <img
        v-if="event.fields.image"
        :src="event.fields.image.fields.file.url"
        :alt="event.fields.title"
        class="event-image"
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
.event-image {
  max-width: 540px;
  margin: 2rem 0;
}
</style>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Cal from '@/assets/icons/cal.svg?inline';
import Left from '@/assets/icons/left.svg?inline';

export default {
  components: {
    Cal,
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

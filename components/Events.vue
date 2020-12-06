<template>
  <div class="container">
    <div class="mb-12">
      <h2>Upcoming Events</h2>
      <div v-for="event in events" :key="event.fields.slug" class="my-6">
        <div
          v-if="
            $dateFns.format(event.fields.date) > $dateFns.format(new Date())
          "
        >
          <div class="flex items-center">
            <Cal class="cal-icon" />{{
              $dateFns.format(event.fields.date, 'EEEE, MMMM d, yyyy')
            }}
          </div>
          <nuxt-link
            :to="'/events/' + event.fields.slug"
            role="menuitem"
            class="cal-title"
          >
            <h3>{{ event.fields.title }}</h3>
          </nuxt-link>
          <div v-html="body(event.fields.body)" class="cal-text" />
        </div>
        <div
          v-else-if="
            !$dateFns.format(event.fields.date) < $dateFns.format(new Date())
          "
        >
          No Upcoming Events
        </div>
      </div>
    </div>
    <h2>Previous Events</h2>
    <div v-for="event in events" :key="event.fields.slug" class="mb-4">
      <div
        v-if="$dateFns.format(event.fields.date) < $dateFns.format(new Date())"
      >
        <div class="flex items-center">
          <Cal class="cal-icon" />
          {{ $dateFns.format(event.fields.date, 'EEEE, MMMM d, yyyy') }}
        </div>
        <nuxt-link
          :to="'/events/' + event.fields.slug"
          role="menuitem"
          class="cal-title"
        >
          <h3>{{ event.fields.title }}</h3>
        </nuxt-link>
        <p>{{ event.fields.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cal-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}

.cal-title {
  display: inline-block;
  margin-left: 36px;
  font-size: 18px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }
}

.cal-text p {
  margin: 0 0 0 36px;
}
</style>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Cal from '@/assets/icons/cal.svg?inline';

export default {
  components: {
    Cal
  },
  computed: {
    events() {
      return this.$store.state.events;
    }
  },
  methods: {
    truncate(text) {
      if (text.length > 120) {
        return text.substring(0, 120) + '...';
      } else {
        return text;
      }
    },
    body(body) {
      return this.truncate(documentToHtmlString(body));
    }
  }
};
</script>

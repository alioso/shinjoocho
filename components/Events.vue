<template>
  <div class="container">
    <div>
      <h2>Upcoming Events</h2>
      <div v-for="event in events" :key="event.fields.slug" class="mb-4">
        <nuxt-link
          v-if="
            $dateFns.format(event.fields.date) > $dateFns.format(new Date())
          "
          :to="'/events/' + event.fields.slug"
          role="menuitem"
        >
          <div>
            {{ $dateFns.format(event.fields.date, 'EEEE, MMMM d, yyyy') }}
          </div>
          <div>{{ event.fields.title }}</div>
        </nuxt-link>
      </div>
      <nuxt-link :to="'/events/previous'">See previous event(s)</nuxt-link>
    </div>
    <h1>Previous Events</h1>
      <div v-for="event in events" :key="event.fields.slug" class="mb-4">
        <nuxt-link
          v-if="
            $dateFns.format(event.fields.date) < $dateFns.format(new Date())
          "
          role="menuitem"
          :to="'/events/' + event.fields.slug"
        >
          <div>
            {{ $dateFns.format(event.fields.date, 'EEEE, MMMM d, yyyy') }}
          </div>
          <div>{{ event.fields.title }}</div>
        </nuxt-link>
      </div>
      <nuxt-link :to="'/events/upcoming'">See incoming event(s)</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    events() {
      return this.$store.state.events;
    }
  }
};
</script>

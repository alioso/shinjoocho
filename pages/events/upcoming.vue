<template>
  <div class="container">
    <div>
      <h1>Upcoming Events</h1>
      <div v-for="event in events" :key="event.fields.slug" class="mb-4">
        <nuxt-link
          :to="'/events/' + event.fields.slug"
          v-if="
            $dateFns.format(event.fields.date) > $dateFns.format(new Date())
          "
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

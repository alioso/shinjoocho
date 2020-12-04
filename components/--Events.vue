<template>
  <div>
    <ul>
      <li v-for="event in events" :key="event.fields.slug">
        {{ event.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      default: undefined
    }
  }
};
</script>

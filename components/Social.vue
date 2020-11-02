<template>
  <ul class="social-menu">
    <li>
      <a href="#" class="link">
        <Facebook />
      </a>
    </li>
    <li>
      <a href="#" class="link">
        <Instagram />
      </a>
    </li>
    <li>
      <a href="#" class="link">
        <YouTube />
      </a>
    </li>
  </ul>
</template>

<script>
import Facebook from '@/assets/icons/facebook.svg?inline';
import Instagram from '@/assets/icons/instagram.svg?inline';
import YouTube from '@/assets/icons/youtube.svg?inline';

export default {
  components: { Facebook, Instagram, YouTube }
};
</script>

<style lang="scss">
.social-menu {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 1.5rem;

  .link {
    margin-right: 1rem;
    display: inline-block;
  }

  svg {
    width: 32px;
    height: auto;

    * {
      fill: rgba(26, 32, 44, 0.8);
    }
  }
}
</style>

<template>
  <header class="header-container">
    <button
      class="menu-toggle p-8"
      aria-label="Toggle Menu"
      :class="[$store.getters['menu/menuOpen'] && 'active', !isHome && 'hid']"
      @click="onCloselick"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="header-sidebar">
      <div
        class="main-menu-content"
        :class="$store.getters['menu/menuOpen'] && 'active'"
      >
        <div class="main-menu-wrapper">
          <div @click="onLogoClick">
            <a href="/" class="title-link">
              <Title class="mt-4" />
            </a>
          </div>
          <Social />
          <ul v-if="pages" role="menu" class="main-menu">
            <li v-for="page in pages" :key="page.fields.slug" @click="onMenuItemClick">
              <nuxt-link
                :to="'/' + page.fields.slug"
                role="menuitem"
                :class="listItemsClassNames"
              >
                {{ page.fields.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    pages() {
      return this.$store.state.pages;
    },
    isHome() {
      return this.$route.path === '/';
    }
  },
  created() {
    const listItemsClassNames = 'header-link block lowercase mb-2 text-grey900';
    this.listItemsClassNames = listItemsClassNames;
  },
  methods: {
    onCloselick() {
      this.$store.dispatch(
        'menu/toggleMenu',
        !this.$store.getters['menu/menuOpen']
      );
      if (!this.isHome && !this.$store.getters['menu/menuOpen'] && !this.isMobile) {
        this.$router.push('/');
      }
    },
    onLogoClick(e) {
      e.preventDefault();
      setTimeout(() => {
        this.$store.dispatch('menu/toggleMenu', false);
      }, 225);

      this.$router.push('/');
    },
    onMenuItemClick() {
      if (this.isMobile) {
        this.$store.dispatch('menu/toggleMenu', false);
      }
    }
  }
};
</script>

<style lang="scss">
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.header-sidebar {
  padding: 4rem 0 4rem 4rem;
  position: relative;
  z-index: 100;
}

.main-menu {
  @apply inline-block
    z-10;
  /* margin-top: 2rem; */
  opacity: 1;
  font-size: 1.2rem;
  width: 300px;
  margin-left: -4rem;
  /* margin-top: 3rem; */
  padding: 4rem;
  list-style-type: none;

  a {
    transition: color 125ms ease-in-out;

    &:hover {
      @apply text-orange;
    }
    &.nuxt-link-active {
      @apply text-orange;
      font-weight: 700;
    }
  }
}

.main-menu-wrapper {
  transition: transform 225ms ease-in-out;

  @screen md {
    transform: translateY(-4rem);
  }
}

.main-menu-content {
  transform: translate(-100%, 0);
  transform-origin: 0% 0%;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
  height: 100vh;
  padding: 5rem 2rem 2rem;

  @screen md {
    background-color: rgba(255, 255, 255, 0.85);
  }
}

.main-menu-content.active {
  transform: none;
}

.main-menu.active {
  transform: none;
}

.menu-toggle {
  display: block;
  position: relative;
  z-index: 101;
  -webkit-user-select: none;
  user-select: none;
  appearance: none;
  opacity: 1;
  transition: opacity 225ms ease-in-out;

  &.hid {
    @screen md { 
      opacity: 0;
    }
  }
}

.title-link {
  :hover .main-title {
    @apply text-orange;
  }
}

.menu-toggle:focus {
  outline: 0;
}

.menu-toggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #f5f5f5;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

.menu-toggle span:first-child {
  transform-origin: 0% 0%;
}

.menu-toggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

.menu-toggle.active span {
  opacity: 1;
  transform: rotate(45deg) translate(-8px, -16px);
  background: #232323;
}

.menu-toggle.active span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.menu-toggle.active span:nth-last-child(2) {
  transform: rotate(-45deg) translate(-3px, 12px);
}
</style>

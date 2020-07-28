import client from '~/plugins/contentful';

export const state = () => ({
  pages: null,
  events: null,
  backgroundImages: null
});

export const mutations = {
  setPages: (state, pages) => {
    state.pages = pages;
  },
  setEvents: (state, events) => {
    state.events = events;
  },
  setBackgroundImages: (state, backgroundImages) => {
    state.backgroundImages = backgroundImages;
  }
};

export const actions = {
  async getPages({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: 'page'
      });
      if (response.items.length > 0) commit('setPages', response.items);
    } catch (err) {
      console.error(err);
    }
  },

  async getEvents({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: 'event'
      });
      if (response.items.length > 0) commit('setEvents', response.items);
    } catch (err) {
      console.error(err);
    }
  },

  async getBackgroundImages({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: 'backgroundImages'
      });
      if (response.items.length > 0)
        commit('setBackgroundImages', response.items);
    } catch (err) {
      console.error(err);
    }
  }
};

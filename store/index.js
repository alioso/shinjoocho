import client from '~/plugins/contentful';

export const state = () => ({
  pages: null,
  events: null,
  homeTiles: null
});

export const mutations = {
  setPages: (state, pages) => {
    state.pages = pages;
  },
  setEvents: (state, events) => {
    state.events = events;
  },
  setHomeTiles: (state, homeTiles) => {
    state.homeTiles = homeTiles;
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
      throw new Error(err);
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
      throw new Error(err);
    }
  },

  async getHomeTiles({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: 'homeTile'
      });
      if (response.items.length > 0) commit('setHomeTiles', response.items);
    } catch (err) {
      throw new Error(err);
    }
  }
};

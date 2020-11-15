export const state = () => ({
  menuOpen: false
});

export const mutations = {
  setMenuOpen: (state, menuOpen) => {
    state.menuOpen = menuOpen;
  }
};

export const actions = {
  toggleMenu({ commit }, state) {
    commit('setMenuOpen', state);
  }
};

export const getters = {
  menuOpen(state) {
    return state.menuOpen;
  }
};

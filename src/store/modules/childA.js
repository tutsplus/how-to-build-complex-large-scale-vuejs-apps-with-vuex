const state = {
  score: 0
};
const getters = {
  score(state) {
    return state.score
  }
};
const mutations = {
  increment(state, step) {
    state.score += step
  }
};
const actions = {
  incrementScore: ({ commit }, delay) => {
    setTimeout(() => {
      commit('increment', 3)
    }, delay)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
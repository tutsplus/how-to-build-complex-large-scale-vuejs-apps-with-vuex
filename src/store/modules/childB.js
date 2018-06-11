const state = {
  result: 3
};
const getters = {
  result(state) {
    return state.result
  }
};
const mutations = {
  increase(state, step) {
    state.result += step
  }
};
const actions = {
  increaseResult: ({ commit }, delay) => {
    setTimeout(() => {
      commit('increase', 6)
    }, delay)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
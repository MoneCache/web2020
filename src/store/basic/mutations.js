
export default {
  add(state, obj) {
    state.num += obj.count
  },

  reduce(state) {
    state.num --
  }
}
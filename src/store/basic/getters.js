import state from "./state"

export default {
  mylistData: (state) => {
    return state.listData.find(item => item.id === 1)
  },
  sum (state) {
    return 24 - state.num
  }
}
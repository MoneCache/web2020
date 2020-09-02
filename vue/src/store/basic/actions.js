import { resolve, reject } from "core-js/fn/promise"

export default {
  asyncModifyNum ({ getters, commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (getters.sum > 0) {
          commit('add', {count: 20})
          resolve()
          return
        }
        reject()
      }, 1000)
    })
  }
}
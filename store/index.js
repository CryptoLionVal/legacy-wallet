export const state = () => ({
  modal: false,
})

export const mutations = {
  show(state) {
    state.modal = true
  },
  hide(state) {
    state.modal = false
  },
}

export const state = () => ({
  dialog: {
    show: true,
    message: '',
  },
  step: 'first',
})

export const mutations = {
  showDialog(state) {
    state.dialog.show = true
  },
  hideDialog(state) {
    state.dialog.show = false
  },
  setStep(state, status) {
    state.step = status
  },
}

import Big from 'big.js'

export const state = () => ({
  dialog: {
    show: false,
    type: 'warning',
    message: '',
  },
  step: 'first',
  pin: 'TODO',
  encryptedWallet: null,
  balance: 0,
  rewards: 0,
  staked: 0,
  lastHash: '',
})

// TODO: refactor
export const mutations = {
  set: (state, { name, value }) => {
    state[name] = value
  },
  showDialog(state) {
    state.dialog.show = true
  },
  hideDialog(state) {
    state.dialog.show = false
  },
  setDialogMessage(state, message) {
    state.dialog.message = message
  },
  setDialogType(state, type) {
    state.dialog.type = type
  },
}

export const actions = {
  async initClient({ commit, state, dispatch }, mnemonic) {
    // TODO: check existence on session storage
    const encryptedWallet = await this.$chain.init(mnemonic, state.pin)

    commit('set', {
      name: 'encryptedWallet',
      value: encryptedWallet,
    })
    // TODO: save it on session storage

    await dispatch('fetchBalance')
    await dispatch('fetchRewards')
  },

  async fetchBalance({ commit, state }) {
    let balance = await this.$chain.client.getBalance(
      this.$chain.account.address,
      'base' + this.$chain.config('PREFIX')
    )

    balance = new Big(balance.amount)
    balance = balance.div(100000000)

    commit('set', {
      name: 'balance',
      value: balance.toPrecision(5),
    })
  },

  async fetchRewards({ commit, state }) {
    const account = await this.$axios.$get(
      this.$chain.config('EXPLORER_API') +
        '/accounts/' +
        this.$chain.account.address
    )

    if (account.result.totalRewards.length) {
      let rewards = new Big(account.result.totalRewards[0].amount)
      rewards = rewards.div(100000000)
      commit('set', {
        name: 'rewards',
        value: rewards.toPrecision(5),
      })

      let staked = new Big(account.result.bondedBalance[0].amount)
      staked = staked.div(100000000)
      commit('set', {
        name: 'staked',
        value: staked.toPrecision(5),
      })

      return
    }

    commit('set', {
      name: 'rewards',
      value: 0,
    })
  },

  async stake({ commit, state, dispatch }, amount) {
    const response = await this.$chain.delegate(
      amount * 100000000,
      state.encryptedWallet,
      state.pin
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    commit('set', {
      name: 'lastHash',
      value: response.transactionHash,
    })

    await dispatch('fetchBalance')
  },

  async withdraw({ state, dispatch }) {
    const response = await this.$chain.withdraw(
      state.encryptedWallet,
      state.pin
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    await dispatch('fetchBalance')

    dispatch('fetchRewards')
  },

  resetStore({ commit }) {
    commit('set', {
      name: 'step',
      value: 'first',
    })
    commit('set', {
      name: 'encryptedWallet',
      value: null,
    })
    commit('set', {
      name: 'balance',
      value: 0,
    })
    commit('set', {
      name: 'lastHash',
      value: '',
    })
  },

  resetDialog({ commit }) {
    commit('setDialogMessage', '')
    commit('setDialogType', 'warning')
  },
}

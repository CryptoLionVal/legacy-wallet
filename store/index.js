import Big from 'big.js'

export const state = () => ({
  dialog: {
    show: false,
    type: 'warning',
    message: '',
  },
  step: 'first',
  pin: '',
  confirmed: null,
  saved: null,
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
  async init({ commit, state, dispatch }, mnemonic) {
    // TODO: check existence on session storage
    const encryptedWallet = await this.$chain.init(mnemonic, state.pin)

    commit('set', {
      name: 'encryptedWallet',
      value: encryptedWallet,
    })
    // TODO: save it on session storage

    await dispatch('fetchBalances')
  },

  async fetchBalances({ commit, state }) {
    const account = await this.$axios.$get(
      this.$chain.config('EXPLORER_API') +
        '/accounts/' +
        this.$chain.account.address
    )

    if (account.result.totalRewards.length) {
      const rewards = new Big(account.result.totalRewards[0].amount)
        .div(100000000)
        .toPrecision(5)
      commit('set', {
        name: 'rewards',
        value: rewards > 0 ? rewards : 0,
      })
    }

    if (account.result.bondedBalance.length) {
      const staked = new Big(account.result.bondedBalance[0].amount)
        .div(100000000)
        .toPrecision(5)
      commit('set', {
        name: 'staked',
        value: staked > 0 ? staked : 0,
      })
    }

    if (account.result.balance.length) {
      const balance = new Big(account.result.balance[0].amount)
        .div(100000000)
        .toPrecision(5)
      commit('set', {
        name: 'balance',
        value: balance > 0 ? balance : 0,
      })
    }
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

    await dispatch('fetchBalances')
  },

  async withdraw({ state, dispatch }) {
    const response = await this.$chain.withdraw(
      state.encryptedWallet,
      state.pin
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    await dispatch('fetchBalances')
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
    commit('set', {
      name: 'pin',
      value: '',
    })
    commit('set', {
      name: 'confirmed',
      value: null,
    })
    commit('set', {
      name: 'saved',
      value: null,
    })
  },

  resetDialog({ commit }) {
    commit('setDialogMessage', '')
    commit('setDialogType', 'warning')
  },

  confirmPass({ commit }) {
    return new Promise((resolve) => {
      commit('set', {
        name: 'confirmed',
        value: resolve,
      })
    })
  },

  savePass({ commit }) {
    return new Promise((resolve) => {
      commit('set', {
        name: 'saved',
        value: resolve,
      })
    })
  },
}

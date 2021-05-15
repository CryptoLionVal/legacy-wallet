import Big from 'big.js'

export const state = () => ({
  dialog: {
    show: false,
    message: '',
  },
  step: 'first',
  validator: '',
  wallet: null,
  account: null,
  client: null,
  balance: 0,
  rewards: 0,
  staked: 0,
  lastHash: '',
  memo: 'Tx created via cryptolion.finance wallet.',
})

// TODO: refactor
export const mutations = {
  showDialog(state) {
    state.dialog.show = true
  },
  hideDialog(state) {
    state.dialog.show = false
  },
  setDialogMessage(state, message) {
    state.dialog.message = message
  },
  setStep(state, status) {
    state.step = status
  },
  setValidator(state) {
    state.validator = this.$chain.config('VALIDATOR')
  },
  setWallet(state, wallet) {
    state.wallet = wallet
  },
  setAccount(state, account) {
    state.account = account
  },
  setClient(state, client) {
    state.client = client
  },
  setBalance(state, balance) {
    state.balance = balance
  },
  setReward(state, rewards) {
    state.rewards = rewards
  },
  setStaked(state, staked) {
    state.staked = staked
  },
  setLastHash(state, lastHash) {
    state.lastHash = lastHash
  },
}

export const actions = {
  async initClient({ commit, state, dispatch }, mnemonic) {
    const wallet = await this.$chain.lion.setWallet(mnemonic)
    const account = (await wallet.getAccounts()).shift()

    commit('setWallet', wallet)
    commit('setAccount', account)

    const client = await this.$chain.lion.setClient()

    commit('setClient', client)

    await dispatch('fetchBalance')
    await dispatch('fetchRewards')

    commit('setValidator')
  },

  async fetchBalance({ commit, state }) {
    let balance = await this.$chain.lion.getBalance(state.account.address)

    balance = new Big(balance.amount)
    balance = balance.div(100000000)
    commit('setBalance', balance.toPrecision(5))
  },

  async fetchRewards({ commit, state }) {
    const account = await this.$axios.$get(
      this.$chain.config('EXPLORER_API') + '/accounts/' + state.account.address
    )

    if (account.result.totalRewards.length) {
      let rewards = new Big(account.result.totalRewards[0].amount)
      rewards = rewards.div(100000000)
      commit('setReward', rewards.toPrecision(5))

      let staked = new Big(account.result.bondedBalance[0].amount)
      staked = staked.div(100000000)
      commit('setStaked', staked.toPrecision(5))

      return
    }

    commit('setReward', 0)
  },

  async stake({ commit, state, dispatch }, amount) {
    const response = await this.$chain.lion.delegate(
      state.account.address,
      state.validator,
      amount * 100000000,
      state.memo
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    commit('setLastHash', response.transactionHash)

    await dispatch('fetchBalance')
  },

  async withdraw({ state, dispatch }) {
    const response = await this.$chain.lion.withdraw(
      state.account.address,
      state.validator,
      state.memo
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    await dispatch('fetchBalance')

    dispatch('fetchRewards')
  },

  resetStore({ commit }) {
    commit('setStep', 'first')
    commit('setWallet', null)
    commit('setClient', null)
    commit('setBalance', 0)
    commit('setLastHash', '')
  },
}

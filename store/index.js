import Lion from '@mcanvar/lion'
import Big from 'big.js'
import Chain from '@/plugins/core/Chain'

const chain = new Chain(process.env.CHAIN)

// TODO: move lion into chain plugin
const lion = new Lion(
  chain.config('HD_PATH'),
  chain.config('PREFIX'),
  chain.config('RPC')
)

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
  lastHash: '',
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
  setLastHash(state, lastHash) {
    state.lastHash = lastHash
  },
}

export const actions = {
  async initClient({ commit, state, dispatch }, mnemonic) {
    const wallet = await lion.setWallet(mnemonic)
    const account = (await wallet.getAccounts()).shift()

    commit('setWallet', wallet)
    commit('setAccount', account)

    const client = await lion.setClient()

    commit('setClient', client)

    await dispatch('fetchBalance')
    await dispatch('fetchRewards')

    commit('setValidator')
  },

  async fetchBalance({ commit, state }) {
    let balance = await lion.getBalance(state.account.address)

    balance = new Big(balance.amount)
    balance = balance.div(100000000)
    commit('setBalance', balance.toPrecision(5))
  },

  async fetchRewards({ commit, state }) {
    let rewards = await this.$axios.$get(
      this.$chain.config('EXPLORER_API') + '/accounts/' + state.account.address
    )

    if (rewards.result.totalRewards.length) {
      rewards = new Big(rewards.result.totalRewards[0].amount)
      rewards = rewards.div(100000000)
      commit('setReward', rewards.toPrecision(5))

      return
    }

    commit('setReward', 0)
  },

  async stake({ commit, state, dispatch }, amount) {
    const response = await lion.delegate(
      state.account.address,
      state.validator,
      amount * 100000000
    )

    if (response?.code && response.code !== 0) throw new Error(response.rawLog)

    commit('setLastHash', response.transactionHash)

    await dispatch('fetchBalance')
  },

  // TODO: fix balance reload issue
  async withdraw({ state, dispatch }) {
    const response = await lion.withdraw(state.account.address, state.validator)

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

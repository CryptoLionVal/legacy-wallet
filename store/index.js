import Lion from '@mcanvar/lion'
import Big from 'big.js'

const path = "m/44'/394'/0'/0/0"
const prefix = 'cro'
const RPC = 'https://mainnet.crypto.org:26657'
const lion = new Lion(path, prefix, RPC)

export const state = () => ({
  dialog: {
    show: false,
    message: '',
  },
  step: 'first',
  validator: 'crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
  wallet: null,
  client: null,
  balance: 0,
  lastHash: '',
})

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

    const client = await lion.setClient(state.RPC)

    commit('setClient', client)

    await dispatch('fetchBalance')
  },

  async fetchBalance({ commit, state }) {
    let balance = await lion.getBalance(state.account.address)

    balance = new Big(balance.amount)

    balance = balance.div(100000000)

    commit('setBalance', balance.toPrecision(5))
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

  resetStore({ commit }) {
    commit('setStep', 'first')
    commit('setWallet', null)
    commit('setClient', null)
    commit('setBalance', 0)
    commit('setLastHash', '')
  },
}

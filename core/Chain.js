import NetworksConfig from '@/networks.config'
import { Secp256k1HdWallet } from '@cosmjs/launchpad'
import { stringToPath } from '@cosmjs/crypto'
import { GasPrice, SigningStargateClient } from '@cosmjs/stargate'
import { coin } from '@cosmjs/proto-signing'

export default class Chain {
  constructor(chain, networks = NetworksConfig) {
    this._chain = chain
    this._networks = networks
    this.gasPrice = GasPrice.fromString('1base' + networks[chain].PREFIX)
    this.gasLimits = { send: 160000 }
    this._account = null
    this._client = null
  }

  get account() {
    return this._account
  }

  set account(account) {
    this._account = account
  }

  get client() {
    return this._client
  }

  set client(client) {
    this._client = client
  }

  config(key, network = null) {
    if (network) return this._networks[network][key]

    return this._networks[this._chain][key]
  }

  async init(mnemonic, pin) {
    const path = stringToPath(this.config('HD_PATH'))

    const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
      hdPaths: [path],
      prefix: this.config('PREFIX'),
    })

    this.account = (await wallet.getAccounts()).shift()

    if (this.account) {
      this.client = await SigningStargateClient.connectWithSigner(
        this.config('RPC'),
        wallet,
        {
          gasLimits: this.gasLimits,
          gasPrice: this.gasPrice,
        }
      )
    }

    return await wallet.serialize(pin)
  }

  async decryptWallet(serialized, pin) {
    return await Secp256k1HdWallet.deserialize(serialized, pin)
  }

  async delegate(
    transferAmount = 0,
    encrypted,
    pin,
    memo = 'Tx created via https://cryptolion.finance wallet.'
  ) {
    const amount = coin(transferAmount, 'base' + this.config('PREFIX'))

    return await this.client.delegateTokens(
      this.account.address,
      this.config('VALIDATOR'),
      amount,
      memo
    )
  }

  async withdraw(
    encrypted,
    pin,
    memo = 'Tx created via https://cryptolion.finance wallet.'
  ) {
    return await this.client.withdrawRewards(
      this.account.address,
      this.config('VALIDATOR'),
      memo
    )
  }
}

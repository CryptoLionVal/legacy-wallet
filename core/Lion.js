import { coin, coins, DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { stringToPath } from '@cosmjs/crypto'
import { SigningStargateClient, GasPrice } from '@cosmjs/stargate'
// import { Secp256k1HdWallet } from '@cosmjs/amino'
// import { LcdClient, setupBankExtension } from '@cosmjs/launchpad'

export default class Lion {
  constructor(path, prefix, rpcURL) {
    this.path = path
    this.prefix = prefix
    this.rpcURL = rpcURL
    this.gasLimits = { send: 160000 }
    this.balance = null
    this.client = null
    this.wallet = null
  }

  async setWalletFromMnemonic(mnemonic = '') {
    this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      mnemonic,
      stringToPath(this.path),
      this.prefix
    )

    return this.wallet
  }

  async setWallet(mnemonic = '') {
    this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      mnemonic,
      stringToPath(this.path),
      this.prefix
    )

    return this.wallet
  }

  async getAddress() {
    if (this.wallet) {
      return (await this.wallet.getAccounts()).shift()
    }

    return null
  }

  async setClient() {
    const gasPrice = GasPrice.fromString('1base' + this.prefix)

    if (this.wallet) {
      this.client = await SigningStargateClient.connectWithSigner(
        this.rpcURL,
        this.wallet,
        {
          gasLimits: this.gasLimits,
          gasPrice,
        }
      )
    }

    return this.client
  }

  async getBalance(address = '') {
    this.balance = await this.client.getBalance(address, 'base' + this.prefix)

    return this.balance
  }

  async send(sender = '', recipient = '', transferAmount = 0, memo = '') {
    const amount = coins(100000000, 'base' + this.prefix)

    return await this.client.sendTokens(sender, recipient, amount, memo)
  }

  async delegate(sender = '', validator = '', transferAmount = 0, memo = '') {
    const amount = coin(transferAmount, 'base' + this.prefix)

    return await this.client.delegateTokens(sender, validator, amount, memo)
  }

  async withdraw(delegator = '', validator = '', memo = '') {
    return await this.client.withdrawRewards(delegator, validator, memo)
  }
}

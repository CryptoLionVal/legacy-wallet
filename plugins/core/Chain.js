export default class Chain {
  constructor(env) {
    this.env = env
  }

  config(key, direct = false) {
    if (direct) return this.env[key]

    return this.env.ON_MAIN_NET ? this.env[key] : this.env['TESTNET_' + key]
  }
}

import Lion from '@mcanvar/lion'
import NetworksConfig from '@/networks.config'

export default class Chain {
  constructor(chain, networks = NetworksConfig) {
    this._chain = chain
    this._networks = networks
    this._lion = new Lion(
      networks[chain].HD_PATH,
      networks[chain].PREFIX,
      networks[chain].RPC
    )
  }

  get lion() {
    return this._lion
  }

  set lion(newLion) {
    this._lion = newLion
  }

  config(key, network = null) {
    if (network) return this._networks[network][key]

    return this._networks[this._chain][key]
  }
}

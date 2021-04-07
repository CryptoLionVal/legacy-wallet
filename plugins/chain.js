import Vue from 'vue'
import Chain from '@/core/Chain'

export default (context, inject) => {
  const chain = new Chain(context.env.CHAIN)

  Vue.prototype.$chain = chain

  inject('chain', chain)
}

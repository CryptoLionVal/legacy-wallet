import Vue from 'vue'
import Chain from '@/plugins/core/Chain'

export default (context, inject) => {
  const chain = new Chain(context.env)

  Vue.prototype.$chain = chain

  inject('chain', chain)
}
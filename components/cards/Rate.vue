<template>
  <button
    v-if="!hidden"
    type="button"
    :title="$t('navbar.rate.title')"
    class="
      inline-flex
      items-center
      px-4
      py-2
      text-sm
      leading-6
      font-bold
      rounded-full
      text-green-500
      bg-transparent
      focus:outline-none
      transition
      ease-in-out
      duration-150
    "
    @click="refresh"
  >
    <span
      :class="{ 'animate-ping': loading, 'animate-pulse': !loading }"
      class="inline-flex rounded-full h-2 w-2 bg-green-500 mr-2"
    ></span
    >{{ rate }}% p.a. | {{ commission }}% {{ $t('navbar.rate.fee') }}
  </button>
</template>

<script>
import Big from 'big.js'
import NetworksConfig from '@/networks.config'

export default {
  data() {
    return {
      ap: 1,
      delegated: 1,
      commission: 0,
      loading: true,
      hidden: true,
    }
  },
  computed: {
    rate() {
      return new Big((this.ap / this.delegated) * 100).toPrecision(4)
    },
  },
  async mounted() {
    await this.refresh()

    this.hidden = false
  },
  methods: {
    async refresh() {
      this.loading = true

      const ap = await this.$axios.$get(
        NetworksConfig[process.env.CHAIN].LCD +
          '/cosmos/mint/v1beta1/annual_provisions'
      )
      this.ap = parseInt(ap.annual_provisions)

      const delegated = await this.$axios.$get(
        NetworksConfig[process.env.CHAIN].EXPLORER_API + '/status',
        { crossdomain: true }
      )
      this.delegated = parseInt(delegated.result.totalDelegated[0].amount)

      const commission = await this.$axios.$get(
        NetworksConfig[process.env.CHAIN].EXPLORER_API +
          '/validators/' +
          NetworksConfig[process.env.CHAIN].VALIDATOR,
        { crossdomain: true }
      )
      this.commission = parseInt(commission.result.commissionRate * 100)

      this.loading = false
    },
  },
}
</script>

<style scoped></style>

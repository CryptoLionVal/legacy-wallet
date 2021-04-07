<template>
  <transition name="fade">
    <div
      v-if="$store.state.step === 'wallet'"
      class="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        class="flex flex-col w-full justify-center items-start text-left md:text-left"
      >
        <h1 class="my-6 text-5xl leading-tight flex flex-row items-center">
          <span class="font-bold">{{
            $t('pages.how_to_stake_cro.steps.wallet.title')
          }}</span>
        </h1>
        <div class="mt-6 text-3xl leading-tight flex flex-row items-center">
          <span class="font-bold">{{
            $t('pages.how_to_stake_cro.steps.wallet.available_balance')
          }}</span>
          <span class="ml-1">{{ balance }}</span>
          <button
            class="cursor-pointer"
            :disabled="loading || reloadingBalance"
            @click="reloadBalance"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="{
                'animate-spin': loading && reloadingBalance,
                'cursor-not-allowed': loading || reloadingBalance,
              }"
              class="ml-2 mr-3 text-teal-300 fill-current"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                class="heroicon-ui"
                d="M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z"
              />
            </svg>
          </button>
        </div>
        <div class="mb-6 text-3xl leading-tight flex flex-row items-center">
          <span class="font-bold">{{
            $t('pages.how_to_stake_cro.steps.wallet.rewards')
          }}</span>
          <span class="ml-1">{{ rewards }}</span>
          <button
            class="cursor-pointer text-teal-300 text-xs flex flex-row items-center"
            :disabled="loading || withdrawingRewards"
            :class="{
              'animate-pulse': loading && withdrawingRewards,
              'cursor-not-allowed': loading || withdrawingRewards,
            }"
            @click="withdrawRewards"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 mr-3 text-teal-300 fill-current"
              viewBox="0 0 327.9 327.9"
              width="24"
              height="24"
            >
              <path
                d="M325.7 113.6L214.3 2.2C212.9 0.8 211 0 209 0c-2 0-3.9 0.8-5.3 2.2L2.2 203.7c-2.9 2.9-2.9 7.7 0 10.6L113.6 325.7c1.4 1.4 3.3 2.2 5.3 2.2s3.9-0.8 5.3-2.2l201.5-201.5C328.6 121.2 328.6 116.5 325.7 113.6zM118.9 309.8L18.1 209 209 18.1l100.8 100.8L118.9 309.8z"
              />
              <path
                d="M163.9 130.4c-8.9 0-17.4 3.5-23.7 9.8 -13.1 13.1-13.1 34.3 0 47.4 6.3 6.3 14.7 9.8 23.7 9.8s17.4-3.5 23.7-9.8c13.1-13.1 13.1-34.3 0-47.4C181.3 133.9 172.9 130.4 163.9 130.4zM177 177c-3.5 3.5-8.1 5.4-13.1 5.4s-9.6-1.9-13.1-5.4c-7.2-7.2-7.2-18.9 0-26.2 3.5-3.5 8.1-5.4 13.1-5.4s9.6 1.9 13.1 5.4C184.2 158.1 184.2 169.8 177 177z"
              />
              <path
                d="M190.6 53.7c-2 0-3.9 0.8-5.3 2.2L55.9 185.3c-2.9 2.9-2.9 7.7 0 10.6 7.2 7.2 7.2 19 0 26.2 -2.9 2.9-2.9 7.7 0 10.6l39.2 39.2c1.4 1.4 3.3 2.2 5.3 2.2 2 0 3.9-0.8 5.3-2.2 3.5-3.5 8.1-5.4 13.1-5.4s9.6 1.9 13.1 5.4c1.4 1.4 3.3 2.2 5.3 2.2s3.9-0.8 5.3-2.2l129.4-129.4c2.9-2.9 2.9-7.7 0-10.6 -7.2-7.2-7.2-18.9 0-26.2 2.9-2.9 2.9-7.7 0-10.6l-39.2-39.2c-1.4-1.4-3.3-2.2-5.3-2.2 -2 0-3.9 0.8-5.3 2.2 -3.5 3.5-8.1 5.4-13.1 5.4 -4.9 0-9.6-1.9-13.1-5.4C194.5 54.5 192.6 53.7 190.6 53.7zM226.8 71.3l29.8 29.8c-6.8 10.8-6.8 24.7 0 35.6L136.7 256.6c-5.3-3.3-11.4-5.1-17.8-5.1s-12.5 1.8-17.8 5.1l-29.8-29.8c6.8-10.8 6.8-24.7 0-35.6L191.2 71.3c5.3 3.3 11.4 5.1 17.8 5.1S221.5 74.6 226.8 71.3z"
              />
            </svg>
            <span>{{
              $t('pages.how_to_stake_cro.steps.wallet.rewards_button')
            }}</span>
          </button>
        </div>
        <p
          class="leading-normal text-sm md:text-xl mb-8"
          v-html="$t('pages.how_to_stake_cro.steps.wallet.desc')"
        ></p>
      </div>
      <div class="w-full pt-1 pb-32 flex flex-col md:flex-row">
        <input
          v-model="amount"
          :disabled="loading"
          type="number"
          min="0"
          :max="parseInt($store.state.balance)"
          class="rounded-full w-full md:w-2/6 h-16 px-12 mb-3 font-extrabold text-xl py-4 text-primary normal-case focus:outline-none"
        />
        <button
          :disabled="!validAmount"
          :class="{
            'cursor-not-allowed': !validAmount,
            'transform-none': !validAmount,
            'hover:bg-green-400': !validAmount,
            'opacity-50': !validAmount,
          }"
          class="rounded-full flex flex-row h-16 justify-center w-full md:w-1/6 inline-block hover:bg-green-300 p-4 md:mx-6 bg-green-400 text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          @click="stake"
        >
          <svg
            v-if="!loading"
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary fill-current"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path
              class="heroicon-ui"
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
            />
          </svg>
          <svg
            v-else
            class="animate-spin -ml-1 mr-3 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span class="text-2xl">{{
            $t('pages.how_to_stake_cro.steps.wallet.button')
          }}</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      loading: false,
      reloadingBalance: false,
      withdrawingRewards: false,
    }
  },
  computed: {
    validAmount() {
      return (
        /^([0-9]*)$/.test(this.amount) &&
        this.amount > 0 &&
        this.amount <= parseInt(this.$store.state.balance) &&
        !this.loading
      )
    },
    balance() {
      return (
        this.$store.state.balance +
        ' ' +
        this.$chain.config('PREFIX').toUpperCase()
      )
    },
    rewards() {
      return (
        this.$store.state.rewards +
        ' ' +
        this.$chain.config('PREFIX').toUpperCase()
      )
    },
  },
  methods: {
    async stake() {
      this.loading = true

      try {
        await this.$store.dispatch('stake', this.amount)

        this.$store.commit('setStep', 'form')
      } catch (error) {
        this.$store.commit('setDialogMessage', error.message)
        this.$store.commit('showDialog')
      }

      this.loading = false
    },
    async withdrawRewards() {
      if (this.withdrawingRewards) return

      this.loading = true
      this.withdrawingRewards = true

      try {
        await this.$store.dispatch('withdraw')
      } catch (error) {
        this.$store.commit('setDialogMessage', error.message)
        this.$store.commit('showDialog')
      }

      this.loading = false
      this.withdrawingRewards = false
    },
    async reloadBalance() {
      if (this.reloadingBalance) return

      this.loading = true
      this.reloadingBalance = true

      try {
        await this.$store.dispatch('fetchBalances')
      } catch (error) {
        this.$store.commit('setDialogMessage', error.message)
        this.$store.commit('showDialog')
      }

      this.loading = false
      this.reloadingBalance = false
    },
  },
}
</script>

<template>
  <transition name="fade">
    <div
      v-if="$store.state.step === 'wallet'"
      class="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        class="flex flex-col w-full justify-center items-start text-left md:text-left"
      >
        <h1 class="my-12 text-5xl leading-tight flex flex-row items-center">
          <span>{{ $t('pages.how_to_stake_cro.steps.wallet.title') }}</span>
          <span class="font-bold ml-1">{{ balance }}</span>
          <a class="cursor-pointer" @click.prevent="reloadBalance">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="{ 'animate-spin': loading && reloadingBalance }"
              class="ml-2 mr-3 text-white fill-current"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path
                class="heroicon-ui"
                d="M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z"
              />
            </svg>
          </a>
        </h1>
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
    async reloadBalance() {
      if (this.reloadingBalance) return

      this.loading = true
      this.reloadingBalance = true

      try {
        await this.$store.dispatch('fetchBalance')
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

<template>
  <transition name="fade">
    <div
      v-if="$store.state.step === 'mnemonic'"
      class="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        class="flex flex-col w-full justify-center items-start text-center md:text-left"
      >
        <h1 class="my-12 text-5xl font-bold leading-tight">
          Lütfen gizli kelimelerinizi girin.
        </h1>
        <p class="leading-normal text-sm md:text-xl mb-8">
          <strong class="text-red-600">Sorumluluk reddi:</strong> Bu yöntemi
          kullanarak bütün sorumluğun size ait olduğunu kabul etmiş oluyorsunuz.
          Crypto Lion bu hizmeti yalnızca
          <strong class="text-green-500">https://cryptolion.finance</strong>
          adresinden sağlamaktadır. Cüzdan bilgileriniz hiçbir şekilde
          saklanmaz. Kaynak kodunu en altta yer alan bağlantıdan
          inceleyebilirsiniz.
        </p>
      </div>
      <div class="w-full pt-1 pb-32 flex flex-col md:flex-row">
        <textarea
          v-model="mnemonic"
          :disabled="loading"
          class="rounded-full w-full md:w-5/6 h-32 mb-3 px-12 focus:bg-yellow-100 font-extrabold text-xl py-4 text-primary normal-case focus:outline-none"
          cols="30"
          rows="5"
        ></textarea>
        <button
          :disabled="!validMnemonic"
          :class="{
            'cursor-not-allowed': !validMnemonic,
            'transform-none': !validMnemonic,
            'hover:bg-yellow-400': !validMnemonic,
            'opacity-50': !validMnemonic,
          }"
          class="rounded-full flex flex-row items-center md:flex-col h-16 md:h-32 justify-center w-full md:w-1/6 inline-block hover:bg-yellow-300 p-6 md:mx-6 bg-yellow-400 text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          @click="decryptWallet"
        >
          <svg
            v-if="!loading"
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary self-center stroke-2 fill-current"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path
              class="heroicon-ui"
              d="M9 10h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h2V7a5 5 0 1 1 10 0 1 1 0 0 1-2 0 3 3 0 0 0-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"
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
          <span class="text-2xl">Cüzdanımı Aç</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      mnemonic: '',
      loading: false,
    }
  },
  computed: {
    validMnemonic() {
      return (
        /^([a-z|\s]*)$/g.test(this.mnemonic) &&
        (this.mnemonic.split(' ').length === 12 ||
          this.mnemonic.split(' ').length === 24)
      )
    },
  },
  methods: {
    async decryptWallet() {
      this.loading = true

      try {
        await this.$store.dispatch('initClient', this.mnemonic)

        this.mnemonic = ''

        this.$store.commit('setStep', 'wallet')
      } catch (error) {
        this.$store.commit('setDialogMessage', error.message)
        this.$store.commit('showDialog')
      }

      this.loading = false
    },
  },
}
</script>

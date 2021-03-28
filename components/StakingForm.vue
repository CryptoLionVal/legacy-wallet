<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="fixed z-40 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white py-5">
            <button
              class="mr-2 mt-2 py-2 px-4 text-xl text-white absolute top-0 rounded-full close z-50 bg-red-500 opacity-25 hover:opacity-100"
              @click="$store.commit('hide')"
            >
              X
            </button>
            <div class="sm:flex sm:items-start ml-2 pt-4">
              <div
                class="text-center p-4 mx-5 sm:text-left rounded border-blue-900 border border-t-8"
              >
                <h2
                  id="modal-title"
                  class="text-xl leading-8 font-medium text-blue-900"
                >
                  Copy our staking address and delegate your CROs.
                </h2>
                <button class="mt-6 relative" @click="copy">
                  <code
                    aria-selected
                    class="bg-blue-300 text-black text-sm rounded-full p-4"
                  >
                    {{ addressText }}
                  </code>
                </button>
                <p class="text-blue-900 mt-6">
                  Then please fill the below form as a second step. Thank you
                  for choosing us.
                </p>
              </div>
            </div>
            <iframe
              v-if="form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSepTdC96GmAoXwPz6t1kuGaBYYyXzqPM7pKakRlnQhI0DMTww/viewform?embedded=true"
              width="516"
              height="500"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              >…</iframe
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      addressText: 'crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
      form: false,
      address: 'crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
    }
  },
  computed: {
    visible() {
      return this.$store.state.modal
    },
  },
  methods: {
    copy() {
      const textArea = document.createElement('textarea')
      textArea.style.position = 'fixed'
      textArea.style.top = 0
      textArea.style.left = 0
      textArea.style.width = '2em'
      textArea.style.height = '2em'
      textArea.style.padding = 0
      textArea.style.border = 'none'
      textArea.style.outline = 'none'
      textArea.style.boxShadow = 'none'
      textArea.style.background = 'transparent'
      textArea.value = this.address
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        document.execCommand('copy')

        this.addressText = 'Copied!'
        this.form = true

        setTimeout(() => (this.addressText = this.address), 1000)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('Oops, unable to copy')
      }

      document.body.removeChild(textArea)
    },
  },
}
</script>

<style scoped>
.close {
  top: -20px;
  right: -20px;
  z-index: 99999;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

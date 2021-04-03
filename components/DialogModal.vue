<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed z-50 inset-0 overflow-y-auto"
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
          <div class="bg-white p-5 w-full">
            <div class="flex flex-col pt-4">
              <h2 class="text-xl leading-8 font-medium text-blue-900">
                {{ $store.state.dialog.message }}
              </h2>
              <a
                class="rounded-full self-end flex flex-row content-center cursor-pointer justify-center w-1/5 p-1 mt-6 bg-transparent text-red-600 font-bold transform transition hover:scale-105 duration-200 ease-in-out"
                @click.prevent="$store.commit('hideDialog')"
              >
                <span class="text-xl">Kapat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.dialog.show
    },
  },
}
</script>

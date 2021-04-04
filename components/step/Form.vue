<template>
  <transition name="fade">
    <div>
      <div
        v-if="$store.state.step === 'form'"
        class="container px-8 flex flex-row w-full flex-wrap justify-start items-start text-left"
      >
        <h1
          class="my-10 text-5xl w-full font-bold text-green-700 leading-tight"
        >
          {{ $t('pages.how_to_stake_cro.steps.form.title') }}
        </h1>
        <h3 class="mb-4">
          {{ $t('pages.how_to_stake_cro.steps.form.desc') }}
        </h3>

        <a
          :href="'https://crypto.org/explorer/tx/' + $store.state.lastHash"
          target="_blank"
          class="text-gray-500 text-xxs mx-4 md:mx-0 md:m-8 break-all underline"
          >{{ $store.state.lastHash }}</a
        >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSepTdC96GmAoXwPz6t1kuGaBYYyXzqPM7pKakRlnQhI0DMTww/viewform?embedded=true"
          height="1000"
          width="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >…</iframe
        >

        <a
          class="rounded-full flex flex-row content-center cursor-pointer justify-center w-full md:w-2/5 p-1 md:mr-2 mt-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out"
          @click.prevent="$store.commit('setStep', 'wallet')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-800 fill-current"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path
              class="heroicon-ui"
              d="M14.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L11.42 12l3.3 3.3z"
            />
          </svg>
          <span class="text-xl">
            {{ $t('pages.how_to_stake_cro.back_button') }}
          </span>
        </a>

        <a
          :hidden="this.$store.state.client === null"
          class="rounded-full flex flex-row content-center cursor-pointer justify-center w-full md:w-1/5 p-1 mt-6 bg-red-600 mb-32 text-gray-200 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out"
          @click.prevent="$store.dispatch('resetStore')"
        >
          <span class="text-xl">
            {{ $t('pages.how_to_stake_cro.logout_button') }}
          </span>
        </a>
      </div>
      <div class="w-full pt-1 pb-32 flex flex-row"></div>
    </div>
  </transition>
</template>

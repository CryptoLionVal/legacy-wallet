<template>
  <transition name="fade">
    <div
      v-if="$store.state.step === 'form'"
      class="container px-3 flex flex-row w-full flex-wrap justify-start items-start text-center text-left"
    >
      <h1 class="my-12 text-5xl font-bold text-green-700 leading-tight">
        Aramıza hoşgeldiniz!
      </h1>
      <h3 class="mb-4">
        Stake işleminiz başarıyla tamamlandı. Bağlantıya tıklayarak resmi
        blokzincir tarayıcısında görüntüleyebilirsiniz.
      </h3>

      <a href="#" class="text-gray-600 text-xxs m-4 md:m-8 break-all underline"
        >F076A68CF2D298FC446293F1D1C3FF2D8EA468807731C2B4D79E47CAE09C79D8</a
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
        @click="$store.commit('setStep', 'wallet')"
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
        <span class="text-xl">Cüzdana Geri Dön</span>
      </a>

      <a
        class="rounded-full flex flex-row content-center cursor-pointer justify-center w-full md:w-1/5 p-1 mt-6 bg-red-600 mb-32 text-gray-200 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out"
        @click="$store.commit('setStep', 'wallet')"
      >
        <span class="text-xl">Çıkış yap</span>
      </a>
    </div>
    <div class="w-full pt-1 pb-32 flex flex-row"></div>
  </transition>
</template>

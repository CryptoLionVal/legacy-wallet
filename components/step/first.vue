<template>
  <transition name="fade">
    <div
      v-if="$store.state.step === 'first'"
      class="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        class="flex flex-col w-full justify-center items-start text-center md:text-left"
      >
        <h1 class="my-16 text-5xl font-bold leading-tight">
          Nasıl stake yapmak istiyorsunuz?
        </h1>
        <p class="leading-normal text-2xl mb-8">
          Lütfen stake yapmak için bir yöntem seçin. Kolay ve hızlı bir yöntem
          olarak cüzdanınızı buradan gizli kelimeleriniz ile açmanızı tavsiye
          ediyoruz.
        </p>
      </div>
      <div class="w-full pt-6 pb-32 flex flex-col md:flex-row">
        <button
          class="rounded-full flex flex-row content-center justify-center flex-1 p-6 m-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          @click="$store.commit('setStep', 'mnemonic')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-700 stroke-2 fill-current"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path
              class="heroicon-ui"
              d="M11.85 17.56a1.5 1.5 0 0 1-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 0 1-2-2v-2.59A2 2 0 0 1 2.59 16l5.56-5.56A7.03 7.03 0 0 1 15 2a7 7 0 1 1-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 1 0-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3z"
            />
          </svg>

          <span class="text-l md:text-3xl">Cüzdanımı mnemonic ile açarak</span>
        </button>
        <button
          class="rounded-full flex flex-row content-center justify-center flex-1 p-6 m-6 bg-white text-gray-800 font-bold shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          @click="$store.commit('setStep', 'desktop')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-700 stroke-2 fill-current"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path
              class="heroicon-ui"
              d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"
            />
          </svg>
          <span class="text-l md:text-3xl"
            >Resmi Masaüstü Cüzdanını Kurarak</span
          >
        </button>
      </div>
    </div>
  </transition>
</template>

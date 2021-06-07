<template>
  <section class="bg-gray-100 border-b py-10">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="
          w-full
          my-2
          text-5xl
          font-bold
          leading-tight
          text-center text-gray-800
        "
      >
        {{ $t('sections.why_us.title') }}
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div
          class="
            flex-1
            bg-white
            rounded-t rounded-b-none
            overflow-hidden
            shadow
          "
        >
          <div class="flex-1 rounded-t rounded-b-none overflow-hidden shadow">
            <div class="w-full p-8 text-3xl font-bold text-gray-800">
              {{ $t('sections.why_us.cards.first.title') }}
            </div>
            <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap no-underline hover:no-underline mt-3">
            <div class="w-full font-bold text-xl text-gray-800 px-8">
              {{ $t('sections.why_us.cards.first.subtitle') }}
            </div>
            <p class="text-gray-800 text-base px-8 my-5">
              {{ $t('sections.why_us.cards.first.desc') }}
            </p>
          </div>
        </div>
        <div
          class="
            flex-none
            mt-auto
            bg-white
            rounded-b rounded-t-none
            overflow-hidden
            shadow
            p-6
          "
        >
          <div class="flex items-center justify-center">
            <a
              href="https://explorer.nebkas.ro/validator/8F7012771B173B8DD2E7A9FBC9EAF7B1E3C055FB/missed/blocks"
              target="_blank"
              :title="$t('sections.why_us.cards.first.link.title')"
              class="
                mx-auto
                lg:mx-0
                gradient
                text-white
                font-bold
                rounded-full
                my-6
                py-4
                px-8
                shadow-lg
                focus:outline-none
                focus:shadow-outline
                transform
                transition
                hover:scale-105
                duration-300
                ease-in-out
              "
            >
              {{ $t('sections.why_us.cards.first.link.name') }}
            </a>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div
          class="
            flex-1
            bg-white
            rounded-t rounded-b-none
            overflow-hidden
            shadow
          "
        >
          <div class="flex-1 rounded-t rounded-b-none overflow-hidden shadow">
            <div class="w-full p-8 text-3xl font-bold text-gray-800">
              {{ $t('sections.why_us.cards.second.title') }}
            </div>
            <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap no-underline hover:no-underline mt-3">
            <div class="w-full font-bold text-xl text-gray-800 px-8">
              {{ $t('sections.why_us.cards.second.subtitle') }}
            </div>
            <p class="text-gray-800 text-base px-8 my-5">
              {{ $t('sections.why_us.cards.second.desc') }}
            </p>
          </div>
        </div>
        <div
          class="
            flex-none
            mt-auto
            bg-white
            rounded-b rounded-t-none
            overflow-hidden
            shadow
            p-6
          "
        >
          <div class="flex items-center justify-center">
            <a
              href="https://twitter.com/CryptoLionVal"
              target="_blank"
              :title="$t('sections.why_us.cards.second.link.title')"
              class="
                mx-auto
                lg:mx-0
                gradient
                text-white
                font-bold
                rounded-full
                my-6
                py-4
                px-8
                shadow-lg
                focus:outline-none
                focus:shadow-outline
                transform
                transition
                hover:scale-105
                duration-300
                ease-in-out
              "
            >
              {{ $t('sections.why_us.cards.second.link.name') }}
            </a>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div
          class="
            flex-1
            bg-white
            rounded-t rounded-b-none
            overflow-hidden
            shadow
          "
        >
          <div class="flex-1 rounded-t rounded-b-none overflow-hidden shadow">
            <div class="w-full p-8 text-3xl font-bold text-gray-800">
              {{ $t('sections.why_us.cards.third.title') }}
            </div>
            <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap no-underline hover:no-underline mt-3">
            <div class="w-full font-bold text-xl text-gray-800 px-8">
              {{ $t('sections.why_us.cards.third.subtitle') }}
            </div>
            <p class="text-gray-800 text-base px-8 my-5">
              {{ $t('sections.why_us.cards.third.desc') }}
            </p>
          </div>
        </div>
        <div
          class="
            flex-none
            mt-auto
            bg-white
            rounded-b rounded-t-none
            overflow-hidden
            shadow
            p-6
          "
        >
          <div class="flex items-center justify-center">
            <a
              href="https://crypto.org/explorer/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495"
              target="_blank"
              :title="$t('sections.why_us.cards.third.link.title')"
              class="
                mx-auto
                lg:mx-0
                gradient
                text-white
                font-bold
                rounded-full
                my-6
                py-4
                px-8
                shadow-lg
                focus:outline-none
                focus:shadow-outline
                transform
                transition
                hover:scale-105
                duration-300
                ease-in-out
              "
            >
              {{ $t('sections.why_us.cards.third.link.name') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

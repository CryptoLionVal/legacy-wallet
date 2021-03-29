<template>
  <section id="how-cro-staking-work" class="bg-white border-b py-10">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ $t('sections.how_to.title') }}
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 mt-8">
            {{ $t('sections.how_to.steps.first.title') }}
          </h3>
          <p
            class="text-gray-600 mb-8"
            v-html="$t('sections.how_to.steps.first.desc')"
          ></p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img
            class="w-5/6 sm:h-64 mx-auto"
            alt="Enjoy with 20% APY of CRO"
            src="@/assets/images/step-1.png"
          />
        </div>
      </div>
      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img
            class="w-5/6 sm:h-64 mx-auto"
            alt="Enjoy with 20% APY of CRO"
            src="@/assets/images/step-2.png"
          />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 mt-8">
              {{ $t('sections.how_to.steps.second.title') }}
            </h3>
            <p
              class="text-gray-600 mb-8"
              v-html="$t('sections.how_to.steps.second.desc')"
            ></p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 mt-8">
            {{ $t('sections.how_to.steps.third.title') }}
          </h3>
          <p
            class="text-gray-600 mb-8"
            v-html="$t('sections.how_to.steps.third.desc')"
          ></p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img
            class="w-5/6 sm:h-64 mx-auto"
            alt="Enjoy with 20% APY of CRO"
            src="@/assets/images/step-3.png"
          />
        </div>
      </div>
      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img
            class="w-5/6 sm:h-64 mx-auto"
            alt="Enjoy with 20% APY of CRO"
            src="@/assets/images/step-4.png"
          />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 mt-8">
              {{ $t('sections.how_to.steps.fourth.title') }}
            </h3>
            <p
              class="text-gray-600 mb-8"
              v-html="$t('sections.how_to.steps.fourth.desc')"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

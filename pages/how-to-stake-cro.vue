<template>
  <div>
    <section
      :id="$t('pages.how_to_stake_cro.steps_id')"
      class="bg-white border-b py-10 px-4"
    >
      <div class="container max-w-5xl mx-auto m-8">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          {{ $t('pages.how_to_stake_cro.title') }}
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>
        <div class="w-full mb-4">
          <div
            class="flex flex-wrap md:flex-no-wrap space-y-2 md:space-y-0 md:space-x-5 content-between"
          >
            <step-card
              v-for="step in $t('pages.how_to_stake_cro.steps')"
              :key="step.title"
              :title="step.title"
              :icon="step.icon"
              :desc="step.desc"
            />
          </div>
        </div>
        <div>
          <img
            class="rounded"
            alt="How to stake CRO"
            src="@/assets/images/staking.gif"
          />
        </div>
      </div>
    </section>

    <section-action />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Staking Explained',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Step by step explanation of staking CROs as a delegator to the Crypto Lion Crypto.org Mainnet node.',
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <section id="delegating-steps" class="bg-white border-b py-10">
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
        <div>
          <img alt="How to stake CRO" src="@/assets/images/staking.gif" />
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

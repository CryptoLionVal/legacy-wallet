<template>
  <div class="pt-24">
    <step-first />

    <step-desktop />

    <step-mnemonic />

    <step-defi />

    <step-wallet />

    <step-form />

    <divider />
  </div>
</template>

<script>
export default {
  layout: 'stake',
  data() {
    return {
      title: this.$t('pages.how_to_stake_cro.title'),
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

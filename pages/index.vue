<template>
  <div class="pt-24">
    <step-first />

    <step-mnemonic />

    <step-wallet />

    <step-final />

    <theme-divider />

    <div class="float-right text-xs mb-32 text-gray-300 mr-4">
      Crypto Lion Wallet v1.1.3
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('pages.wallet.title'),
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.wallet.meta_description'),
        },
      ],
    }
  },
}
</script>

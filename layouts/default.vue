<template>
  <div>
    <theme-navbar />

    <theme-hero />

    <Nuxt />

    <theme-footer />

    <address-copier />

    <cookie-box />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: this.$t('title_template'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta_description'),
        },
      ],
    }
  },
}
</script>

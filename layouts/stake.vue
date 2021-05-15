<template>
  <div>
    <theme-navbar />

    <Nuxt />

    <theme-footer />

    <address-copier />

    <dialog-modal />

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

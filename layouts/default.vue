<template>
  <div>
    <navbar />

    <area-hero />

    <Nuxt />

    <area-footer />

    <address-copier />
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

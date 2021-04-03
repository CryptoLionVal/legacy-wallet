<template>
  <div>
    <navbar />

    <Nuxt />

    <area-footer />

    <address-copier />

    <dialog />
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

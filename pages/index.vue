<template>
  <div>
    <section-how-to />

    <section-why-us />

    <section-f-a-qs />

    <section-action />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pages.home.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.home.meta_description'),
        },
      ],
    }
  },
}
</script>

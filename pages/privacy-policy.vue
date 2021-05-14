<template>
  <section class="bg-white border-b py-10">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ $t('pages.privacy.title') }}
      </h1>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        {{ $t('pages.privacy.content') }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('pages.privacy.title'),
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.privacy.meta_description'),
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      en: '/privacy-policy',
      tr: '/gizlilik-politikasi',
    },
  },
}
</script>

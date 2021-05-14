<template>
  <section class="bg-white border-b py-10">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ $t('pages.terms.title') }}
      </h1>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        {{ $t('pages.terms.content') }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('pages.terms.title'),
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.terms.meta_description'),
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      en: '/terms-and-conditions',
      tr: '/kurallar-ve-kosullar',
    },
  },
}
</script>

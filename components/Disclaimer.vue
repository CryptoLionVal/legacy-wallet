<template>
  <p class="leading-normal pb-32 text-sm md:text-xl mb-8 w-full">
    {{ $t('disclaimer.desc') }}
    <NuxtLink
      prefetch
      :to="localePath('terms-and-conditions')"
      class="underline hover:no-underline text-gray-200 hover:text-gray-200"
      :title="$t('pages.terms.title')"
      >{{ $t('pages.terms.title') }}</NuxtLink
    >
  </p>
</template>

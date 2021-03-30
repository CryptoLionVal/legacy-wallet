<template>
  <section :id="$t('sections.f_a_qs.id')" class="bg-white py-10">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ $t('sections.f_a_qs.title') }}
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="flex flex-col justify-center pb-4 px-12 my-12">
        <f-a-q
          v-for="(question, i) in $t('sections.f_a_qs.items')"
          :key="question.title"
          :title="question.title"
          :readable="i === 0"
          :seperate="question.separate"
          :desc="question.desc"
        >
        </f-a-q>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

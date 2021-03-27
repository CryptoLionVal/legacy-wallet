<template>
  <div class="flex flex-wrap pb-4">
    <div class="w-full font-bold text-xl text-gray-800 px-6">
      Lorem ipsum dolor sit amet.
      <svg
        class="float-right text-xl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        />
      </svg>
    </div>
    <p class="text-gray-800 text-base px-6 mb-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum
      eu nunc commodo posuere et sit amet ligula.
    </p>

    <div v-if="seperate" class="separator w-full gradient my-0 mx-6"></div>
  </div>
</template>

<script>
export default {
  props: {
    seperate: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.separator {
  height: 0.06rem;
}
</style>

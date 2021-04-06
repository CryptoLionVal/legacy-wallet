<template>
  <div
    class="flex items-center py-1 px-2 cursor-pointer bg-opacity-25 flex-initial space-x-1 rounded-full"
    :class="{ 'bg-gray-500': loaded }"
    @click="showDesc = true"
  >
    <span :class="statusClass" class="p-1 rounded-full bg-gray-600"></span>
    <span
      class="text-sm text-primary font-thin"
      :class="{ 'animate-pulse': !loaded }"
    >
      {{ name }}
      <span :class="{ hidden: !showDesc }"
        >: Missed {{ this.missed }} blocks in last {{ this.gap }} blocks.</span
      >
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    rpc: {
      type: String,
      default: 'https://mainnet.crypto.org:26657',
    },
    validator: {
      type: String,
      default: '8F7012771B173B8DD2E7A9FBC9EAF7B1E3C055FB',
    },
  },
  data() {
    return {
      height: 0,
      gap: 10,
      missed: 0,
      loaded: false,
      showDesc: false,
    }
  },
  computed: {
    statusClass() {
      if (!this.loaded) return 'animate-ping'
      else if (this.missed === 0 && this.loaded) return 'bg-green-600'
      else if (this.missed < 10 && this.loaded) return 'bg-yellow-600'

      return 'bg-red-600'
    },
  },
  async mounted() {
    try {
      const commit = await this.$axios.$get(this.rpc + '/commit')

      this.height = parseInt(commit.result.signed_header.header.height) - 2

      for (
        let height = this.height;
        height > this.height - this.gap;
        height--
      ) {
        if (await this.checkBlock(height)) continue

        this.missed++
      }
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async checkBlock(height) {
      const block = await this.$axios.$get(this.rpc + '/block?height=' + height)

      if (
        block.result.block.last_commit.signatures.some(
          (signature) => signature.validator_address === this.validator
        )
      )
        return true

      return false
    },
  },
}
</script>

<style scoped></style>

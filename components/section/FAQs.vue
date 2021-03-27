<template>
  <section id="f-a-qs" class="bg-white py-10">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        FAQs
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="flex flex-col justify-center pb-4 px-12 my-12">
        <f-a-q title="How can I stake?" seperate>
          You can use Crypto.com's Desktop wallet to stake. Visit
          <a
            class="underline"
            href="https://github.com/crypto-com/chain-desktop-wallet/releases"
            target="_blank"
            >this</a
          >
          link to download latest version and after installation click "Stake
          Now" button on navbar.
        </f-a-q>
        <f-a-q title="How often can I claim my rewards?" seperate>
          You can withdraw your CROs whatever often you want. There is no limit
          for this operation.
        </f-a-q>
        <f-a-q
          title="Is there a cool-down time when I want to undelegate my funds?"
        >
          Yes. You can undelegate whenever you want but there is 28 days
          cool-down time to be available your CROs back to your delegator
          wallet.
        </f-a-q>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

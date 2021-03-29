export default {
  title_template: 'Crypto Lion Validator on CDC Chain Mainnet | %s',
  meta_description:
    'Crypto Lion is a blockchain validator running on Crypto.org Main-net Chain. ' +
    'You can make passive income by staking your CROs on it.',

  pages: {
    home: {
      title: 'Home',
    },
    how_to_stake_cro: {
      title: 'Staking Explained',
    },
  },

  navbar: {
    logo: {
      link: {
        title: 'Crypto Lion CRO Validator',
      },
    },
    links: [
      {
        name: 'Home',
        title: 'Crypto Lion Homepage',
        href: '/#validator-home',
      },
      {
        name: 'How staking work?',
        title: 'Simple steps of CRO staking',
        href: '/#how-cro-staking-work',
      },
      {
        name: 'Staking Explained',
        title: 'How to stake CROs on Main-net, Explained',
        href: { path: 'how-to-stake-cro' },
      },
      {
        name: 'FAQs',
        title: 'Frequently Asked Questions About CDC Main-net',
        href: '/#f-a-qs',
      },
    ],
  },

  stake_now: {
    name: 'Stake Now',
    title: 'Stake your CROs to get your rewards!',
  },

  copier: {
    title: 'Click to copy delegation address.',
    message: 'Copy Staking Address',
    done_message: 'Copied!',
  },

  hero: {
    pre_title: `CRO Mainnet Staking Rewards Set at <span class="font-bold">20%</span> APY`,
    title: 'Time for Crypto.org Chain Mainnet!',
    desc: `
    <span class="font-bold">5 billion</span> CRO has been allocated for
            distribution as rewards over the next
            <span class="font-bold">10 years</span>.
    `,
  },

  sections: {
    how_to: {
      title: 'How staking work?',
      steps: {
        first: {
          title: 'Hold CRO token and earn interest at the same time!',
          desc: `
            You already have some CRO in your wallet. Great! because fully
            decentralized Crypto.org Chain offers you
            <span class="font-bold">20%</span> APY
            <br />
            <br />
            Official source:

            <a
              class="text-pink-500 underline"
              target="_blank"
              href="https://blog.crypto.com/cro-mainnet-staking-rewards-set-at-20-apy/"
              >CRO Mainnet Staking Rewards</a
            >
          `,
        },
        second: {
          title: 'Create a brand new Crypto.org Wallet',
          desc: `
              You can delegate your CROs in minutes. Just download latest
              official desktop wallet below link and join the party!
              <br />
              <br />
              Download from:

              <a
                class="text-pink-500 underline"
                target="_blank"
                href="https://github.com/crypto-com/chain-desktop-wallet/releases"
                >Crypto.org Chain Desktop Wallet</a
              >
          `,
        },
        third: {
          title: 'Delegate your CROs on Crypto Lion Node',
          desc: `
            Open the Wallet App then select
            <span class="font-bold">Staking</span> tab, then switch
            <span class="font-bold">Delegate Funds</span> tab on, copy our node
            address from right top of this website and paste in
            <span class="font-bold">Validator address</span>
            area. Review and accept.
          `,
        },
        fourth: {
          title: 'Enjoy with 20% APY!',
          desc: `
              Tadaa! You have just staked your funds. Now you can have a look at
              the transaction on our node's page and tract your rewards.
              <br />
              <br />
              Our Validator's Page:

              <a
                class="text-pink-500 underline"
                target="_blank"
                href="https://crypto.org/explorer/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495"
                >Crypto Lion Node on Crypto.org Chain</a
              >
          `,
        },
      },
    },
    why_us: {
      title: 'Why Crypto Lion Node?',
      cards: {
        first: {
          title: 'Powerful Infrastructure',
          subtitle: 'We are using latest firmware and software.',
          desc:
            'We are using dedicated servers with industry standard high internet connection with latest version operating systems.',
          link: {
            name: 'See Statistics',
            title: 'See how the validator performs on blockchain',
          },
        },
        second: {
          title: 'Community Supported',
          subtitle: 'We are from big Crypto.com family.',
          desc:
            'We are people from the turkish community of CDC. We care friendly medium and love to meet new crypto lovers.',
          link: {
            name: 'Checkout Twitter',
            title: 'Follow us on Twitter!',
          },
        },
        third: {
          title: 'Reliable',
          subtitle: 'We are also delegators of our node.',
          desc:
            'We are also delegators of our node. Hundred thousands of CROs already staked on our validator.',
          link: {
            name: 'Our Delegators',
            title: 'See wallets of people who chosen us',
          },
        },
      },
    },
    f_a_qs: {
      title: 'FAQs',
      items: [
        {
          title: 'How can I stake?',
          desc: `
          You can use Crypto.com's Desktop wallet to stake. Visit
          <a
            class="underline"
            href="https://github.com/crypto-com/chain-desktop-wallet/releases"
            target="_blank"
            >this</a
          >
          link to download latest version and after installation click "Stake
          Now" button on navbar.
          `,
          separate: true,
        },
        {
          title: 'How often can I claim my rewards?',
          desc: `
          You can withdraw your CROs whatever often you want. There is no limit
          for this operation.
          `,
          separate: true,
        },
        {
          title:
            'Is there a cool-down time when I want to undelegate my funds?',
          desc: `
          Yes. You can undelegate whenever you want but there is 28 days
          cool-down time to be available your CROs back to your delegator
          wallet.
          `,
          separate: false,
        },
      ],
    },
    action: {
      title: 'Start Enjoying the Benefits of Staking',
      subtitle: 'Earn interest almost 20%!',
    },
  },

  form: {
    title: 'Copy our staking address and delegate your CROs.',
    desc:
      'Then please fill the below form as a second step. Thank you for choosing us.',
  },

  footer: {
    logo: {
      link: {
        title: 'Crypto Lion CRO Validator',
      },
    },
    groups: [
      {
        name: 'Validator',
        links: [
          {
            name: 'Terms',
            title: 'Crypto Lion Homepage',
            target: '_self',
            href: '#',
          },
          {
            name: 'Statistics',
            title: 'Simple steps of CRO staking',
            target: '_self',
            href:
              'https://explorer.nebkas.ro/validator/8F7012771B173B8DD2E7A9FBC9EAF7B1E3C055FB/missed/blocks',
          },
        ],
      },
      {
        name: 'Social',
        links: [
          {
            name: 'Twitter',
            target: '_blank',
            title: 'Crypto Lion Validator Twitter Address',
            href: 'https://twitter.com/CryptocomLion',
          },
          {
            name: 'Telegram',
            title: 'Contact with staff on Telegram',
            target: '_blank',
            href: 'https://web.telegram.org/#/im?p=@mcanvar',
          },
          {
            name: 'Write Us',
            title: 'Email us what you are thinking',
            target: '_self',
            href: 'mailto:cryptolion-node@protonmail.com',
          },
        ],
      },
      {
        name: 'Official Resources',
        links: [
          {
            name: 'Crypto.org',
            target: '_blank',
            title: 'Crypto.org Chain',
            href: 'https://crypto.org/',
          },
          {
            name: 'Crypto.org Chain Docs',
            title: 'Crypto.org Chain Documentation',
            target: '_blank',
            href: 'https://crypto.org/docs/',
          },
        ],
      },
      {
        name: 'Networks',
        links: [
          {
            name: 'on Main-net Explorer',
            target: '_blank',
            title: 'Crypto.org Chain Main-net Explorer',
            href:
              'https://crypto.org/explorer/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
          },
          {
            name: "on Nebkas's Explorer",
            target: '_blank',
            title: "Nebkas.ro's Main-net Explorer",
            href:
              'https://explorer.nebkas.ro/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
          },
          {
            name: 'on Croeseid Testnet Explorer',
            target: '_blank',
            title: 'Crypto.org Croeseid Testnet Explorer',
            href:
              'https://crypto.org/explorer/croeseid/validator/tcrocncl1valsdtujgugsfhwuh8twkqpuxhr5486nlvk4ew',
          },
        ],
      },
    ],
    copyright: `
        All rights reserved. We are happy to share the source code on
        <a
          href="https://github.com/mcanvar/crypto-lion"
          title="A powerful CDC Chain Mainnet Node for staking purpose."
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >GitHub</a
        >. Feel free to make a PR, fork and use it for your non-commercial
        purposes. May the world is a better place with our open ♥️.
    `,
  },
}

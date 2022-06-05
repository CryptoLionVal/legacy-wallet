/* eslint-disable prettier/prettier */
export default {
  title_template: `Crypto Lion Wallet | %s`,
  meta_description:
    `Crypto Lion Wallet is a blockchain web wallet. You can make passive income by staking your CROs on it.`,

  pages: {
    terms: {
      title: `Terms & Conditions`,
      meta_description: `Terms & Conditions of using Crypto Lion Staking Service`,
      content: `
      <h2 class="text-3xl">General</h2>
      <br>
      <p>
      Each user responsible for their delegated CROs. Crypto Lion under no circumstances accept any responsibility.
      In order to get news about updates and possible downtimes consider following us from Twitter or Telegram.
      </p>
      <br>
      <h2 class="text-3xl">Wallet Service</h2>
      <br>
      <p>
      Our wallet software reliable and safe for end users. When you open your wallet with your secret words, we are going
      to ask you a 6 digit number PIN to securely encrypt it and save to the session storage. Both encrypted wallet and hashed
      user PIN stored on users computer until session end or user decide to close their wallet. Please follow the link on the footer
      named GitHub in order to review our open source wallet code.
      </p>
      <br>
      <p>
          <strong class="text-red-600">Disclaimer:</strong> By using this option,
          you are accepting that all responsibility belongs to you.
          Crypto Lion only serve this option on
          <strong class="text-green-500">https://cryptolion.finance</strong>
          address. Please beware of scammers. We never store any data of you, and your wallet.
          You can check our open source code from the link on footer.
      </p>
      `,
    },
    privacy: {
      title: `Privacy Policy`,
      meta_description: `Privacy Policy of using Crypto Lion Staking Service`,
      content: `
      <h2 class="text-3xl">Cookies</h2>
      <br>
      <p>
      Cookies are small text files that are placed on your computer by websites that you visit.
      </p>
      <p>
      If you choose to accept the use of cookies, we will use Google Analytics in order to collect information on how you are using the website.
      </p>
      <p>
      Such information will allow us to improve the website.
      </p>
      <p>
      You can read an overview of Google's privacy policy
      <a class="underline"
      rel="nofollow"
      href="https://policies.google.com/technologies/partner-sites?hl=en-GB&amp;gl=uk"
      target="_blank">here</a>.
      </p>
      <p>
      These information will not be collected if you deny the use of cookies.
      </p>
      <br>
      <h2 class="text-3xl">Browser Session Storage</h2>
      <br>
      <p>
      Session Storage API lets us store data on user's modern browser in order to achieve temporary data storage. Crypto Lion
      Wallet stores below datas on user's computer since user open their wallet. For details please refer this
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"
        title="MDN Session Storage"
        rel="nofollow"
        class="underline"
        target="_blank">link</a>.
      <br>
      <br>
      <ul>
        <li><strong>lion_account_address</strong>: Wallet address data</li>
        <li><strong>lion_encrypted_wallet</strong>: Encrypted wallet data via PIN</li>
        <li><strong>lion_encrypted_pin</strong>: 6 digit hashed PIN</li>
      </ul>
      </p>
      `,
    },
    wallet: {
      title: `Staking Explained`,
      meta_description: `Step by step explanation of staking CROs as a delegator to the Crypto Lion Crypto.org Main-net node.`,
      steps_id: `staking-steps`,
      back_button: `Go back`,
      logout_button: `Logout`,
      logout_confirm: `You will be remove your wallet. Please confirm.`,
      dialog_button: `Close`,
      steps: {
        first: {
          title: `How would you like to stake?`,
          desc: `Please choose a comfortable way to stake. It is easy to stake your CROs here in the Crypto Lion Website. Feel free to check source code, we are open source.`,
          buttons: {
            defi: `Install Mobile DeFi Wallet App`,
            mnemonic: `Access Wallet with Mnemonic`,
            desktop: `Download CDC Desktop Wallet`
          }
        },
        defi: {
          steps: [
            {
              title: `Install DeFi App`,
              desc: `
          Android:
          <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.com DeFi Wallet Android Application"
                href="https://play.google.com/store/apps/details?id=com.defi.wallet"
                >Play Store</a
          >
          <br>
          iOS:
          <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.com DeFi Wallet iOS Application"
                href="https://apps.apple.com/us/app/crypto-com-l-defi-wallet/id1512048310"
                >App Store</a
          >
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"/>
            </svg>
          `,
              next: true
            },
            {
              title: `Import or Create Wallet`,
              desc: `
          Create or import a new wallet with your mnemonic keys.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11.85 17.56a1.5 1.5 0 0 1-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 0 1-2-2v-2.59A2 2 0 0 1 2.59 16l5.56-5.56A7.03 7.03 0 0 1 15 2a7 7 0 1 1-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 1 0-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3z"/>
            </svg>
          `,
              next: true
            },
            {
              title: `Stake your Funds`,
              desc: `
          Select staking tab and click delegate and paste our address.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path
                    d="M17.62 10H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 0 1 5 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 0 0-.93 1.36l3.5 7.02a1 1 0 0 0 .93.62H16v-8.76zm2 .76v8h2v-8h-2z" />
            </svg>
          `,
              next: false
            }
          ]
        },
        desktop: {
          steps: [
            {
              title: `DownLoad Desktop Wallet`,
              desc: `
          Download:
              <a
                class="text-pink-500 underline"
                target="_blank"
                href="https://github.com/crypto-com/chain-desktop-wallet/releases"
                >Crypto.org Chain Desktop Wallet</a
              >
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"/>
            </svg>
          `,
              next: true
            },
            {
              title: `Import or Create Wallet`,
              desc: `
          Create or import a new wallet with your mnemonic keys.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11.85 17.56a1.5 1.5 0 0 1-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 0 1-2-2v-2.59A2 2 0 0 1 2.59 16l5.56-5.56A7.03 7.03 0 0 1 15 2a7 7 0 1 1-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 1 0-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3z"/>
            </svg>
          `,
              next: true
            },
            {
              title: `Stake your Funds`,
              desc: `
          Select staking tab and click delegate and paste our address.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path
                    d="M17.62 10H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 0 1 5 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 0 0-.93 1.36l3.5 7.02a1 1 0 0 0 .93.62H16v-8.76zm2 .76v8h2v-8h-2z" />
            </svg>
          `,
              next: false
            }
          ]
        },
        mnemonic: {
          title: `Please enter your mnemonic phrase.`,
          desc: ``,
          button: `Access Wallet`
        },
        wallet: {
          title: `My Wallet`,
          explorer: `Show in Explorer`,
          staked_balance: `Delegated Balance:`,
          available_balance: `Available Balance:`,
          rewards: `Rewards:`,
          rewards_button_title: `Withdraw all`,
          renew_button_title: `Renew`,
          rewards_confirm: `All rewards will be withdrawn. Please confirm.`,
          stake_confirm: `The amount will be staked. Please confirm.`,
          desc: ``,
          button: `Delegate`
        },
        final: {
          title: `Staked successfully!`,
          desc: `
          Congratulations, you have just completed staking process. You can now click
          below link in order to see further details on official blockchain explorer.
          Please follow us on Twitter & Telegram in order to get news and promotions.
          `,
          buttons: {
            telegram: `Crypto Lion Telegram Channel`,
            twitter: `Crypto Lion Twitter Page`,
          }
        },
      }
    }
  },

  navbar: {
    logo: {
      link: {
        title: `Crypto Lion Wallet`
      }
    },
    links: [
      {
        name: `Home`,
        title: `Crypto Lion Homepage`,
        href: `/en/#validator-home`
      }
    ],
    rate: {
      title: `Current rewards p.a. & validator commissions. Click to renew!`,
      fee: `fee`,
    }
  },

  disclaimer: {
    desc: `By using this wallet service, you are accepting our `,
  },

  dialog: {
    messages: {
      password: `Please enter a 6 digit number password to secure your wallet during the session: `,
      confirm: `Please confirm your password:`,
      wrong: `Wrong password, please try again.`,
      unlock: `Please enter your pin:`,
    },
    buttons: {
      close: `Close`,
    },
  },

  cookie: {
    message: `Could we use cookies for analytics? To read details please visit our
        privacy policy page.`,
    accept_button: `Yes`,
    deny_button: `No`
  },

  footer: {
    logo: {
      link: {
        title: `Crypto Lion CRO Validator`
      }
    },
    groups: [
      {
        name: `Validator`,
        links: [
          {
            name: `Terms & Conditions`,
            title: `Terms & Conditions`,
            target: `_self`,
            href: `terms-and-conditions`
          },
          {
            name: `Privacy Policy`,
            title: `Privacy Policy`,
            target: `_self`,
            href: `privacy-policy`,
          },
          {
            name: `Status`,
            title: `Status of both maın and test net servers`,
            target: `_blank`,
            href:
              `https://cryptolion.freshstatus.io/`
          }
        ]
      },
      {
        name: `Social`,
        links: [
          {
            name: `Twitter`,
            target: `_blank`,
            title: `Crypto Lion Validator Twitter Address`,
            href: `https://twitter.com/CryptoLionVal`
          },
          {
            name: `Telegram`,
            title: `Follow us from our Telegram channel`,
            target: `_blank`,
            href: `https://t.me/CryptoLionValidator`
          },
          {
            name: `Write Us`,
            title: `Email us what you are thinking`,
            target: `_self`,
            href: `mailto:cryptolion-node@protonmail.com`
          }
        ]
      }
    ],
    copyright: `
        All rights reserved. We are happy to share the source code on
        <a
          href="https://github.com/CryptoLionVal/legacy-wallet"
          title="A Cosmos Wallet for staking purpose."
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >GitHub</a
        >. Feel free to make a PR, fork and use it for your projects. May the world is a better place with our open ♥️.
    `
  }
};

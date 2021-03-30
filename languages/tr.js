export default {
  title_template: 'Crypto Lion CDC Main-net Blokzincirinde | %s',
  meta_description:
    'Crypto Lion Crypto.org üzerinde çalışan bir imzalayıcıdır(validator).' +
    ' Bu doğrulayıcıya CROlarınızı yatırarak(staking) pasif gelir elde edebilirsiniz.',

  pages: {
    home: {
      title: 'Anasayfa',
    },
    how_to_stake_cro: {
      title: 'Nasıl stake edilir?',
      steps: [
        {
          title: 'Masaüstü Cüzdanı İndirin',
          desc: `
          Link:
              <a
                class="text-pink-500 underline"
                target="_blank"
                href="https://github.com/crypto-com/chain-desktop-wallet/releases"
                >Crypto.org Masaüstü Cüzdan</a
              >
          `,
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"/>
            </svg>
          `,
          next: true,
        },
        {
          title: 'İçeri Aktar veya Yeni Oluştur',
          desc: `
          Gizli kelimeleriniz ile cüzdanınızı içeri aktarın veya yeni bir tane oluşturun.
          `,
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11.85 17.56a1.5 1.5 0 0 1-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 0 1-2-2v-2.59A2 2 0 0 1 2.59 16l5.56-5.56A7.03 7.03 0 0 1 15 2a7 7 0 1 1-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 1 0-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3z"/>
            </svg>
          `,
          next: true,
        },
        {
          title: 'Yatırımınızı Stake Edin',
          desc: `
           Stake sekmesine gidin ve cüzdan adresimizi yapıştırın.
          `,
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path
                    d="M17.62 10H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 0 1 5 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 0 0-.93 1.36l3.5 7.02a1 1 0 0 0 .93.62H16v-8.76zm2 .76v8h2v-8h-2z" />
            </svg>
          `,
          next: false,
        },
      ],
    },
  },

  navbar: {
    logo: {
      link: {
        title: 'Crypto Lion CRO Node',
      },
    },
    links: [
      {
        name: 'Anasayfa',
        title: 'Crypto Lion Anasayfa',
        href: '/#validator-anasayfa',
      },
      {
        name: 'Staking nasıl çalışıyor?',
        title: '4 basit adımda CRO stake etmeyi öğrenin.',
        href: '/#cro-stake-adimlari',
      },
      {
        name: 'Nasıl stake edilir?',
        title: 'CRO koinlerinizi nasıl stake edeceğinizi öğrenin.',
        href: { path: 'how-to-stake-cro' },
      },
      {
        name: 'SSS',
        title: 'CDC Main-net hakkında sıkça sorulan sorular',
        href: '/#s-s-s',
      },
    ],
  },

  stake_now: {
    name: 'Stake edin',
    title: 'Ödül kazanmak için CROlarınızı stake edin!',
  },

  copier: {
    title: 'Validator adresini kopyalamak için tıklayın.',
    message: 'Validator adresini kopyala',
    done_message: 'Kopyalandı!',
  },

  hero: {
    pre_title: `CRO Mainnet kazançları minimum <span class="font-bold">20%</span> APY oalrak belirlendi`,
    title: 'Şimdi Crypto.org Chain Mainnet Zamanı!',
    desc: `
    <span class="font-bold">5 milyar</span> CRO <span class="font-bold">10 yıl</span>
    boyunca, her yıl <span class="font-bold">500 milyon</span> adet  olmak üzere dağıtım için ayrıldı.
    `,
  },

  sections: {
    how_to: {
      title: 'Staking nasıl çalışıyor?',
      id: 'cro-stake-adimlari',
      steps: {
        first: {
          title: "CRO'larınızı tutarken aynı zamanda ödül kazanın!",
          desc: `
            Cüzdanınızda gelecek için tuttuğunuz CRO koinler mi var? Harika! çünkü
            tam merkeziyetsiz yeni Crypto.org zinciri size minimum
            <span class="font-bold">20%</span> APY(Yıllık) kazanç vadediyor. Üstelik bu
            kazancın 10 yıl boyunca devam etmesi güvence altına alındı.
            <br />
            <br />
            Resmi kaynak:

            <a
              class="text-pink-500 underline"
              target="_blank"
              title="CRO Mainnet yayını ödül haberi"
              href="https://blog.crypto.com/cro-mainnet-staking-rewards-set-at-20-apy/"
              >CRO Mainnet Staking Rewards</a
            >
          `,
        },
        second: {
          title: 'Yeni bir Crypto.org CRO Cüzdanı açın',
          desc: `
              Cro'larınızı dakilar içinde stake edebilirsiniz. Aşağıdaki resmi linkten
              Crypto.org Masaüstü Uygulamasını indirin ve partiye katılın!
              <br />
              <br />
              Son versiyona erişin:

              <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.org Masaüstü Uygulaması"
                href="https://github.com/crypto-com/chain-desktop-wallet/releases"
                >Crypto.org Chain Desktop Wallet</a
              >
          `,
        },
        third: {
          title: "CRO'larınızı Crypto Lion'a stake edin",
          desc: `
            Cüzdan uygulamasını açın ve
            <span class="font-bold">Staking</span> sekmesini seçin, daha sonra
            <span class="font-bold">Delegate Funds</span> sekmesini açın ve sağ üst
            köşede bulunan validator adresimizi kopyalayın ve
            <span class="font-bold">Validator address</span> kısmına yapıştırın
            kontrol edin ve onaylayın.
          `,
        },
        fourth: {
          title: 'Enjoy with 20% APY!',
          desc: `
              Tebrikler, dakilar içerisinde stake işleminizi tamamladınız! Şimdi sıra
              arkanıza yaslanıp kazancınızın tadını çıkarmakta. Aşağıdaki resmi vaildator
              adresimizden kazancınızı görüntüleyebilir, istediğiniz zaman çekebilirsiniz.
              <br />
              <br />
              Validator Sayfamız:

              <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto Lion Doğrulayıcı Sunucu adresi"
                href="https://crypto.org/explorer/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495"
                >Crypto.org Chain Crypto Lion Doğrulayıcısı</a
              >
          `,
        },
      },
    },
    why_us: {
      title: 'Neden Crypto Lion seçmelisiniz?',
      cards: {
        first: {
          title: 'Güçlü Altyapı',
          subtitle: 'Son sistem yazılım ve donanım araçlarını kullanıyoruz.',
          desc:
            'Endüstri standardında hızlı internet altyapısına sahip metal sunucularlarımızı ' +
            'güncel işletim sistemleri ile donatıp kaliteli bir hizmet için hazırlıyoruz.',
          link: {
            name: 'İstatistikler',
            title: 'Sunucumuzun blokzincir üzerindeki performansına göz atın.',
          },
        },
        second: {
          title: 'Topluluk destekli',
          subtitle: 'Bizler de büyük Crypto.com ailesindeniz.',
          desc:
            "CDC'nin Türkiye topluluğunun bir parçasıyız ve saygı bazlı arkadaşlık " +
            'ortamına değer veriyoruz. Crypto dünyasına gönül vermiş insanlarla tanışmayı seviyoruz.',
          link: {
            name: "Twitter'dayız",
            title: 'Bizi takip edin.',
          },
        },
        third: {
          title: 'Güvenilir',
          subtitle: "Biz de kendi CRO'larımızı Crypto Lion'da stake ediyoruz.",
          desc:
            "Yüzbinlerce CRO hali hazırda Crypto Lion'da stake edilmiş durumda." +
            'Çok yakında 1 milyon eşiğine ulaşmış olacağız.',
          link: {
            name: 'Bizi Seçenler',
            title: 'Bizi seçen CRO sahiplerinin cüzdanlarını inceleyin.',
          },
        },
      },
    },
    f_a_qs: {
      title: 'Sıkça Sorulan Sorular',
      id: 's-s-s',
      items: [
        {
          title: 'Nasıl stake edebilirim?',
          desc: `
          Crypto.org'un Masaüstü Cüzdan Uygulaması'nı kullanarak.
          <a
            class="underline"
            href="https://github.com/crypto-com/chain-desktop-wallet/releases"
            target="_blank"
            >Bu</a
          > linki kullanarak son sürümü indirin ve sağ üstteki "Stake Edin"
           butonuna tıklayın.
          `,
          separate: true,
        },
        {
          title: 'Ödüllerimi ne sıklıkla cüzdanıma çekebilirim?',
          desc: `
          Bu işlem için herhangi bir limit bulunmuyor. Ödüllerinizi istediğiniz
          sıklıkla cğzdanınıza minimum tutar olmaksınız çekebilirsiniz.
          `,
          separate: true,
        },
        {
          title:
            'Yatırımımı geri çekmek istersem herhangi bir soğuma(cool-down) süresi söz konusu mu?',
          desc: `
          Evet. İstediğiniz zaman bu emri verebilirsiniz fakat 28 günlük bir güvenli
          hareket süresi var ve bu süre boyunca CRO'larınız blockchain tarafından
          tutuluyor ve süre sonunda cüzdanınızda aktif hale geliyor.
          `,
          separate: false,
        },
      ],
    },
    action: {
      title: 'Ödül sisteminin bir parçası olun!',
      subtitle: 'Yıllık %20 pasif ve risksiz kazanç sağlayın!',
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
            name: 'Koşullar',
            title: 'Koşullar ve şartlar',
            target: '_self',
            href: '#',
          },
          {
            name: 'İstatistikler',
            title: 'Doğrulayıcı İstatistikleri',
            target: '_self',
            href:
              'https://explorer.nebkas.ro/validator/8F7012771B173B8DD2E7A9FBC9EAF7B1E3C055FB/missed/blocks',
          },
        ],
      },
      {
        name: 'Sosyal',
        links: [
          {
            name: 'Twitter',
            target: '_blank',
            title: 'Crypto Lion Validator Twitter Adresi',
            href: 'https://twitter.com/CryptocomLion',
          },
          {
            name: 'Telegram',
            title: 'Bizimle Telegram kanalıyla iletişim kurun',
            target: '_blank',
            href: 'https://web.telegram.org/#/im?p=@mcanvar',
          },
          {
            name: 'Bize yazın!',
            title: 'Ne düşündüğünüzü merak ediyoruz, lütfen bize yazın.',
            target: '_self',
            href: 'mailto:cryptolion-node@protonmail.com',
          },
        ],
      },
      {
        name: 'Resmi Kaynaklar',
        links: [
          {
            name: 'Crypto.org',
            target: '_blank',
            title: 'Crypto.org Blokzincir Anasayfası',
            href: 'https://crypto.org/',
          },
          {
            name: 'Crypto.org Dökümantasyon',
            title: 'Crypto.org Blokzincir Dökümantasyon',
            target: '_blank',
            href: 'https://crypto.org/docs/',
          },
        ],
      },
      {
        name: 'Ağlar',
        links: [
          {
            name: 'Ana Ağ',
            target: '_blank',
            title: 'Crypto.org Blokzincir Keşif Sitesindeyiz',
            href:
              'https://crypto.org/explorer/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
          },
          {
            name: 'Nebkas Explorer',
            target: '_blank',
            title: "Nebkas.ro'ın Keşif Sitesindeyiz",
            href:
              'https://explorer.nebkas.ro/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
          },
          {
            name: 'Croeseid Testnet',
            target: '_blank',
            title: 'Croeseid Testnet Ağı Keşif Sitesindeyiz',
            href:
              'https://crypto.org/explorer/croeseid/validator/tcrocncl1valsdtujgugsfhwuh8twkqpuxhr5486nlvk4ew',
          },
        ],
      },
    ],
    copyright: `
        Bütün hakları saklıdır. Kaynak kodumuzu
        <a
          href="https://github.com/mcanvar/crypto-lion"
          title="A powerful CDC Chain Mainnet Node for staking purpose."
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >GitHub</a
        > üzerinden paylaşmaktan mutluluk duyuyoruz. PR veya çatallayarak
        iş amaçlı projeleriniz haricinde kullanabilirsiniz. Paylaşımcı
        dünyanın daha güzel bir yer olacağına inanıyoruz ♥️.
    `,
  },
}

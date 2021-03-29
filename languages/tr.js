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

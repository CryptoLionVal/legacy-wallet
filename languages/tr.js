/* eslint-disable prettier/prettier */
export default {
  title_template: `Crypto Lion CDC Main-net Blokzincirinde | %s`,
  meta_description:
    `Crypto Lion Crypto.org Chain üzerinde çalışan bir doğrulayıcıdır(validator).` +
    ` Bu doğrulayıcıya CROlarınızı yatırarak(staking) pasif gelir elde edebilirsiniz.`,

  pages: {
    terms: {
      title: `Kurallar ve Koşullar`,
      meta_description: `Crypto Lion CRO fonlama servisinin kuralları ve koşulları.`,
      content: `
      <h2 class="text-3xl">Genel</h2>
      <br>
      <p>
      Kullanıcı fonladığı bütün CRO'lardan sadece ve sadece kendisi sorumludur. Crypto Lion hiçbir sorumluluk kabul etmez.
      Bakım çalışmaları ve olası hizmet dışı durumlardan haberdar olmak için Twitter veya Telegramdan takip edebilir veya
      alt kısımda yer alan sunucu durumu linkinden haber listemize kayıt olabilirsiniz.
      </p>
      <br>
      <h2 class="text-3xl">Cüzdan Hizmeti</h2>
      <br>
      <p>
      Cüzdan güvenliğini ön planda tutan yazılımımız, önce kullanıcıdan özel anahtar kelimelerini alır ve bu kelimeleri kullanıcının
      belirlediği 6 haneli PIN ile şifreler. Şifrelenen cüzdan ile SHA256 algoritmasıyla şifrelenen PIN kullanıcının tarayıcısında
      oturum depolama özelliği kullanılarak güvenli bir şekilde depolanır. Her işlem öncesinde kullanıcıdan tekrar PIN istenir ve
      cüzdan geriye döndürülüp kullanılır. Kullanıcı cüzdanını kapatmak siterse bütün oturum verisi silinir. Kaynak kodunda
      bütün akışı inceleyebilirsiniz.
      </p>
      <br>
      <p>
          <strong class="text-red-600">Sorumluluk reddi:</strong> Bu yöntemi
          kullanarak bütün sorumluğun size ait olduğunu kabul etmiş oluyorsunuz.
          Crypto Lion bu hizmeti yalnızca
          <strong class="text-green-500">https://cryptolion.finance</strong>
          adresinden sağlamaktadır. Cüzdan bilgileriniz hiçbir şekilde
          saklanmaz. Kaynak kodunu en altta yer alan GitHub bağlantısından
          inceleyebilirsiniz.
      </p>
      `,
    },
    privacy: {
      title: `Gizlilik Politikası`,
      meta_description: `Crypto Lion CRO fonlama servisinin gizlilik politikası.`,
      content: `
      <h2 class="text-3xl">Çerezler</h2>
      <br>
      <p>
      Çerezler bilgisayarınızda siteler boyunca kaydedilen küçük bilgilerdir.
      </p>
      <p>
      Eğer kabul ederseniz deneyiminizi daha iyi hale getirmek üzere Google Analytics yardımıyla bu site üzerindeki gezinme verinizi toplayacağız.
      </p>
      <p>
      <a class="underline"
      rel="nofollow"
      href="https://policies.google.com/technologies/partner-sites?hl=tr-TR"
      target="_blank">Buradan</a>
       detaylı bilgi edinebilirsiniz.
      </p>
      <p>
      Eğer kabul etmezseniz bu bilgiler toplanmaz.
      </p>
      <br>

      <h2 class="text-3xl">Tarayıcı Oturum Depolama</h2>
      <br>
      <p>
      Tarayıcı Oturum Depolama özelliği, birçok modern tarayıcının oturum bilgilerini geçiçi olarak kullanıcının bilgisyarında
      depolayabilmesine imkan tanır. Crypto Lion aşağıda anahtar kelimeleri verilen ayarlarını kullanıcı cüzdanını açtığı andan
      itibaren oturum depolama üzerinde depolar. Detayli bilgi için lütfen
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"
        title="MDN Session Storage"
        rel="nofollow"
        class="underline"
        target="_blank">bu kaynağı</a> inceleyin.
      <br>
      <br>
      <ul>
        <li><strong>lion_account_address</strong>: Cüzdan adres bilgisi</li>
        <li><strong>lion_encrypted_wallet</strong>: PIN ile şifrelenmiş cüzdan bilgisi</li>
        <li><strong>lion_encrypted_pin</strong>: SHA256 ile geri döndürülemez bir şekilde güvenli hale getirilmiş 6 haneli PIN'iniz.</li>
      </ul>
      </p>
      `,
    },
    wallet: {
      title: `Nasıl stake edilir?`,
      meta_description: `Crypto.org Ana Ağının bir doğrulayıcı sunucusu olan Crypto
      Lion'a nasıl CRO fonlanacağının adım adım anlatımı.`,
      steps_id: `staking-adimlari`,
      back_button: "Geri Dön",
      logout_button: "Cüzdanı kapat",
      logout_confirm: `Cüzdanınız kapatılacaktır. Lütfen onaylayın.`,
      dialog_button: "Kapat",
      steps: {
        first: {
          title: `Nasıl stake yapmak istiyorsunuz?`,
          desc: `Lütfen stake yapmak için bir yöntem seçin. Kolay ve hızlı bir ` +
            `yöntem olarak cüzdanınızı buradan gizli kelimeleriniz ile açabilirsiniz.`,
          buttons: {
            defi: "DeFi Mobil Uygulamasını kurarak",
            mnemonic: "Cüzdanını Mnemonic Kullanarak Aç",
            desktop: "CDC Masaüstü Cüzdanını Kur"
          }
        },
        defi: {
          steps: [
            {
              title: `Defi Cüzdanı Kurun`,
              desc: `
          Android:
          <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.com DeFi Wallet Android Uygulaması"
                href="https://play.google.com/store/apps/details?id=com.defi.wallet"
                >Play Market</a
          >
          <br>
          iOS:
          <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.com DeFi Wallet iOS Uygulaması"
                href="https://apps.apple.com/us/app/crypto-com-l-defi-wallet/id1512048310"
                >Apple App Market</a
          >
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z" />
            </svg>
          `,
              next: true
            },
            {
              title: `İçeri Aktar veya Yeni Oluştur`,
              desc: `
          Gizli kelimeleriniz ile cüzdanınızı içeri aktarın veya yeni bir tane oluşturun.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11.85 17.56a1.5 1.5 0 0 1-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 0 1-2-2v-2.59A2 2 0 0 1 2.59 16l5.56-5.56A7.03 7.03 0 0 1 15 2a7 7 0 1 1-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 1 0-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3z" />
            </svg>
          `,
              next: true
            },
            {
              title: `Yatırımınızı Fonlayın`,
              desc: `
           Stake sekmesine gidin ve cüzdan adresimizi yapıştırın.
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
              title: `Masaüstü Cüzdanı İndirin`,
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
              <path class="heroicon-ui" d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z" />
            </svg>
          `,
              next: true
            },
            {
              title: `İçeri Aktar veya Yeni Oluştur`,
              desc: `
          Gizli kelimeleriniz ile cüzdanınızı içeri aktarın veya yeni bir tane oluşturun.
          `,
              icon: `
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 24 24" width="48" height="48">
              <path class="heroicon-ui" d="M11.85 17.56a1.5 1.5 0 0 1-1.06.44H10v.5c0 .83-.67 1.5-1.5 1.5H8v.5c0 .83-.67 1.5-1.5 1.5H4a2 2 0 0 1-2-2v-2.59A2 2 0 0 1 2.59 16l5.56-5.56A7.03 7.03 0 0 1 15 2a7 7 0 1 1-1.44 13.85l-1.7 1.71zm1.12-3.95l.58.18a5 5 0 1 0-3.34-3.34l.18.58L4 17.4V20h2v-.5c0-.83.67-1.5 1.5-1.5H8v-.5c0-.83.67-1.5 1.5-1.5h1.09l2.38-2.39zM18 9a1 1 0 0 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3z" />
            </svg>
          `,
              next: true
            },
            {
              title: `Yatırımınızı Fonlayın`,
              desc: `
           Stake sekmesine gidin ve cüzdan adresimizi yapıştırın.
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
          title: `Lütfen gizli kelimelerinizi girin.`,
          desc: `
          <strong class="text-red-600">Sorumluluk reddi:</strong> Bu yöntemi
          kullanarak bütün sorumluğun size ait olduğunu kabul etmiş oluyorsunuz.
          Crypto Lion bu hizmeti yalnızca
          <strong class="text-green-500">https://cryptolion.finance</strong>
          adresinden sağlamaktadır. Cüzdan bilgileriniz hiçbir şekilde
          saklanmaz. Kaynak kodunu en altta yer alan bağlantıdan
          inceleyebilirsiniz.
          `,
          button: `Cüzdanımı Aç`
        },
        wallet: {
          title: `Cüzdanım`,
          explorer: `Blok Zincir Tarayıcısında Görüntüle`,
          staked_balance: `Fonlanmış Tutar:`,
          available_balance: `Kullanılabilir Tutar:`,
          rewards: `Ödül:`,
          rewards_button_title: `Hepsini çek`,
          renew_button_title: `Yenile`,
          rewards_confirm: `Bütün ödülleriniz cüzdanınıza çekilecektir. Onaylıyor musunuz?`,
          stake_confirm: `Girilen tutar stake edilecektir. Lütfen onaylayın.`,
          desc: `
          <strong class="text-red-600">Sorumluluk reddi:</strong> Bu yöntemi
          kullanarak bütün sorumluğun size ait olduğunu kabul etmiş oluyorsunuz.
          Crypto Lion bu hizmeti yalnızca
          <strong class="text-green-500">https://cryptolion.finance</strong>
          adresinden sağlamaktadır. Cüzdan bilgileriniz hiçbir şekilde
          saklanmaz. Kaynak kodunu en altta yer alan bağlantıdan
          inceleyebilirsiniz.
          `,
          button: `Stake Et`
        },
        final: {
          title: `Stake işlemi başarılı!`,
          desc: `
          Tebrikler, stake işlemini başarıyla tamamladınız. Aşağıdaki bağlantıya
          tıklaayrak işlemi blokzincir tarayıcısında görüntüleyebilirsiniz.
          Lütfen bizi Twitter ve Telegram'dan takip ederek gelişmelerden haberdar olun.
          `,
          buttons: {
            telegram: `Crypto Lion Telegram Kanalı`,
            twitter: `Crypto Lion Twitter Sayfası`,
          }
        }
      }
    }
  },

  navbar: {
    logo: {
      link: {
        title: `Crypto Lion CRO Node`
      }
    },
    links: [
      {
        name: `Anasayfa`,
        title: `Crypto Lion Cüzdan Anasayfa`,
        href: `/#validator-anasayfa`
      }
    ],
    rate: {
      title: `Anlık yıllık kazanç ve komisyon oranları. Yenilemek için tıklayın!`,
      fee: `komisyon`,
    }
  },

  disclaimer: {
    desc: `Bu servisi kullanarak kabul ettiğiniz şartlara bu sayfadan göz atabilirsiniz: `,
  },

  dialog: {
    messages: {
      password: `Lütfen, oturum boyunca cüzdanınızı güvenli bir şekilde şifrelemek için 6 haneli PIN oluşturun: `,
      confirm: `Lütfen PIN'i yeniden girin:`,
      wrong: `Yanlış şifre, işlemi gerçekleştirmek için doğru şifreyi girmelisiniz.`,
      unlock: `Lütfen şifrenizi girin:`,
    },
    buttons: {
      close: `Kapat`,
    },
  },

  cookie: {
    message: `Çerezleri trafik analizi için kullanmamıza izin verir misiniz? Detaylar için lütfen gizlilik sayfamızı ziyaret edin.`,
    accept_button: `Evet`,
    deny_button: `Hayır`
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
            name: `Kurallar ve Koşullar`,
            title: `Kurallar ve Koşullar`,
            target: `_self`,
            href: { path: `terms-and-conditions` }
          },
          {
            name: `Gizlilik Politikası`,
            title: `Gizlilik Politikası`,
            target: `_self`,
            href: { path: `privacy-policy` }
          },
          {
            name: `Sunucularımzın Durumu`,
            title: `Doğrulayıcı sunucuların durumu`,
            target: `_blank`,
            href:
              `https://cryptolion.freshstatus.io/`
          }
        ]
      },
      {
        name: `Sosyal`,
        links: [
          {
            name: `Twitter`,
            target: `_blank`,
            title: `Crypto Lion Validator Twitter Adresi`,
            href: `https://twitter.com/CryptoLionVal`
          },
          {
            name: `Telegram`,
            title: `Bizi Telegram kanalıyla takip edin`,
            target: `_blank`,
            href: `https://t.me/CryptoLionValidator`
          },
          {
            name: `Bize yazın!`,
            title: `Ne düşündüğünüzü merak ediyoruz, lütfen bize yazın.`,
            target: `_self`,
            href: `mailto:cryptolion-node@protonmail.com`
          }
        ]
      }
    ],
    copyright: `
        Bütün hakları saklıdır. Kaynak kodumuzu
        <a
          href="https://github.com/CryptoLionVal/legacy-wallet"
          title="Para fonlama amaçlı bir Cosmos Cüzdanı"
          target="_blank"
          class="no-underline hover:underline text-gray-800 hover:text-pink-500"
          >GitHub</a
        > üzerinden paylaşmaktan mutluluk duyuyoruz. PR veya çatallayarak kullanabilirsiniz. Paylaşımcı
        dünyanın daha güzel bir yer olacağına inanıyoruz ♥️.
    `
  }
};

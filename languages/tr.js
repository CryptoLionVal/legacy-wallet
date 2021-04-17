/* eslint-disable prettier/prettier */
export default {
  title_template: `Crypto Lion CDC Main-net Blokzincirinde | %s`,
  meta_description:
    `Crypto Lion Crypto.org üzerinde çalışan bir imzalayıcıdır(validator).` +
    ` Bu doğrulayıcıya CROlarınızı yatırarak(staking) pasif gelir elde edebilirsiniz.`,

  pages: {
    home: {
      title: `Anasayfa`
    },
    how_to_stake_cro: {
      title: `Nasıl stake edilir?`,
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
            mnemonic: "Cüzdanını Mnemonic Kullanarak Aç",
            desktop: "CDC Masaüstü Cüzdanını Kur"
          }
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
              title: `Yatırımınızı Stake Edin`,
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
        form: {
          title: `Stake işlemi başarılı!`,
          desc: `
          Tebrikler, stake işlemini başarıyla tamamladınız. Aşağıdaki bağlantıya
          tıklaayrak işlemi blokzincir tarayıcısında görüntüleyebilirsiniz.
          `
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
        title: `Crypto Lion Anasayfa`,
        href: `/#validator-anasayfa`
      },
      {
        name: `Staking nasıl çalışıyor?`,
        title: `4 basit adımda CRO stake etmeyi öğrenin.`,
        href: `/#cro-stake-adimlari`
      },
      {
        name: `Stake Yöntemleri`,
        title: `Hangi yöntemlerle CRO stake edilir?`,
        href: { path: `how-to-stake-cro`, hash: `` }
      },
      {
        name: `SSS`,
        title: `CDC Main-net hakkında sıkça sorulan sorular`,
        href: `/#s-s-s`
      }
    ]
  },

  stake_now: {
    name: `Stake edin`,
    title: `Ödül kazanmak için CROlarınızı stake edin!`
  },

  copier: {
    title: `Validator adresini kopyalamak için tıklayın.`,
    message: `Validator adresini kopyala`,
    done_message: `Kopyalandı!`
  },

  hero: {
    pre_title: `CRO Mainnet kazançları yıllık <span class="font-bold">~ %20</span> olarak belirlendi`,
    title: `Şimdi Crypto.org Chain Mainnet Zamanı!`,
    desc: `
    <span class="font-bold">5 milyar</span> CRO <span class="font-bold">10 yıl</span>
    boyunca, her yıl <span class="font-bold">500 milyon</span> adet  olmak üzere dağıtım için ayrıldı.
    `
  },

  sections: {
    how_to: {
      title: `Staking nasıl çalışıyor?`,
      id: `cro-stake-adimlari`,
      steps: {
        first: {
          title: `CRO'larınızı tutarken aynı zamanda ödül kazanın!`,
          desc: `
            Cüzdanınızda gelecek için tuttuğunuz CRO koinler mi var? Harika! çünkü
            tam merkeziyetsiz yeni Crypto.org zinciri size
            <span class="font-bold">~ %20</span> p.a.(yıllık) kazanç vadediyor. Üstelik bu
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
          `
        },
        second: {
          title: `Yeni bir Crypto.org CRO Cüzdanı açın`,
          desc: `
              Cro'larınızı dakilar içinde stake edebilirsiniz. Aşağıdaki resmi linkten
              Crypto.org Masaüstü Uygulamasını veya mobil DeFi uygulamasını indirin ve partiye katılın!
              <br />
              <br />
              Mobil DeFi Uygulaması:

              <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.com Mobil DeFi Cüzdan"
                href="https://crypto.com/defi-wallet"
                >Crypto.com Mobil DeFi Cüzdan</a
              >
              <br>
              Resmi Masaüstü Cüzdanı:

              <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.org Zinciri Masaüstü Cüzdanı"
                href="https://github.com/crypto-com/chain-desktop-wallet/releases"
                >Crypto.org Zinciri Masaüstü Cüzdanı</a
              >
          `
        },
        third: {
          title: `CRO'larınızı Crypto Lion'a stake edin`,
          desc: `
            Cüzdan uygulamasını açın ve
            <span class="font-bold">Staking</span> sekmesini seçin, daha sonra
            <span class="font-bold">Delegate Funds</span> sekmesini açın ve sağ üst
            köşede bulunan validator adresimizi kopyalayın ve
            <span class="font-bold">Validator address</span> kısmına yapıştırın
            kontrol edin ve onaylayın.
          `
        },
        fourth: {
          title: `~ %20 Yıllık kazancın keyfini çıkarın!`,
          desc: `
              Tebrikler, dakilar içerisinde stake işleminizi tamamladınız! Şimdi sıra
              arkanıza yaslanıp kazancınızın tadını çıkarmakta. Aşağıdaki resmi vaildator
              adresimizden kazancınızı görüntüleyebilir, istediğiniz zaman çekebilirsiniz.
              <br />
              <br />
              Resmi sayfamız:

              <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto Lion Doğrulayıcı Sunucu adresi"
                href="https://crypto.org/explorer/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495"
                >Crypto.org Chain Crypto Lion Doğrulayıcısı</a
              >
          `
        }
      }
    },
    why_us: {
      title: `Neden Crypto Lion seçmelisiniz?`,
      cards: {
        first: {
          title: `Güçlü Altyapı`,
          subtitle: `Son sistem yazılım ve donanım araçlarını kullanıyoruz.`,
          desc:
            `Endüstri standardında hızlı internet altyapısına sahip metal sunucularlarımızı ` +
            `güncel işletim sistemleri ile donatıp kaliteli bir hizmet için hazırlıyoruz.`,
          link: {
            name: `İstatistikler`,
            title: `Sunucumuzun blokzincir üzerindeki performansına göz atın.`
          }
        },
        second: {
          title: `Topluluk destekli`,
          subtitle: `Bizler de büyük Crypto.com ailesindeniz.`,
          desc:
            `CDC'nin Türkiye topluluğunun bir parçasıyız ve saygı bazlı arkadaşlık ` +
            `ortamına değer veriyoruz. Crypto dünyasına gönül vermiş insanlarla tanışmayı seviyoruz.`,
          link: {
            name: `Twitter'dayız`,
            title: `Bizi takip edin.`
          }
        },
        third: {
          title: `Güvenilir`,
          subtitle: `Biz de kendi CRO'larımızı Crypto Lion'da tutuyoruz.`,
          desc:
            `Bir milyondan fazla CRO hali hazırda Crypto Lion'da stake edilmiş durumda.` +
            `Komisyon kazançlarımızı günlük olarak doğrulayıcımızda fonluyoruz.`,
          link: {
            name: `Bizi Seçenler`,
            title: `Bizi seçen CRO sahiplerinin cüzdanlarını inceleyin.`
          }
        }
      }
    },
    f_a_qs: {
      title: `Sıkça Sorulan Sorular`,
      id: `s-s-s`,
      search_placeholder: `Arayın`,
      items: [
        {
          title: `Main-net nedir?`,
          desc: `
          Bir kripto paranın ana ağıdır. Crypto.org 25 Mart 2021'de CRO için kendi
          kripto para zincirini kurarak, yayınladı.
          `,
          separate: true
        },
        {
          title: `Validator nedir?`,
          desc: `
          Validator'ler blokzincirdeki doğrulayıcı sunuculardır ve işlemleri
          blok zincire imzalayarak senkron bir şekilde kaydederler.
          `,
          separate: true
        },
        {
          title: `Stake nedir?`,

          desc: `
          Türkçeye fonlama olarak çevirebiliriz. Crypto.org Blokzincirindeki bir
          validator'a CRO larınızı yatırarak fonlarsınız ve karşılığında kazanç sağlarsınız.
          `,
          separate: true
        },
        {
          title: `Crypto.com App/Exchange'deki stake işleminden farkı nedir?`,
          desc: `
          Daha fazla kazanç elde edersiniz. Crypto.org 10 yıl boyunca her yıl 500 milyon
          olmak üzere toplamda 5 milyar CRO'yu stake sistemi için blokzincirde ayırdı.
          `,
          separate: true
        },
        {
          title: `Soğuk cüzdan nedir?`,
          desc: `
          Soğuk cüzdanlar çevrimdışı yaratılıp ilk işlemi ile ağa dahil edilen, kullanım
          yetkisinin yalnız ve yalnız gizli kelimelerini taşıyan sahibinde olduğu güvenli
          bir cüzdan tipidir.
          `,
          separate: true
        },
        {
          title: `CRO'larımı stake edersem yönetimi size mi geçer?`,
          desc: `
          Hayır. Cüzdanınızı ilk yaratırken elde ettiğiniz gizli kelimelerinizi güvenli
          bir şekilde saklamalısınız çünkü kaybederseniz içerisindeki varlığınıza ulaşmanın
          hiçbir yolu yoktur. Dolayısıyşa CRO'larınızı sadece siz stake edip, geri çekebilirsiniz.
          `,
          separate: true
        },
        {
          title: `Stake etmenin kazancı nedir?`,
          desc: `
          Dinamik olarak hesaplanmakla birlikte main-net'de ayrılan yıllık
          CRO miktarına göre yaklaşık %20 olacak. Her yıl bu amaçla 500 milyon CRO ayrıldı.
          `,
          separate: true
        },
        {
          title:
            `Yaklaşık %20 Kazanç ne kadar süre için, hangi validator'ler üzerinden sağlanacak?`,
          desc: `
          Bu kazanç 10 yıl boyunca Crpto Lion gibi main-net'in erken validator'ları üzerinden
          sağlanacak.
          `,
          separate: true
        },
        {
          title: `Validator sunucuyu kapatırsa fonlarım zarar görür mü?`,
          desc: `
          Hayır, teknik olarak main-net
          <a title="Crypto.org genesis dosyası"
          href="https://github.com/crypto-org-chain/mainnet/blob/7c70a0af748c7552442e05e97196a7852da89f11/crypto-org-chain-mainnet-1/genesis.json#L6098">genesis</a>
          dosyasından doğrulayabileceğiniz üzere validator kapanması dumunda uygulanacak ceza 0'a ayarlanmış durumda.
          Validator'ün kötü amaçla, çifte imzalama cezası alması durumunda ise maksimum %5 kayıp yaşama söz konusu olabilir
          fakat hiçkimse durduk yere dükkanını ateşe vermez. :)
          `,
          separate: true
        },
        {
          title: `İstediğim zaman Validator değiştirebilir miyim?`,
          desc: `
          Evet, bu işlemi herhangi bir bekleme süresi olmadan anında yapabilirsiniz.
          `,
          separate: true
        },
        {
          title: `Güncel yıllık kazancı(APY) nasıl takip edebilirim?`,
          desc: `
          Güncel APY oranını Crypto.com Defi Wallet üzerinden takip edebilirsiniz.
          `,
          separate: true
        },
        {
          title: `Kazancım seçtiğim Validator'e göre değişir mi?`,
          desc: `
          Hayır, her bir validator'de yatırımcı(delegator) aynı kazancı alır. Burada
          dikkat edilmesi gereken nokta bizim gibi deneyimli ve profesyonel bir ekiple çalışmak.
          `,
          separate: true
        },
        {
          title: `Validator'lerin bu durumdan kazancı nedir?`,
          desc: `
          Validator'ler yatırımcılara oranla çok daha az komisyon oranlarıyla gelir elde ederler.
          Üzerlerinde ne kadar fazla CRO stake edilirse bu onların daha profesyonel hizmet sunmasına imkan tanır.
          `,
          separate: true
        },
        {
          title: `Neden sizin Crypto Node'u seçmeliyim?`,
          desc: `
          Crypto Lion 1 milyon CRO sınırını açmış, stake için güçlü bir ortam sunan bir doğrulayıcı.
          En güncel yazılım ve donanımları gerekenden çok daha iyi şekilde temin ediyor ve ne yaptığını bilen
          bir ekiple hizmetinize sunuyoruz.
          `,
          separate: true
        },
        {
          title: `Mobil cihazlarımdan bu işlemi yapabilir miyim?`,
          desc: `
          Evet, Android işletim sistemi için
          <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.com DeFi Wallet Android Uygulaması"
                href="https://play.google.com/store/apps/details?id=com.defi.wallet"
                >bu</a
          >
          linkten, iOS için de
          <a
                class="text-pink-500 underline"
                target="_blank"
                title="Crypto.com DeFi Wallet iOS Uygulaması"
                href="https://apps.apple.com/us/app/crypto-com-l-defi-wallet/id1512048310"
                >bu</a
          >
          linkten indirdiğiniz
          Crypto.com DeFi Wallet App ile Earn kısmından yapabilirsiniz.
          `,
          separate: true
        },
        {
          title:
            `Mobil cihazlarımda Crypto.com App/Exchange üzerinden soğuk cüzdanıma CRO gönderebilir miyim?`,
          desc: `
          Evet, bunun için tek yapmanız geken şey çekim işlemi yapmanız.
          `,
          separate: true
        },
        {
          title: `CRO'larımı hangi yollarla stake edebirilim?`,
          desc: `
          Şuan için 4 yol bulunmakta. Websitemiz, mobil Defi Wallet App, masaüstü cüzdanı ve
          konsol üzerinden gerçekleştirilebilir.
          `,
          separate: true
        },
        {
          title:
            `CRO'larım Etherium ağındaki soğuk cüzdanımda, stake etmek için` +
            ` nasıl Crypto.org ağına gönderebilirim?`,
          desc: `
          Migration araçları ile gönderimi sağlayabilirsiniz. ETH cüzdanınızı
          <a
            class="underline"
            title="CRO Migration Web Aracı"
            href="https://crypto.org/migration/webtool"
            target="_blank"
            >Migratıon Tool</a
          >'a bağlayarak adımları izlemelisiniz.
          `,
          separate: true
        },
        {
          title: `Stake etmek için minimum ne kadar CRO gerekiyor?`,
          desc: `
          Minimum bir miktar söz konusu değil. İstediğiniz kadar stake edebilirsiniz.
          `,
          separate: true
        },
        {
          title:
            `Stake ettikten sonra kazançlarımı istediğim zaman çekebilir miyim?`,
          desc: `
          Evet, çekim işleminizden sonra bakiyeniz için cool-down süresi başlar ve
          28 gün sonra kullanılabilir hale gelir.
          `,
          separate: true
        },
        {
          title:
            `Stake işlemini iptal edersem beklemem gekeren bir süre var mı?`,
          desc: `
          Evet, diğer blokzincirlerde olduğu gibi 28 günlük bir cool-down süresi mevcut.
          `,
          separate: true
        },
        {
          title:
            `Soğuma(cool-down) süresi boyunca gelir elde etmeye devam eder miyim?`,
          desc: `
          Hayır.
          `,
          separate: true
        },
        {
          title: `Neden kazançlarımdan az da olsa komisyon ücreti alınıyor?`,
          desc: `
          Validator'lerin size bu hizmeti kararlı bir şekilde sunabilmesi için ödemeleri
          gereken giderleri var ve sistemin bakımı ve geleceği için çalışan insanların
          harcadıkları emekler için bir karşılık olarak düşünülebilir.
          `,
          separate: true
        },
        {
          title: `Stake ettikten sonra Validator'ümü değiştirebilir miyim?`,
          desc: `
          Evet, stake ettiğiniz validator cezalı veya kapalı bile olsa,
          istediğiniz zaman değiştirebilirsiniz.
          `,
          separate: true
        },
        {
          title: `Defi Wallet'daki cüzdanımı Desktop Wallet'da açabilir miyim?`,
          desc: `
          Evet, gizli kelimeleriniz ile aktif edebilirsiniz.
          `,
          separate: true
        },
        {
          title: `Duyurularınızı nasıl takip edebilirim?`,
          desc: `
          Bizi Twitter adresimizden takip edebilirsiniz. Önemli kampanyalarımızı ve
          duyurularımzı ayrıca bizimle paylaştığınız mail adresiniz üzreinden yapacağız.
          `,
          separate: true
        },
        {
          title: `Stake formunu doldurmam zorunlu mu?`,
          desc: `
          Hayır, doldurmayarak duyuruları takip etme sorumluluğunu üzerinize aldığınızı
          hatırlatmak isteriz.
          `,
          separate: true
        },
        {
          title: `Ödüllerimi ne sıklıkla cüzdanıma çekebilirim?`,
          desc: `
          Bu işlem için herhangi bir limit bulunmuyor. Ödüllerinizi istediğiniz
          sıklıkla cğzdanınıza minimum tutar olmaksınız çekebilirsiniz.
          `,
          separate: true
        },
        {
          title:
            `Size neden güvenmeliyiz?`,
          desc: `
          Ön yüzde sizinle buluşan arkadaşlarımızdan arka planda teknik olarak
          çalışan arkadaşlarımıza kadar, hepimiz kripto para dünyasına
          hem yatırım yaparak hem de çeşitli görevler alarak katkı sağlamaya çalışan
          bilgili kişileriz. Teknik ekip main-net yayınlanmadan önceki Crossfire
          yarışmasına katılarak tecrübe topladı. Kendi yatırımımızı da stake
          ediyoruz ve komisyon gelirlerini sistemi geliştirmek için kullanıyoruz.
          `,
          separate: false
        }
      ]
    },
    action: {
      title: `Ödül sisteminin bir parçası olun!`,
      subtitle: `Yıllık ~ %20 pasif ve risksiz kazanç sağlayın!`
    }
  },

  form: {
    title: `Stake adresimizi üzerine tıklayarak kopyalayın ve CRO'larınızı fonlayın.`,
    desc:
      `Ve lütfen aşağıdaki formu doldurun, bizi seçtiğiniz için teşekkür ederiz.`
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
            name: `Koşullar`,
            title: `Koşullar ve şartlar`,
            target: `_self`,
            href: `#`
          },
          {
            name: `İstatistikler`,
            title: `Doğrulayıcı İstatistikleri`,
            target: `_self`,
            href:
              `https://explorer.nebkas.ro/validator/8F7012771B173B8DD2E7A9FBC9EAF7B1E3C055FB/missed/blocks`
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
            href: `https://twitter.com/CryptocomLion`
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
      },
      {
        name: `Resmi Kaynaklar`,
        links: [
          {
            name: `Crypto.org`,
            target: `_blank`,
            title: `Crypto.org Blokzincir Anasayfası`,
            href: `https://crypto.org/`
          },
          {
            name: `Crypto.org Blokzincir Beyaz Kitabı`,
            title: `Crypto.org Blokzincir Beyaz Kitabı PDF`,
            target: `_blank`,
            href: `https://crypto.org/chain_whitepaper.pdf`
          },
          {
            name: `Crypto.org Dökümantasyon`,
            title: `Crypto.org Blokzincir Dökümantasyon`,
            target: `_blank`,
            href: `https://crypto.org/docs/`
          }
        ]
      },
      {
        name: `Blokzincir Tarayıcıları`,
        links: [
          {
            name: `Ana Ağ`,
            target: `_blank`,
            title: `Crypto.org Blokzincir Keşif Sitesindeyiz`,
            href:
              `https://crypto.org/explorer/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495`
          },
          {
            name: `Nebkas Explorer`,
            target: `_blank`,
            title: `Nebkas.ro'ın Keşif Sitesindeyiz`,
            href:
              `https://explorer.nebkas.ro/validator/crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495`
          },
          {
            name: `Smart Stake Analiz Sitesi`,
            target: `_blank`,
            title: `Smart Stake analiz sitesindeyiz.`,
            href:
              `https://cc.smartstake.io/val/27`
          },
          {
            name: `Croeseid Testnet`,
            target: `_blank`,
            title: `Croeseid Testnet Ağı Keşif Sitesindeyiz`,
            href:
              `https://crypto.org/explorer/croeseid/validator/tcrocncl1valsdtujgugsfhwuh8twkqpuxhr5486nlvk4ew`
          }
        ]
      }
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
    `
  }
};

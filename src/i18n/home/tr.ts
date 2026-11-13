import type { HomeDictionary } from "../types";

export const tr: HomeDictionary = {
  hero: {
    eyebrow: "iPhone için ekim planlayıcı",
    title: "Doğru tohumu",
    highlight: "doğru zamanda ek.",
    subtitle:
      "Sowly yerel iklimine ve bu haftanın havasına bakar, bugün hangi sebze, meyve ve aromatik otlara başlayabileceğini söyler — bahçede ya da balkonda.",
    secondary: "Nasıl çalıştığını gör",
    badges: ["81 bitki", "Hesap yok", "Reklam yok, takip yok"],
    screenshotAlt:
      "Sowly'nin Bugün ekranı: 48 bitki ekime hazır; hava, toprak ve gece sıcaklığı ile yedi günlük tahmin görünüyor.",
    chipSow: "Bugün dışarıya ek",
    chipHarvest: "2 hafta sonra hasat",
    chipFrost: "Soğuk bir gece yaklaşıyor",
  },
  how: {
    eyebrow: "Nasıl çalışır",
    title: "Havandan planına",
    subtitle: "Tohum paketlerinde “Mart–Mayıs arası ekin” yazar. Sowly ise nerede yaşadığına ve haftanın ne getireceğine bakar.",
    steps: [
      { title: "İklimin", text: "Sowly bulunduğun yerin iklimini okur: aylar genelde ne kadar sıcak geçer, don ne zaman gelir ve ne zaman gider." },
      { title: "Bu haftanın tahmini", text: "Apple Weather'dan gelen tahmin, önünde ne olduğunu gösterir: soğuk bir gece, sıcak dalgası ya da şiddetli yağış." },
      { title: "Toprak sıcaklığı", text: "Sowly bu ikisinden toprağının ne kadar ısındığını tahmin eder — bir tohumun çimlenip çimlenmeyeceğini belirleyen de budur." },
      { title: "Planın", text: "Bugün neye, nasıl başlayacağını gösteren bir liste alırsın: dışarıya ek, içeride fide yetiştir ya da fideyi dışarı dik; her biri tahmini hasat tarihiyle." },
    ],
  },
  features: {
    eyebrow: "Özellikler",
    title: "Tohumdan hasada her şey",
    subtitle: "Seni “ne ekebilirim?” sorusundan ilk dolu sepete götüren dört ekran.",
    items: [
      {
        label: "Bugün",
        title: "Bugün neye başlayabilirim?",
        text: "Uygulamayı aç ve 81 bitkiden hangilerinin yaşadığın yerde hazır olduğunu gör — dışarıya mı ekmeli, içeride fide mi yetiştirmeli, yoksa fideyi dışarı mı dikmelisin, onu da.",
        points: [
          "Hava, tahmini toprak ve gece sıcaklığı tek bakışta",
          "Soğuk geceler ve don, sıcak ve şiddetli yağış için uyarılar",
          "Her bitki için tahmini bir hasat tarihi",
        ],
        alt: "Ekime hazır bitki sayısını, haftalık tahmini ve şiddetli yağış uyarısını gösteren Bugün ekranı.",
      },
      {
        label: "Bitki sayfası",
        title: "Neden şimdi — ya da neden beklemeli",
        text: "Her bitki kendini anlatır: bugün neden iyi bir gün, ya da hâlâ neyi bekliyor ve zamanı ne zaman gelecek.",
        points: [
          "Ekimden hasada tarihli bir zaman çizelgesi",
          "Bitkinin yılı: ekim ve hasat dönemleri",
          "Işık, su, dikim aralığı, ekim derinliği, toprak sıcaklığı ve saksı boyutu, üstüne bir ipucu",
        ],
        alt: "Domates sayfası: dokuz hafta bekle, 15 Ocak'tan itibaren içeride fide yetiştir, çünkü toprak hâlâ çok soğuk.",
      },
      {
        label: "Bahçe",
        title: "Bahçeni çiz",
        text: "Tarhları gerçek boyutlarıyla — örneğin 2 × 1 m — ekle, saksıları da; sonra bitkileri içlerine sürükle. Her bitki ihtiyaç duyduğu alan kadar geniş çizilir, böylece neyin sığdığını görürsün.",
        points: [
          "Tarhlar ve saksılar gerçek oranlarıyla",
          "Her bitkiyi planlandı ya da ekildi olarak işaretle",
          "Farklı yerlerde birden fazla bahçe, her biri kendi iklimiyle (PRO)",
        ],
        alt: "Marul, bakla, sarımsak ve turp ekili 2 × 1 m'lik bir sebze tarhı ve içine sürüklenebilecek mevsim bitkileri sırası.",
      },
      {
        label: "Günlük",
        title: "Her ekimi takip et",
        text: "Her ekimin tahmini bir hasat tarihi ve kendi günlüğü olur; böylece gelecek sezon neyin işe yaradığını bilirsin.",
        points: [
          "Büyüme kaydı: çimlendi, dışarı dikildi, çiçek açtı, ilk hasat, tamamlandı",
          "Her bitki için fotoğraf günlüğü ve notlar",
          "Neyin büyüdüğünü ve sıradaki hasadı gör",
        ],
        alt: "Bahçe özeti: dört bitki büyüyor, biri hasat ediliyor, sıradaki hasat 14 gün sonra.",
      },
    ],
  },
  pro: {
    eyebrow: "Sowly PRO",
    title: "Bütün yılı planla",
    subtitle: "Sowly bugün neye başlayabileceğini ücretsiz söyler. PRO daha ileriye bakar ve senin yerine nöbet tutar.",
    items: [
      { title: "Yıllık planlayıcı", text: "Her bitki için on iki ayın tamamında ekim ve hasat dönemleri, senin iklimine göre hesaplanır." },
      { title: "Akıllı uyarılar", text: "Hava bitkilerini tehdit ettiğinde, bir hasat yaklaştığında ve istek listendeki bir bitkinin mevsimi geldiğinde önceden haber verir." },
      { title: "Bahçe asistanı", text: "Bahçen hakkında soru sor, yanıtları Apple Intelligence cihazında yazsın. iOS 26 veya sonraki bir sürüm ve desteklenen bir iPhone gerekir." },
      { title: "Bahçe hafızası", text: "Kaydettiğin hasatlar gelecek yılın tahminlerini ayarlar; Sowly böylece bahçeni tanır." },
      { title: "Sınırsız bahçe ve ekim", text: "Ev, hobi bahçesi, balkon: dilediğin kadar bahçe ve ekim, her bahçe kendi iklimiyle." },
    ],
    plansTitle: "Sana uyanı seç",
    plans: ["Yıllık · 7 gün ücretsiz", "3 aylık", "Aylık", "Ömür boyu"],
    note: "Abonelikler iptal edilene kadar otomatik olarak yenilenir. İstediğin zaman App Store hesabından iptal edebilirsin.",
    screenshotAlt: "Yıllık planlayıcı: her bitki için ay ay ekim, dikim ve hasat dönemleri.",
  },
  privacy: {
    eyebrow: "Gizlilik",
    title: "Bahçen yalnızca seni ilgilendirir",
    text: "Sowly hesap olmadan ve seni tanıyan bir sunucu olmadan çalışır. Ektiklerin, çektiğin fotoğraflar ve aldığın notlar iPhone'unda kalır.",
    points: [
      { title: "Hesap yok", text: "Uygulamayı aç ve başla. Kayıt yok, e-posta adresi yok, parola yok." },
      { title: "Reklam yok, takip yok", text: "Reklam da yok, analiz SDK'sı da. Uygulamada ne yaptığını kimse izlemez." },
      { title: "iPhone'unda saklanır", text: "Bahçeler, fotoğraflar ve notlar cihazda kalır. Uygulamayı silersen onlar da gider." },
      { title: "Cihaz içi asistan", text: "Bahçe asistanını bulutta değil, iPhone'undaki Apple Intelligence yanıtlar." },
    ],
    staysTitle: "iPhone'unda kalanlar",
    stays: ["Bahçeler, tarhlar ve saksılar", "Ekimler ve büyüme kaydı", "Fotoğraflar ve notlar", "Asistana sorduğun sorular"],
    leavesTitle: "iPhone'undan çıkan yalnızca bunlar",
    leaves: [
      "Hava durumu ve iklim için Apple Weather'a gönderilen, yaklaşık bir kilometreye yuvarlanmış yaklaşık konum",
      "Apple ve RevenueCat tarafından anonim bir kimlikle işlenen satın alımlar",
    ],
    link: "Gizlilik politikasını oku",
  },
  faq: {
    eyebrow: "SSS",
    title: "Bilmekte fayda var",
    items: [
      {
        q: "Sowly ile neleri planlayabilirim?",
        a: "Sebze, meyve ve aromatik otları — domates ve maruldan limon ve fesleğene 81 bitki. Sowly süs çiçekleri için değil, yiyebileceğin şeyler için yapıldı.",
      },
      {
        q: "Tarihler ne kadar doğru?",
        a: "Bunlar, bulunduğun yerin iklim ortalamalarından ve bu haftanın tahmininden hesaplanan tahminlerdir. İyi bir rehberdir ama garanti değildir: toprak, tohum ve gerçekleşen hava bunları kaydırabilir.",
      },
      {
        q: "Balkonda da işe yarar mı?",
        a: "Evet. Tarh yerine saksı ekle; her bitki sayfası bitkinin ihtiyaç duyduğu saksı boyutunu söyler.",
      },
      {
        q: "Neler ücretsiz, neler PRO?",
        a: "Bugünün önerileri, bitki sayfaları ve sınırlı sayıda ekim içeren bir bahçe ücretsizdir. PRO; yıllık planlayıcıyı, akıllı uyarıları, bahçe asistanını, bahçe hafızasını ve sınırsız bahçe ile ekimi ekler.",
      },
      {
        q: "Hangi iPhone gerekli?",
        a: "iOS 18 veya sonraki bir sürümü yüklü bir iPhone. Bahçe asistanı, Apple Intelligence'ı destekleyen bir iPhone'da iOS 26 veya sonraki bir sürümü gerektirir.",
      },
      {
        q: "Sowly neden konumumu istiyor?",
        a: "Bahçenin hava durumunu ve iklimini yüklemek için. Apple Weather'a yalnızca yaklaşık bir kilometreye yuvarlanmış yaklaşık bir konum gönderilir.",
      },
    ],
  },
  cta: {
    title: "Toprak hazırsa Sowly de hazır",
    text: "Bugün ne ekebileceğini öğren — kendi bahçende, kendi ikliminde, bu hafta.",
  },
};

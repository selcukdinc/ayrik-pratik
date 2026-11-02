// Sıkça sorulan sorular. Gerçek sorular gelmeye başladıkça bu liste güncellenir.
// Cevaplar Markdown alt kümesiyle yazılır (`kod`, **kalın**, "- " listeleri).

export interface SssBolumu {
  baslik: string;
  sorular: { soru: string; cevap: string }[];
}

export const SSS: SssBolumu[] = [
  {
    baslik: "Genel",
    sorular: [
      {
        soru: "Site ücretli mi?",
        cevap: "Hayır. Site ücretsiz ve açık kaynaklıdır (MIT). Reklam yoktur.",
      },
      {
        soru: "Kullanmak için hesap açmam gerekiyor mu?",
        cevap:
          "Hayır. Soruları ve karma testi hesapsız çözebilirsin; ilerlemen bu tarayıcıda tutulur. Hesap açma, doğrulama e-postası gönderimi kurulunca açılacak; o zaman ilerlemen her cihazda seninle gelir.",
      },
      {
        soru: "Sorular nereden geliyor?",
        cevap:
          "Üç kaynak var ve her soru etiketlidir:\n- **Rosen**: Rosen, *Ayrık Matematik ve Uygulamaları* kitabının bölüm sonu alıştırmaları, kitaptaki haliyle. Kaynakta kitabın bölümü ve alıştırma numarası yazar.\n- **Çıkmış**: geçmiş sınavlarda sorulmuş sorular; cevapları kitaptaki tanımlarla çözülmüştür. Kitapla aynı olan çıkmış sorular ayrıca eklenmez; kitap sorusuna Çıkmış etiketi eklenir.\n- **Türetilmiş**: kitabın aynı konusundan kendi cümlelerimizle yazılan yeni sorular.",
      },
      {
        soru: "Yalnızca kitaptaki ve çıkmış sorularla çalışabilir miyim?",
        cevap:
          "Evet. Karma testte ve soru havuzunda **Kaynak** seçiminden \"Yalnız gerçek sorular\"ı seç; türetilmiş sorular gizlenir. Yalnız Rosen ya da yalnız Çıkmış da seçebilirsin.",
      },
      {
        soru: "Neden bazı ünitelerin soruları görünmüyor?",
        cevap:
          "Sorular ünite ünite açılır; her ünite kitabın bir alt bölümüdür (1.1 Önermeli Mantık … 2.3 Fonksiyonlar). Menüde Soru havuzu yanında yazan `Ü11` gibi rozet, kaçıncı üniteye kadar soruların açık olduğunu gösterir.",
      },
      {
        soru: "Konu anlatımları ne zaman gelecek?",
        cevap:
          "Önce bütün bölüm sonu sorularını siteye eklemeye odaklandık. Konu anlatımları ünite ünite eklenecek; o zamana kadar her sorunun açıklamasında kitaptaki ilgili bilgi kısaca yazar.",
      },
    ],
  },
  {
    baslik: "Sorular ve ilerleme",
    sorular: [
      {
        soru: "Karma test nedir?",
        cevap:
          "Seçtiğin ünitelerden soruların karışık sırayla, tek tek geldiği bir test. Şıkların yeri de her soruda değişir. Soru sayısını (10, 20, 30, 50 ya da tümü) ve kaynağı sen seçersin; istersen önce hiç çözmediğin ve yanlış yaptığın sorular gelir. Sonunda puanını ve yanlış yaptığın soruların listesini görürsün.",
      },
      {
        soru: "Şıklar neden her açılışta farklı sırada?",
        cevap:
          "Doğru cevabı şıkkın yerinden ezberlemeyesin diye. Cevabın şıkkın kendisine göre kontrol edilir. \"a ve c\" gibi başka şıklara harfle atıf yapan sorularda şıklar kitaptaki sırada kalır.",
      },
      {
        soru: "Boşluk doldurma sorularında cevabı nasıl yazmalıyım?",
        cevap:
          "Büyük ve küçük harf, Türkçe karakterler (ç, ğ, ı, ö, ş, ü) ve boşluklar önemsenmez. Mantık ve küme sembolleri için cevap kutusunun altında bir sembol klavyesi çıkar; istersen klavyeden de yazabilirsin:\n- `->` → , `<->` ↔ , `~` ya da `!` ¬ , `^` ya da `&` ∧ , `|` ∨ olarak okunur.\n- Kümeleri süslü parantezle yaz: `{1, 2, 3}`. Elemanların sırası önemli değildir.\n- Mantık ve küme ifadelerinde parantezler anlamı değiştirdiği için dikkate alınır.",
      },
      {
        soru: "Yazma (klasik) soruları nasıl değerlendiriliyor?",
        cevap:
          "Klasik sınava benzer sorularda çözümünü kutuya yazarsın, sonra **Çözümü göster** ile örnek çözümü açarsın. Kendi çözümünü karşılaştırıp **Doğru yaptım**, **Kısmen** ya da **Yapamadım** seçersin. Yalnızca \"Doğru yaptım\" doğru sayılır; diğerleri soruyu tekrar kutusuna atar. Karma testte **Tür** seçiminden yalnız yazma sorularını da seçebilirsin.",
      },
      {
        soru: "Çözmediğim ya da yanlış yaptığım soruları nasıl bulurum?",
        cevap:
          "Soru havuzunun üstündeki süzgeçlerden **Çözmediklerim** ya da **Yanlışlarım**'ı seç. Süzgeçler adreste tutulduğu için bağlantıyı kaydedip sonra aynı listeye dönebilirsin.",
      },
      {
        soru: "Sorunun altında çıkan yüzde ne anlama geliyor?",
        cevap:
          "Cevabını gönderdikten sonra, o soruyu deneyenlerin ilk denemelerinde ne kadarının doğru yaptığı gösterilir; çoktan seçmelide her şıkkın ne sıklıkla seçildiği de görünür. Bunlar anonim toplamlardır; kimin ne cevap verdiği görünmez.",
      },
      {
        soru: "Tekrar sayfası nasıl çalışıyor?",
        cevap:
          "Yanlış yaptığın her soru tekrar kutusuna girer ve ertesi gün **Tekrar** sayfasında yeniden sorulur. Doğru cevapladıkça 3, 7, 14, 30 gün arayla tekrar gelir; yanlış cevap soruyu başa döndürür. Bir soruyu ilk kez yanlış yaptığında aynı kavramdan henüz görmediğin sorular da eklenir. E-posta ile hatırlatma yapılmaz.",
      },
      {
        soru: "Günlük hedef ve rozetler nedir?",
        cevap:
          "Günlük hedef, bir günde vermek istediğin doğru cevap sayısıdır (başlangıçta 10); **Ayarlar**'dan değiştirebilirsin. Rozetler ve seri yalnızca sana görünür; sıralama ya da başkalarıyla karşılaştırma yoktur.",
      },
      {
        soru: "Yazılar çok küçük ya da çok büyük. Nasıl değiştiririm?",
        cevap:
          "Üst çubuktaki **A−** ve **A+** düğmeleri yazıları %85 ile %150 arasında küçültür ya da büyütür. Aynı ayar **Ayarlar** sayfasında da var.",
      },
    ],
  },
  {
    baslik: "Hesap ve gizlilik",
    sorular: [
      {
        soru: "Hangi çerezler kullanılıyor?",
        cevap:
          "Yalnızca oturumunu tutan tek bir çerez. Analitik, reklam ya da takip çerezi yoktur. Ayrıntılar gizlilik sayfasında.",
      },
      {
        soru: "Bir soruda hata buldum. Ne yapmalıyım?",
        cevap:
          "Giriş yaptıysan menüdeki Mesajlarım'dan yöneticiye yazabilirsin. GitHub'ı kullanıyorsan Hakkında sayfasındaki bağlantıdan sorun da bildirebilirsin.",
      },
      {
        soru: "Ben de soru ekleyebilir miyim?",
        cevap: "Evet. Giriş yaptıktan sonra Soru öner sayfasından gönderebilirsin; yönetici inceleyip uygun bulursa havuza ekler.",
      },
    ],
  },
];

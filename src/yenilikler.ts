// Sitedeki yenilikler, en yenisi en üstte. Kullanıcıya görünen her değişiklik
// (her PR) buraya bir kayıt ekler; yenilikler.test.ts sırayı ve biçimi denetler.
// Maddeler kullanıcının diliyle yazılır: ne değişti, sana ne kazandırır.
// Markdown alt kümesi kullanılabilir (`kod`, **kalın**).

export interface Yenilik {
  // Değişikliği getiren PR'ın numarası; kaydın kimliği de budur
  pr: number;
  // YYYY-AA-GG
  tarih: string;
  baslik: string;
  maddeler: string[];
}

export const YENILIKLER: Yenilik[] = [
  {
    pr: 1,
    tarih: "2026-11-02",
    baslik: "Ayrık Pratik açıldı",
    maddeler: [
      "Vize konuları hazır: kitabın 1. bölümü (önermeli mantık, niceleyiciler, çıkarım kuralları, ispat yöntemleri) ile 2.1–2.3 (kümeler, küme işlemleri, fonksiyonlar ve ters fonksiyon). Her ünite kitabın bir alt bölümü.",
      "Geçmiş sınavda çıkmış 36 soru eklendi. Cevaplar resmi bir anahtardan değil, kitaptaki tanımlarla çözülerek yazıldı; bir hata görürsen bildir.",
      "Rosen'ın bölüm sonu alıştırmalarından 96 soru **Rosen** etiketiyle, aynı konulardan yazılmış 200'ü aşkın soru **Türetilmiş** etiketiyle var.",
      "Test dışında **boşluk doldurma** ve **yazma** soruları da var. Boşluk doldururken ¬ ∧ ∨ → ↔ ∀ ∃ ∈ ⊆ ∪ ∩ gibi sembolleri altta çıkan klavyeden ekleyebilirsin. Yazma sorularında çözümünü yazar, örnek çözümü açar ve kendini değerlendirirsin.",
      "**Karma test**te üniteleri, kaynağı, soru türünü ve soru sayısını seçebilir; önce çözmediklerinin ve yanlışlarının gelmesini isteyebilirsin.",
    ],
  },
];

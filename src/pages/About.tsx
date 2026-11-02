import { REPO_URL } from "../lib/api";

const GELISTIRICI_URL = "https://github.com/selcukdinc";

export function About() {
  return (
    <div className="about">
      <h2>Ayrık Pratik</h2>
      <p>
        Ayrık Matematik dersinin bölüm sonu alıştırmalarını ve geçmiş sınavlarda çıkmış soruları karışık sırayla çözmek için
        açık kaynaklı bir pratik sitesi. Kitaptaki alıştırmalar <strong>Rosen</strong>, geçmiş sınav soruları <strong>Çıkmış</strong>,
        aynı konulardan yazılan yeni sorular <strong>Türetilmiş</strong> etiketi taşır.
      </p>
      <h3>Kaynak</h3>
      <p>
        Sorular ve açıklamalar Kenneth H. Rosen'ın <em>Ayrık Matematik ve Uygulamaları</em> kitabının Türkçe baskısına (Palme
        Yayınevi) dayanır. Kitap alıştırmaları kitaptaki haliyle, türetilmiş sorular kendi cümlelerimizle yazılmıştır. Çıkmış
        soruların cevapları resmi bir anahtardan değil, kitaptaki tanımlarla çözülerek yazılmıştır. Bu site yazar ya da yayınevi
        ile bağlantılı değildir.
      </p>
      <h3>Gizlilik</h3>
      <ul>
        <li>Reklam yok, analitik ya da takip çerezi yok.</li>
        <li>İlk cevabını gönderdiğinde ilerlemeni tutmak için tek bir oturum çerezi yazılır.</li>
        <li>Tema ve karma test ayarların yalnızca bu tarayıcıda saklanır.</li>
      </ul>
      <p>
        Ayrıntılar <a href="/gizlilik">gizlilik metninde</a>.
      </p>
      <h3>Geliştirici</h3>
      <div className="kunye">
        {/* Fotoğraf sitenin kendisinden gelir; GitHub'a istek gitmez */}
        <img src="/gelistirici.jpg" alt="" width={72} height={72} className="kunye-foto" />
        <div>
          <strong className="kunye-ad">Selçuk Dinç</strong>
          <ul className="kunye-baglantilar">
            <li><a href={GELISTIRICI_URL} target="_blank" rel="noreferrer">GitHub profili</a></li>
            <li><a href={REPO_URL} target="_blank" rel="noreferrer">Projenin deposu</a> (MIT)</li>
          </ul>
        </div>
      </div>

      <h3>Proje</h3>
      <p>
        Kaynak kodu açık. Bir hata ya da yanlış soru gördüysen{" "}
        <a href={`${REPO_URL}/issues/new`} target="_blank" rel="noreferrer">GitHub'da bildirebilirsin</a>. Projeyi beğendiysen
        depoya <a href={REPO_URL} target="_blank" rel="noreferrer">yıldız verebilirsin</a>.
      </p>
    </div>
  );
}

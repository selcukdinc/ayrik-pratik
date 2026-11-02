// Kitapta geçen ayrık matematik terimleri: Türkçe, İngilizce ve kısa anlam.
// Terimler sayfası bu listeden çizilir. satirIci işaretli terimlerin
// İngilizcesi ders ve soru metinlerinde parantez içinde de gösterilir; soru
// metinleri kitaptaki gibi kalsın diye şu an hiçbir terim işaretli değil.

export interface Terim {
  tr: string;
  en: string;
  // Büyük harfle yazılan mantık işlemleri (VE, VEYA) yalnızca büyük harfle eşleşir;
  // küçük harfli "ve" bağlacı terim değildir.
  buyuk?: boolean;
  aciklama?: string;
  satirIci?: boolean;
}

export const TERIMLER: Terim[] = [
  { tr: "önerme", en: "proposition", aciklama: "Ya doğru ya da yanlış olan, ikisi birden olmayan bildirim cümlesi" },
  { tr: "değil", en: "negation", aciklama: "Önermenin doğruluk değerini tersine çeviren işlem, ¬p" },
  { tr: "birleşme (ve)", en: "conjunction", aciklama: "p ∧ q; yalnız ikisi de doğruyken doğru" },
  { tr: "ayrılma (veya)", en: "disjunction", aciklama: "p ∨ q; en az biri doğruyken doğru" },
  { tr: "dışlayıcı veya", en: "exclusive or", aciklama: "p ⊕ q; tam olarak biri doğruyken doğru" },
  { tr: "şartlı ifade", en: "conditional statement", aciklama: "p → q; yalnız p doğru ve q yanlışken yanlış" },
  { tr: "çift şartlı ifade", en: "biconditional", aciklama: "p ↔ q; p ile q aynı doğruluk değerindeyken doğru" },
  { tr: "hipotez", en: "hypothesis", aciklama: "Şartlı ifadede p kısmı (öncül)" },
  { tr: "sonuç", en: "conclusion", aciklama: "Şartlı ifadede q kısmı" },
  { tr: "karşıt", en: "converse", aciklama: "p → q'nun karşıtı q → p" },
  { tr: "ters", en: "inverse", aciklama: "p → q'nun tersi ¬p → ¬q" },
  { tr: "zıt-pozitif", en: "contrapositive", aciklama: "p → q'nun zıt-pozitifi ¬q → ¬p; asıl ifadeye denktir" },
  { tr: "doğruluk tablosu", en: "truth table", aciklama: "Bir bileşik önermenin tüm değer atamalarındaki doğruluk değerleri" },
  { tr: "bit dizisi", en: "bit string", aciklama: "0 ve 1'lerden oluşan dizi; bit işlemleri VE, VEYA, XOR ile yapılır" },
  { tr: "tutarlı", en: "consistent", aciklama: "Özelliklerin hepsini aynı anda doğru yapan bir atama vardır" },
  { tr: "totoloji", en: "tautology", aciklama: "Her değer atamasında doğru olan bileşik önerme" },
  { tr: "çelişki", en: "contradiction", aciklama: "Her değer atamasında yanlış olan bileşik önerme" },
  { tr: "olumsallık", en: "contingency", aciklama: "Ne totoloji ne çelişki olan önerme" },
  { tr: "mantıksal denklik", en: "logical equivalence", aciklama: "p ↔ q totoloji ise p ≡ q" },
  { tr: "De Morgan kuralları", en: "De Morgan's laws", aciklama: "¬(p ∧ q) ≡ ¬p ∨ ¬q ve ¬(p ∨ q) ≡ ¬p ∧ ¬q" },
  { tr: "sağlanabilir", en: "satisfiable", aciklama: "Onu doğru yapan en az bir atama vardır" },
  { tr: "yüklem", en: "predicate", aciklama: "Değişkene bağlı önerme fonksiyonu, P(x)" },
  { tr: "evrensel niceleyici", en: "universal quantifier", aciklama: "∀x P(x): tanım kümesindeki her x için P(x)" },
  { tr: "varoluşsal niceleyici", en: "existential quantifier", aciklama: "∃x P(x): P(x)'i doğru yapan en az bir x vardır" },
  { tr: "tanım kümesi", en: "domain", aciklama: "Niceleyicideki değişkenin alabileceği değerler" },
  { tr: "karşı örnek", en: "counterexample", aciklama: "Evrensel bir ifadeyi yanlış yapan tek bir eleman" },
  { tr: "iç içe niceleyiciler", en: "nested quantifiers", aciklama: "Biri diğerinin kapsamında olan niceleyiciler, ∀x∃y gibi" },
  { tr: "geçerli çıkarım", en: "valid argument", aciklama: "Öncüller doğruysa sonucun da doğru olması gereken çıkarım" },
  { tr: "öncül", en: "premise", aciklama: "Çıkarımda sonuca varılan varsayımlar" },
  { tr: "modus ponens", en: "modus ponens", aciklama: "p ve p → q'dan q" },
  { tr: "modus tollens", en: "modus tollens", aciklama: "¬q ve p → q'dan ¬p" },
  { tr: "varsayıma dayalı kıyas", en: "hypothetical syllogism", aciklama: "p → q ve q → r'den p → r" },
  { tr: "ayırıcı kıyas", en: "disjunctive syllogism", aciklama: "p ∨ q ve ¬p'den q" },
  { tr: "çözünürlük", en: "resolution", aciklama: "p ∨ q ve ¬p ∨ r'den q ∨ r" },
  { tr: "yanıltmaca", en: "fallacy", aciklama: "Geçerli görünen ama geçersiz akıl yürütme" },
  { tr: "teorem", en: "theorem", aciklama: "Doğru olduğu gösterilebilen önemli ifade" },
  { tr: "lem", en: "lemma", aciklama: "Başka teoremleri ispatlamakta kullanılan yardımcı teorem" },
  { tr: "sanı", en: "conjecture", aciklama: "Doğru olduğu düşünülen ama henüz ispatlanmamış ifade" },
  { tr: "aksiyom", en: "axiom", aciklama: "İspatsız doğru kabul edilen ifade" },
  { tr: "doğrudan ispat", en: "direct proof", aciklama: "p doğru varsayılıp q'nun doğruluğu gösterilir" },
  { tr: "çelişki ile ispat", en: "proof by contradiction", aciklama: "¬p varsayılıp bir çelişkiye ulaşılır" },
  { tr: "içi boş ispat", en: "vacuous proof", aciklama: "p yanlış olduğundan p → q doğrudur" },
  { tr: "aşikar ispat", en: "trivial proof", aciklama: "q doğru olduğundan p → q doğrudur" },
  { tr: "durum ayırma ile ispat", en: "proof by cases", aciklama: "Hipotez durumlara bölünüp her biri ayrı ispatlanır" },
  { tr: "varlık ispatı", en: "existence proof", aciklama: "∃x P(x)'in ispatı; yapıcı ya da yapıcı olmayan" },
  { tr: "teklik ispatı", en: "uniqueness proof", aciklama: "Koşulu sağlayan elemanın var ve tek olduğunun ispatı" },
  { tr: "küme", en: "set", aciklama: "Sırasız nesneler topluluğu" },
  { tr: "eleman", en: "element", aciklama: "Kümedeki nesne, a ∈ A" },
  { tr: "boş küme", en: "empty set", aciklama: "Hiç elemanı olmayan küme, ∅" },
  { tr: "alt küme", en: "subset", aciklama: "A'nın her elemanı B'de ise A ⊆ B" },
  { tr: "öz alt küme", en: "proper subset", aciklama: "A ⊆ B ve A ≠ B ise A ⊂ B" },
  { tr: "nicelik", en: "cardinality", aciklama: "Sonlu kümedeki farklı eleman sayısı, |A|" },
  { tr: "kuvvet kümesi", en: "power set", aciklama: "Bir kümenin tüm alt kümelerinin kümesi, P(A)" },
  { tr: "kartezyen çarpım", en: "Cartesian product", aciklama: "A × B = {(a, b) | a ∈ A, b ∈ B}" },
  { tr: "sıralı ikili", en: "ordered pair", aciklama: "(a, b); sıra önemlidir" },
  { tr: "birleşim", en: "union", aciklama: "A ∪ B: A'da ya da B'de olan elemanlar" },
  { tr: "kesişim", en: "intersection", aciklama: "A ∩ B: hem A'da hem B'de olan elemanlar" },
  { tr: "fark", en: "difference", aciklama: "A − B: A'da olup B'de olmayan elemanlar" },
  { tr: "tümleyen", en: "complement", aciklama: "Ā = U − A" },
  { tr: "ayrık kümeler", en: "disjoint sets", aciklama: "Kesişimi boş olan kümeler" },
  { tr: "evrensel küme", en: "universal set", aciklama: "Ele alınan tüm nesneleri içeren küme, U" },
  { tr: "fonksiyon", en: "function", aciklama: "A'nın her elemanına B'den tam bir eleman atayan kural" },
  { tr: "görüntü kümesi", en: "range", aciklama: "Fonksiyonun aldığı değerlerin kümesi" },
  { tr: "değer kümesi", en: "codomain", aciklama: "f: A → B'de B kümesi" },
  { tr: "bire-bir", en: "one-to-one (injective)", aciklama: "f(a) = f(b) ise a = b" },
  { tr: "örten", en: "onto (surjective)", aciklama: "Değer kümesinin her elemanı bir görüntüdür" },
  { tr: "bire-bir eşleşme", en: "bijection", aciklama: "Hem bire-bir hem örten fonksiyon" },
  { tr: "ters fonksiyon", en: "inverse function", aciklama: "Bire-bir eşleşmede f⁻¹(b) = a ⇔ f(a) = b" },
  { tr: "bileşke", en: "composition", aciklama: "(f ∘ g)(a) = f(g(a))" },
  { tr: "taban fonksiyonu", en: "floor function", aciklama: "⌊x⌋: x'ten küçük ya da eşit en büyük tam sayı" },
  { tr: "tavan fonksiyonu", en: "ceiling function", aciklama: "⌈x⌉: x'ten büyük ya da eşit en küçük tam sayı" },
];

export type Parca = string | { metin: string; en: string };

const kacir = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const HARF = "a-zçğıöşüâîû";

// Uzun terimler önce denenir ("ÖZEL VEYA", "VEYA"dan önce). Küçük harfli terimler
// cümle başında büyük harfle de eşleşir ve Türkçe ekleri kapsar (sentezlenir,
// kapısı). Büyük harfli terimler kesme işaretli ekleri kapsar (VE'leri).
// Hemen ardından "(" gelen kullanım zaten açıklanmış sayılır.
function desen(liste: Terim[]): RegExp | null {
  if (!liste.length) return null;
  return new RegExp(
    liste
      .map((t) => {
        if (t.buyuk) return `(${kacir(t.tr)}(?:'[${HARF}]+)?)`;
        const ilk = t.tr[0]!;
        return `([${ilk}${ilk.toLocaleUpperCase("tr")}]${kacir(t.tr.slice(1))}[${HARF}]*)`;
      })
      .map((g) => `(?<![\\p{L}\\d_])${g}(?![\\p{L}\\d_])(?!\\s*\\()`)
      .join("|"),
    "gu",
  );
}

const onbellek = new Map<Terim[], { sirali: Terim[]; re: RegExp | null }>();
const SATIR_ICI = TERIMLER.filter((t) => t.satirIci);

export function terimleriAyir(metin: string, liste: Terim[] = SATIR_ICI): Parca[] {
  let d = onbellek.get(liste);
  if (!d) {
    const sirali = [...liste].sort((a, b) => b.tr.length - a.tr.length);
    d = { sirali, re: desen(sirali) };
    onbellek.set(liste, d);
  }
  if (!d.re) return [metin];
  const out: Parca[] = [];
  let son = 0;
  for (const m of metin.matchAll(d.re)) {
    const i = m.slice(1).findIndex((g) => g !== undefined);
    const terim = d.sirali[i]!;
    if (m.index! > son) out.push(metin.slice(son, m.index));
    out.push({ metin: m[0], en: terim.en });
    son = m.index! + m[0].length;
  }
  if (son < metin.length) out.push(metin.slice(son));
  return out;
}

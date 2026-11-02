// Kapalı uçlu soruların puanlaması. Sunucuda çalışır; doğru cevaplar
// istemciye hiç gönderilmez.

export type QuestionType = "tf" | "mcq" | "fill" | "yaz" | "code" | "wave";

// yaz (klasik) sorularında öğrenci cevabını yazar, örnek çözümü görür ve kendini değerlendirir
export type OzDegerlendirme = "dogru" | "kismen" | "yanlis";

export type Answer =
  | { value: boolean }
  | { index: number }
  | { blanks: string[] }
  | { oz: OzDegerlendirme; yazi?: string };

// fill sorularında her boşluk için kabul edilen yazımlar
type Expected =
  | { value: boolean }
  | { index: number }
  | { blanks: string[][] }
  | Record<string, never>;

// Büyük/küçük harf, boşluklar, noktalama ve Türkçe karakterler önemsizdir
// (Türkçe klavyesi olmayan da "ozyeterlilik" yazabilsin)
const TR: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" };
// Mantık ve küme sembolleri klavyede kolay yazılan karşılıklarıyla da kabul edilir
// (p -> q, p <-> q, ~p, p ^ q, p | q, A U B gibi değil; yalnızca sembol taklitleri)
const SEMBOLLER: [RegExp, string][] = [
  [/<->|<=>|⇔/g, "↔"],
  [/->|=>|⇒/g, "→"],
  [/[~!¬]/g, "¬"],
  [/[\^&]|∧/g, "∧"],
  [/\|\||\||∨/g, "∨"],
  [/≡/g, "≡"],
];
export function sembolleriDuzelt(s: string): string {
  return SEMBOLLER.reduce((m, [d, y]) => m.replace(d, y), s);
}

// Mantık ya da küme ifadesinde parantez anlamı değiştirir: ¬(p∧q) ile ¬p∧q aynı değildir
const IFADE = /[¬∧∨→↔∀∃∩∪⊆⊂∈×]/;
export function normalize(s: string): string {
  const d = sembolleriDuzelt(s);
  const atilan = IFADE.test(d) ? /[\s.,;:?'"’]+/g : /[\s.,;:!?'"’()]+/g;
  return d
    .toLocaleLowerCase("tr-TR")
    .replace(/[çğıöşüâîû]/g, (c) => TR[c] ?? c)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/−/g, "-")
    .replace(atilan, "");
}

// İç içe olmayan bir küme ({1, 3, 0} gibi) eleman sırasından bağımsız karşılaştırılır:
// {0, 1, 3} ile {3, 1, 0} aynı cevaptır. Diğer cevaplar normalize ile karşılaştırılır.
function cevapAnahtari(s: string): string {
  const t = s.trim();
  if (!/^\{[^{}]*\}$/.test(t) || /[()]/.test(t)) return normalize(s);
  const ogeler = t.slice(1, -1).split(",").map(normalize).filter(Boolean);
  return `{${[...new Set(ogeler)].sort().join(",")}}`;
}

// fill sorularında her boşluğun ayrı ayrı doğru olup olmadığı; öğrenci yalnızca
// yanlış boşluğa odaklanabilsin. Boşluk sayısı tutmazsa null.
export function boslukSonuclari(expected: Expected, answer: Answer): boolean[] | null {
  if (!("blanks" in expected) || !("blanks" in answer)) return null;
  const want = expected.blanks as string[][];
  const got = answer.blanks as string[];
  if (!Array.isArray(got) || got.length !== want.length) return null;
  return want.map((options, i) => options.some((o) => cevapAnahtari(o) === cevapAnahtari(String(got[i] ?? ""))));
}

export function grade(type: QuestionType, expected: Expected, answer: Answer): boolean {
  switch (type) {
    case "tf":
      return "value" in expected && "value" in answer && expected.value === answer.value;
    case "mcq":
      return "index" in expected && "index" in answer && expected.index === answer.index;
    case "fill":
      return boslukSonuclari(expected, answer)?.every(Boolean) ?? false;
    case "yaz":
      return "oz" in answer && answer.oz === "dogru";
    default:
      // code ve wave soruları tohumlu iz karşılaştırmasıyla puanlanacak
      return false;
  }
}

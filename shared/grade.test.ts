import { describe, expect, it } from "vitest";
import { boslukSonuclari, grade } from "./grade";

describe("grade", () => {
  it("doğru/yanlış", () => {
    expect(grade("tf", { value: false }, { value: false })).toBe(true);
    expect(grade("tf", { value: false }, { value: true })).toBe(false);
  });

  it("şıklı", () => {
    expect(grade("mcq", { index: 2 }, { index: 2 })).toBe(true);
    expect(grade("mcq", { index: 2 }, { index: 0 })).toBe(false);
  });

  it("boşluk doldurma büyük/küçük harf ve boşluğa duyarsız", () => {
    const want = { blanks: [["unsigned"], ["rising_edge(clk)"]] };
    expect(grade("fill", want, { blanks: ["UNSIGNED", "rising_edge( clk )"] })).toBe(true);
    expect(grade("fill", want, { blanks: ["signed", "rising_edge(clk)"] })).toBe(false);
    expect(grade("fill", want, { blanks: ["unsigned"] })).toBe(false);
  });

  it("Türkçe karakter ve büyük harf farkı önemsiz", () => {
    const want = { blanks: [["öz yeterlilik"], ["İnovasyon"]] };
    expect(grade("fill", want, { blanks: ["Özyeterlilik", "inovasyon"] })).toBe(true);
    expect(grade("fill", want, { blanks: ["ozyeterlilik", "INOVASYON"] })).toBe(true);
    expect(grade("fill", want, { blanks: ["yeterlilik", "inovasyon"] })).toBe(false);
  });

  it("mantık sembolleri klavye karşılıklarıyla yazılabilir", () => {
    const want = { blanks: [["¬p ∨ q"], ["p ↔ q"], ["¬(p ∧ q)"]] };
    expect(grade("fill", want, { blanks: ["~p | q", "p <-> q", "!(p ^ q)"] })).toBe(true);
    expect(grade("fill", want, { blanks: ["¬p∨q", "p<->q", "~(p & q)"] })).toBe(true);
    // Parantez mantık ifadesinde önemlidir
    expect(grade("fill", want, { blanks: ["~p | q", "p <-> q", "~p ^ q"] })).toBe(false);
    expect(grade("fill", { blanks: [["p → q"]] }, { blanks: ["p -> q"] })).toBe(true);
    expect(grade("fill", { blanks: [["p → q"]] }, { blanks: ["q -> p"] })).toBe(false);
  });

  it("yazma sorusu öz değerlendirmeyle puanlanır", () => {
    expect(grade("yaz", {}, { oz: "dogru", yazi: "..." })).toBe(true);
    expect(grade("yaz", {}, { oz: "kismen" })).toBe(false);
    expect(grade("yaz", {}, { oz: "yanlis" })).toBe(false);
  });

  it("küme cevabında eleman sırası ve eksi işareti önemsiz", () => {
    const e = { blanks: [["{−1, 1}"], ["{0, 1, 3}"]] };
    expect(grade("fill", e, { blanks: ["{1,-1}", "{3, 0, 1}"] })).toBe(true);
    expect(grade("fill", e, { blanks: ["{1}", "{0, 1, 3}"] })).toBe(false);
  });

  it("boşluklar ayrı ayrı değerlendirilir", () => {
    const want = { blanks: [["1"], ["-1", "- 1"], ["2"]] };
    expect(boslukSonuclari(want, { blanks: ["1", "1", "2"] })).toEqual([true, false, true]);
    expect(boslukSonuclari(want, { blanks: ["1", "-1", "2"] })).toEqual([true, true, true]);
    expect(boslukSonuclari(want, { blanks: ["1"] })).toBeNull();
    expect(boslukSonuclari({ index: 1 }, { blanks: ["1"] })).toBeNull();
  });

  it("tip uyuşmazlığı yanlış sayılır", () => {
    expect(grade("mcq", { index: 1 }, { value: true })).toBe(false);
  });
});

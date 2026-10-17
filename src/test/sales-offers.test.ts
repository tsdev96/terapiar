import { describe, expect, it } from "vitest";
import { historicalSessionRange, salesOffers } from "@/lib/sales-offers";

describe("Terapiar offer rules", () => {
  it("keeps the ebook's historical session reference at R$60 to R$150", () => {
    expect(historicalSessionRange).toEqual({ min: 60, max: 150, currency: "BRL" });
  });
  it("does not sell the ebook before its updated Hotmart offer is available", () => {
    expect(salesOffers.ebook.status).toBe("preparing");
    expect(salesOffers.ebook.checkoutUrl).toBeNull();
  });
});
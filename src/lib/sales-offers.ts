// This range is quoted from the historical ebook, not a current service tariff.
export const historicalSessionRange = { min: 60, max: 150, currency: "BRL" } as const;

// Sales links stay unavailable until the updated products have verified checkouts.
export const salesOffers = {
  ebook: { status: "preparing", checkoutUrl: null },
  videoCourse: { status: "contact", checkoutUrl: null },
} as const;
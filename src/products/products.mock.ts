const PRODUCTS_COUNT = 10_000;

export const products = [];

for (let i = 1; i < PRODUCTS_COUNT; i++) {
  products.push({ id: i, direct: 'A', resolved: 'B' })
}

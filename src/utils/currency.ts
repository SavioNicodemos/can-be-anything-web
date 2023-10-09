export function convertDBToCurrency(value: number | null): string {
  const currency = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  });

  if (!value) return currency.format(0);

  return currency.format(value / 100);
}

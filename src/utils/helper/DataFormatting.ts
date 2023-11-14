const currencyFormat = new Intl.NumberFormat("en-us", {
  currency: "USD",
  style: "currency",
  notation: "compact",
});

export function currencyCompactFormat(input: number): string {
  return currencyFormat.format(input);
}

const listFormat = new Intl.ListFormat("en-us", {
  style: "long",
  type: "conjunction",
});

export function listConjunctionFormat(input: string[]): string {
  return listFormat.format(input);
}

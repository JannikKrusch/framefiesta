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

export function timeFormat(input: number): string {
  const hours = Math.floor(input / 60);
  const minutes = input % 60;

  return `${input} min / ${hours}:${minutes.toString().padStart(2, "0")} h`;
}

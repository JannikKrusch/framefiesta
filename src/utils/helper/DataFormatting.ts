const currencyFormat = new Intl.NumberFormat("en-us", {
  currency: "USD",
  style: "currency",
  notation: "compact",
});

export function currencyCompactFormat(input: number): string {
  return currencyFormat.format(input);
}

const listFormatConjunction = new Intl.ListFormat("en-us", {
  style: "long",
  type: "conjunction",
});

export function listConjunctionFormat(input: string[]): string {
  return listFormatConjunction.format(input);
}

const listFormatDisjunction = new Intl.ListFormat("en", {
  style: "long",
  type: "disjunction",
});

export function listDisjunctionFormat(input: string[]): string {
  return listFormatDisjunction.format(input);
}

export function timeFormat(input: number): string {
  const hours = Math.floor(input / 60);
  const minutes = input % 60;

  return `${input} min / ${hours}:${minutes.toString().padStart(2, "0")} h`;
}

const formatDate = new Intl.DateTimeFormat("de-de", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "Europe/Berlin",
});

const formatTime = new Intl.DateTimeFormat("de-de", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Berlin",
});

export function fullDateFormat(input: Date): string {
  const timeFormat = formatTime.format(input);
  const dateFormat = formatDate.format(input);

  return `${timeFormat}, ${dateFormat}`;
}

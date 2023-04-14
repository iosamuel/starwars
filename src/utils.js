export function isUnknown(val) {
  return val === "unknown";
}

export function shortNumber(num) {
  if (isUnknown(num)) return num;
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(num);
}

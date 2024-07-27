export function deepEqual(a, b) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  return Object.keys(a).reduce((prev, aKey) => {
    if (!b[aKey] && a[aKey] !== b[aKey]) return false;
    // Обрабатываем случаи, когда одно из полей содержит значение null (ведь typeof null = "object")
    if (
      a[aKey] &&
      b[aKey] &&
      typeof a[aKey] === "object" &&
      typeof b[aKey] === "object"
    ) {
      return prev && deepEqual(a[aKey], b[aKey]);
    }
    return prev && a[aKey] === b[aKey];
  }, true);
}

export function uuidv4() {
  return ([1e2] + -1e2 + -4e2 + -8e2 + -1e4).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

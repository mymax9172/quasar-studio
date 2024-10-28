export function chain(...args) {
  let result = null;

  args.forEach((arg) => {
    if (arg) result = arg;
  });

  return result;
}

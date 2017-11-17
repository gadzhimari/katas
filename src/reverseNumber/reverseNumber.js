/* eslint-disable no-bitwise */
export default (number) => {
  const iter = (num, acc) =>
    ((num === 0) ? Number(acc) : iter(~~(num / 10), `${acc}${num % 10}`));
  return iter(number, '');
};

/* eslint-disable no-bitwise */
export default (num) => {
  const iter = (restNum, acc) => ((restNum === 0) ?
    acc.slice(0, -1) : iter(~~(restNum / 10), `${acc}${restNum % 10} `));

  return iter(num, '');
};

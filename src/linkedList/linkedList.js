export const arrayToList = arr =>
  arr.reduceRight((acc, item, index) =>
    (index === arr.length - 1) ? {value: item, rest: null} : {value: item, rest: acc}
  , {});


export const listToArray = (list) => {
  if (!Object.keys(list).length) {
    return [];
  }
  const iter = (acc, arr) =>
    (acc.rest === null) ? [...arr, acc.value] : iter(acc.rest, [...arr, acc.value]);
  return iter(list, []);
}

export const prepend = (element, list) => ({value: element, rest: list});

export const nth = (list, index) => {
  if (!list) {
    return undefined;
  }
  return (index === 0) ? list.value : nth(list.rest, index - 1);
}

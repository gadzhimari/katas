import deepEqual from '../src/deepEqual/deepEqual';

test('deepEqual', () => {
  const obj = { brand: 'Apple', model: 'iPhone 5s', options: { pixelRatio: '2x', inches: 5 }};
  const obj2 = { model: 'iPhone 5s', brand: 'Samsung', options: { inches: 5, pixelRatio: '2x' }};
  const obj3 = { brand: 'Samsung', model: 'Galaxy' };
  const obj4 = { brand: 'Samsung', model: 'Galax' };
  const obj5 = { brand: 'Samsung', model: 'Galaxy', pixelRatio: '5' };
  const obj6 = { brand: 'Samsung', model: 'Galaxy', pixelRatio: 5};
  const obj7 = { brand: 'Samsung', model: 'Galaxy', options: { pixelRatio: '2x', meta: { country: 'China', time: 'UTC' } } };
  const obj8 = { brand: 'Samsung', model: 'Galaxy', options: { pixelRatio: '2x', meta: { rountry: 'China', time: 'UTC' } } };
  const obj9 = { model: 'Galaxy', brand: 'Samsung', options: { meta: { country: 'China', time: 'UTC' }, pixelRatio: '3x' } };
  const obj10 = { model: 'Galaxy', options: { country: 'China', time: null } };
  const obj11 = { model: 'Galaxy', options: { country: 'China', time: null } };
  const obj12 = { model: 'Galaxy', options: { country: 'China', time: 2 } };
  
  expect(deepEqual(2, 2)).toBeTruthy();
  expect(deepEqual(2, 4)).toBeFalsy();
  expect(deepEqual(2, 'u')).toBeFalsy();
  expect(deepEqual('str', 'str')).toBeTruthy();
  expect(deepEqual('str', 'strr')).toBeFalsy();
  expect(deepEqual(null, undefined)).toBeFalsy();
  expect(deepEqual(null, null)).toBeTruthy();
  expect(deepEqual(null, 2)).toBeFalsy();
  expect(deepEqual(undefined, undefined)).toBeTruthy();
  expect(deepEqual(obj, obj)).toBeTruthy();
  expect(deepEqual(obj, obj2)).toBeFalsy();
  expect(deepEqual(obj2, obj3)).toBeFalsy();
  expect(deepEqual(obj3, obj4)).toBeFalsy();
  expect(deepEqual(obj5, obj6)).toBeFalsy();
  expect(deepEqual(obj6, obj6)).toBeTruthy();
  expect(deepEqual(obj7, obj8)).toBeFalsy();
  expect(deepEqual(obj7, obj9)).toBeFalsy();
  expect(deepEqual(obj8, obj8)).toBeTruthy();
  expect(deepEqual(obj9, obj9)).toBeTruthy();
  expect(deepEqual(obj10, obj11)).toBeTruthy();
  expect(deepEqual(obj11, obj12)).toBeFalsy();
});


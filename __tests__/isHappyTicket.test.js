import isHappyTicket from '../src/isHappyTicket/isHappyTicket';

test('isHappyTicket', () => {
  expect(isHappyTicket(385916)).toBeTruthy();
  expect(isHappyTicket(231002)).toBeFalsy();
  expect(isHappyTicket(128722)).toBeTruthy();
  expect(isHappyTicket(054702)).toBeTruthy();
});

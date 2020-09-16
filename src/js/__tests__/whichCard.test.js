import whichCard from '../whichCard';

test.each([
  ['visa for valid user card', '4222222222222', '.card-visa'],
  ['visa for valid user card', '4300000000000777', '.card-visa'],
  ['master for valid user card ', '5555555555554444', '.card-master'],
  ['american for valid user card ', '371449635398431', '.card-american'],
  ['jcb for valid user card ', '3566002020360505', '.card-jcb'],
  ['mir for valid user card ', '2200770212727079', '.card-mir'],
  ['discover for valid user card ', '6011111111111117', '.card-discover'],
  ['diners for valid user card ', '38520000023237', '.card-diners'],
  ['null for invalid user card', '1222222222222', null],

])(('it should be %s'), (_, value, expected) => {
  expect(whichCard(value)).toBe(expected);
});

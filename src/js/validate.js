export default function getValidCreditCard(value) {
  if (/[^0-9-\s]+/.test(value) || value.length < 13) return false;
  let sum = 0;

  for (let i = 0; i < value.length; i++) {
    let cardNum = parseInt(value[i], 10);

    if ((value.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }

  return (sum !== 0) && (sum % 10 === 0);
}

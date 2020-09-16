export default function whichCard(value) {
  if (/^4/.test(value)) {
    return '.card-visa';
  } if (/^5[1-5]/.test(value)) {
    return '.card-master';
  } if (/^3[47]/.test(value)) {
    return '.card-american';
  } if (/^(?:2131|1800|35\d{3})\d{11}/.test(value)) {
    return '.card-jcb';
  } if (/^2/.test(value)) {
    return '.card-mir';
  } if (/^6(?:011|5)/.test(value)) {
    return '.card-discover';
  } if (/^3(?:0[0-5]|[68])/.test(value)) {
    return '.card-diners';
  }
  return null;
}

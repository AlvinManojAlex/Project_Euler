const UNITS = [
  0,
  3, /* ONE       */
  3, /* TWO       */
  5, /* THREE     */
  4, /* FOUR      */
  4, /* FIVE      */
  3, /* SIX       */
  5, /* SEVEN     */
  5, /* EIGHT     */
  4, /* NINE      */
  3, /* TEN       */
  6, /* ELEVEN    */
  6, /* TWELVE    */
  8, /* THIRTEEN  */
  8, /* FOURTEEN  */
  7, /* FIFTEEN   */
  7, /* SIXTEEN   */
  9, /* SEVENTEEN */
  8, /* EIGHTEEN  */
  8, /* NINETEEN  */
];
const TENS = [
  0,
  0,
  6, /* TWENTY  */
  6, /* THIRTY  */
  5, /* FORTY   */
  5, /* FIFTY   */
  5, /* SIXTY   */
  7, /* SEVENTY */
  6, /* EIGHTY  */
  6, /* NINETY  */
];
const SHORTSCALE = [
  0,
   8, /* THOUSAND    */
   7, /* MILLION     */
   7, /* BILLION     */
   8, /* TRILLION    */
  11, /* QUADRILLION */
  11, /* QUINTILLION */
  10, /* SEXTILLION  */
  10, /* SEPTILLION  */
   9, /* OCTILLION   */
   9, /* NONILLION   */
];
const HUNDRED = 7;
const AND = 3;

// convert triple of numbers into letter count
function tripleLetterCount([hundreds, tens, ones]) {
  return 0 +
    // hundreds
    (hundreds === 0 ? 0 : UNITS[hundreds] + HUNDRED) +
    // tens
    (10*tens + ones < 20 ? 0 : TENS[tens]) +
    // ones
    (10 * tens + ones < 20 ? UNITS[10*tens + ones] : UNITS[ones]);
}

// convert single number into words
function numberLetterCount(num) {
  // numbers less than 1 decillion supported
  if (Math.log10(num) > 32) return NaN;
  // convert to array of triples
  let numToArray = [];
  let numCopy = num;
  while (numCopy > 0) {
    const triple = numCopy % 1000;
    numCopy = Math.floor(numCopy / 1000);
    numToArray.push([
      // hundreds
      Math.floor(triple / 100),
      // tens
      Math.floor((triple % 100) / 10),
      // ones
      Math.floor(triple % 10),
    ]);
  }
  // Convert to words
  return numToArray
    .map((triple) => tripleLetterCount(triple))
    .map((triple, index) => triple !== 0 ? triple + SHORTSCALE[index] : 0)
    .reduce((sum, tripple) => sum + tripple) +
    ((num % 100 > 0 && num >= 100) ? AND : 0);
}

// Sum lengths of all words as numbers
function numberLetterCounts(limit) {
  let numberLetters = 0;
  for (let i = 1; i <= limit; i++) {
    numberLetters += numberLetterCount(i);
  }
  return numberLetters;
}
export const parseInput = (input) => {
  // expected input: 1 AUD to USD
  const tokens = input.split(' ');
  const fromAmount = tokens[0];
  const fromCurrency = tokens[1];
  const toCurrency = tokens[3];

  return {
    fromAmount,
    fromCurrency,
    toCurrency,
  };
};

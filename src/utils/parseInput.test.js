import { parseInput } from './parseInput';

describe('parseInput', () => {
  it('should throw error on no input', () => {
    expect(() => {
      parseInput();
    }).toThrow(Error);
  });

  it('should throw error on empty string input', () => {
    expect(() => {
      parseInput('');
    }).toThrow(Error);
  });

  it('should throw error on bad input', () => {
    expect(() => {
      parseInput('AUD to USD');
    }).toThrow(Error);

    expect(() => {
      parseInput('some random junk');
    }).toThrow(Error);

    expect(() => {
      parseInput('2 AUD to     USD');
    }).toThrow(Error);

    expect(() => {
      parseInput(1234);
    }).toThrow(Error);

    expect(() => {
      parseInput(true);
    }).toThrow(Error);
  });

  it('should parse good input', () => {
    const expectedOutput = { fromAmount: 1, fromCurrency: 'AUD', toCurrency: 'USD' };
    expect(parseInput('1 AUD to USD')).toEqual(expectedOutput);
    expect(parseInput('1 aud to usd')).toEqual(expectedOutput);
    expect(parseInput('1 AUD to usd')).toEqual(expectedOutput);
    expect(parseInput('1 aUd tO Usd')).toEqual(expectedOutput);
    expect(parseInput('1. aUd tO Usd')).toEqual(expectedOutput);
    expect(parseInput('1.0 aUd tO Usd')).toEqual(expectedOutput);
    expect(parseInput('1.0003 aUd tO Usd')).toEqual({ fromAmount: 1.0003, fromCurrency: 'AUD', toCurrency: 'USD' });
  });
});

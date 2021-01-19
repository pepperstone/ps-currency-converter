import qs from 'querystring';

// https://exchangeratesapi.io/
const BASE_URL = 'https://api.exchangeratesapi.io';

const api = ({ endpoint, params = {} }) => {
  const queryString = qs.stringify(params);

  return fetch(`${BASE_URL}/${endpoint}?${queryString}`);
};

export const fetchRates = async (baseCurrency) => {
  try {
    const response = await api({ endpoint: 'latest', params: { base: baseCurrency } });
    const responseText = await response.text();
    const { rates, error } = JSON.parse(responseText);

    if (error) {
      throw new Error(error);
    }

    if (!rates || !Object.keys(rates).length) {
      throw new Error('Could not fetch rates.');
    }

    return rates;
  } catch (errorResponse) {
    throw errorResponse;
  }
};

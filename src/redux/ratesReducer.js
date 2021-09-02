import * as types from './actionTypes';

const initialState = {
  amount: '10',
  currencyCode: 'usd',
  currencyData: { eur: 1, btc: 1 },
  supportedCurrencies: {},
  eurRates: {},
  btcRates: {},
};

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INITIAL_VALUES:
      return {
        ...state,
        supportedCurrencies: action.payload.currencies,
        eurRates: action.payload.eurRates,
        btcRates: action.payload.btcRates,
      };
    case types.AMOUNT_CHANGED:
      return { ...state, amount: action.payload };
    case types.CURRENCY_CODE_CHANGED:
      return { ...state, currencyCode: action.payload };
    case types.CURRENCY_RATES_CHANGED:
      return { ...state, currencyData: action.payload };
    default:
      return state;
  }
};

export const getSupportedCurrencies = (state) => state.rates.supportedCurrencies;
export const getEurRates = (state) => state.rates.eurRates;
export const getBtcRates = (state) => state.rates.btcRates;
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getCurrencyData = (state) => state.rates.currencyData;

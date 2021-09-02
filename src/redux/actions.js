import * as types from './actionTypes';
import API from '../api';
import { getBtcRates, getCurrencyCode, getEurRates } from './ratesReducer';

export const changeAmount = (amount) => ({ type: types.AMOUNT_CHANGED, payload: amount });

export const getInitialValues = async (dispatch, getState) => {
  const [currencies, eurRates, btcRates] = await Promise.all([
    API.fetchCurrencies(),
    API.fetchEurRates(),
    API.fetchBtcRates(),
  ]);
  dispatch({ type: types.GET_INITIAL_VALUES, payload: { currencies, eurRates, btcRates } });
  const state = getState();
  const currencyCode = getCurrencyCode(state);
  dispatch(changeCurrencyCode(currencyCode));
};

export const changeCurrencyCode = (currencyCode) => (dispatch, getState) => {
  dispatch({ type: types.CURRENCY_CODE_CHANGED, payload: currencyCode });
  const state = getState();
  const { eur } = getEurRates(state);
  const { btc } = getBtcRates(state);
  dispatch({
    type: types.CURRENCY_RATES_CHANGED,
    payload: { eur: eur[currencyCode], btc: btc[currencyCode] },
  });
};

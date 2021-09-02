// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json

const apiSettings = {
  fetchCurrencies: async () =>
    await (
      await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
    ).json(),
  fetchEurRates: async () =>
    await (
      await fetch(
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'
      )
    ).json(),
  fetchBtcRates: async () =>
    await (
      await fetch(
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json'
      )
    ).json(),
};

export default apiSettings;

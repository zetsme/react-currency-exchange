const CurrencyRates = ({ currencyData, amount, currencyCode }) => {
  return (
    <div>
      {Object.entries(currencyData).map(([code, rate]) => {
        const exchangeAmount = amount * rate || 0;
        return (
          <div key={code}>
            <p>{Number(amount).toLocaleString('en', { style: 'currency', currency: code })}</p>
            <p>
              {exchangeAmount.toLocaleString('en', { style: 'currency', currency: currencyCode })}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CurrencyRates;

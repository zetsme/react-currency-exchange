const CurrencyRates = ({ currencyData, amount, currencyCode }) => {
  return (
    <div>
      {Object.entries(currencyData).map(([code, rate]) => {
        const exchangeAmount = amount * rate || 0;
        return (
          <div key={code} className='grid grid-cols-3 text-blue-300'>
            <p className='break-all'>
              {Number(amount).toLocaleString('en', { style: 'currency', currency: code })}
              <span className='break-normal'> {code}</span>
            </p>
            <span className='justify-self-center'>=</span>
            <p className='break-all'>
              {exchangeAmount.toLocaleString('en', { style: 'currency', currency: currencyCode })}
              <span className='break-norma'> {currencyCode}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CurrencyRates;

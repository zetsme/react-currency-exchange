import CurrencyPicker from './components/CurrencyPicker';
import CurrencyAmount from './components/CurrencyAmount';
import CurrencyRates from './components/CurrencyRates';
import { useSelector } from 'react-redux';
import { getAmount, getCurrencyCode, getCurrencyData } from './redux/ratesReducer';

const App = () => {
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  return (
    <div>
      <CurrencyPicker currencyCode={currencyCode} />
      <CurrencyAmount amount={amount} />
      <CurrencyRates currencyData={currencyData} amount={amount} currencyCode={currencyCode} />
    </div>
  );
};

export default App;

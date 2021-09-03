import CurrencyPicker from './components/CurrencyPicker';
import CurrencyAmount from './components/CurrencyAmount';
import CurrencyRates from './components/CurrencyRates';
import { useSelector } from 'react-redux';
import { getAmount, getCurrencyCode, getCurrencyData } from './redux/ratesReducer';
import Header from './components/Header';

const App = () => {
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  return (
    <main className='w-full max-w-2xl mx-auto  pt-24 p-2 font-main'>
      <div className='bg-gray-700 bg-opacity-80 p-4 grid gap-4 rounded-lg focus-within:shadow-2xl'>
        <Header />
        <CurrencyPicker currencyCode={currencyCode} />
        <CurrencyAmount amount={amount} />
        <CurrencyRates currencyData={currencyData} amount={amount} currencyCode={currencyCode} />
      </div>
    </main>
  );
};

export default App;

import { useDispatch, useSelector } from 'react-redux';
import { getSupportedCurrencies } from '../redux/ratesReducer';
import { changeCurrencyCode } from '../redux/actions';

const CurrencyPicker = ({ currencyCode }) => {
  const supportedCurrencies = useSelector(getSupportedCurrencies);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeCurrencyCode(e.target.value));
  return (
    <select className='form-control' value={currencyCode} onChange={onChange}>
      {Object.entries(supportedCurrencies).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default CurrencyPicker;

import { useDispatch } from 'react-redux';
import { changeAmount } from '../redux/actions';

const CurrencyAmount = ({ amount }) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(changeAmount(e.target.value));
  };
  return (
    <form>
      <input
        inputMode='decimal'
        className='form-control appearance-none'
        type='number'
        min='0'
        step='any'
        onChange={onChange}
        value={amount}
      />
    </form>
  );
};

export default CurrencyAmount;

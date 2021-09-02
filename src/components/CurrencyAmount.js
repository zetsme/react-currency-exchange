import { useDispatch } from 'react-redux';
import { changeAmount } from '../redux/actions';

const CurrencyAmount = ({ amount }) => {
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeAmount(e.target.value));
  return (
    <form>
      <input type='text' onChange={onChange} value={amount} />
    </form>
  );
};

export default CurrencyAmount;

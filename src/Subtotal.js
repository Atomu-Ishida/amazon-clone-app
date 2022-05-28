import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              品数 ({basket.length} 品): <strong>{value}</strong>
              <small>円</small>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              ギフトを含む
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
      />

      <button onClick={() => navigate('/payment', { replace: true })}>
        お会計に進む
      </button>
    </div>
  );
};

export default Subtotal;

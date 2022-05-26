import React from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

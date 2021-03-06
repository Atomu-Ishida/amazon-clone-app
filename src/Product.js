import React from 'react';

import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <strong>{price}</strong>
          <small>ε</small>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>π</p>
            ))}
        </div>
      </div>

      <img alt='' src={image} />

      <button onClick={addToBasket}>γ«γΌγγ«ε₯γγ</button>
    </div>
  );
};

export default Product;

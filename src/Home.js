import React from 'react';

import './Home.css';
import Product from './Product';

const Home = () => {
  const products = [
    {
      id: 1,
      title: 'VRゴーグル',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg',
      price: 70000,
      rating: 4,
    },
    {
      id: 2,
      title: 'Nintendo Switch',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg',
      price: 40000,
      rating: 3,
    },
    {
      id: 3,
      title: 'Xbox game',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B5ECC8E3DA42415._V531815325_.jpg',
      price: 5000,
      rating: 5,
    },
    {
      id: 4,
      title: 'Play station game pad',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B638E86650FFF18._V531815327_.jpg',
      price: 3000,
      rating: 5,
    },
  ];
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='home'
        />
        <div className='home__row'>
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

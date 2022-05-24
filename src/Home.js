import React from 'react';

import './Home.css';
import Product from './Product';

const Home = () => {
  const number = [1, 2];
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='home'
        />

        <div className='home__row'>
          {number.map((d) => (
            <Product
              key={d}
              id='12413121'
              title='The lean startup'
              price={29.99}
              image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
              rating={5}
            />
          ))}

          {/* <Product
            key={2}
            id={Math.random()}
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={4}
          /> */}
        </div>
        <div className='home__row'>
          {/* <Product
            key={3}
            id={Math.random()}
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          /> */}
          {/* <Product
            key={4}
            id={Math.random()}
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          /> */}
          {/* <Product
            key={5}
            id={Math.random()}
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          /> */}
        </div>
        <div className='home__row'>
          {/* <Product
            key={6}
            id={Math.random()}
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

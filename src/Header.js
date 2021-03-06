import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Logo'
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div className='header__option' onClick={handleAuthentication}>
            <span className='header__optionLineOne'>
              こんにちは！{!user ? 'ゲスト' : user.email}
            </span>
            <span className='header__optionLineTwo'>
              {user ? 'サインアウト' : 'サインイン'}
            </span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className='header__option'>
            <span className='header__optionLineOne'>返品</span>
            <span className='header__optionLineTwo'>& カート</span>
          </div>
        </Link>

        <div className='header__optionBasket'>
          <Link to='/checkout'>
            <ShoppingBasketIcon />
          </Link>
          <span className='header__optionLineTwo header__basketCount'>
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      navigate('/');
    });
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        navigate('/');
      }
    });
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
        />
      </Link>

      <div className='login__container'>
        <h1>サインイン</h1>
        <form>
          <h5>Eメール</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>パスワード</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login__signInButton' onClick={signIn}>
            サインイン
          </button>
        </form>
        <p>
          「注文を確定する」ボタンを押してご注文いただくことで、お客様は当サイトの各種規約、プライバシー規約および当サイト上の販売条件に同意の上、商品をご注文されたことになります。
        </p>
        <button className='login__registerButton' onClick={register}>
          アマゾンアカウントを作成する
        </button>
      </div>
    </div>
  );
};

export default Login;

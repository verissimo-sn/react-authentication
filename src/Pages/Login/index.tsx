import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';

import LoginButton from  '../../components/LoginButton';

import logo from '../../assets/study.jpeg';

import { LoginWrap, LoginContainer, LoginTitle, Logo } from './styles';

const Login = () => {
  const { isAuthenticated } = useAuth0();

  function redirect() {
    return <Redirect to="/profile" />
  }

  return (
    <LoginWrap >
      <LoginTitle >
        Testando api de autenticação do Auth0.
      </LoginTitle >
      <LoginContainer >
        <Logo src={logo}/>
        {!isAuthenticated ? <LoginButton /> : redirect()}
      </LoginContainer >
    </LoginWrap >
  )
}

export default Login;
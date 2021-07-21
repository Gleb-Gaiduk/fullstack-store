import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Context } from '..';
import { login, registration } from '../http/userAPI';
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from '../routes/routesConsts';

const Auth = observer(() => {
  const { user: userStore } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authorize = async () => {
    try {
      let userData = null;
      if (isLogin) {
        userData = await login(email, password);
        console.log(userData);
      } else {
        userData = await registration(email, password);
        console.log('signIn', userData);
      }
      userStore.setUser(userData);
      userStore.setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Type your email....'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Type your password...'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
          <Row
            className='d-flex justify-content-between mt-3 pl-3 pr-3'
            style={{ flexWrap: 'nowraps', flexShrink: '1' }}
          >
            {isLogin ? (
              <div style={{ flexShrink: '1' }}>
                Still have no account?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
              </div>
            ) : (
              <div style={{ flexShrink: '1' }}>
                Already have an account?{' '}
                <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink>
              </div>
            )}
            <Button
              onClick={authorize}
              style={{ width: '140px', marginRight: '12px' }}
              variant={'outline-success'}
            >
              {isLogin ? 'Sign In' : 'Registration'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;

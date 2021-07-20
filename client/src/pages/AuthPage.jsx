import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../routes/routesConsts';

const Auth = () => {
  const location = useLocation();
  const history = useHistory();

  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
};

export default Auth;

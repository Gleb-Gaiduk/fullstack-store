import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useHistory } from 'react-router-dom';
import { Context } from '../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../routes/routesConsts';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink
          style={{ color: 'white', textDecoration: 'none' }}
          to={SHOP_ROUTE}
        >
          FULLSTACK STORE
        </NavLink>
        {user.isAuth ? (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              style={{ marginRight: '10px' }}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Admin panel
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;

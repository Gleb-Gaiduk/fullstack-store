import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import { SHOP_ROUTE } from '../routes/routesConsts';

const NavBar = () => {
  const { user } = useContext(Context);

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink
          style={{ color: 'white', textDecoration: 'none' }}
          to={SHOP_ROUTE}
        >
          FULLSTACK STORE{' '}
        </NavLink>
        {user.isAuth ? (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button variant={'outline-light'} style={{ marginRight: '10px' }}>
              Admin panel
            </Button>
            <Button variant={'outline-light'}>Log out</Button>
          </Nav>
        ) : (
          <Nav className='ml-auto' style={{ color: 'white' }}>
            <Button variant={'outline-light'}>Authorization</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from './routes';
import { SHOP_ROUTE } from './routesConsts';

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route exact key={path} path={path} component={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route exact key={path} path={path} component={Component} />
      ))}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;

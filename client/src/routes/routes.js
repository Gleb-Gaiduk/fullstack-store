import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './routesConsts';
import Admin from '../pages/AdminPage';
import Basket from '../pages/BasketPage';
import Shop from '../pages/ShopPage';
import Auth from '../pages/AuthPage';
import Device from '../pages/DevicePage';

// Routes for authorized user
export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

// Routes for any user
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },

  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },

  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },

  {
    path: DEVICE_ROUTE + '/:id',
    Component: Device,
  },
];

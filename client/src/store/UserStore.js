import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};

    // Mobx will be monitoring these variables and if it's getting changed components will be rerendered
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  // Functions above should be invoked only if its variable got changed
  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}

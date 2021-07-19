import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Fridges' },
      { id: 2, name: 'Smartphones' },
    ];

    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple ' },
    ];

    this._devices = [
      {
        id: 1,
        name: 'Iphone 12pro',
        price: 2500,
        rating: 5,
        img: 'https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony/smartfon-apple-iphone-12-pro-5g-pacific-blue-128gb?gclid=Cj0KCQjwxdSHBhCdARIsAG6zhlUkzw5TdYEeD7-dUnXXUH1LQOwj-ujncOl2GzR-vt9SrMjElmeiZ0UaAkQ6EALw_wcB',
      },

      {
        id: 2,
        name: 'Iphone 10',
        price: 2000,
        rating: 5,
        img: 'https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony/smartfon-apple-iphone-12-pro-5g-pacific-blue-128gb?gclid=Cj0KCQjwxdSHBhCdARIsAG6zhlUkzw5TdYEeD7-dUnXXUH1LQOwj-ujncOl2GzR-vt9SrMjElmeiZ0UaAkQ6EALw_wcB',
      },
    ];

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  // Functions above should be invoked only if its variable got changed
  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}

import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Fridges' },
      { id: 2, name: 'Smartphones' },
      { id: 3, name: 'Headphones' },
      { id: 4, name: 'Tablets' },
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
        img: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/26/2607261/Smartfon-APPLE-iPhone-12-Pro-pacyficzny-front-tyl.jpg',
      },

      {
        id: 2,
        name: 'Iphone 10',
        price: 2000,
        rating: 5,
        img: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/26/2607261/Smartfon-APPLE-iPhone-12-Pro-pacyficzny-front-tyl.jpg',
      },
    ];

    this._selectedType = {};
    this._selectedBrand = {};

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

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}

import { Injectable } from '@angular/core';
import { Ad } from '../Models/ad.model';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor() { }

  private ad: Ad = {
    id: "1",
    title: "Test title",
    description: "Test description",
    photoUrl: "",
    price: 1.23,
    date: "123",
    isFavorite:false
  };

  getData(){
    return this.ad;
  }


}

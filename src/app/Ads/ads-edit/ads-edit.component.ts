import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Ad } from 'src/app/Models/ad.model';
import { AdsService } from 'src/app/Services/ads.service';
import { getAds } from 'src/app/Store/Actions/ad.action';
import { AdsState } from 'src/app/Store/Reducers/ads.reducers';
import { adSelector } from 'src/app/Store/Selector/ads.selector';

@Component({
  selector: 'app-ads-edit',
  templateUrl: './ads-edit.component.html',
  styleUrls: ['./ads-edit.component.scss']
})
export class AdsEditComponent implements OnInit {

  selectedCategory!: string;
  selectedTypeRealty!: string;

  url = window.location.href;
  urlIndex = (this.url.split('/')[4]);
  ad$ = this.adsStore.pipe(select(adSelector(this.urlIndex)));

  constructor(
    private adsStore: Store<AdsState>,
    public adsService: AdsService,
    public router: Router) {
    this.adsStore.dispatch(getAds());
  }

  ngOnInit(): void {
  }

  typeRealty = {
    flat: "Flat",
    house: "House",
    ground: "Ground",
    garage: "Garage",
    commercialRealty: "Commercial realty"
  }

  update(id?:string,title?:string,location?:string,description?:string,price?:number) {
    const data ={
      title:title,
      description:description,
      location:location,
      price:price
    }
    if (id) {
      this.adsService.UpdateAd(id, data)
        .then(() => this.router.navigate(['/']))
        .catch(err => console.log(err));
    }
  }

}

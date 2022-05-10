import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getAds } from 'src/app/Store/Actions/ad.action';
import { AdsState } from 'src/app/Store/Reducers/ads.reducers';
import { adSelector } from 'src/app/Store/Selector/ads.selector';


@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {

  url = window.location.href;
  urlIndex = (this.url.split('/')[4]);
  ad$ = this.store.pipe(select(adSelector(this.urlIndex)));
  constructor(private store: Store<AdsState>) {
    this.store.dispatch(getAds());    
  }

  ngOnInit(): void {
    
  }

  


}

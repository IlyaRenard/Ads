import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ad } from 'src/app/Models/ad.model';
import { getAds } from 'src/app/Store/Actions/ad.action';
import { AdsState } from 'src/app/Store/Reducers/ads.reducers';
import { adsSelector, findAdByTitle } from 'src/app/Store/Selector/ads.selector';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

  ads$ = this.store.pipe(select(adsSelector))
  selectedIndex?: string;
  private routeSubscription?: Subscription;

  url:any;
  searchField:any;
  searchAd$:any;

  constructor(private store: Store<AdsState>, private route: ActivatedRoute) {
    this.store.dispatch(getAds());
    this.routeSubscription = route.params.subscribe(params => this.selectedIndex = params['selectedIndex']);
  }

  ngDoCheck() {    
   console.log(this.searchField);
   this.url = window.location.href;
   this.searchField = (this.url.split('/')[4]);
   this.searchAd$ = this.store.pipe(select(findAdByTitle(this.searchField)));
  }


  adDetail(ad: Ad): void {
    console.log(ad.id);
  }


  ngOnInit(): void {

  }

}

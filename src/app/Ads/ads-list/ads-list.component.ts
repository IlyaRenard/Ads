import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Favorite } from 'src/app/Models/favorite.model';
import { AdsService } from 'src/app/Services/ads.service';
import { getAds } from 'src/app/Store/Actions/ad.action';
import { AdsState } from 'src/app/Store/Reducers/ads.reducers';
import { adsSelector } from 'src/app/Store/Selector/ads.selector';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

  ads$ = this.store.pipe(select(adsSelector))
  
  selectedIndex?: string;
  private routeSubscription?: Subscription;
  favoriteAds?: Favorite[];


  constructor(
    private store: Store<AdsState>,
    private route: ActivatedRoute,
    public adsService: AdsService,) {
    this.store.dispatch(getAds());
    this.routeSubscription = route.params.subscribe(params => this.selectedIndex = params['selectedIndex']);
    this.adsService.GetAllFavoriteAdsSuccess().subscribe(data => this.favoriteAds = data)
  }

  addToFavorite(aid?: any) {
    const uid: any = window.localStorage.getItem('user');
    const userId = JSON.parse(uid).uid;
    const data = {
      uid: JSON.parse(uid).uid,
      aid: aid
    }

    if (!this.favoriteAds?.some(data => data.aid === aid && data.uid === userId)) {
      alert('Add to favorite')
      this.adsService.AddFavoriteAd(data)

    }
    else {
      const id = this.favoriteAds.filter(data => data.aid === aid && data.uid === userId)[0].id;
      this.adsService.DeleteFavoriteAd(id!);
      alert('Remove from favorite')
    }

  }

  ngOnInit(): void {

  }

}

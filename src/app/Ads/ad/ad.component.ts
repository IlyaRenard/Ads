import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AdsService } from 'src/app/Services/ads.service';
import { getAds } from 'src/app/Store/Actions/ad.action';
import { getUsers } from 'src/app/Store/Actions/user.action';
import { AdsState } from 'src/app/Store/Reducers/ads.reducers';
import { UserState } from 'src/app/Store/Reducers/user.reducer';
import { adSelector, userDataSelector } from 'src/app/Store/Selector/ads.selector';


@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {

  url = window.location.href;
  urlIndex = (this.url.split('/')[4]);
  ad$ = this.adsStore.pipe(select(adSelector(this.urlIndex)));
  currentUserUid:any;
  

  user$ = this.userStore.pipe(select(userDataSelector(this.urlIndex)));

  private routeSubscription?: Subscription;

  constructor(
    private adsStore: Store<AdsState>,
    private userStore: Store<UserState>,
    public adsService: AdsService,
    public router: Router,
    private route: ActivatedRoute) {
    this.adsStore.dispatch(getAds());
    this.userStore.dispatch(getUsers());
    this.routeSubscription = route.params.subscribe(params => this.urlIndex = params['selectedIndex']);
    const currentUser = window.localStorage.getItem('user');
    if(currentUser!=='null'){
      this.currentUserUid = JSON.parse(currentUser?currentUser:'null').uid;
    }
  }

  ngOnInit(): void {
    
  }

  deleteAd(currentId: any): void {
    if (this.urlIndex) {
      this.adsService.DeleteAd(currentId).then(() => {
        this.router.navigate(['/']);
      })
        .catch(err => console.log(err));
    }

  }


}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/Services/auth.service';
import { getAds } from 'src/app/Store/Actions/ad.action';
import { getFavorite } from 'src/app/Store/Actions/favorite.action';
import { getUsers } from 'src/app/Store/Actions/user.action';
import { AdsState } from 'src/app/Store/Reducers/ads.reducers';
import { FavoriteState } from 'src/app/Store/Reducers/favorite.reducers';
import { UserState } from 'src/app/Store/Reducers/user.reducer';
import { favoriteAdsUserSelector, userAdsSelector, userSelector } from 'src/app/Store/Selector/ads.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: any;


  public profile = {
    displayName: 'Ilya',
    email: 'ilya.gavrilik@gmail.com',
    phoneNumber: '298852785',
    photoUrl: "../../../assets/userProfile.png"
  };

  uid: any = window.localStorage.getItem('user')
  user$ = this.userStore.pipe(select(userSelector(JSON.parse(this.uid).uid)))
  userAds$ = this.adsStore.pipe(select(userAdsSelector(JSON.parse(this.uid).uid)))
  favoriteAds$ = this.favoriteStore.pipe(select(favoriteAdsUserSelector(JSON.parse(this.uid).uid)));


  constructor(
    private adsStore: Store<AdsState>,
    private userStore: Store<UserState>,
    public authService: AuthService,
    public favoriteStore: Store<FavoriteState>) {
    this.userStore.dispatch(getUsers());
    this.adsStore.dispatch(getAds());
    this.favoriteStore.dispatch(getFavorite());
  }

  ngOnInit(): void {

  }

}

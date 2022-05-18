import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdComponent } from './Ads/ad/ad.component';
import { AddAdsComponent } from './Ads/add-ads/add-ads.component';
import { AdsEditComponent } from './Ads/ads-edit/ads-edit.component';
import { AdsListComponent } from './Ads/ads-list/ads-list.component';
import { SearchListComponent } from './Ads/search-list/search-list.component';
import { LoginComponent } from './Authorization/login/login.component';
import { RegistrationComponent } from './Authorization/registration/registration.component';
import { EditProfileComponent } from './Profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './Profile/profile/profile.component';

const routes: Routes = [
{ path: '', component:AdsListComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'editProfile/:currentUser', component: EditProfileComponent },
{ path: 'addAd', component: AddAdsComponent },
{ path: 'ad/:selectedIndex', component: AdComponent },
{ path: 'search/:searchField', component: SearchListComponent },
{ path: 'edit/:selectedIndex', component: AdsEditComponent },
{ path: 'category/:category', component: SearchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AdsListComponent } from "./ads-list/ads-list.component";
import { adReducer } from "../Store/Reducers/ads.reducers";
import { adsFeatureKey, favoriteFeatureKey } from "../Store/Selector/ads.selector";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AdsEffects } from "../Store/Effects/ads.effects";
import { AdPrewiewComponent } from "./ad-prewiew/ad-prewiew.component";
import { AngularMaterialModule } from "../angular-material.module";
import { AdComponent } from "./ad/ad.component";
import { AddAdsComponent } from "./add-ads/add-ads.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { AdsEditComponent } from './ads-edit/ads-edit.component';
import { SearchListComponent } from './search-list/search-list.component';
import { favoriteReducer } from "../Store/Reducers/favorite.reducers";
import { FavoriteEffects } from "../Store/Effects/favorite.effects";


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(adsFeatureKey, adReducer),
        EffectsModule.forFeature([AdsEffects]),
        StoreRouterConnectingModule.forRoot({}),
        AngularMaterialModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        RouterModule,
        MatCardModule
    ],
    declarations: [
        AdsListComponent,
        AdPrewiewComponent,
        AdComponent,
        AddAdsComponent,
        AdsEditComponent,
        SearchListComponent
    ],
    exports: [
        AdsListComponent,
        AdPrewiewComponent,
        AdComponent,
        AddAdsComponent,
        AdsEditComponent
    ]
})
export class AdsModule { }
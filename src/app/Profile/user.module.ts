import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from "@angular/material/card";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from "@ngrx/store";
import { AdsModule } from "../Ads/ads.module";
import { AngularMaterialModule } from "../angular-material.module";
import { FavoriteEffects } from "../Store/Effects/favorite.effects";
import { UserEffects } from "../Store/Effects/user.effects";
import { favoriteReducer } from "../Store/Reducers/favorite.reducers";
import { userReducer } from "../Store/Reducers/user.reducer";
import { favoriteFeatureKey, userFeatureKey } from "../Store/Selector/ads.selector";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ProfileComponent } from "./profile/profile.component";


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(userFeatureKey, userReducer),
        EffectsModule.forFeature([UserEffects]),
        StoreModule.forFeature(favoriteFeatureKey, favoriteReducer),
        EffectsModule.forFeature([FavoriteEffects]),
        StoreRouterConnectingModule.forRoot({}),
        AngularMaterialModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        RouterModule,
        MatCardModule,
        AdsModule,
    ],
    declarations: [
        EditProfileComponent,
        ProfileComponent,
    ],
    exports: [
        EditProfileComponent,
        ProfileComponent
    ]
})
export class UserModule { }
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, tap } from "rxjs";
import { AdsService } from "src/app/Services/ads.service";
import { getFavorite, getFavoriteSuccess } from "../Actions/favorite.action";



@Injectable()
export class FavoriteEffects {

    loadFavoriteAds$ = createEffect(() =>
        this.action$.pipe(
            ofType(getFavorite),
            exhaustMap(() =>
                this.adsService.GetAllFavoriteAdsSuccess().pipe(
                    map((favoriteAds) => getFavoriteSuccess(favoriteAds)),
                    catchError(() => EMPTY)
                )
            )
        )
    );


    constructor(private action$: Actions, private adsService: AdsService) { }
}
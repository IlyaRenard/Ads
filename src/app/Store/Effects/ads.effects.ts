import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, EMPTY, exhaustMap, map, tap } from "rxjs";
import { AdsService } from "src/app/Services/ads.service";
import { addAd, addAdsSuccess, getAds, getAdsSuccess } from "../Actions/ad.action";



@Injectable()
export class AdsEffects {


    loadAds$ = createEffect(() =>
        this.action$.pipe(
            ofType(getAds),
            exhaustMap(() =>
                this.adsService.GetAllAdsSuccess().pipe(
                    map((ads) => getAdsSuccess(ads)),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    addAd$ = createEffect((): any =>
        this.action$.pipe(
            ofType(addAd),
            concatMap(({ ad }) =>
                this.adsService.AddAd(ad).pipe(
                    map((newAd: any) => addAdsSuccess(newAd)),
                    catchError(() => EMPTY)
                )
            )
        )

    );


    constructor(private action$: Actions, private adsService: AdsService) { }
}
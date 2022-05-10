import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Ad } from "src/app/Models/ad.model";
import { AdsState } from "../Reducers/ads.reducers";

export const adsFeatureKey = 'Ads'

const adsKey: any = createFeatureSelector<AdsState>(adsFeatureKey);

export const adsSelector = createSelector(
    adsKey,
    (ads: ReadonlyArray<Ad>) => ads
)

export const adSelector = (id: string) => createSelector(
    adsSelector,
    (ads: ReadonlyArray<Ad>) => {
        return ads.filter((item: any) => item.id === id)[0];
    }
)

export const findAdByTitle = (title: string) => createSelector(
    adsSelector,
    (ads: ReadonlyArray<Ad>) => {
        return ads.filter((item: any) => item.title.toString().toLowerCase().includes(title));
    }
)





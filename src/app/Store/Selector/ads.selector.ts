import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Ad } from "src/app/Models/ad.model";
import { Favorite } from "src/app/Models/favorite.model";
import { User } from "src/app/Models/user";
import { AdsState } from "../Reducers/ads.reducers";
import { FavoriteState } from "../Reducers/favorite.reducers";
import { UserState } from "../Reducers/user.reducer";

export const adsFeatureKey = 'Ads'
export const favoriteFeatureKey = 'Favorite'
export const userFeatureKey = 'Users'

const adsKey: any = createFeatureSelector<AdsState>(adsFeatureKey);
const favoriteKey: any = createFeatureSelector<FavoriteState>(favoriteFeatureKey);
const userKey: any = createFeatureSelector<UserState>(userFeatureKey)

export const adsSelector = createSelector(
    adsKey,
    (ads: Array<Ad>) => ads
)

export const adSelector = (id: string) => createSelector(
    adsSelector,
    (ads: Array<Ad>) => {
        return ads.filter((item: any) => item.id === id)[0];
    }
)

export const findAdByTitle = (title: string) => createSelector(
    adsSelector,
    (ads: Array<Ad>) => {
        return ads.filter((item: any) => item.title.toString().toLowerCase().includes(title));
    }
)

export const findAdByCategory = (category: string) => createSelector(
    adsSelector,
    (ads: Array<Ad>) => {
        return ads.filter((item: any) => item.category === category)
    }
)

export const usersSelector = createSelector(
    userKey,
    (users: Array<User>) => users
)

export const userSelector = (uid: string) => createSelector(
    usersSelector,
    (users: Array<User>) => {
        return users.filter((item: any) => item.uid === uid)[0];
    }
)

export const userAdsSelector = (uid: string) => createSelector(
    adsSelector,
    (ads: Array<Ad>) => {
        return ads.filter((item: any) => item.uid === uid);
    }
)

export const userDataSelector = (id: string) => createSelector(
    adsSelector,
    usersSelector,
    (ads: Array<Ad>, users: Array<User>) => {
        return users.filter(
            (item: any) =>
                item.uid === (ads.filter(
                    (item) => item.id === id
                )
                )[0].uid)[0]
    }
)

export const favoriteSelector = createSelector(
    favoriteKey,
    (favorite: Array<Favorite>) => favorite
)


export const favoriteAdsUserSelector = (uid: string) => createSelector(
    favoriteSelector,
    adsSelector,
    (favorite: Array<Favorite>, ads: Array<Ad>) => {
        const a = favorite.filter(item => item.uid === uid)
        const b = a.map(item => ads.find(i => {
            return i.id === item.aid
        }))
        return b;
    }
)

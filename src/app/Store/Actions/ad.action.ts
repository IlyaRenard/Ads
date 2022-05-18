import { createAction } from '@ngrx/store';
import { Ad } from 'src/app/Models/ad.model';



export const getAds = createAction(
    '[Ad] Get ads'
);
export const getAdsSuccess = createAction(
    '[Ad] Get ad success',
    (ads: Array<Ad>) => ({ ads })
);
export const addAd = createAction(
    '[Ad] Add ad',
    (ad: Ad) => ({ ad })
);
export const addAdsSuccess = createAction(
    '[Ad] Add ad success',
    (ad: Ad) => ({ ad })
);




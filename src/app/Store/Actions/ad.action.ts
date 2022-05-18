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

export const deleteAd = createAction(
    '[Ad] Delete ad',
    (adId: string) => ({ adId })
);

export const deleteAdSuccess = createAction(
    '[Ad] Delete ad success',
    (adId: string) => ({ adId })
);

export const updateAd = createAction(
    '[Ad] Update ad',
    (ad: Ad) => ({ ad })
);

export const updateAdSuccess = createAction(
    '[Ad] Update ad success',
    (ad: Ad) => ({ ad })
);


import { createReducer, on } from "@ngrx/store";
import { Ad } from "src/app/Models/ad.model";
import { addAdsSuccess, deleteAdSuccess, getAdsSuccess } from "../Actions/ad.action";


export interface AdsState {
  ads: Array<Ad>;

}

const initialAdState: Array<Ad> = [];


export const adReducer = createReducer(
  initialAdState,
  on(getAdsSuccess, (state, { ads }) => [...ads]),
  on(addAdsSuccess, (state, { ad }) => [...state, ad]),
  on(deleteAdSuccess, (state, { adId }) => state.filter((ad) => ad.id !== adId)),

)




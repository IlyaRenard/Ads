import { createReducer, on } from "@ngrx/store";
import { Ad } from "src/app/Models/ad.model";
import { addAdsSuccess, getAdsSuccess } from "../Actions/ad.action";


export interface AdsState {
  ads: Array<Ad>;

}

const initialAdState: Array<Ad> = [];


export const adReducer = createReducer(
  initialAdState,
  on(getAdsSuccess, (state, { ads }) => [...ads]),
  on(addAdsSuccess, (state, { ad }) => [...state, ad]),
)




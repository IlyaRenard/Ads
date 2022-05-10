import { createReducer, on } from "@ngrx/store";
import { Ad } from "src/app/Models/ad.model";
import { addAdsSuccess, getAdsSuccess } from "../Actions/ad.action";


export interface AdsState {
  ads: ReadonlyArray<Ad>;
}

const initialState: ReadonlyArray<Ad> = [];


export const adReducer = createReducer(
  initialState,
  on(getAdsSuccess, (state, { ads }) => [...ads]),
  on(addAdsSuccess, (state, { ad }) => [...state, ad]),

)

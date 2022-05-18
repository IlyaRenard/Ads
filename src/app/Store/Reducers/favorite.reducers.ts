import { createReducer, on } from "@ngrx/store";
import { Favorite } from "src/app/Models/favorite.model";
import { getFavoriteSuccess } from "../Actions/favorite.action";


export interface FavoriteState{
    user:Array<Favorite>;
  }
  

const initialFavoriteState:Array<Favorite>=[];

export const favoriteReducer = createReducer(
    initialFavoriteState,
    on(getFavoriteSuccess,(state,{favorite}) => [...favorite])
  )
import { createAction } from '@ngrx/store';
import { Favorite } from 'src/app/Models/favorite.model';

export const getFavorite = createAction(
    '[Favorite] Get favorite ads'
);
export const getFavoriteSuccess = createAction(
    '[Favorite] Get favorite ad success',
    (favorite: Array<Favorite>) => ({ favorite })
);
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, tap } from "rxjs";
import { AuthService } from "src/app/Services/auth.service";
import { getUsers, getUsersSuccess } from "../Actions/user.action";



@Injectable()
export class UserEffects {

    loadAds$ = createEffect(() =>
        this.action$.pipe(
            ofType(getUsers),
            exhaustMap(() =>
                this.authService.GetAllUserSuccess().pipe(
                    tap(console.log),
                    map((users) => getUsersSuccess(users)),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private action$: Actions, private authService: AuthService) { }
}
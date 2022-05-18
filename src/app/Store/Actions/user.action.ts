import { createAction } from "@ngrx/store";
import { User } from "src/app/Models/user";




export const getUsers = createAction(
    '[User] Get users'
);
export const getUsersSuccess = createAction(
    '[User] Get users success',
    (users: Array<User>) => ({ users})
);

export const updateUser = createAction(
    '[User] Update user',
    (user: User) => ({ user })
);

export const updateUserSuccess = createAction(
    '[User] Update user success',
    (user: User) => ({ user })
);
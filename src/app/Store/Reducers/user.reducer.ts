import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/Models/user";
import { getUsersSuccess } from "../Actions/user.action";


export interface UserState{
    user:Array<User>;
  }
  

const initialUserState:Array<User>=[];

export const userReducer = createReducer(
    initialUserState,
    on(getUsersSuccess,(state,{users}) => [...users])
  )
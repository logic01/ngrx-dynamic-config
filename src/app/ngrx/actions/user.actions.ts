import { HttpErrorResponse } from '@angular/common/http';

import { Action } from '@ngrx/store';

import { User } from '../../models/user';

export enum UserActionTypes {
    GetUser = '[User] Get',
    GetUserPending = '[User] Get Pending',
    GetUserSuccess = '[User] Get Success',
    GetUserError = '[User] Get Error',
}

export class GetUserAction implements Action {
    readonly type = UserActionTypes.GetUser;
    constructor(public payload: number) { }
}

export class GetUserPendingAction implements Action {
    readonly type = UserActionTypes.GetUserPending;
    constructor() { }
}


export class GetUserSuccessAction implements Action {
    readonly type = UserActionTypes.GetUserSuccess;
    constructor(public payload: User) { }
}

export class GetUserErrorAction implements Action {
    readonly type = UserActionTypes.GetUserError;
    constructor(public payload: HttpErrorResponse) { }
}

// allows Typescript dot complete access to our actions.
export type UserActionsUnion =
    GetUserAction
    | GetUserPendingAction
    | GetUserSuccessAction
    | GetUserErrorAction;

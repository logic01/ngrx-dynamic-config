import { HttpErrorResponse } from '@angular/common/http';

import { Action } from '@ngrx/store';

import { Config } from '../../models/config';

export enum ConfigActionTypes {
    GetConfig = '[Config] Get',
    GetConfigSuccess = '[Config] Get Success',
    GetConfigError = '[Config] Get Error',
}

export class GetConfigAction implements Action {
    readonly type = ConfigActionTypes.GetConfig;
    constructor(public payload: string) { }
}

export class GetConfigSuccessAction implements Action {
    readonly type = ConfigActionTypes.GetConfigSuccess;
    constructor(public payload: Config) { }
}

export class GetConfigErrorAction implements Action {
    readonly type = ConfigActionTypes.GetConfigError;
    constructor(public payload: HttpErrorResponse) { }
}

// allows Typescript dot complete access to our actions.
export type ConfigActionsUnion =
    GetConfigAction
    | GetConfigSuccessAction
    | GetConfigErrorAction;

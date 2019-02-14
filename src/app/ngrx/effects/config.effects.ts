import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { Config } from './../../models/config';
import { ConfigService } from './../../services/api/config.service';
import {
    ConfigActionTypes,
    GetConfigAction,
    GetConfigErrorAction,
    GetConfigSuccessAction,
} from './../actions/config.actions';

@Injectable()
export class ConfigEffects {

    constructor(
        private actions$: Actions,
        private configService: ConfigService
    ) { }

    @Effect()
    getConfig$ = this.actions$.pipe(
        ofType<GetConfigAction>(ConfigActionTypes.GetConfig),
        map((action: GetConfigAction) => action.payload),
        switchMap(() => {
            return this.configService.get().pipe(
                map((result: Config) => new GetConfigSuccessAction(result)),
                catchError((error: HttpErrorResponse) => of(new GetConfigErrorAction(error)))
            );
        })
    );
}


import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { User } from '../../models/user';
import { UserService } from '../../services/api/user.service';
import {
    GetUserAction,
    GetUserErrorAction,
    GetUserPendingAction,
    GetUserSuccessAction,
    UserActionTypes,
} from '../actions/user.actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    @Effect()
    getUser$ = this.actions$.pipe(
        ofType<GetUserAction>(UserActionTypes.GetUser),
        map((action: GetUserAction) => action.payload),
        switchMap((payload: number) => {
            return this.userService.get(payload).pipe(
                map((result: User) => {
                    if (result) {
                        return new GetUserSuccessAction(result);
                   } else {
                        return new GetUserPendingAction();
                   }
                }),
                catchError((error: HttpErrorResponse) => of(new GetUserErrorAction(error)))
            );
        })
    );
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/store/app-state';

import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url$ = this.store.select(state => state.config.api_url);

  constructor(
    private readonly http: HttpClient,
    private readonly store: Store<AppState>) {
  }

  get(id: number): Observable<User> {

    // todo - find way to extract this code for re-usability
    return this.url$.pipe(switchMap((api_url: string) => {
      if (api_url) {
        return this.http.get<User>(api_url + `/user/${id}`);
      } else {
        // pending
        return of(undefined);
      }
    }));
  }

}

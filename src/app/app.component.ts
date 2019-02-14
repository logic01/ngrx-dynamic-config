import { Component } from '@angular/core';

import { GetConfigAction } from './ngrx/actions/config.actions';
import { GetUserAction } from './ngrx/actions/user.actions';
import { AppState } from './ngrx/store/app-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public title$ = this.store.select(state => state.config.api_url);
  public user_email$ = this.store.select(state => state.user.email);

  constructor(private readonly store: Store<AppState>) {

    // load configuration
    store.dispatch(new GetConfigAction(''));

    // pull user from API
    store.dispatch(new GetUserAction(1));
  }

}

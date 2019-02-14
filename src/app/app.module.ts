import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ConfigEffects } from './ngrx/effects/config.effects';
import { UserEffects } from './ngrx/effects/user.effects';
import { configReducer } from './ngrx/reducers/config.reducers';
import { userReducer } from './ngrx/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ config: configReducer, user: userReducer }),
    EffectsModule.forRoot([ConfigEffects, UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

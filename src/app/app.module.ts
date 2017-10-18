import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { ActionReducerMap, combineReducers, StoreModule } from '@ngrx/store';
import {
  NumberEffects, initialState, State, AppState,
  metaReducers, allReducers
} from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { numberReducer } from './store/reducers/number.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot(<any> {allReducers}, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      NumberEffects
    ]),
    // StoreRouterConnectingModule
  ],
  providers: [
    NumberEffects
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

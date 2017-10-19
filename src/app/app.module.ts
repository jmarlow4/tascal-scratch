import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { metaReducers, reducerProvider, reducerToken, initialState } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { numberReducer } from './store/reducers/number.reducer';
import { StoreModule } from '@ngrx/store';
import { NumberEffects } from './store/effects/number.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot(reducerToken, {initialState, metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      NumberEffects
    ]),
    // StoreRouterConnectingModule
  ],
  providers: [
    NumberEffects,
    reducerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

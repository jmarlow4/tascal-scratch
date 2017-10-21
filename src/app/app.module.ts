import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { metaReducers, initialState, allReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NumberEffects } from './store/effects/number.effects';
import {
  MatCardModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot(allReducers, {initialState, metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      NumberEffects
    ]),
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule
    // StoreRouterConnectingModule
  ],
  providers: [
    NumberEffects
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

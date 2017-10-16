import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
export * from './effects/number.effects';
export * from './reducers/number.reducers';

export interface AppState {
  counter: number;
}
export interface State { app: AppState; }

// initial state
export const initialState: State = {
  app: {
    counter: 0
  }
};



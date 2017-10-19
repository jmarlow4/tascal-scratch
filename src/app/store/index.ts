import { ActionReducerMap, combineReducers, Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { InjectionToken } from '@angular/core';
import { numberReducer } from './reducers/number.reducer';
export * from './effects/number.effects';
export * from './reducers/number.reducer';

export interface AppState {
  counter: number;
}
export interface State {
  app: {
    counter: number
  };
}

export const reducers = combineReducers({
  counter: numberReducer
});

export const reducerToken = new InjectionToken<ActionReducerMap<State>>('Reducers');
// initial state
export const initialState: State = {
  app: {
    counter: 0
  }
};
export function getReducers() {
  return {
    app: reducers,
  };
}

export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers }
];



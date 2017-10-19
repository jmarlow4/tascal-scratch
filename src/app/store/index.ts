import {
  ActionReducer, ActionReducerMap, combineReducers,
  MetaReducer
} from '@ngrx/store';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { numberReducer } from './reducers/number.reducer';
import 'rxjs/add/operator/map';
import { InjectionToken } from '@angular/core';
export * from './effects/number.effects';

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
  app: { counter: 0 }
};
export function getReducers() {
  return {
    app: reducers,
  };
}

export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers }
];

// console.log all actions
export function logger(actionReducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return actionReducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

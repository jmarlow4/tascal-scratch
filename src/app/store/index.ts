import {
  ActionReducer, ActionReducerMap, combineReducers, compose,
  MetaReducer
} from '@ngrx/store';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
export * from './effects/number.effects';
export * from './reducers/number.reducers';
import { storeFreeze } from 'ngrx-store-freeze';
import { numberReducer } from './reducers/number.reducers';

export interface AppState {
  counter: number;
}
export interface State { counter: number; }

// initial state
export const initialState: State = {
  counter: 0
};

export const allReducers: ActionReducerMap<any> = {
  counter: numberReducer
};
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

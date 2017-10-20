import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { counter } from './reducers/number.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface IAppState {
  counter: number;
}

export const allReducers: ActionReducerMap<IAppState> = {
  counter
};

// initial state
export const initialState: IAppState = {
  counter: 0
};

// console.log all actions if in dev mode
export function logger
  (actionReducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
  return function(state: IAppState, action: any): IAppState {
    console.log('state', state);
    console.log('action ' + action.type, action);
    return actionReducer(state, action);
  };
}

export function localStorageSyncReducer
  (actionReducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
  return localStorageSync({keys: ['counter'], rehydrate: true})(actionReducer);
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<any, any>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [];

import { RouterAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

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

// actions
export interface IncrementNumber {
  type: 'INCREMENT_NUMBER';
}
export interface UpdateNumber {
  type: 'UPDATE_NUMBER';
  payload: { counter };
}
export interface NumberResult {
  type: 'NUMBER_RESULT';
}
type Action = RouterAction<State> | IncrementNumber | UpdateNumber | NumberResult;

// reducer
export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENT_NUMBER': {
      return {...state, counter: state.counter++};
    }
    case 'UPDATE_NUMBER': {
      return {...state, counter: action.payload.counter};
    }
    case 'NUMBER_RESULT': {
      return state;
    }
    default: {
      return state;
    }
  }
}

// effects
@Injectable()
export class NumberEffects {
  @Effect() numberIncremented = this.actions.ofType('UPDATE_NUMBER')
    .map((a: UpdateNumber) => {
      console.log('effect of update number!', a.payload.counter);
      return { type: 'NUMBER_RESULT' };
    });
  constructor (private actions: Actions, private store: Store<State>) {}
}

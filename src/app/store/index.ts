import { RouterAction } from '@ngrx/router-store';
import { Effect } from '@ngrx/effects';

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
  payload: { counter };
}
type Action = RouterAction<State> | IncrementNumber;

// reducer
export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENT_NUMBER': {
      let incrementedCounter = state.counter;
      incrementedCounter++;
      return {...state, counter: incrementedCounter};
    }
    default: {
      return state;
    }
  }
}

// effects @Injectable()
export class NumberEffects {
  @Effect() numberIncremented = () => console.log('effect of incrementing the number!');
}

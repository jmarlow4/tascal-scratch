import * as number from '../actions/number.actions';
import { NumberActions } from '../actions/number.actions';


export interface State {
  counter: number;
}

const initialState: State = {
  counter: 0
};

export function numberReducer(state: State = initialState, actions: NumberActions): State {
  switch (actions.type) {
    case 'INCREMENT_NUMBER': {
      const counter = ++state.counter;
      return { counter };
    }
    case 'UPDATE_NUMBER': {
      return actions.payload.counter;
    }
    case 'NUMBER_RESULT': {
      return state;
    }
    default: {
      return state;
    }
  }
}

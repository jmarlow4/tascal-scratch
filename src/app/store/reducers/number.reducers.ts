import {
  IncrementNumber, NumberResult, UpdateNumber
} from '../actions/number.actions';
import { State } from '../index';

type Action = IncrementNumber | UpdateNumber | NumberResult;
export function numberReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT_NUMBER': {
      return {...state, counter: ++state.counter};
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

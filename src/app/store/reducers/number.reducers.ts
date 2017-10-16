import {
  IncrementNumber, NumberResult, UpdateNumber
} from '../actions/number.actions';

type Action = IncrementNumber | UpdateNumber | NumberResult;
export function numberReducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case 'INCREMENT_NUMBER': {
      return state++;
    }
    case 'UPDATE_NUMBER': {
      return action.payload.counter;
    }
    case 'NUMBER_RESULT': {
      return state;
    }
    default: {
      return state;
    }
  }
}

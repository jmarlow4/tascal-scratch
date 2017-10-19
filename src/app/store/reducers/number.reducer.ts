import * as number from '../actions/number.actions';
import { NumberActions } from '../actions/number.actions';

export function numberReducer(state: number = 0, actions: NumberActions): number {
  switch (actions.type) {
    case 'INCREMENT_NUMBER': {
      return ++state;
    }
    case 'UPDATE_NUMBER': {
      return actions.payload;
    }
    case 'NUMBER_RESULT': {
      return state;
    }
    default: {
      return state;
    }
  }
}

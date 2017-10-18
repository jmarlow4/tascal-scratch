import { Action } from '@ngrx/store';

export const INCREMENT_NUMBER = 'INCREMENT_NUMBER';
export const UPDATE_NUMBER = 'UPDATE_NUMBER';
export const NUMBER_RESULT = 'NUMBER_RESULT';

export class IncrementNumber implements Action {
  readonly type: INCREMENT_NUMBER;
}
export class UpdateNumber implements Action {
  readonly type: UPDATE_NUMBER;
  payload: { counter };
}
export class NumberResult implements Action {
  readonly type: NUMBER_RESULT;
}

export type NumberActions = IncrementNumber | UpdateNumber | NumberResult;

import { RouterAction } from '@ngrx/router-store';
import { State } from '../index';

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

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { State } from '../index';
import { Store } from '@ngrx/store';
import { UpdateNumber } from '../actions/number.actions';

@Injectable()
export class NumberEffects {
  @Effect() numberIncremented = this.actions.ofType('UPDATE_NUMBER')
    .map((a: UpdateNumber) => {
      console.log('effect of update number!', a.payload);
      return { type: 'NUMBER_RESULT' };
    });
  constructor (private actions: Actions, private store: Store<State>) {}
}

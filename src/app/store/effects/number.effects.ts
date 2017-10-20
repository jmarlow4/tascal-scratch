import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { IAppState } from '../index';
import { Store } from '@ngrx/store';
import { UpdateNumber } from '../actions/number.actions';
import 'rxjs/add/operator/map';

@Injectable()
export class NumberEffects {
  @Effect() numberIncremented = this.actions.ofType('UPDATE_NUMBER')
    .map((a: UpdateNumber) => {
      console.log('effect of update number!', a.payload);
      return { type: 'NUMBER_RESULT' };
    });
  constructor (private actions: Actions, private store: Store<IAppState>) {}
}

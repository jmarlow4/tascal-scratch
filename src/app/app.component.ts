import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  num: Observable<number>;
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch({type: 'UPDATE_NUMBER', payload: 5});
    this.num = this.store.select('counter');
  }

  increment(event) {
    this.store.dispatch({ type: 'INCREMENT_NUMBER'});
  }
}

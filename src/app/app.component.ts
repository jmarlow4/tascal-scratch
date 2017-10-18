import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, State } from './store/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  counter: Observable<number>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch({ type: 'UPDATE_NUMBER', payload: {counter: 7}});
    this.counter = this.store.select('app', 'counter');
  }

  increment(event) {
    this.store.dispatch({ type: 'INCREMENT_NUMBER'});
  }
}

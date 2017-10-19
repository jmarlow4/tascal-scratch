import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  num: Observable<number>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch({ type: 'UPDATE_NUMBER', payload: 5});
    this.num = this.store.select('app', 'counter');
  }
}

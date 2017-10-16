import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/index';

@Component({
  selector: 'tsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch({ type: 'INCREMENT_NUMBER', payload: 'derp'});
  }
}

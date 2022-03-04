import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import { decrement, increment, reset } from 'src/app/states/counter/counter.actions';
import { CounterState } from 'src/app/states/counter/counter.state';
;

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  onIncrement()
  {
    this.store.dispatch(increment())
  }

  onDecrement()
  {
    this.store.dispatch(decrement())
  }

  onReset()
  {
    this.store.dispatch(reset())
  }
}

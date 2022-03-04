import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/states/app.state';
import { getCounter } from 'src/app/states/counter/counter.selectors';
import { CounterState } from 'src/app/states/counter/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  public counter$ !: Observable<number>;
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter)
  }
}

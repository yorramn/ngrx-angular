import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/states/app.state';
import { add, changeChannelName } from 'src/app/states/counter/counter.actions';
import { getChannelName } from 'src/app/states/counter/counter.selectors';
import { CounterState } from 'src/app/states/counter/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  public value : number = 0;
  public channelName$!: Observable<string>;
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd()
  {
    this.store.dispatch(add({value : +this.value}))
  }

  onChangeChannelName()
  {
    this.store.dispatch(changeChannelName())
  }
}

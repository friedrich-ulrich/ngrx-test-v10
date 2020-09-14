import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input()
  set o(v: number) {
    console.log('o', v);
    if(v) this.o$.next(v);
  }

  constructor() {}

  o$ = new BehaviorSubject(5);

  ngOnInit() {}
}

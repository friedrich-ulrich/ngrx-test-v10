import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  v$ = timer(0, 1000);

  constructor() {}

  ngOnInit(): void {
    this.v$.subscribe((x) => console.log(x));
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass'],
})
export class SpinnerComponent implements OnInit {

  @Input('spinnerClass') spinnerClass:string;

  constructor() { }

  ngOnInit() {
  }

}

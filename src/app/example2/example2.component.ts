import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isActive: boolean = false;
  isOn: boolean
  isDisabled:boolean
  get imageClass() {
    return { 
      'is-on': this.isOn,
      'is-disabled': !this.isDisabled
    }
  }
  // get jsonComputedClass() {
    // return JSON.stringify(this.myComputedClass);
  // }

  toggle() { 
    this.isOn = !this.isOn; 
    this.isDisabled = !this.isDisabled; 
  }
}

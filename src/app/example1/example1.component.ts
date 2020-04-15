import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {
  title = 'Pet Store';
  imgURL = '../assets/img/1.jpg'
  something = 'hello'
  greet(ev) {
    console.log('hola', ev);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

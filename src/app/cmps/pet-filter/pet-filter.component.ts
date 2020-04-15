import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'pet-filter',
  templateUrl: './pet-filter.component.html',
  styleUrls: ['./pet-filter.component.scss']
})
export class PetFilterComponent implements OnInit {
  @Input() filterBy;
  filterByCopy = null;
  @Output() onFilter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log('this.filterBy', this.filterBy);
    this.filterByCopy = { ...this.filterBy }
  }

  onInput() {
    this.onFilter.emit(this.filterByCopy);
  }
}

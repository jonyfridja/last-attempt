import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  @Output() onPetSelected = new EventEmitter<Pet>();
  
  // @Input() pets: Array<any>;
  @Input() pets: Pet[];

  constructor() { }

  ngOnInit(): void {
  }

}

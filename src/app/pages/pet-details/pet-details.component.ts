import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {
  @Output() onGoBack = new EventEmitter<void>();
  @Input() pet: Pet;
  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  async shouldByClickHandler() {
    // const res = await this.petService.shouldBuyPet(this.pet)
    this.petService.shouldBuyPet(this.pet)
  }

}

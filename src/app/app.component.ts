import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pet } from './models/pet.model'
import { PetService } from './services/pet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>{{title}}</h1>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  filterBy = { term: '' }
  pets: Pet[] = [];
  currPet: Pet = null;
  subscription: Subscription


  constructor(private petService: PetService) {
    this.subscription = this.petService.pets$.subscribe((pets) => {
      this.pets = [...pets];
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onFilterHandler(filterBy) {
    this.filterBy = filterBy
    this.petService.loadPets(this.filterBy);
  }
}

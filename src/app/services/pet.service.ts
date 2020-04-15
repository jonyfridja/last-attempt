import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import { BehaviorSubject } from 'rxjs';


import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class PetService {


  private _pets: Pet[] = [
    { id: 'p123', name: 'Momo', age: 2, imgURL: 'img/1.jpg' },
    { id: 'p124', name: 'Bobo', age: 6, imgURL: 'img/2.jpg' },
    { id: 'p125', name: 'Gertomod', age: 1, imgURL: 'img/3.jpg' }
  ];

  private _pets$ = new BehaviorSubject<Pet[]>(this._pets);
  public pets$ = this._pets$.asObservable()

  public loadPets(filterBy = { term: '' }) {
    const pets = this._pets.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.term.toLowerCase());
    });
    this._pets$.next(pets);
  }

  async shouldBuyPet(pet: Pet) {
    const res = await axios.get('https://yesno.wtf/api', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        port: 4200,
        host: 'http://localhost:4200'
      }
    })
    console.log('res', res);
  }
  
  constructor() { }
}

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const shopping = [
      {
        id: 1,
        title: 'Chicken',
        completed: true 
      },
      {
        id: 2,
        title: 'Cucumber',
        completed: false 
      },
      {
        id: 3,
        title: 'Eggs',
        completed: false 
      }
    ];
    return {shopping: shopping}
  }

  constructor() { }
}

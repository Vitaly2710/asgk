import { Component } from '@angular/core';
import {Person} from "../../interfaces/costumers.interface";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-costumer-list',
  templateUrl: './costumer-list.component.html',
  styleUrls: ['./costumer-list.component.scss']
})
export class CostumerListComponent {
  desserts: Person[] = [
    {name: 'Oliver', sex: 'male', age: 32, growth: 24, nationality: 'Russian',  weight: 66, eye: 'green', status: 'married', job: 'Mechanic', city: 'Moscow'},
    {name: 'Jack', sex: 'male', age: 31, growth: 24, nationality: 'Belarusian',  weight: 77, eye: 'blue', status: 'single', job: 'Footballer', city: 'Minsk'},
    {name: 'Harry', sex: 'male', age: 19, growth: 24, nationality: 'Belarusian',  weight: 76, eye: 'green', status: 'married', job: 'Manager', city: 'Minsk'},
    {name: 'Ann', sex: 'female', age: 29, growth: 24, nationality: 'Russian',  weight: 55, eye: 'yellow', status: 'married', job: 'Cook', city: 'Moscow'},
    {name: 'Charley', sex: 'male', age: 36, growth: 24, nationality: 'Russian',  weight: 100, eye: 'green', status: 'married', job: 'Developer', city: 'Moscow'},
    {name: 'Gaby', sex: 'female', age: 56, growth: 24, nationality: 'Ukrainian',  weight: 99, eye: 'blue', status: 'married', job: 'Teacher', city: 'Kiev'},
    {name: 'George', sex: 'male', age: 36, growth: 24, nationality: 'Kazakhstani',  weight: 87, eye: 'green', status: 'single', job: 'Doctor', city: 'Astana'},
    {name: 'Oscar', sex: 'male', age: 26, growth: 24, nationality: 'Kazakhstani',  weight: 101, eye: 'red', status: 'married', job: 'mechanic', city: 'Vladivostok'},
  ];

  sortedData: Person[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'sex':
          return compare(a.sex, b.sex, isAsc);
        case 'age':
          return compare(a.age, b.age, isAsc);
        case 'growth':
          return compare(a.growth, b.growth, isAsc);
        case 'nationality':
          return compare(a.nationality, b.nationality, isAsc)
        case 'weight':
          return compare(a.weight, b.weight, isAsc);
        case 'eye':
          return compare(a.eye, b.eye, isAsc);
        case 'status':
          return compare(a.status, b.status, isAsc);
        case 'job':
          return compare(a.job, b.job, isAsc);
        case 'city':
          return compare(a.city, b.city, isAsc);
        default:
          return 0;
      }
    });
  }


  filteredCostumers(list: Person[]) {
    if(!list.length) {
      this.sortedData = this.desserts.slice()
      return
    }

    this.sortedData = list
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);


}

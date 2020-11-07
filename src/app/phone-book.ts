import { Injectable } from '@angular/core';
import { Person } from './person';


@Injectable({
  providedIn: 'root'
})
export class PhoneBook {
  people: Person[] = [];

  addPerson(person: Person): void {
    person.phoneNumber = person.phoneNumber.replace('-','');
    this.people.push(person);
    person = new Person();
    this.people = this.people.sort((a, b) => {
      const result =  a.lastName.localeCompare(b.lastName); // Use a polyfill for IE support
      if( result === 0) {
        return a.firstName.localeCompare(b.firstName);
      }
      return result;
    });

  }

  getPeople(): Person[] {
    return this.people;
  }

}

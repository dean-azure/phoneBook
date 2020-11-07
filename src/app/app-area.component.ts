import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PhoneBook } from './phone-book';

@Component({
  selector: 'ph-app-area',
  templateUrl: './app-area.component.html',
  styleUrls: ['./app-area.component.css']
})
export class AppAreaComponent implements OnInit {

  errors: string[] = [];
  newPerson = new Person();
  constructor(public phoneBook: PhoneBook) { }

  ngOnInit(): void {

  }
  addPerson() {
    const result = this.newPerson.validate();
    if (result.length > 0 ){
      this.errors = result;
      return;
    }
    this.errors = [];
    this.phoneBook.addPerson(this.newPerson);
    this.newPerson = new Person();
  }

}

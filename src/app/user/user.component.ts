import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: 'This is from user component {{counter}}'
})
export class User {

  counter: number = 1;

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  template: `
    <p>Please work.</p>
    <button class="btn btn-primary" [class.active]="isActive">Boostrap Button!</button>
    <button [style.backgroundColor]="isActive? 'blue' : 'white'">Style Binding!</button>
    <button (click)="onClickButton($event)">click!</button>

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})

//<input #email (keyup)="onKeyUp(email.value)" />
//#email is a template variable

export class BindingExampleComponent {
  isActive = true;
  colSpan = 2;
  email = "me@place.com";
  
  onClickButton($event) {
    $event.stopPropagation(); //Prevents bubbling into parent elements
    this.isActive = !this.isActive;
    console.log($event);
  }

  

  onKeyUp() {
    //if ($event.keyCode===13) console.log('ENTER WAS PRESSED');
    //console.log($event.target.value);

    console.log(this.email);
  }
}

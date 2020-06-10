import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  template: `
    <p>Please work.</p>
    <button class="btn btn-primary" [class.active]="isActive">Boostrap Button!</button>
    <button [style.backgroundColor]>Style Binding!</button>
  `
})

export class BindingExampleComponent {
  isActive = false;
  colSpan = 2;
}

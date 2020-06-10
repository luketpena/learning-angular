import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  template: `
    <p>Please work.</p>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
  `
})
export class BindingExampleComponent {

  colSpan = 2;
}

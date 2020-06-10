import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'authors',
  template: `
    <h2>Author List</h2>
    <ul>
      <li *ngFor="let author of authorList">{{author}}</li>
    </ul>
  `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorList;

  constructor(service: AuthorsService) { 
    this.authorList = service.getAuthors();
  }

  ngOnInit(): void {
  }

}

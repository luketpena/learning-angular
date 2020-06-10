import  {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', //References new element <courses>
  template: `
      <h2>
        {{ "Title: " + getTitle() }}
      </h2>
      <ul>
        <li *ngFor="let course of courseList">
          {{ course }}
        </li>
      </ul>
      `
})

/*
  ngFor is a directive.
  If a directive modified the DOM, it needs to be proceded by a *
*/

/*
 Double braces {{}} is an indicator in Angular for when information needs to filled from a value in the class.

 This is called String Interpolation
*/

export class CoursesComponent {
  title = "List of Courses";
  courseList;

  //Adding it in the parameter of the constructor makes it a dependancy of this component 
  constructor(service: CoursesService) {
    this.courseList = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
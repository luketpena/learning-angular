import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './extras/courses.component';
import { CoursesService } from './extras/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { BindingExampleComponent } from './binding-example/binding-example.component';


//Can generate new components with ng g c [component-name] in terminal

@NgModule({
  //Bringing in components included in the module
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    BindingExampleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService, //A dependancy, this allows a single instance of this object to be passed to all that use it
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

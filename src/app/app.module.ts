import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { CourseListComponent } from './course-list/course-list.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    CourseListComponent,
    QuestionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: CategoriesComponent,
//     resolve: {
//       data: CategoriesResolver
//     }
//   },
//   {
//     path: 'questions/about/:categorySlug',
//     component: CategoryQuestionsComponent,
//     resolve: {
//       data: CategoryQuestionsResolver
//     }
//   },
//   {
//     path: 'question/:questionSlug',
//     component: QuestionAnswersComponent,
//     resolve: {
//       data: QuestionAnswersResolver
//     }
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: CourseListComponent,
    // resolve: {
    //   data
    // }
  },
  {
    path: 'questions/:courseSelected',
    component: QuestionsListComponent,
    // resolve: {
    //   data
    // }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

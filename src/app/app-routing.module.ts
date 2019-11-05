import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { NewStudentComponent } from './student/new-student/new-student.component';


const routes: Routes = [
{path: 'studentList', component: StudentListComponent},
{path: 'newStudent', component: NewStudentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { NewStudentComponent } from './new-student/new-student.component';



@NgModule({
  declarations: [StudentListComponent, NewStudentComponent],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }

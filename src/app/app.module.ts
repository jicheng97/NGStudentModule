import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatCardModule,
      } from '@angular/material';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';
import { StudentDetailsComponent } from './dialog/student-details/student-details.component';
import { EditStudentComponent } from './dialog/edit-student/edit-student.component';
import { NewStudentComponent } from './student/new-student/new-student.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent,
    DeleteDialogComponent,
    EditStudentComponent,
    NewStudentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatCardModule
    
  ],
  providers: [],
  entryComponents:  
  [DeleteDialogComponent,
   EditStudentComponent,
   StudentDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

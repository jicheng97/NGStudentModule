import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog} from '@angular/material';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from 'src/app/dialog/delete-dialog/delete-dialog.component';
import { EditStudentComponent } from 'src/app/dialog/edit-student/edit-student.component';
import { StudentDetailsComponent } from 'src/app/dialog/student-details/student-details.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private router: Router,
              private dialog: MatDialog
              ) { }

  public mock_data = [
    {address: "Johor Bahru", course: "Banking and Finance", dob: "1997-05-19", econtactname: "Lee Siang How",
    econtactnumber: "01123456678",
    email: "yenthong89@gmail.com",
    fullname: "Lee Yen Thong",
    identity: "970515235087",
    phone: "0146118233",
    remark: "Allergic to seafood",
    studentid: "B141421Q"},
    {address: "Johor Bahru", course: "Banking and Finance", dob: "1997-05-19", econtactname: "Lee Siang How",
    econtactnumber: "01123456678",
    email: "jicheng89@gmail.com",
    fullname: "Yong Ji Cheng",
    identity: "970515235087",
    phone: "0146118233",
    remark: "Allergic to seafood",
    studentid: "B141421Q"},
    {address: "Johor Bahru", course: "Banking and Finance", dob: "1997-05-19", econtactname: "Lee Siang How",
    econtactnumber: "01123456678",
    email: "lala@gmail.com",
    fullname: "Lala",
    identity: "970515235087",
    phone: "011123456789",
    remark: "",
    studentid: "B141421Q"}
  ];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['fullname', 'course', 'studentid', 'email', 'phone', 'action'];
  dataSource = new MatTableDataSource(this.mock_data);
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onclick(row_data: any){
    console.log('click');
    console.log(row_data);
    this.router.navigate(['/courseList']);
  }

  openDialog(details: any,type:string) {
    console.log(details);
    console.log(type);
    switch(type){
    case 'delete':
    this.dialog.open(DeleteDialogComponent,{
      data:{
        details,
        message: 'Are you sure want to this data?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
    break;

    case 'view':
    this.dialog.open(StudentDetailsComponent,{
      data:{
        details
      }
    });
    break;

    case 'edit':
    this.dialog.open(EditStudentComponent,{
      data:{
        details
      }
    });
    break;
  }
  }
}

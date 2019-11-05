import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  public name: string;
  public address = '';
  public course = '';
  public dob = '';
  public econtactname = '';
  public econtactnumber = '';
  public email = '';
  public fullname = '';
  public identity = '';
  public phone = '';
  public remark = '';
  public studentid = '';
  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<StudentDetailsComponent>) {
    if(data){
      this.name = data.details.fullname;
      this.address = data.details.address;
      this.course = data.details.course;
      this.dob = data.details.dob;
      this.econtactname = data.details.econtactname;
      this.econtactnumber = data.details.econtactnumber;
      this.email = data.details.email;
      this.fullname = data.details.fullname;
      this.identity = data.details.identity;
      this.phone = data.details.phone;
      this.remark = data.details.remark;
      this.studentid = data.details.studentid;
        }
   }
  

  ngOnInit() {
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
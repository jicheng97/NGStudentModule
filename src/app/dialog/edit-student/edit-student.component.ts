import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

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
  public fullNameIsEmpty = false;
  public identityIsEmpty = false;
  public dobIsEmpty = false;
  public emailIsEmpty = false;
  public phoneIsEmpty = false;
  public idIsEmpty = false;
  public courseIsEmpty = false;
  public addressIsEmpty = false;
  public eContactIsEmpty = false;
  public ePhoneIsEmpty = false;
  public formValid = false;

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<EditStudentComponent>) {
    console.log(data);
    if(data){
      console.log(data.details.fullname);
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

  onSubmit(form: NgForm) {
    this.fullNameIsEmpty = form.value.fullname === '';
    this.identityIsEmpty = form.value.identity === '';
    this.dobIsEmpty = form.value.dob === '';
    this.emailIsEmpty = form.value.email === '';
    this.phoneIsEmpty = form.value.phone === '';
    this.idIsEmpty = form.value.studentid === '';
    this.courseIsEmpty = form.value.course === '';
    this.addressIsEmpty = form.value.address === '';
    this.eContactIsEmpty = form.value.econtactname === '';
    this.ePhoneIsEmpty = form.value.econtactnumber === '';

    this.formValid =  !this.fullNameIsEmpty &&
                      !this.identityIsEmpty &&
                      !this.dobIsEmpty &&
                      !this.emailIsEmpty &&
                      !this.phoneIsEmpty &&
                      !this.idIsEmpty &&
                      !this.courseIsEmpty && 
                      !this.addressIsEmpty &&
                      !this.eContactIsEmpty && 
                      !this.ePhoneIsEmpty
                      console.log( this.formValid);
   if(this.formValid){
    console.log(form.value);
    console.log('success');
   }
}
validate(text:any,type:any){
  switch(type){
    case 'fullname':
      this.fullNameIsEmpty = text === '';
      break;
    case 'identity':
      this.identityIsEmpty = text === '';
      break;
    case 'dob':
      this.dobIsEmpty = text === '';
      break;
    case 'email':
      this.emailIsEmpty = text === '';
      break;
    case 'phone':
      this.phoneIsEmpty = text === '';
      break;
    case 'studentid':
      this.idIsEmpty = text === '';
      break;
    case 'course':
      this.courseIsEmpty = text === '';
      break;
    case 'address':
      this.addressIsEmpty = text === '';
      break;
    case 'econtactname':
      this.eContactIsEmpty = text === '';
      break;
    case 'econtactnumber':
      this.ePhoneIsEmpty = text === '';
      break;
  }
}

}
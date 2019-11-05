import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

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

  constructor() { }

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
    console.log(form);
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

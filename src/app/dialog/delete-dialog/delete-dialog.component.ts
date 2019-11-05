import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  name: string;
  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<DeleteDialogComponent>) {
    console.log(data);
    if(data){
      this.name = data.details.fullname;
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
        }
   }
  

  ngOnInit() {
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckinAuthService } from '../service/checkin-auth.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
 
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent {

  bookingCodePattern = "^[a-zA-Z0-9]{6}$";
  lastNamePattern = "^[A-Za-z]+$";
  errorMessage! : string;
  successMessage! : string;
  content!:any;

  constructor(private builder: FormBuilder, private checkinAuthService:CheckinAuthService){

  }

  checkinForm = this.builder.group({
    bookingCode: this.builder.control ('', Validators.compose([Validators.required])),
    lastName: this.builder.control('', Validators.compose([Validators.required])),
    flightNumber: this.builder.control('', Validators.required)
  });



get bookingCode() {
  return this.checkinForm.get('bookingCode');
} 

get lastName() {
  return this.checkinForm.get('lastName');
} 

get flightNumber() {
  return this.checkinForm.get('flightNumber');
} 


  proceedCheckin(){
    if (this.checkinForm.valid) {
      this.checkinAuthService.authenticateCheckin(this.checkinForm.value).subscribe((res)=> {
        this.content = res;
        this.successMessage ='Checked in successfully';
      },(error) =>{
          if(error.status == 400){
            this.errorMessage = 'Invalid booking id';
          }
          else  if(error.status == 401){
            this.errorMessage = 'User is not authorizaed';
          }
          else  if(error.status == 500){
            this.errorMessage = 'Internal Server Error';
          }else {
            this.errorMessage = error.message;
          }
          this.checkinForm.reset();
      },() =>{
        this.checkinForm.reset();
      });
      
    } else {
      this.errorMessage = 'Form is not valid.';
    }
  }
}

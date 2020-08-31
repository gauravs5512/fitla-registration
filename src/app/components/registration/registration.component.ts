import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Constant } from '../../constant2';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  public onPage: string = 'button';
  public name: string;
  public email: string;
  public password: string;
  public mobile: string;
  public question: string;
  public answer: string;
  public gender: string;
  public weight: string;
  public goal: string;
  public isFormValid: boolean = false;

  constructor(private regService: RegistrationService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public startRegistration() {
    this.onPage = 'create-account';
  }

  public blockNext() {
    this.snackBar.open("Please fill in all required fields before proceeding", "⚠️", {
      duration: 5000,
    });
  }

  public goToFitnessProfile(reg) {
    this.name = reg.controls.name.value;
    this.password = reg.controls.password.value;
    this.email = reg.controls.email.value;
    this.mobile = reg.controls.mobile.value;
    this.question = reg.controls.question.value;
    this.answer = reg.controls.answer.value;
    this.onPage = 'fitness-profile';
  }

  public blockSubmit() {
    this.snackBar.open("Please fill in all required fields before submitting", "⚠️", {
      duration: 5000,
    });
  }

  public submitForm(reg) {
    this.gender = reg.controls.gender.value;
    this.weight = reg.controls.weight.value;
    this.goal = reg.controls.goal.value;

    if (
      this.name !== undefined && 
      this.password !== undefined && 
      this.email !==undefined && 
      this.mobile !== undefined &&
      this.question !== undefined &&
      this.answer !== undefined &&
      this.gender !== undefined &&
      this.weight !== undefined &&
      this.goal !== undefined
    ) {
      let payload = { 
        name: this.name,
        password: this.password,
        mobile: this.mobile,
        weight: this.weight,
        gender: this.gender,
        goal: this.goal,
        question: this.question,
        andswer: this.answer,
        email: this.email
      };
      console.log(payload);
  
      Constant.loader = true;
      this.regService.register(payload).subscribe(res => {
        if(res && res['error']) {
          alert(res['error'])
        } else if(res['mobile']) {
          alert('Registration Success');
        }
        Constant.loader = false;
      }, err => {
        alert('unknown error occured');
        console.log(err);
        Constant.loader = false;
      });
  
      this.onPage = 'thank-you';
    } else {
      this.snackBar.open("Please fill in all required fields before submitting", "⚠️", {
        duration: 5000,
      });
    }
  }

}

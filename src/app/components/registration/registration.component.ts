import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Constant } from '../../constant';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private regService: RegistrationService) { }

  ngOnInit() {
  }

  submitForm(reg) {
    let name = reg.controls.name.value;
    let password = reg.controls.password.value;
    let mobile = reg.controls.mobile.value;
    let weight = reg.controls.weight.value;
    let gender = reg.controls.gender.value;
    let goal = reg.controls.goal.value;
    let question = reg.controls.question.value;
    let answer = reg.controls.answer.value;

    let payload = {name, password, mobile, weight, gender, goal, question, answer};

    Constant.loader = true;
    this.regService.register(payload).subscribe(res => {
      if(res['error'].length > 1) {
        alert(res['error']);
      } else {
        alert(res);
      }
      Constant.loader = false;
    }, err => {
      alert('unknown error occured');
      console.log(err);
      Constant.loader = false;
    });
  }

}

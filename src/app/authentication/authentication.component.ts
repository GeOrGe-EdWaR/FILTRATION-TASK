import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../services/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  constructor(
    private _mainService: MainServiceService,
    private _router: Router
  ) {}
  //reactive submitForm
  submitForm = new FormGroup({
    email: new FormControl(null),
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    phoneNumber: new FormControl(null),
  });
  // onLogIn function
  onLogIn(data: FormGroup) {
    console.log(data.value);
    return this._mainService.createUser(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
        this._router.navigate(['/home']);
      },
    });
  }

  // ngOnInit(): void {
  //   this.onLogIn(this.submitForm);
  // }

  //reset function
  cancelForm() {
    this.submitForm.reset();
  }
}

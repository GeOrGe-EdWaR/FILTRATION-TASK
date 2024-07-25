import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../services/main-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  userId: any;

  userFormUpdate: any = {
    email: '',
    firstName: '',
    lastName: '',
    // phoneNumber: '',
    picture: '',
  };
  constructor(
    private _mainService: MainServiceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.userId = _activatedRoute.snapshot.params['id'];
  }
  //reactive submitForm
  userForm = new FormGroup({
    email: new FormControl(null),
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    phoneNumber: new FormControl(null),
    picture: new FormControl('https://fakeimg.pl/300/'),
  });

  // onLogIn function

  onLogIn(data: FormGroup) {
    console.log(data.value);
    this._mainService.createUser(data.value).subscribe({
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
}

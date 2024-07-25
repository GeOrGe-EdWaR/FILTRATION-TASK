import { UserInfo } from './../user-info';
import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  pageId: number = 0;
  userInfo: UserInfo = {
    firstName: '',
    lastName: '',
    email: '',
    picture: '',
    phoneNumber: 0,
  };
  constructor(
    private _mainService: MainServiceService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.pageId = this._activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.pageId > 0) {
      this.getUserById(this.pageId);
    }
  }

  userForm = new FormGroup({
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(0),
    picture: new FormControl('"https://fakeimg.pl/300/"'),
  });

  getUserById(id: number) {
    this._mainService.getUserById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.userInfo = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.userForm.patchValue({
          firstName: this.userInfo.firstName,
          lastName: this.userInfo?.lastName,
          email: this.userInfo?.email,
          picture: this.userInfo?.picture,
        });
        console.log('completed');
      },
    });
  }
  onSubmit(data: FormGroup) {
    if (this.pageId) {
      this._mainService.updateUser(data.value, this.pageId).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        },
      });
    } else {
      this._mainService.createUser(data.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
        complete() {
          console.log('completed');
        },
      });
    }
  }
}

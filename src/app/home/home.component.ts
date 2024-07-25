import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any = [];
  userInfo: any = {};
  constructor(
    private _mainService: MainServiceService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listUser();
    // this.onUpdate(this.userId);
  }
  listUser() {
    this._mainService.listUser().subscribe({
      next: (res) => {
        console.log(res.data);
        this.posts = res.data;
        // res = this.posts;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.log('complete'),
    });
  }
  // onUpdate(id: number) {
  //   this._mainService.updateUser(this.userId).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.userInfo = res;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => console.log('complete'),
  //   });
  // }

  onDelete(id: number) {
    this._mainService.onDeleteUser(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.log('complete'),
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserInfo } from '../user-info';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  constructor(private _httpClient: HttpClient) {}

  createUser(data: FormGroup): Observable<any> {
    return this._httpClient.post('create', data);
  }

  listUser(): Observable<any> {
    return this._httpClient.get('');
  }

  getUserById(id: number): Observable<any> {
    return this._httpClient.get(`${id}`);
  }
  updateUser(data: FormGroup, id: number): Observable<any> {
    return this._httpClient.put(`${id}`, data);
  }

  onDeleteUser(id:number): Observable<any> {
    return this._httpClient.delete(`${id}`);
  }
}

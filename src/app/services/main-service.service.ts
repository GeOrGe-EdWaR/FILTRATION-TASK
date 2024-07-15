import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  constructor(private _httpClient: HttpClient) {}
  createUser(data: FormGroup): Observable<any> {
    return this._httpClient.post('data/v1/user/create', data);
  }

  listUser(): Observable<any> {
    return this._httpClient.get('data/v1/user');
  }

  updateUser(id: number): Observable<any> {
    return this._httpClient.put('data/v1/user/', id);
  }
  onDeleteUser(id: any): Observable<any> {
    return this._httpClient.delete('data/v1/user/', id);
  }
}

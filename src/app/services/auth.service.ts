import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterUserDTO} from "../DTOs/Account/RegisterUserDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  registerUser(registerData: RegisterUserDTO): Observable<any> {
    return this.http.post<any>('/account/register', registerData);
  }


}

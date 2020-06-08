import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterUserDTO} from "../DTOs/Account/RegisterUserDTO";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginUserDTO} from "../DTOs/Account/LoginUserDTO";
import {ILoginUserAccount} from "../DTOs/Account/ILoginUserAccount";
import {CurrentUserDTO} from "../DTOs/Account/CurrentUserDTO";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: BehaviorSubject<CurrentUserDTO> = new BehaviorSubject<CurrentUserDTO>(null);


  constructor(
    private http: HttpClient
  ) { }

  setCurrentUser(user: CurrentUserDTO): void {
    this.currentUser.next(user);
  }

  getCurrentUser(): Observable<CurrentUserDTO> {
    return this.currentUser;
  }


  registerUser(registerData: RegisterUserDTO): Observable<any> {
    return this.http.post<any>('/account/register', registerData);
  }

  loginUser(loginUserDTO: LoginUserDTO): Observable<ILoginUserAccount> {
    return this.http.post<ILoginUserAccount>('/account/login', loginUserDTO);
  }


}

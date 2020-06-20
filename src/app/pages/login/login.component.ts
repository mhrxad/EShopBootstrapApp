import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginUserDTO} from "../../DTOs/Account/LoginUserDTO";
import {AuthService} from "../../services/auth.service";
import {CurrentUserDTO} from "../../DTOs/Account/CurrentUserDTO";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('sweetAlert') private sweetAlert: SwalComponent;
  public loginForm: FormGroup;
  isLoading = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(100)
        ]
      ),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]),
    });

  }

  submitLoginForm() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      const loginData = new LoginUserDTO(
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value
      );

      this.authService.loginUser(loginData).subscribe(res => {
        const currentUser = new CurrentUserDTO(
          res.data.userId,
          res.data.firstName,
          res.data.lastName,
          res.data.address
        );
        if (res.status === 'Success') {
          this.cookieService.set('eshop-cookie', res.data.token, res.data.expireTime * 60);
          this.authService.setCurrentUser(currentUser);
          this.loginForm.reset();
          this.isLoading = false;
          this.sweetAlert.title = 'موفق';
          this.sweetAlert.icon = 'success'
          this.sweetAlert.text = 'خوش آمدید';
          this.sweetAlert.fire();
          this.router.navigate(['/']);
        } else if (res.status === 'Error') {
          this.sweetAlert.text = res.data.message;
          this.sweetAlert.fire();
        } else if (res.status === 'NotFound') {
          this.sweetAlert.text = res.data.message;
          this.sweetAlert.fire();
        }
      });

    }


  }

}

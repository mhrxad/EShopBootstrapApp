import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {RegisterUserDTO} from "../../DTOs/Account/RegisterUserDTO";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('sweetAlert') private sweetAlert: SwalComponent;
  public registerForm: FormGroup;


  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {


    this.registerForm = new FormGroup({
      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(100)
        ]
      ),
      firstName: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]
      ),
      lastName: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]),
      confirmPassword: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]),
      address: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(500)
        ])
    });

  }


  submitRegisterForm() {
    const registerData = new RegisterUserDTO(
      this.registerForm.controls.email.value,
      this.registerForm.controls.firstName.value,
      this.registerForm.controls.lastName.value,
      this.registerForm.controls.password.value,
      this.registerForm.controls.confirmPassword.value,
      this.registerForm.controls.address.value,
    );

    this.authService.registerUser(registerData).subscribe(res => {
      if (res.status === 'Success') {
        this.registerForm.reset();
        this.sweetAlert.title = 'موفق';
        this.sweetAlert.icon = 'success'
        this.sweetAlert.text = 'ثبت نام شما با موفقیت انجام شد لینک فعال سازی حساب کاربری به ایمیل شما ارسال گردید';
        this.sweetAlert.fire();
      }
      if (res.status === 'Error') {
        if (res.data.info === 'EmailExist') {
          this.sweetAlert.fire();
        }
      }
    });
  }


}

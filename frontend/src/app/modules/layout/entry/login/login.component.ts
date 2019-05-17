import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {Sign} from "../../../models/sign";
import {User} from "../../../models/user";
import {HttpErrorResponse} from "@angular/common/http";
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginFormGroup: FormGroup = new FormGroup({
    login: new FormControl('', {validators:[
      Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)]}),
    password: new FormControl('', {validators:[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)]}),
  });

  public enableSign: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: Ng4LoadingSpinnerService
  ) {}

  onLoginSubmit() {
    this.loadingService.show();
    const user = new User();
    user.sign.login = this.loginFormGroup.controls.login.value;
    user.sign.password = this.loginFormGroup.controls.password.value;
    this.authService.login(user).subscribe(() => {
      console.log('in callback');
    }, (e: HttpErrorResponse) => {
      console.log(e);
      if (e.status === 401) {
        console.log('Wrong login or password');
        this.enableSign = true;
      }
    });
    console.log(user);
    this.loadingService.hide();
  }
}

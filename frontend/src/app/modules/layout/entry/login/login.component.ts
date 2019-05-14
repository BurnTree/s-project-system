import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {Sign} from "../../../models/sign";
import {User} from "../../../models/user";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginFormGroup: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLoginSubmit() {
    const user = new User();
    user.sign.login = this.loginFormGroup.controls.login.value;
    user.sign.password = this.loginFormGroup.controls.password.value;
    this.authService.login(user).subscribe(() => {
      console.log('in callback');
      this.router.navigate(['']);
    }, (e: HttpErrorResponse) => {
      console.log(e);
      if (e.status === 401) {
        console.log('Wrong email or password');
      }
    });
    console.log(user);
  }
}

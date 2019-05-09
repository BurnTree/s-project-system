import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {Sign} from "../../../models/sign";
import {User} from "../../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginFormGroup: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLoginSubmit() {
    console.log('sdasdasdasd');
    const user = new User();
    user.sign.login = this.loginFormGroup.controls.login.value;
    user.sign.password = this.loginFormGroup.controls.password.value;
    this.authService.login(user);
  }
}

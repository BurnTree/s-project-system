import {Component, TemplateRef} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  public logoutSubmit(){
    this.authService.logout();
    console.log('logout sucess')
    this.router.navigate(['/login']);
  }
}
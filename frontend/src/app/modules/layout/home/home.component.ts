import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  user: User = new User();
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  public logoutSubmit(){
    this.authService.logout();
    console.log('logout sucess')
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
}

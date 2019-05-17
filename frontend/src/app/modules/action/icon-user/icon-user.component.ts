import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
})

export class IconUserComponent implements OnInit{

  public user: User;

  constructor(
    private authService: AuthService,
    private router: Router){}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    console.log(this.user);
  }


  public logoutSubmit(){
    this.authService.logout();
    console.log('logout sucess')
    this.router.navigate(['/login']);
  }

  public goToCabinet(){
    this.router.navigate(['/cabinet']);
  }
}

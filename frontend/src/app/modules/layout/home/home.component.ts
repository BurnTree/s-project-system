import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  user: User = new User();
  constructor(
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
}

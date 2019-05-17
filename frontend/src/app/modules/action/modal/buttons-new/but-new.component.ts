import {Component, OnInit, TemplateRef} from '@angular/core';

import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {NProjectComponent} from './project/n-project.component';
import {NUserComponent} from './user/n-user.component';
import {NTaskComponent} from './task/n-task.component';
import {AuthService} from "../../../../services/auth.service";
import {User} from "../../../models/user";
import {enumRole} from "../../../models/role";

@Component({
  selector: 'app-but-new',
  templateUrl: './but-new.component.html',
  styleUrls: ['./but-new.component.css']
})
export class ButNewComponent implements OnInit{

  private modalRef: BsModalRef;

  role = enumRole;
  user: User = new User();
  constructor(private modalService: BsModalService,
              private authService: AuthService ) {

  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  openNProject() {
    this.modalRef = this.modalService.show(NProjectComponent);
  }
  openNTask() {
    this.modalRef = this.modalService.show(NTaskComponent);
  }
  openNUser() {
    this.modalRef = this.modalService.show(NUserComponent);
  }

  isAdmin(): boolean{
    if(this.user)
      return  (this.user.role.idRole == this.role.ADMINISTRATOR)
    return null;
  }

  isProjectManager(): boolean{
    if(this.user)
      return (this.user.role.idRole == this.role.PROJECT_MANAGER)
    return null;
  }
  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  findUser(){
    this.user = this.authService.getUser();
  }
}

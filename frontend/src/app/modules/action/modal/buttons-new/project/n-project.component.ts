import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {User} from "../../../../models/user";
import {Subscription} from "rxjs";
import {Project} from "../../../../models/project";
import {ProjectService} from "../../../../../services/project.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-n-project',
  templateUrl: './n-project.component.html',
  styleUrls: ['./n-project.component.css']
})

export class NProjectComponent implements OnInit {

  public newProject: Project = new Project();
  private subscriptions: Subscription[] = [];

  projectForm = new FormGroup({
    name: new FormControl('', {validators:[Validators.required, Validators.minLength(3),Validators.maxLength(15)]}),
    summary: new FormControl('', {validators:[Validators.required,Validators.minLength(5),Validators.maxLength(50)]}),
  })

  constructor(//public activeModal: NgbActiveModal,
    public projectService: ProjectService,
              public activeRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  public _createNewProject(): void {
    this.newProject.nameProject = this.projectForm.get('name').value;
    this.newProject.summary = this.projectForm.get('summary').value;
    // this.subscriptions.push(this.projectService.saveProject(this.newProject).subscribe(() => {
    //   this.newProject = new Project();
    // }));
    console.log(this.newProject);
  }
}

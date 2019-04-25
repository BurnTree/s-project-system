import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {User} from "../../../../task/models/user";
import {Subscription} from "rxjs";
import {Project} from "../../../../task/models/project";
import {ProjectService} from "../../../../../services/project.service";

@Component({
  selector: 'app-n-project',
  templateUrl: './n-project.component.html',
  styleUrls: ['./n-project.component.css']
})

export class NProjectComponent implements OnInit {

  public newProject: Project = new Project();
  private subscriptions: Subscription[] = [];

  constructor(public projectService: ProjectService, public activeRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  public _createNewProject(): void {
    this.subscriptions.push(this.projectService.saveProject(this.newProject).subscribe(() => {
      this.newProject = new Project();
    }));
    console.log(this.newProject);
  }
}

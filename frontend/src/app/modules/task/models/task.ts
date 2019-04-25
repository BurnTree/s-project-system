import {Project} from "./project";
import {User} from './user';
import {Priority} from './priority';
import {Status} from './status';

export class Task {
  idTask: number;
  project: Project;
  code: string;
  description: string;
  priority: Priority;
  status: Status;
  createDate: Date;
  dueData: Date;
  updateDate: Date;
  estimation: number;
  logWork: number;
  assigne: User;
  reporter: User;
  attachment: string;
  comments: string;
  constructor(){
    this.description = "";
    this.createDate = new Date();
    this.dueData = new Date();
    this.updateDate = new Date();
    this.status = new Status();
    this.assigne = new User();
    this.reporter = new User();
    this.project = new Project();
    this.priority = new Priority();
    this.estimation = 0;
    this.logWork =  0;
    this.attachment = "";
    this.comments = "";
  }
}

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
  createDate: string;
  dueData: Date;
  updateDate: string;
  estimation: number;
  assigne: User;
  reporter: User;
  attachment: string;
  comments: string;
  constructor(){
    this.description = "";
    this.status = new Status();
    this.assigne = new User();
    this.reporter = new User();
    this.project = new Project();
    this.priority = new Priority();
  }
}

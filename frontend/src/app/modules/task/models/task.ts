export class Task {
  id: string;
  status: string;
  description: string;
  dueData: string;
  estimation: string;
  assigne: string;
  ticketCode: string;
  createDate: string;
  updateDate: string;
  reporter: string;
  priority: string;
  project: string;
  static cloneBase(task: Task): Task {
    const clonedTask: Task = new Task();
    clonedTask.id = task.id;
    clonedTask.status = task.status;
    clonedTask.description = task.description;
    clonedTask.dueData = task.dueData;
    clonedTask.estimation = task.estimation;
    clonedTask.assigne = task.assigne;
    clonedTask.ticketCode = task.ticketCode
    clonedTask.createDate = task.createDate
    clonedTask.updateDate = task.updateDate;
    clonedTask.reporter = task.reporter;
    clonedTask.priority = task.priority;
    clonedTask.project = task.project;
    return clonedTask;
  }
}

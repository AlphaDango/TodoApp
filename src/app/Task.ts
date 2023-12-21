export class Task {

  public isDone:boolean;

  public id: number;

  private static counter:number;

  public static resetCounter():void{
    Task.counter = -1;
  }

  public constructor(public prioIcon: string, public dueDate: string, public category: string, public description: string ) {
    Task.counter = Number(localStorage.getItem('taskCounter'))
    this.id = ++Task.counter;
    localStorage.setItem('taskCounter',String(Task.counter));
    this.isDone = false;
  }
}

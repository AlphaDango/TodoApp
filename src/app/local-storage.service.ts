import { Injectable } from '@angular/core';
import { Task } from "./Task";
import {take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private tasks: Task[];
  private showDeleteButtons:boolean;
  private moveCompletetTodos:boolean;

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[{}]');
    if(JSON.stringify(this.tasks) === '[{}]'){
      this.tasks = [];
    }
    this.showDeleteButtons = localStorage.getItem('settingsShowDeleteButtons') === 'true';
    this.moveCompletetTodos = localStorage.getItem('settingsMoveCompleted') === 'true';
  }

  getTasks():Task[]{
    return this.tasks;
  }

  addTask(newTask: Task):void{
    this.tasks.push(newTask);
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }

  removeTask(task:Task):void{
    const index = this.tasks.indexOf(task, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }

  doShowDeleteButtons():boolean{
    return this.showDeleteButtons;
  }

  setShowDeleteButtons(b:boolean):void{
    this.showDeleteButtons = b;
    localStorage.setItem('settingsShowDeleteButtons',JSON.stringify(this.showDeleteButtons));
  }

  doMoveCompletedTodos():boolean{
    return this.moveCompletetTodos;
  }

  setMoveCompletetTodos(b:boolean):void{
    this.moveCompletetTodos = b;
    localStorage.setItem('settingsMoveCompleted',JSON.stringify(this.moveCompletetTodos));
  }

  toggleDone(task: Task):void {
    const index = this.tasks.indexOf(task, 0);
    this.tasks[index].isDone = !this.tasks[index].isDone;
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
  }

  //Dev-Funktionen

  clearLocalStorage():void{
    this.tasks = [];
    this.moveCompletetTodos = false;
    this.showDeleteButtons = false;
    Task.resetCounter();
    localStorage.clear()
  }

  addSampleData():void{
    this.addTask(new Task('', '20.12.2023', 'Haushalt', 'Müll rausbringen'));
    this.addTask(new Task('', '21.12.2023', 'Schule', 'Präsentation'));
    this.addTask(new Task('', '22.12.2023', 'Schule', 'Hausaufgaben'));
    this.addTask(new Task('', '23.12.2023', 'Haushalt', 'Küche putzen'));
    this.addTask(new Task('', '24.12.2023', 'Sport', 'Treffen Gym'));
    this.addTask(new Task('', '25.12.2023', 'Familie', 'Weihnachtsessen'));
    this.addTask(new Task('', '26.12.2023', 'Haushalt', 'Kochen'));
  }


}

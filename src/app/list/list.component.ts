import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {CategoryMenuComponent} from "../category-menu/category-menu.component";
import { LocalStorageService } from "../local-storage.service";
import {Task} from "../Task";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CategoryMenuComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  tasks: Task[];

  filter:string = '';

  constructor(protected localStorageService: LocalStorageService) {
    this.tasks = this.localStorageService.getTasks();
  }

  removeTask(task:Task):void{
    this.localStorageService.removeTask(task);
    this.tasks = this.localStorageService.getTasks();
  }

  setFilter(filter:string):void{
    this.filter = filter;
  }

  removeFilter():void{
    this.filter = '';
  }

  protected toggleDone(task:Task):void{
    this.localStorageService.toggleDone(task);
    this.tasks = this.localStorageService.getTasks();
  }

}

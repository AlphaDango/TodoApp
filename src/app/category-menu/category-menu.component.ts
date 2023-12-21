import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {CategoryComponent} from "../category/category.component";
import {ListComponent} from "../list/list.component";
import {Task} from "../Task";

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [
    CommonModule,
    CategoryComponent,
    ListComponent,
  ],
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.css'
})
export class CategoryMenuComponent {
  categories: any[] = [];


  constructor(protected list:ListComponent) {
    this.getCategories(list.tasks);
  }

  private getCategories(tasks:Task[]):void{
    let tmpArr: string[] = [];
    let found: boolean = false;
    for (let i = 0; i < tasks.length-1; i++) {
      for (let j = 0; j < tmpArr.length-1; j++) {
        found = tmpArr[j] === tasks[i].category;
        if (found)
          break;
      }
      if(!found)
        tmpArr.push(tasks[i].category);
      //if (!this.categories.includes({title: tasks[i].category})){
       // this.categories.push({title: tasks[i].category});
      }
    for (let i = 0; i < tmpArr.length-1; i++) {
      this.categories.push({title: tmpArr[i]});
    }
  }

}

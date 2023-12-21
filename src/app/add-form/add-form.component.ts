import { Component } from '@angular/core';
import {LocalStorageService} from "../local-storage.service";
import {Task} from "../Task";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {

  protected showCustCat:boolean = false;

  private prio:string = '';

  constructor(private localStorageService: LocalStorageService) {
  }

  protected createTask(description:string,dueDate:string,category:string):void{
    this.localStorageService.addTask(new Task(this.prio,dueDate,category,description));
  }

  protected useCustCat(index:number):void{
      this.showCustCat = index == 0;
  }

  protected setPrio(index:number):void{
    switch (index){
      case 0:
        this.prio = '          <svg #svgHigh xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">\n' +
          '            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>\n' +
          '          </svg>';
        break;
      case 1:
        this.prio = ' <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">\n' +
          '            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>\n' +
          '          </svg>';
        break;
      case 2:
        this.prio = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">\n' +
          '            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>\n' +
          '          </svg>';
        break;
      default: this.prio = '';
    }
  }

}

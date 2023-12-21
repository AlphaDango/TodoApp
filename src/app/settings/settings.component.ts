import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from "../list/list.component";
import {LocalStorageService} from "../local-storage.service";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterModule,ListComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  constructor(protected localStorageService: LocalStorageService) {}

  ngOnInit(){

  }

  saveSettings(moveCompleteTodos:boolean, showDeleteButtons:boolean):void{
    this.localStorageService.setMoveCompletetTodos(moveCompleteTodos);
    this.localStorageService.setShowDeleteButtons(showDeleteButtons);
  }


}

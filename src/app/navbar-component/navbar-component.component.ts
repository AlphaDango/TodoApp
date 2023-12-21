import { Component } from '@angular/core';
import {NaventryComponentComponent} from "../naventry-component/naventry-component.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [
    CommonModule,
    NaventryComponentComponent
  ],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent {
  navItems = [
    { title: 'ToDos', link: '/list' },
    { title: 'ToDo hinzufügen', link: '/addForm' },
    { title: 'Einstellungen', link: '/settings' },
  ];
}

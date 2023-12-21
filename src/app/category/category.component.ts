import {Component, Input} from '@angular/core';
import {ListComponent} from "../list/list.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() title: string = '';

  constructor(protected list:ListComponent) {
  }
}

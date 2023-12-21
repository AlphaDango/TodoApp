import {Component, Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-naventry-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './naventry-component.component.html',
  styleUrl: './naventry-component.component.css'
})
export class NaventryComponentComponent {
  @Input() title: string = '';
  @Input() link: string = '#';
}

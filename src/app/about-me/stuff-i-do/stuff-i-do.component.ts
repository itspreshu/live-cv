import { Component } from '@angular/core';
import {DoableComponent} from "./doable/doable.component";

@Component({
  selector: 'app-stuff-i-do',
  standalone: true,
  imports: [
    DoableComponent
  ],
  templateUrl: './stuff-i-do.component.html',
  styleUrl: './stuff-i-do.component.scss'
})
export class StuffIDoComponent {

}

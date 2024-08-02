import { Component } from '@angular/core';
import {SkillComponent} from "./skill/skill.component";

@Component({
  selector: 'app-stuff-i-do',
  standalone: true,
  imports: [
    SkillComponent
  ],
  templateUrl: './stuff-i-do.component.html',
  styleUrl: './stuff-i-do.component.scss'
})
export class StuffIDoComponent {

}

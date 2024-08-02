import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill-descriptor',
  standalone: true,
  imports: [],
  templateUrl: './skill-descriptor.component.html',
  styleUrl: './skill-descriptor.component.scss'
})
export class SkillDescriptorComponent {
  @Input() title: string = '';
  @Input() level: number = 0;
  @Input() icon: string = '';
}

export class SkillDescriptorData{
  title: string;
  level: number;
  icon: string;

  constructor(title: string, level: number, icon: string) {
    this.title = title;
    this.level = level;
    this.icon = icon;
  }
}

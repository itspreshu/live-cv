import { Component } from '@angular/core';
import {SkillDescriptorComponent, SkillDescriptorData} from "./skill-descriptor/skill-descriptor.component";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-stuff-i-learned',
  standalone: true,
  imports: [
    SkillDescriptorComponent,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './stuff-i-learned.component.html',
  styleUrl: './stuff-i-learned.component.scss'
})
export class StuffILearnedComponent {
  public skills: SkillDescriptorData[] = [{
    title: "Typescript",
    level: 85,
    icon: 'code-brackets'
  },{
    title: "Java",
    level: 85,
    icon: 'coffee-cup'
  },{
    title: "C#",
    level: 85,
    icon: 'code-brackets-square'
  },{
    title: "AWS",
    level: 70,
    icon: 'cloud'
  },{
    title: "CI/CD",
    level: 70,
    icon: 'packages'
  },{
    title: "NodeJS",
    level: 75,
    icon: 'code-brackets-square'
  },{
    title: "Gradle",
    level: 70,
    icon: 'coffee-cup'
  },{
    title: "Unity",
    level: 85,
    icon: 'unity'
  },{
    title: "BBDD",
    level: 60,
    icon: 'database'
  }, {
    title: "Angular",
    level: 85,
    icon: 'app-window'
  }, {
    title: "Docker",
    level: 75,
    icon: 'box-iso'
  }, {
    title: "Kubernetes",
    level: 70,
    icon: 'color-wheel'
  }]
}

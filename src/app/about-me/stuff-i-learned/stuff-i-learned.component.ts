import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

@Component({
  selector: 'app-stuff-i-learned',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './stuff-i-learned.component.html',
  styleUrl: './stuff-i-learned.component.scss'
})
export class StuffILearnedComponent {
  public readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      description: 'Interfaces claras, mantenibles y fáciles de iterar.',
      items: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'UX/UI handoff']
    },
    {
      title: 'Backend y plataforma',
      description: 'Servicios, despliegues y herramientas para que el sistema funcione bien en producción.',
      items: ['Java', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      title: 'Ingeniería aplicada',
      description: 'Tecnologías que he usado para construir, automatizar y mantener proyectos.',
      items: ['C#', 'Gradle', 'Bases de datos', 'APIs', 'Integraciones', 'Observabilidad']
    },
    {
      title: 'Exploración creativa',
      description: 'El espacio donde mezclo software con curiosidad personal.',
      items: ['Unity', 'Game dev', 'Beatmaking', 'Prototipos', 'Experimentos visuales']
    }
  ];
}

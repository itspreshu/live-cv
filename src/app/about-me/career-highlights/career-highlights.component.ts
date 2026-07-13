import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

interface HighlightStat {
  value: string;
  label: string;
  icon: string;
}

interface HighlightPoint {
  title: string;
  description: string;
  icon: string;
  ghostIcon: string;
}

@Component({
  selector: 'app-career-highlights',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './career-highlights.component.html',
  styleUrl: './career-highlights.component.scss'
})
export class CareerHighlightsComponent {
  public readonly stats: HighlightStat[] = [
    {
      value: 'Desde 2016',
      label: 'trabajando en software, producto y servicios',
      icon: 'calendar'
    },
    {
      value: '4 equipos',
      label: 'experiencia en fintech, consultoría, innovación y desarrollo de software',
      icon: 'group'
    },
    {
      value: 'AWS + CI/CD',
      label: 'despliegue, automatización y mejoras continuas',
      icon: 'cloud'
    }
  ];

  public readonly points: HighlightPoint[] = [
    {
      title: 'Base técnica sólida',
      description: 'Me interesa hacer software que quede bien armado y que no se vuelva un problema cada vez que hay que tocarlo.',
      icon: 'shield-check',
      ghostIcon: 'code'
    },
    {
      title: 'Full stack de verdad',
      description: 'He trabajado con Angular en frontend y con NestJS o Spring Boot en backend, sin quedarme solo en una capa.',
      icon: 'multiple-pages',
      ghostIcon: 'web-window'
    },
    {
      title: 'Experiencia reciente',
      description: 'Me ha tocado trabajar en producto, innovación y mejoras sobre plataformas que ya estaban en uso, con foco en CI/CD, AWS y automatización.',
      icon: 'rocket',
      ghostIcon: 'cloud'
    },
    {
      title: 'Proyectos propios',
      description: 'Los side projects, la música y el game dev me ayudan a seguir probando ideas y a no perder las ganas de construir cosas propias.',
      icon: 'spark',
      ghostIcon: 'gamepad'
    }
  ];
}

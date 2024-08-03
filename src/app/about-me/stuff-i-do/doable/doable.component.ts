import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-doable',
  standalone: true,
  imports: [],
  templateUrl: './doable.component.html',
  styleUrl: './doable.component.scss'
})
export class DoableComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
}

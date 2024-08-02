import { Component } from '@angular/core';
import {PresentationComponent} from "./presentation/presentation.component";
import {StuffIDoComponent} from "./stuff-i-do/stuff-i-do.component";
import {StuffILearnedComponent} from "./stuff-i-learned/stuff-i-learned.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    PresentationComponent,
    StuffIDoComponent,
    StuffILearnedComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}

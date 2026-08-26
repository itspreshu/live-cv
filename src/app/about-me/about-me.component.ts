import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import {PresentationComponent} from "./presentation/presentation.component";
import {StuffIDoComponent} from "./stuff-i-do/stuff-i-do.component";
import {StuffILearnedComponent} from "./stuff-i-learned/stuff-i-learned.component";
import {GetInTouchComponent} from "./get-in-touch/get-in-touch.component";
import {ProjectsComponent} from "./projects/projects.component";
import {CareerHighlightsComponent} from "./career-highlights/career-highlights.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    PresentationComponent,
    CareerHighlightsComponent,
    StuffIDoComponent,
    StuffILearnedComponent,
    GetInTouchComponent,
    ProjectsComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => entries.forEach(({ target, isIntersecting }) => target.classList.toggle('is-in-view', isIntersecting)),
      { threshold: 0.18 }
    );
    this.elementRef.nativeElement.querySelectorAll<HTMLElement>('[data-motion]').forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}

import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AboutMeComponent} from "./about-me/about-me.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {path: 'about', component: AboutMeComponent},
];

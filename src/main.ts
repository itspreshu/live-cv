import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// TODO: Borrar este comentario
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

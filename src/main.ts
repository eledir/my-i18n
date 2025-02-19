// https://v17.angular.io/guide/i18n-overview
import '@angular/common/locales/global/fr';

import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(), // essential for e2e testing
  ]
});

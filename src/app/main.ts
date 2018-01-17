import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { settingsPromise } from './services/settings.service';

enableProdMode();

Promise.all([settingsPromise]).then(config => {
    platformBrowserDynamic().bootstrapModule(AppModule);
});

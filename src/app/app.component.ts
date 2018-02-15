import { Component } from '@angular/core';
import { SettingsService } from '@helgoland/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from 'ionic-angular';

import { TimeseriesNavigationPage } from '../pages/timeseries/navigation/navigation';
import { MobileSettings } from './services/settings.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TimeseriesNavigationPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    settingsSrvc: SettingsService<MobileSettings>,
    translate: TranslateService
  ) {

    // get language code
    const langCode = navigator.language.split('-')[0];
    const language = settingsSrvc.getSettings().languages.find(lang => lang.code === langCode);
    if (language) {
      translate.use(language.code)
    } else {
      translate.use('en');
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
    ApiInterface,
    CachingInterceptor,
    GetDataApiInterface,
    HttpCache,
    LocalHttpCache,
    LocalOngoingHttpCache,
    OnGoingHttpCache,
    Settings,
} from 'helgoland-toolbox';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ComponentsModule } from '../components/components.module';
import { TimeseriesModule } from '../pages/timeseries/timeseries.module';
import { MyApp } from './app.component';
import { SettingsService } from './services/settings.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    TimeseriesModule,
    ComponentsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ApiInterface, useClass: GetDataApiInterface },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Settings, useClass: SettingsService },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    { provide: HttpCache, useClass: LocalHttpCache },
    { provide: OnGoingHttpCache, useClass: LocalOngoingHttpCache }
  ]
})
export class AppModule { }

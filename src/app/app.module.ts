import { HttpClient } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
    ApiInterface,
    GetDataApiInterface,
    HelgolandFlotGraphModule,
    HelgolandMapSelectorModule,
    HelgolandSelectorModule,
    Settings,
} from 'helgoland-toolbox';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { TimeseriesListPage } from '../pages/timeseries/list/list';
import {
    MobileDatasetByStationSelectorComponent,
} from '../pages/timeseries/map/dataset-by-station-selector/dataset-by-station-selector.component';
import { TimeseriesMapPage } from '../pages/timeseries/map/map';
import { StationSelectorComponent } from '../pages/timeseries/map/station-selector/station-selector';
import { TimeseriesProviderPage } from '../pages/timeseries/provider/provider';
import { TimeseriesDiagramPage } from './../pages/timeseries/diagram/diagram';
import { TimeseriesNavigationPage } from './../pages/timeseries/navigation/navigation';
import { MyApp } from './app.component';
import { SettingsService } from './services/settings.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    StationSelectorComponent,
    MobileDatasetByStationSelectorComponent,
    TimeseriesNavigationPage,
    TimeseriesDiagramPage,
    TimeseriesMapPage,
    TimeseriesListPage,
    TimeseriesProviderPage
  ],
  imports: [
    BrowserModule,
    HelgolandSelectorModule,
    HelgolandMapSelectorModule,
    HelgolandFlotGraphModule,
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
    StationSelectorComponent,
    MobileDatasetByStationSelectorComponent,
    TimeseriesNavigationPage,
    TimeseriesDiagramPage,
    TimeseriesMapPage,
    TimeseriesListPage,
    TimeseriesProviderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ApiInterface, useClass: GetDataApiInterface },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Settings, useClass: SettingsService }
  ]
})
export class AppModule { }

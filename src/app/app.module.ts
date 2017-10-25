import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HelgolandSelectorModule, HelgolandMapSelectorModule, HelgolandFlotGraphModule } from 'helgoland-toolbox';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { TimeseriesListPage } from '../pages/timeseries/list/list';
import { TimeseriesMapPage } from '../pages/timeseries/map/map';
import { TimeseriesProviderPage } from '../pages/timeseries/provider/provider';
import { TimeseriesDiagramPage } from './../pages/timeseries/diagram/diagram';
import { TimeseriesNavigationPage } from './../pages/timeseries/navigation/navigation';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
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
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TimeseriesNavigationPage,
    TimeseriesDiagramPage,
    TimeseriesMapPage,
    TimeseriesListPage,
    TimeseriesProviderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

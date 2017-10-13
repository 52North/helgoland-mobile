import { Component } from '@angular/core';

import { TimeseriesDiagramPage } from '../diagram/diagram';
import { TimeseriesListPage } from '../list/list';
import { TimeseriesMapPage } from './../map/map';
import { TimeseriesProviderPage } from './../provider/provider';

@Component({
  templateUrl: 'navigation.html'
})
export class TimeseriesNavigationPage {

  diagramPage = TimeseriesDiagramPage;
  mapPage = TimeseriesMapPage;
  listPage = TimeseriesListPage;
  providerPage = TimeseriesProviderPage;

  constructor() {

  }
}

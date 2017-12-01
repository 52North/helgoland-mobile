import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';

import { TimeseriesDiagramPage } from '../diagram/diagram';
import { TimeseriesListPage } from '../list/list';
import { TimeseriesService } from '../timeseries.service';
import { TimeseriesMapPage } from './../map/map';

@Component({
  templateUrl: 'navigation.html'
})
export class TimeseriesNavigationPage {

  diagramPage = TimeseriesDiagramPage;
  mapPage = TimeseriesMapPage;
  listPage = TimeseriesListPage;

  @ViewChild('tabs')
  private tabRef: Tabs;

  public timeseriesCounter: number;

  constructor(
    private timeseriesSrvc: TimeseriesService
  ) { }

  ionViewDidEnter(): void {
    if (this.timeseriesSrvc.datasetIds.length === 0) {
      this.tabRef.select(1);
    }
  }

}

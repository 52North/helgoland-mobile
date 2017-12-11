import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';

import { TimeseriesDiagramPage } from '../diagram/diagram';
import { TimeseriesListPage } from '../list/list';
import { TimeseriesService } from '../timeseries.service';
import { TimeseriesMapPage } from './../map/map';
import { Page, TimeseriesNavigator } from './navigation.service';

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
    public timeseriesSrvc: TimeseriesService,
    private timeseriesNavigator: TimeseriesNavigator
  ) {
    this.timeseriesNavigator.selectedTabEvent.subscribe((page: Page) => {
      this.tabRef.select(page);
    });
  }

}

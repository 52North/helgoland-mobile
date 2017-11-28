import { Component } from '@angular/core';
import { DatasetOptions, PlotOptions, Timespan } from 'helgoland-toolbox';
import { Loading, LoadingController, ModalController, NavController } from 'ionic-angular';

import { TimeseriesService } from '../timeseries.service';
import { ModalLegendComponent } from './modal-legend/modal-legend';

@Component({
  selector: 'page-home',
  templateUrl: 'diagram.html'
})
export class TimeseriesDiagramPage {

  public datasetIds: string[];

  public datasetOptions: Map<string, DatasetOptions> = new Map();

  public timespan = new Timespan(new Date().getTime() - 100000000, new Date().getTime());

  private loading: Loading;

  public diagramOptions: PlotOptions = {
    pan: {
      frameRate: 10,
      interactive: true
    },
    touch: {
      delayTouchEnded: 200,
      pan: 'x',
      scale: ''
    },
    yaxis: {
      additionalWidth: 17,
      labelWidth: 40,
      min: null,
      panRange: false,
      show: true,
    },
    showReferenceValues: true
  };

  constructor(
    public navCtrl: NavController,
    public timeseriesSrvc: TimeseriesService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController
  ) {
    this.datasetIds = this.timeseriesSrvc.datasetIds;
    this.datasetOptions = this.timeseriesSrvc.datasetOptions;
    this.timespan = this.timeseriesSrvc.timespan;
  }

  public timespanChanged(timespan: Timespan) {
    this.timeseriesSrvc.setTimespan(timespan);
    this.timespan = timespan;
  }

  public openTimeEditor() {
    debugger;
  }

  public openLegend() {
    const modal = this.modalCtrl.create(ModalLegendComponent);
    modal.onDidDismiss(data => {
      if (data instanceof Timespan) {
        this.timespanChanged(data);
      }
    })
    modal.present();
  }

  public isLoading(loading: boolean) {
    if (loading) {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.loading.present();
    } else {
      this.loading.dismiss();
    }
  }
}

import { Component } from '@angular/core';
import { DatasetOptions, PlotOptions, Timespan } from 'helgoland-toolbox';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'diagram.html'
})
export class TimeseriesDiagramPage {

  public datasetIds = ['http://www.fluggs.de/sos2/api/v1/__63'];

  public timespan = new Timespan(new Date().getTime() - 100000000, new Date().getTime());

  public diagramOptions: PlotOptions = {
    crosshair: {
      mode: 'x'
    },
    grid: {
      autoHighlight: true,
      hoverable: true
    },
    legend: {
      show: false
    },
    pan: {
      frameRate: 10,
      interactive: true
    },
    selection: {
      mode: null
    },
    series: {
      // downsample: {
      //   threshold: 0
      // },
      lines: {
        fill: false,
        show: true
      },
      points: {
        fill: true,
        radius: 2,
        show: false
      },
      //            points : {
      //                 show: true
      //            },
      shadowSize: 1
    },
    touch: {
      delayTouchEnded: 200,
      pan: 'x',
      scale: ''
    },
    xaxis: {
      mode: 'time',
      timezone: 'browser',
      // monthNames: monthNamesTranslaterServ.getMonthNames()
      //            timeformat: '%Y/%m/%d',
      // use these the following two lines to have small ticks at the bottom ob the diagram
      //            tickLength: 5,
      //            tickColor: '#000'
    },
    yaxis: {
      additionalWidth: 17,
      labelWidth: 50,
      min: null,
      panRange: false,
      show: true,
      // tickFormatter: function(val, axis) {
      //     var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
      //     var formatted = '' + Math.round(val * factor) / factor;
      //     return formatted + '<br>' + this.uom;
      // }
    }
  };

  public datasetOptions: Map<string, DatasetOptions> = new Map();

  constructor(public navCtrl: NavController) {
    this.datasetIds.forEach((entry) => {
      this.datasetOptions.set(entry, new DatasetOptions(entry, '#123456'));
    });
  }

  public timespanChanged(timespan: Timespan) {
    this.timespan = timespan;
  }

}

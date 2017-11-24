import { Component } from '@angular/core';
import { Dataset, Platform } from 'helgoland-toolbox';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'station-selector',
  templateUrl: 'station-selector.html'
})
export class StationSelectorComponent {

  public platform: Platform;
  public providerUrl: string;

  public datasetSelections: Array<Dataset> = [];

  constructor(
    public viewCtrl: ViewController,
    public params: NavParams
  ) {
    this.platform = this.params.get('platform');
    this.providerUrl = this.params.get('providerUrl');
  }

  public onDatasetSelectionChanged(datasets: Dataset[]) {
    this.datasetSelections = datasets;
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

}

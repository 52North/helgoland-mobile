import { Component } from '@angular/core';
import { Service, DatasetApi } from '@helgoland/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-provider-selector',
  templateUrl: 'modal-provider-selector.html'
})
export class ModalProviderSelectorComponent {

  public datasetApiList: DatasetApi[] = [];

  public supportStations: boolean = true;

  public selectedProvider: Service;

  constructor(
    public viewCtrl: ViewController,
    public params: NavParams
  ) {
    this.selectedProvider = params.get('selectedProvider');
    const providerList = params.get('providerList');
    if (providerList) { this.datasetApiList = providerList; }
  }

  public providerSelected(service: Service) {
    this.viewCtrl.dismiss(service);
  }

  public dismiss() {
    this.viewCtrl.dismiss(this.selectedProvider);
  }

}

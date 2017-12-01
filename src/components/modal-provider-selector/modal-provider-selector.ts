import { Component } from '@angular/core';
import { Service } from 'helgoland-toolbox';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-provider-selector',
  templateUrl: 'modal-provider-selector.html'
})
export class ModalProviderSelectorComponent {

  public providerList: string[] = [];

  public supportStations: boolean = true;

  public selectedProvider: Service;

  constructor(
    public viewCtrl: ViewController,
    public params: NavParams
  ) {
    this.selectedProvider = params.get('selectedProvider');
    const providerList = params.get('providerList');
    if (providerList) { this.providerList = providerList; }
  }

  public providerSelected(service: Service) {
    this.viewCtrl.dismiss(service);
  }

  public dismiss() {
    this.viewCtrl.dismiss(this.selectedProvider);
  }

}

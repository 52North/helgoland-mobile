import { Component } from '@angular/core';
import { Platform, Service } from 'helgoland-toolbox';
import { ModalController, NavController } from 'ionic-angular';

import { ModalProviderSelectorComponent } from '../../../components/modal-provider-selector/modal-provider-selector';
import { StationSelectorComponent } from './station-selector/station-selector';

@Component({
  selector: 'page-contact',
  templateUrl: 'map.html'
})
export class TimeseriesMapPage {

  public selectedProvider: Service;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    if (!this.selectedProvider) {
      this.openProviderSelection();
    }
  }

  public onStationSelected(platform: Platform) {
    const modal = this.modalCtrl.create(StationSelectorComponent,
      {
        platform,
        providerUrl: this.selectedProvider.providerUrl
      }
    );
    modal.onDidDismiss(data => {
      if (data) { this.navCtrl.parent.select(0); }
    });
    modal.present();
  }

  public openProviderSelection() {
    const modal = this.modalCtrl.create(ModalProviderSelectorComponent, {
      selectedProvider: this.selectedProvider
    })
    modal.onDidDismiss((service: Service) => {
      this.selectedProvider = service;
    })
    modal.present();
  }
}
import { Component } from '@angular/core';
import { Platform } from 'helgoland-toolbox';
import { ModalController, NavController } from 'ionic-angular';

import { StationSelectorComponent } from './station-selector/station-selector';

@Component({
  selector: 'page-contact',
  templateUrl: 'map.html'
})
export class TimeseriesMapPage {

  public providerUrl = 'http://www.fluggs.de/sos2/api/v1/';

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  public onStationSelected(platform: Platform) {
    const modal = this.modalCtrl.create(StationSelectorComponent,
      {
        platform,
        providerUrl: this.providerUrl
      }
    );
    modal.present();
  }

}

import { ChangeDetectorRef, Component } from '@angular/core';
import { Platform, Settings, SettingsService } from 'helgoland-toolbox';
import { ModalController, NavController } from 'ionic-angular';

import { ProviderNeededComponent } from '../../../components/provider-needed-component';
import { StationSelectorComponent } from './station-selector/station-selector';

@Component({
  selector: 'page-contact',
  templateUrl: 'map.html'
})
export class TimeseriesMapPage extends ProviderNeededComponent {

  public loading: boolean;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public settingsSrvc: SettingsService<Settings>,
    public cdr: ChangeDetectorRef
  ) {
    super(modalCtrl, settingsSrvc);
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

  public onMapLoading(loading: boolean) {
    this.loading = loading;
    this.cdr.detectChanges();
  }
}

import { ChangeDetectorRef, Component } from '@angular/core';
import { ParameterFilter, Platform, Service, Settings, SettingsService } from '@helgoland/core';
import { ModalController } from 'ionic-angular';

import { ProviderNeededComponent } from '../../../components/provider-needed-component';
import { Page, TimeseriesNavigator } from '../navigation/navigation.service';
import { StationSelectorComponent } from './station-selector/station-selector';

@Component({
  selector: 'page-contact',
  templateUrl: 'map.html'
})
export class TimeseriesMapPage extends ProviderNeededComponent {

  public loading: boolean;
  public stationFilter: ParameterFilter;

  constructor(
    private navigator: TimeseriesNavigator,
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
      if (data) { this.navigator.navigate(Page.Diagram); }
    });
    modal.present();
  }

  public onMapLoading(loading: boolean) {
    this.loading = loading;
    this.cdr.detectChanges();
  }

  public setSelectedProvider(service: Service) {
    super.setSelectedProvider(service);
    this.stationFilter = {
      service: service.id
    }
  }
}

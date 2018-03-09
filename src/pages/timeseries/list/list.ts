import { Component } from '@angular/core';
import { IDataset, Provider, Service, Settings, SettingsService } from '@helgoland/core';
import { ListSelectorParameter } from '@helgoland/selector';
import { ModalController } from 'ionic-angular';

import { ProviderNeededComponent } from '../../../components/provider-needed-component';
import { Page, TimeseriesNavigator } from '../navigation/navigation.service';
import { TimeseriesService } from '../timeseries.service';

@Component({
  selector: 'page-about',
  templateUrl: 'list.html'
})
export class TimeseriesListPage extends ProviderNeededComponent {

  public type: string = 'categorie';

  public providerList: Provider[];

  public categoryParams: Array<ListSelectorParameter> = [{
    type: 'category',
    header: 'Kategorie'
  }, {
    type: 'feature',
    header: 'Station'
  }, {
    type: 'phenomenon',
    header: 'Phänomen'
  }, {
    type: 'procedure',
    header: 'Sensor'
  }];

  public stationParams: Array<ListSelectorParameter> = [{
    type: 'feature',
    header: 'Station'
  }, {
    type: 'category',
    header: 'Kategorie'
  }, {
    type: 'phenomenon',
    header: 'Phänomen'
  }, {
    type: 'procedure',
    header: 'Sensor'
  }];

  public phenomenonParams: Array<ListSelectorParameter> = [{
    type: 'phenomenon',
    header: 'Phänomen'
  }, {
    type: 'category',
    header: 'Kategorie'
  }, {
    type: 'feature',
    header: 'Station'
  }, {
    type: 'procedure',
    header: 'Sensor'
  }];

  public procedureParams: Array<ListSelectorParameter> = [{
    type: 'procedure',
    header: 'Sensor'
  }, {
    type: 'feature',
    header: 'Station'
  }, {
    type: 'phenomenon',
    header: 'Phänomen'
  }, {
    type: 'category',
    header: 'Kategorie'
  }];

  constructor(
    public modalCtrl: ModalController,
    public timeseriesSrvc: TimeseriesService,
    public settingsSrvc: SettingsService<Settings>,
    private navigator: TimeseriesNavigator
  ) {
    super(modalCtrl, settingsSrvc);
  }

  public setSelectedProvider(service: Service) {
    super.setSelectedProvider(service);
    this.providerList = [{
      id: service.id,
      url: service.apiUrl
    }]
  }

  public onDatasetSelected(datasetList: IDataset[]) {
    if (datasetList instanceof Array) {
      datasetList.forEach(entry => {
        this.timeseriesSrvc.addDataset(entry.internalId);
        this.navigator.navigate(Page.Diagram);
      })
    }
  }

}

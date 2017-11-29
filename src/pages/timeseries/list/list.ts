import { Component } from '@angular/core';
import { IDataset, ListSelectorParameter, Provider, Service } from 'helgoland-toolbox';
import { ModalController, NavController } from 'ionic-angular';

import { ProviderNeededComponent } from '../../../components/provider-needed-component';
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
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public timeseriesSrvc: TimeseriesService
  ) {
    super(modalCtrl);
  }

  public setSelectedProvider(service: Service) {
    super.setSelectedProvider(service);
    this.providerList = [{
      id: service.id,
      url: service.providerUrl
    }]
  }

  public onDatasetSelected(datasetList: IDataset[]) {
    if (datasetList instanceof Array) {
      datasetList.forEach(entry => {
        this.timeseriesSrvc.addDataset(entry.internalId);
        this.navCtrl.parent.select(0);
      })
    }
  }

}

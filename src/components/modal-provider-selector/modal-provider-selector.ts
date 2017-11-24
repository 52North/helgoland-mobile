import { Component } from '@angular/core';
import { Service } from 'helgoland-toolbox';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-provider-selector',
  templateUrl: 'modal-provider-selector.html'
})
export class ModalProviderSelectorComponent {

  public providerList: string[] = [
    'http://www.fluggs.de/sos2/api/v1/',
    'http://esonet.epsevg.upc.es:8082/obsea-sos-webapp/api/v1/',
    'http://nexos.dev.52north.org/52n-sos-upc/api/',
    'http://nexos.demo.52north.org/52n-sos-nexos-test/api/',
    'http://codm.hzg.de/52n-sos-webapp/api/v1/',
    'http://sensorweb.demo.52north.org/sensorwebclient-webapp-stable/api/v1/',
    'http://geo.irceline.be/sos/api/v1/',
    'http://sensorweb.demo.52north.org/sensorwebtestbed/api/v1/',
    'http://inspire.rivm.nl/sos/eaq/api/v1/',
    'http://monalisasos.eurac.edu/sos/api/v1/'
  ];

  public supportStations: boolean = true;

  public selectedProvider: Service;

  constructor(
    public viewCtrl: ViewController,
    public params: NavParams
  ) {
    this.selectedProvider = params.get('selectedProvider');
  }

  public providerSelected(service: Service) {
    this.viewCtrl.dismiss(service);
  }

}

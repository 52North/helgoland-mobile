import { Service, SettingsService } from '@helgoland/core';
import { ModalController } from 'ionic-angular';

import { MobileSettings } from '../app/services/settings.service';
import { ModalProviderSelectorComponent } from './modal-provider-selector/modal-provider-selector';

export class ProviderNeededComponent {

    public selectedProvider: Service;

    constructor(
        public modalCtrl: ModalController,
        public settingsSrvc: SettingsService<MobileSettings>
    ) { }

    public ionViewDidEnter() {
        if (!this.selectedProvider) {
            this.openProviderSelection();
        }
    }

    public openProviderSelection() {
        const modal = this.modalCtrl.create(ModalProviderSelectorComponent,
            {
                selectedProvider: this.selectedProvider,
                providerList: this.settingsSrvc.getSettings().datasetApis
            },
            {
                showBackdrop: false,
                enableBackdropDismiss: false
            }
        )
        modal.onDidDismiss((service: Service) => this.setSelectedProvider(service));
        modal.present();
    }

    public setSelectedProvider(service: Service) {
        this.selectedProvider = service;
    }
}
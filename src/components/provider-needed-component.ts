import { Service } from 'helgoland-toolbox';
import { ModalController } from 'ionic-angular';

import { ModalProviderSelectorComponent } from './modal-provider-selector/modal-provider-selector';

export class ProviderNeededComponent {

    public selectedProvider: Service;

    constructor(
        public modalCtrl: ModalController
    ) { }

    public ionViewDidEnter() {
        if (!this.selectedProvider) {
            this.openProviderSelection();
        }
    }

    public openProviderSelection() {
        const modal = this.modalCtrl.create(ModalProviderSelectorComponent,
            {
                selectedProvider: this.selectedProvider
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
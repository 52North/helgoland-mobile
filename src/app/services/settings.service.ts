import { Injectable } from '@angular/core';
import { Settings, SettingsService } from 'helgoland-toolbox';

@Injectable()
export class JSSONSettingsService extends SettingsService<Settings> {

    constructor() {
        super();
        const settings = require('../../assets/settings.json');
        this.setSettings(settings);
    }

}

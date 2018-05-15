import { Injectable } from '@angular/core';
import { Settings, SettingsService } from '@helgoland/core';

export interface MobileSettings extends Settings { }

export let settings: MobileSettings;

export const settingsPromise = new Promise<MobileSettings>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './assets/settings.json');
    xhr.onload = () => {
        if (xhr.status === 200) {
            settings = JSON.parse(xhr.responseText);
            resolve(settings);
        } else {
            reject('Cannot load configuration');
        }
    };
    xhr.send();
});

@Injectable()
export class JSSONSettingsService extends SettingsService<MobileSettings> {

    constructor() {
        super();
        this.setSettings(settings);
    }

}

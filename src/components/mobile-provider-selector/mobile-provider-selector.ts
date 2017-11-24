import { Component } from '@angular/core';
import {
    ProviderSelectorComponent,
} from 'helgoland-toolbox/dist/components/selector/provider-selector/provider-selector.component';

@Component({
  selector: 'mobile-provider-selector',
  templateUrl: 'mobile-provider-selector.html'
})
export class MobileProviderSelectorComponent extends ProviderSelectorComponent { }

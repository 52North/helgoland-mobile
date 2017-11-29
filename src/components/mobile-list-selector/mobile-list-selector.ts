import { Component } from '@angular/core';
import { ListSelectorComponent } from 'helgoland-toolbox/dist/components/selector/list-selector/list-selector.component';

@Component({
  selector: 'mobile-list-selector',
  templateUrl: 'mobile-list-selector.html'
})
export class MobileListSelectorComponent extends ListSelectorComponent {

  public selectedPanel(panelId: number) {
    if (!this.parameters[panelId].isDisabled) {
      this.activePanel = this.selectorId + '-' + panelId;
    }
  }
  
}

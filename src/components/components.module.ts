import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HelgolandSelectorModule } from 'helgoland-toolbox';
import { IonicModule } from 'ionic-angular';

import { MobileProviderSelectorComponent } from './mobile-provider-selector/mobile-provider-selector';
import { ModalProviderSelectorComponent } from './modal-provider-selector/modal-provider-selector';

@NgModule({
	declarations: [
		ModalProviderSelectorComponent,
		MobileProviderSelectorComponent
	],
	imports: [
		IonicModule,
		HelgolandSelectorModule,
		TranslateModule.forChild(),
	],
	entryComponents: [
		ModalProviderSelectorComponent
	],
	exports: [
		ModalProviderSelectorComponent,
		MobileProviderSelectorComponent
	]
})
export class ComponentsModule { }

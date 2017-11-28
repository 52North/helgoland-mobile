import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
    HelgolandDepictionModule,
    HelgolandMapViewModule,
    HelgolandModificationModule,
    HelgolandSelectorModule,
} from 'helgoland-toolbox';
import { IonicModule } from 'ionic-angular';

import { MobileProviderSelectorComponent } from './mobile-provider-selector/mobile-provider-selector';
import { MobileTimeseriesEntryComponent } from './mobile-timeseries-entry/mobile-timeseries-entry';
import { ModalGeometryViewerComponent } from './modal-geometry-viewer/modal-geometry-viewer';
import { ModalOptionsEditorComponent } from './modal-options-editor/modal-options-editor';
import { ModalProviderSelectorComponent } from './modal-provider-selector/modal-provider-selector';

@NgModule({
	declarations: [
		ModalProviderSelectorComponent,
		MobileProviderSelectorComponent,
		MobileTimeseriesEntryComponent,
		ModalGeometryViewerComponent,
		ModalOptionsEditorComponent
	],
	imports: [
		IonicModule,
		HelgolandSelectorModule,
		HelgolandDepictionModule,
		HelgolandMapViewModule,
		HelgolandModificationModule,
		TranslateModule.forChild(),
	],
	entryComponents: [
		ModalProviderSelectorComponent,
		ModalGeometryViewerComponent,
		ModalOptionsEditorComponent
	],
	exports: [
		ModalProviderSelectorComponent,
		MobileProviderSelectorComponent,
		MobileTimeseriesEntryComponent,
		ModalGeometryViewerComponent,
		ModalOptionsEditorComponent
	]
})
export class ComponentsModule { }

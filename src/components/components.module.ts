import { NgModule } from '@angular/core';
import { HelgolandLabelMapperModule } from '@helgoland/depiction';
import { HelgolandMapViewModule } from '@helgoland/map';
import { HelgolandModificationModule } from '@helgoland/modification';
import { HelgolandSelectorModule } from '@helgoland/selector';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { MobileListSelectorComponent } from './mobile-list-selector/mobile-list-selector';
import {
    MobileMultiServiceFilterSelectorComponent,
} from './mobile-multi-service-filter-selector/mobile-multi-service-filter-selector';
import { MobileProviderSelectorComponent } from './mobile-provider-selector/mobile-provider-selector';
import { MobileTimeseriesEntryComponent } from './mobile-timeseries-entry/mobile-timeseries-entry';
import { MobileTimespanButtonComponent } from './mobile-timespan-button/mobile-timespan-button';
import { MobileTimespanShiftSelectorComponent } from './mobile-timespan-shift-selector/mobile-timespan-shift-selector';
import { ModalGeometryViewerComponent } from './modal-geometry-viewer/modal-geometry-viewer';
import { ModalOptionsEditorComponent } from './modal-options-editor/modal-options-editor';
import { ModalProviderSelectorComponent } from './modal-provider-selector/modal-provider-selector';
import { ModalTimespanEditorComponent } from './modal-timespan-editor/modal-timespan-editor';

@NgModule({
	declarations: [
		ModalProviderSelectorComponent,
		MobileProviderSelectorComponent,
		MobileTimeseriesEntryComponent,
		ModalGeometryViewerComponent,
		ModalOptionsEditorComponent,
		MobileTimespanShiftSelectorComponent,
		ModalTimespanEditorComponent,
		MobileListSelectorComponent,
		MobileMultiServiceFilterSelectorComponent,
		MobileTimespanButtonComponent
	],
	imports: [
		IonicModule,
		HelgolandLabelMapperModule,
		HelgolandMapViewModule,
		HelgolandModificationModule,
		HelgolandSelectorModule,
		TranslateModule.forChild(),
	],
	entryComponents: [
		ModalProviderSelectorComponent,
		ModalGeometryViewerComponent,
		ModalOptionsEditorComponent,
		ModalTimespanEditorComponent
	],
	exports: [
		ModalProviderSelectorComponent,
		MobileProviderSelectorComponent,
		MobileTimeseriesEntryComponent,
		ModalGeometryViewerComponent,
		ModalOptionsEditorComponent,
		MobileTimespanShiftSelectorComponent,
		ModalTimespanEditorComponent,
		MobileListSelectorComponent,
		MobileMultiServiceFilterSelectorComponent,
		MobileTimespanButtonComponent
	]
})
export class ComponentsModule { }

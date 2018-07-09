import { NgModule } from '@angular/core';
import { HelgolandD3Module } from '@helgoland/d3';
import { HelgolandDatasetlistModule } from '@helgoland/depiction';
import { HelgolandMapSelectorModule } from '@helgoland/map';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { TimeseriesDiagramPage } from './diagram/diagram';
import { ModalLegendComponent } from './diagram/modal-legend/modal-legend';
import { TimeseriesListPage } from './list/list';
import {
    MobileDatasetByStationSelectorComponent,
} from './map/dataset-by-station-selector/dataset-by-station-selector.component';
import { TimeseriesMapPage } from './map/map';
import { StationSelectorComponent } from './map/station-selector/station-selector';
import { TimeseriesNavigationPage } from './navigation/navigation';
import { TimeseriesNavigator } from './navigation/navigation.service';
import { TimeseriesService } from './timeseries.service';

@NgModule({
    declarations: [
        TimeseriesNavigationPage,
        TimeseriesDiagramPage,
        TimeseriesMapPage,
        TimeseriesListPage,
        StationSelectorComponent,
        MobileDatasetByStationSelectorComponent,
        ModalLegendComponent
    ],
    imports: [
        HelgolandMapSelectorModule,
        HelgolandDatasetlistModule,
        HelgolandD3Module,
        TranslateModule.forChild(),
        ComponentsModule,
        IonicModule
    ],
    entryComponents: [
        StationSelectorComponent,
        MobileDatasetByStationSelectorComponent,
        TimeseriesNavigationPage,
        TimeseriesDiagramPage,
        TimeseriesMapPage,
        TimeseriesListPage,
        ModalLegendComponent
    ],
    providers: [
        TimeseriesService,
        TimeseriesNavigator
    ]
})
export class TimeseriesModule { }
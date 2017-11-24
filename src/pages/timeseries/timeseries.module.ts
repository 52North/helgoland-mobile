import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HelgolandFlotGraphModule, HelgolandMapSelectorModule, HelgolandSelectorModule } from 'helgoland-toolbox';
import { IonicModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { TimeseriesDiagramPage } from './diagram/diagram';
import { TimeseriesListPage } from './list/list';
import {
    MobileDatasetByStationSelectorComponent,
} from './map/dataset-by-station-selector/dataset-by-station-selector.component';
import { TimeseriesMapPage } from './map/map';
import { StationSelectorComponent } from './map/station-selector/station-selector';
import { TimeseriesNavigationPage } from './navigation/navigation';
import { TimeseriesProviderPage } from './provider/provider';

@NgModule({
    declarations: [
        TimeseriesNavigationPage,
        TimeseriesDiagramPage,
        TimeseriesMapPage,
        TimeseriesListPage,
        TimeseriesProviderPage,
        StationSelectorComponent,
        MobileDatasetByStationSelectorComponent
    ],
    imports : [
        HelgolandSelectorModule,
        HelgolandMapSelectorModule,
        HelgolandFlotGraphModule,
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
        TimeseriesProviderPage
    ]
})
export class TimeseriesModule { }
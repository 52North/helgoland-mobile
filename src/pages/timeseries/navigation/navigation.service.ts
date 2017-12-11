import { EventEmitter, Injectable } from '@angular/core';

export enum Page {
  Diagram,
  Map,
  List
}

@Injectable()
export class TimeseriesNavigator {

  public selectedTabEvent: EventEmitter<Page> = new EventEmitter();

  public navigate(page: Page) {
    this.selectedTabEvent.emit(page);
  }
}

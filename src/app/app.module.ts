import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import { MapDisplayItemComponent } from './map-display/map-display-item/map-display-item.component';
import { MapDisplaySummaryComponent } from './map-display/map-display-summary/map-display-summary.component';
import { MapUploaderComponent } from './map-display/map-uploader/map-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    MapDisplayComponent,
    MapDisplayItemComponent,
    MapDisplaySummaryComponent,
    MapUploaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

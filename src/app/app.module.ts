import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamaicFormComponent } from './dynamaic-form/dynamaic-form.component';
import { DynamaicTableComponent } from './dynamaic-table/dynamaic-table.component';
import { JsonTableComponent } from './json-table/json-table.component';
import {GetDataFromUrlService} from './services/get-data-from-url.service';
import { PopoutModelComponent } from './popout-model/popout-model.component';
import {PagerServiceService} from './services/pager-service.service';
import { GeoTagLocationComponent } from './geo-tag-location/geo-tag-location.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    DynamaicFormComponent,
    DynamaicTableComponent,
    JsonTableComponent,
    PopoutModelComponent,
    GeoTagLocationComponent,
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,HttpModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDlVEV8TrOjvnbN1SQetsM9ohjkcPl2Mss'
    })
  ],
  providers: [GetDataFromUrlService,PagerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

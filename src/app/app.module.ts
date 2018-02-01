import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamaicFormComponent } from './dynamaic-form/dynamaic-form.component';
import { DynamaicTableComponent } from './dynamaic-table/dynamaic-table.component';
import { JsonTableComponent } from './json-table/json-table.component';
import {GetDataFromUrlService} from './get-data-from-url.service'
@NgModule({
  declarations: [
    AppComponent,
    DynamaicFormComponent,
    DynamaicTableComponent,
    JsonTableComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,HttpModule
  ],
  providers: [GetDataFromUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }

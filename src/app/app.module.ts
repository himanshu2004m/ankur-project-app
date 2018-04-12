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
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchTextPipe } from './pipes/search-text.pipe';
import { RouterModule, Routes } from '@angular/router';
import { BasicDetailsFormComponent } from './basic-details-form/basic-details-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const appRoutes: Routes = [
{path: 'json-table' , component: JsonTableComponent},
{path: 'geo-tag', component: GeoTagLocationComponent},
{path: 'login', component: LoginPageComponent},
{path: 'signUp', component: SignUpFormComponent},
{path: '**', component: LoginPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DynamaicFormComponent,
    DynamaicTableComponent,
    JsonTableComponent,
    PopoutModelComponent,
    GeoTagLocationComponent,
    ShowErrorsComponent,
    LoginPageComponent,
    SearchTextPipe,
    BasicDetailsFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,
    RouterModule.forRoot(appRoutes
      //{enableTracing: true}
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlVEV8TrOjvnbN1SQetsM9ohjkcPl2Mss'
    })
  ],
  providers: [GetDataFromUrlService, PagerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

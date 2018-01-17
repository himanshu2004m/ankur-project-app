import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamaicFormComponent } from './dynamaic-form/dynamaic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamaicFormComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

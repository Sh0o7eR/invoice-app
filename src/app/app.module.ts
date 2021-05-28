import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material-module";
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { CardComponent } from './shared/card/card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { InvoiceDetailsComponent } from './features/invoice-details/invoice-details.component';
import { FormComponent } from './shared/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomepageComponent,
    CardComponent,
    InvoiceDetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

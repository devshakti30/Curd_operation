import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EmployeeDatabaseModule} from './employee-database/employee-database.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LowerCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeDatabaseModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

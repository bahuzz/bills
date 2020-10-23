import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddBillComponent } from './components/add-bill/add-bill.component';
import { HomeComponent } from './components/home/home.component';
import { BillsTableComponent } from './components/bills-table/bills-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBillComponent,
    HomeComponent,
    BillsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

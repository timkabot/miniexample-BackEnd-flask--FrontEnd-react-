import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './MainComponent/app.component';
import { CustomComponent } from './CustomComponent/custom.component';

import { FormsModule } from '@angular/forms';

import {CommonModule} from '@angular/common'
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

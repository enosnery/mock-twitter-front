import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LeftSideContentComponent } from './left-side-content/left-side-content.component';
import { RightSideContentComponent } from './right-side-content/right-side-content.component';
import { MainContentComponent } from './main-content/main-content.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    LeftSideContentComponent,
    RightSideContentComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

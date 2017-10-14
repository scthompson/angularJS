import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularSvgIconModule } from 'angular-svg-icon';


import { AppComponent } from './app.component';
import { GridviewHomeComponent } from './gridview-home/gridview-home.component';
import { CustomSvgsComponent } from './custom-svgs/custom-svgs.component';

@NgModule({
  declarations: [
    AppComponent,
    GridviewHomeComponent,
    CustomSvgsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

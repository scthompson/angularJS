import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { MatListModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }

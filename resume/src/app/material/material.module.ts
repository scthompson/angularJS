import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { MatListModule } from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatChipsModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatChipsModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule { }

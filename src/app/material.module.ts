import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatToolbarModule, MatInputModule, MatFormFieldModule,
    MatSliderModule, MatCheckboxModule, MatDatepickerModule,
    MatRadioModule, MatIconModule, MatButtonModule, MatCardModule
  } from '@angular/material';
  
  const MODULE = [
    FlexLayoutModule,
    MatToolbarModule, MatInputModule, MatFormFieldModule,
    MatSliderModule, MatCheckboxModule, MatRadioModule,
    MatDatepickerModule, MatIconModule,
    MatButtonModule, MatCardModule
  ]


@NgModule({
    imports: MODULE,
    exports: MODULE,
  })

export class MaterialModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [
  CommonModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class SharedModule { }

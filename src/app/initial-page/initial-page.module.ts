import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageRoutingModule } from './initial-page-routing.module';
import { InitialPageComponent } from './initial-page.component';



@NgModule({
  declarations: [
    InitialPageComponent
  ],
  imports: [
    CommonModule,
    InitialPageRoutingModule
  ]
})
export class InitialPageModule { }

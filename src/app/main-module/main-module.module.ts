import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainModuleComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModuleModule { }

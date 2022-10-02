import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{ path: '', component: MainModuleComponent ,
children:[{path:'', component: ProductsComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }

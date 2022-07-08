import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../app/category/category.component';
import { ProductListComponent } from '../app/product/product-list/product-list.component'

const routes: Routes = [
  { path: 'products', component: ProductListComponent},
];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'category', component: CategoryComponent},
      {path: '', redirectTo: '/category', pathMatch: 'full'},
    ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

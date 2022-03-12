import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'new', component: CategoryFormComponent},
  {path: ':id', component: CategoryFormComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }

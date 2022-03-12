import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post.component';

const routes: Routes = [
  {path: '', component: PostComponent},
  {path: 'new', component: PostFormComponent},
  {path: ':id', component: PostFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentComponent } from './comment.component';

const routes: Routes = [
  {path: '', component: CommentComponent},
  {path: 'new', component: CommentFormComponent},
  {path: ':id', component: CommentFormComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }

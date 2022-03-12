import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'post', pathMatch:'full' },
  { path: 'post', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) },
  { path: 'comment', loadChildren: () => import('./modules/comment/comment.module').then(m => m.CommentModule) },
  { path: 'category', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

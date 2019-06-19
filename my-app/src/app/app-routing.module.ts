import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesPageComponent} from './components/articles-page/articles-page.component';
import {ArticleComponent} from './components/article/article.component';

const routes: Routes = [{ path: '', component: ArticlesPageComponent },
  { path: 'article/:articleId', component: ArticleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

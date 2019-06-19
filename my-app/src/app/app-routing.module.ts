import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from './components/first-page/first-page.component';
import {ArticlePageComponent} from './components/article-page/article-page.component';

const routes: Routes = [{ path: '', component: FirstPageComponent },
  { path: 'article-page/:articleId', component: ArticlePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

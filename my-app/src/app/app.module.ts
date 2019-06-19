import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatTabsModule} from '@angular/material';
import {AssociateCardComponent} from './components/associate-card/associate-card.component';
import {ArticleCardComponent} from './components/article-card/article-card.component';
import {FirstPageComponent} from './components/first-page/first-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlePageComponent,
    FirstPageComponent,
    ArticleCardComponent,
    AssociateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

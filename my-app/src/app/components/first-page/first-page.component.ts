import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article/article.service';
import {AppConstants} from '../../constants';
import {AssociateService} from '../../services/associate/associate.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  private title: string;
  private url: string;
  private articles = [];
  private associates = [];

  constructor(private articleApi: ArticleService,
              private associateApi: AssociateService) {
    this.getArticles();
    this.getAssociates();
    this.title = AppConstants.websiteTitle;
    this.url = AppConstants.baseUrl;
  }
  ngOnInit(): void {}
  getArticles = () => {
    this.articleApi.getAllArticles().subscribe(
      data => {
        this.articles = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }
  getAssociates = () => {
    this.associateApi.getAllAssociates().subscribe(
      data => {
        this.associates = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {AppConstants} from '../../constants';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {

  private title: string;
  private url: string;
  private articles = [];
  private associates = [];

  constructor(private api: ArticleService) {
    this.getArticles();
    this.getAssociates();
    this.title = AppConstants.websiteTitle;
    this.url = AppConstants.baseUrl;
  }
  ngOnInit(): void {}
  getArticles = () => {
    this.api.getAllArticles().subscribe(
      data => {
        this.articles = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }
  getAssociates = () => {
    this.api.getAllAssociates().subscribe(
      data => {
        this.associates = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }
  imageUrl(imageName: string): string{
    return AppConstants.imageUrl(imageName);
  }
}

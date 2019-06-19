import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {AppConstants} from '../../constants';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private article;
  private title;

  constructor( private route: ActivatedRoute,
               private api: ArticleService) {
    this.title = AppConstants.websiteTitle;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getArticle(+params.get('articleId'));
    });
  }

  getArticle(id: number): void {
    this.api.getArticle(id).subscribe(
      data => {
        this.article = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  imageUrl(image: string): string {
    return AppConstants.imageUrl(image);
  }

}

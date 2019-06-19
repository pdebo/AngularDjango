import {Component, Input, OnInit} from '@angular/core';
import {AppConstants} from '../../constants';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article;

  constructor() { }

  ngOnInit() {
    console.log(this.authorImage(this.article.author));
  }

  imageUrl(image: string): string {
    return AppConstants.imageUrl(image);
  }

  authorImage(author: string): string {
    return AppConstants.authorimage(author);
  }

}

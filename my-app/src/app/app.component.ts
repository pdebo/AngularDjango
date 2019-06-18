import { Component } from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'my-app';
  articles = [];

  constructor(private api: ApiService) {
    this.getArticles();
  }

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
}
